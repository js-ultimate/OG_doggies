import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function DetailView({api_key}){
    const [value, setValue] = useState('')
    let params = useParams();

    useEffect(() => {
        getDogData()
            .then(data => data.filter((animal) => animal.id === parseInt(params.id)))
            .then(data => setValue(data))
    }, [])

    async function getDogData(breed, api_key) {
        const response = await fetch(`https://api.TheDogAPI.com/v1/breeds`, {
            headers: {
                'x-api-key': api_key
            }
        });

        if (response.status !== 200) {
            throw new Error('Something is no yes!')
        }

        return await response.json();
    }

    const dog = value[0];
    console.log(dog)

    return (
        <>
            <h1>{dog.name}</h1>
            <h2>{dog.origin}</h2>
            <h3>Breed characteristics:</h3>
            <p>{dog.bred_for}</p>
        </>
    )
}

export default DetailView;