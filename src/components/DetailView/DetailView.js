import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DogCharacteristics from "./components/DogCharacteristics";
import DogTemperament from "./components/DogTemperament";
import DogHeight from "./components/DogHeight";
import DogWeight from "./components/DogWeight";
import DogLifeSpan from "./components/DogLifeSpan";
import DogImage from "./components/DogImage";

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
        })

        if (response.status !== 200) {
            throw new Error('Something is no yes!')
        }

        return await response.json();
    }

    return (
        <>
            {dog ? (
                <>
                    <Link to={'/'}><button className={'homepageBtn'}>Homepage</button></Link>
                    <div className={'dogInfo'}>
                        <h1>{dog[0].name}</h1>

                        <hr/>

                        <div className={'behaviorInfo'}>
                            <div>
                                <DogTemperament dog={dog}/>
                            </div>

                            <div>
                                <DogCharacteristics dog={dog}/>
                            </div>
                        </div>

                        <hr/>

                        <div className={'bodyInfo'}>
                            <div>
                                <DogHeight dog={dog}/>
                            </div>

                            <div>
                                <DogWeight dog={dog}/>
                            </div>

                            <div>
                                <DogLifeSpan dog={dog}/>
                            </div>
                        </div>

                        <hr/>

                        <div className={'pictureInfo'}>
                            <DogImage dog={dog}/>
                        </div>
                    </div>
                </>
            ) : (
                <h2>Loading</h2>
            )}
        </>
    )
}

export default DetailView;