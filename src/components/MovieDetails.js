import React, { useState, useEffect } from 'react'
import {withRouter}  from 'react-router'
import axios from 'axios'

const MovieDetails = (props) => {
    const { movieID } = props.match.params;
    const [ movieInfo, setMovieInfo ] = useState([])

    const getMovieInfo =()=> {
        axios.get(`http://www.omdbapi.com?i=${movieID}&apikey=993b0c40`)
        .then(res=> setMovieInfo(res.data) )
        .catch(err => console.log(err))
    }
    
    useEffect(()=> {
        getMovieInfo()
    },[])
    console.log(movieInfo)
    const { Title, Poster, Year, Plot, Released, imdbRating } = movieInfo;
    return (
        <div className='MovieDetails'>
            <p>{Title}</p>
            <img src={Poster} alt={Title}/>
            <p>{Year}</p>
            <div className="Rating">
                <p>{imdbRating}</p>
            </div>
            <div className="released-date">
                <p>Released date: {Released}</p>
            </div>
            <div className='description'>
                <h3>Description</h3>
                <p>{Plot}</p>
            </div>
        </div>
    )
}

export default withRouter(MovieDetails);
