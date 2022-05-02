import {Link} from "react-router-dom";

function DogList({breeds}){
    return (
        <>
            {breeds.map((breed) => (
                <li key={breed.name}>
                    <Link to={`/details/${breed.id}`}>
                        <div className={'pictureInfo homepage'}>
                            <h2>{breed.name}</h2>
                            <img src={`${breed.image.url}`} alt={`${breed.name}`} width={500} loading={"lazy"}/>
                        </div>
                    </Link>
                </li>
            ))}
        </>
    )
}

export default DogList;