function SearchByBreedForm({handleSubmit, mySearch, setMySearch}){
    return (
        <>
            <form onSubmit={handleSubmit} className={'searchForm'}>
                <label htmlFor="search">Search by breed:</label>
                <input type="text" id="search" placeholder={'Dog Breed'} value={mySearch} onChange={((event) => {
                    setMySearch(event.target.value)
                })}/>
                <button>Find</button>
            </form>
        </>
    )
}

export default SearchByBreedForm;