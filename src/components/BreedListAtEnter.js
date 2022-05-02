import {useEffect, useState} from "react";
import {Link, Route} from "react-router-dom";


function Routes() {
    return null;
}

function BreedListAtEnter({api_key}){
    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        getBreeds(api_key).then((data) => setBreeds(data))
        console.log(breeds)
    }, []);

    async function getBreeds(api_key) {
        const response = await fetch(`https://api.TheDogAPI.com/v1/breeds?api_key=${api_key}`)

        if (response.status !== 200) {
            throw new Error('Something went wrong!')
        }

        return await response.json();
    }



    return (
        <>
            <div className="App">
                {/*<form onSubmit={handleSubmit}>*/}
                {/*    <label htmlFor="search">Type breed for more info: </label>*/}
                {/*    <input type="text" id="search" value={value} onChange={handleSearch}/>*/}
                {/*    <button>Submit</button>*/}
                {/*</form>*/}

                <ul>
                    <h1>All breeds:</h1>
                    <h4>Click for more info</h4>

                    {breeds.map((breed) => (
                        <li key={breed.name}>
                            <Link to={`/details/${breed.id}`}>
                                {breed.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BreedListAtEnter;