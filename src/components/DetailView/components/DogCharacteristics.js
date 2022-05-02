function DogCharacteristics({dog}){
    return (
        <>
            <h2>Characteristics:</h2>
            <p>{dog[0].bred_for}</p>
        </>
    )
}

export default DogCharacteristics;