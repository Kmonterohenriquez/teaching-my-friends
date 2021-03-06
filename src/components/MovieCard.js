import React from 'react'
import '../styles/MovieCard.sass'

const MovieCard = ({movie}) => {

    return (
        <div className='MovieCard'>
            <img src={movie.Poster} alt=""/>
            <h1>{movie.Title}</h1>
        </div>
    )
}

export default MovieCard;