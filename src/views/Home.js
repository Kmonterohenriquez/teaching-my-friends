import '../styles/Home.sass';
import Search from '../components/Search'
import MoviesContainer from '../components/MoviesContainer'
import React, {  useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState("Avengers");

    const getMovies =()=> {
        axios.get(`http://www.omdbapi.com?s=${userInput}&apikey=993b0c40`)
        .then((res)=> setMovies(res.data.Search))
    };

    const getUserInput =(movieName)=> {
      console.log('input ', userInput)
      setUserInput(movieName)
    }

    useEffect(()=> {
      console.log('User input updated!')
      getMovies()
    }, [userInput])

    
    console.log("MOvies", movies)
  return (
    <div className="Home">
      <div className='container pad-tb'>
        <Search getUserInput={getUserInput}/>
        <MoviesContainer movies={movies}/>
        <p id='author'>Kevin Montero</p>
      </div>
    </div>
  );
}

export default Home;
