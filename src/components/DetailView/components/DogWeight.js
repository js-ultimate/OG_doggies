function DogWeight({dog}){
    return (
        <>
            <h2>Weight:</h2>
            <p>{dog[0].weight.metric} kg</p>
        </>
    )
}

export default DogWeight;