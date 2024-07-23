import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({movies}) => {
  return (
    <div>
        <h1>Movie List</h1>
        <div className='movie-list-container'>
            {movies.map(movie => (
                < MovieCard key={movie.id} {...movie}/>
            ))}
        </div>

    </div>
  )
}

export default MovieList