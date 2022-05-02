import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [value, setValue] = useState('')
    const [breeds, setBreeds] = useState([])

    const api_key = '9c8d9ed5-8334-4ab7-804f-9fec787a54be'

    useEffect(() => {
        getBreeds(api_key).then((data) => setBreeds(data))
    }, []);

    async function getDogsData(breed, api_key){
        const response = await fetch(`https://api.TheDogAPI.com/v1/breeds/search?q=${breed}`, {
            headers: {
                'x-api-key': api_key
            }
        });

        if (response.status !== 200){
            throw new Error('Something is no yes!')
        }

        return await response.json();
    }

    async function getBreeds(api_key){
        const response = await fetch(`https://api.TheDogAPI.com/v1/breeds?api_key=${api_key}`)

        if (response.status !== 200){
            throw new Error('Something went wrong!')
        }

        return await response.json();
    }

    function handleSearch(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        getDogsData(value, api_key).then((data) => console.log(data))
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Type breed for more info: </label>
        <input type="text" id="search" value={value} onChange={handleSearch}/>
        <button>Submit</button>
      </form>

        <ul>
            All breeds:
            {breeds.map((breed) => (
                <li key={breed.name}>{breed.name}</li>
            ))}
        </ul>
    </div>
  );
}

export default App;
