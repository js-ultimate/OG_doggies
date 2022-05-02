function DogHeight({dog}){
    return (
        <>
            <h2>Height:</h2>
            <p>{dog[0].height.metric} cm</p>
        </>
    )
}

export default DogHeight;