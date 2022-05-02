function DogImage({dog}){
    return (
        <>
            <h2>{dog[0].name} image:</h2>
            <img src={`${dog[0].image.url}`} alt={`${dog[0].name}`} width={500}/>
        </>
    )
}

export default DogImage;