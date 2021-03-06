import React from 'react'
import MovieCard from './MovieCard'
import '../styles/MoviesContainer.sass'
import { Link } from 'react-router-dom'

const MoviesContainer = ({movies}) => {
    return (
        <div className='MovieContainer grid-container'>
            { 
                movies? 
                    movies.map(movie => <Link to={`/movie-details/${movie.imdbID}`} key={movie.imdbID}><MovieCard movie={movie}/></Link>)
                    : 
                    <h1 className='not-found'>Movie not Found</h1>
            }
        </div>
    )
}

export default MoviesContainer
