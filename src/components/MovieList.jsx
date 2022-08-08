import React, { useEffect, useState } from 'react'
import MovieCard from './ui/MovieCard';

export default function MovieList() {

  const [movies, setMovies] = useState([]);
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=9b153f4e40437e115298166e6c1b997c';

  let getData = () => {
    console.log('get data called')
    fetch(API_URL).then(data => data.json()).then(data => setMovies(data.results));
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='list-container'>
      {movies.length === 0 ? (<h1>loading...</h1>) : movies.map(movie => <MovieCard movie={movie} />)}
    </div>
  )
}
