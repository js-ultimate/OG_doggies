import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function DetailView({api_key}) {
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
                <div className={'dogInfo'}>
                    <h1>{dog[0].name}</h1>

                    <hr/>
                    <div className={'behaviorInfo'}>
                        <div>
                            <h2>Temperament:</h2>
                            <p>{dog[0].temperament}</p>
                        </div>

                        <div>
                            <h2>Characteristics:</h2>
                            <p>{dog[0].bred_for}</p>
                        </div>
                    </div>

                    <hr/>

                    <div className={'bodyInfo'}>
                        <div>
                            <h2>Height:</h2>
                            <p>{dog[0].height.metric} cm</p>
                        </div>

                        <div>
                            <h2>Weight:</h2>
                            <p>{dog[0].weight.metric} kg</p>
                        </div>

                        <div>
                            <h2>Life span:</h2>
                            <p>{dog[0].life_span}</p>
                        </div>
                    </div>

                    <hr/>

                    <div className={'pictureInfo'}>
                        <h2>{dog[0].name} image:</h2>
                        <img src={`${dog[0].image.url}`} alt={`${dog[0].name}`} width={500}/>
                    </div>
                </div>
            ) : (
                <h2>Loading</h2>
            )}
        </>
    )
}

export default DetailView;