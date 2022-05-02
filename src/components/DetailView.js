import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function DetailView({api_key}){
    const [dog, setDog] = useState(null)
    let params = useParams();

    useEffect(() => {
        getDogData(api_key)
            .then(data => data.filter((animal) => animal.id === parseInt(params.id)))
            .then(data => setDog(data))
    }, [api_key, params])

    async function getDogData(api_key) {
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

    return (
        <>
            {dog ? (
                <>
                    <h1>{dog[0].name}</h1>

                <hr/>

                    <h3>{dog[0].name} characteristics:</h3>
                    <p>{dog[0].bred_for}</p>

                    <h3>{dog[0].name} temperament:</h3>
                    <p>{dog[0].temperament}</p>

                <hr/>

                    <h3>{dog[0].name} height:</h3>
                    <p>{dog[0].height.metric} cm</p>

                    <h3>{dog[0].name} weight:</h3>
                    <p>{dog[0].weight.metric} kg</p>

                    <h3>Life span:</h3>
                    <p>{dog[0].life_span}</p>

                <hr/>

                    <h3>{dog[0].name} image:</h3>
                    <img src={`${dog[0].image.url}`} alt={`${dog[0].name}`} width={500}/>

                <hr/>

                    <h2>{dog[0].origin}</h2>
                </>
            ) : (
                <h2>Loading</h2>
            )}
        </>
    )
}

export default DetailView;