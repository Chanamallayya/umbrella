import React, { useState } from 'react'

import '../styles/search-bar.css'

const SearchBar = ({ setCity }) => {

    const [searchedCity, setSearchedCity] = useState('')

    const handleSearchBar = e => {
        e.preventDefault()
        setCity(searchedCity)
        setSearchedCity('')
    }

    return (
        <form 
            className="umbrella__searchbar"
            onSubmit={handleSearchBar}
        >
            <input 
                className="umbrella__searchbar__input col-form-label col-form-label-lg"
                placeholder="Enter the city name"    
                value={searchedCity}
                onChange={e => { setSearchedCity(e.target.value) }}
            />
            <input 
                type="submit"
                className="umbrella__searchbar__submit btn btn-primary"
                value="Search"
            />
        </form>
    )
}

export default SearchBar