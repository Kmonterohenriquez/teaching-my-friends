import React from 'react'
import '../styles/Search.sass'

const Search = ({ getUserInput }) => {
    return (
        <div className='Search'>
            <h1>Search For Any Movie</h1>
            <input type="text" placeholder="Enter a movie's name..." onChange={(e)=> getUserInput(e.target.value)}/>
        </div>
    )
}

export default Search

