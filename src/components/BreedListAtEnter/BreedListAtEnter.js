import {useEffect, useState} from "react";
import DogList from "./components/DogList";
import SearchByBreedForm from "./components/SearchByBreedForm";


function BreedListAtEnter({api_key}) {
    const [breeds, setBreeds] = useState([])
    // const [breedsToSearch, setBreedsToSearch] = useState([])
    const [mySearch, setMySearch] = useState('')

    useEffect(() => {
        getBreeds(api_key).then((data) => setBreeds(data)).then()
    }, []);

    // useEffect(() => {
    //     setBreedsToSearch(breeds)
    // }, [])

    async function getBreeds(api_key) {
        const response = await fetch(`https://api.TheDogAPI.com/v1/breeds?api_key=${api_key}`)

        if (response.status !== 200) {
            throw new Error('Something went wrong!')
        }

        return await response.json();
    }

    function handleSubmit(event){
        event.preventDefault()
        // console.log(breeds)
        // console.log(breedsToSearch)
        // console.log(mySearch)
        setBreeds(breeds.filter((dog) => dog.name.toLowerCase().includes(mySearch.toLowerCase())))
    }

    return (
        <>
            <div className="App">
                <ul>
                    <h1>All breeds:</h1>
                    <SearchByBreedForm handleSubmit={handleSubmit} setMySearch={setMySearch} mySearch={mySearch}/>
                    <h4>Click on dog for more details!</h4>

                    <DogList breeds={breeds}/>
                </ul>
            </div>
        </>
    )
}

export default BreedListAtEnter;