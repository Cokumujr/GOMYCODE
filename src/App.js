import React, { useState } from 'react';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import initialMovies from './movies';
import './App.css';


 

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleFilter = ({ title, rating }) => {
    setFilteredMovies(
      movies.filter(movie =>
        (!title || movie.title.toLowerCase().includes(title.toLowerCase())) &&
        (!rating || movie.rating >= rating)
      )
    );
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, { id: movies.length + 1, ...newMovie }]);
    setFilteredMovies([...movies, { id: movies.length + 1, ...newMovie }]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="app">
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <form onSubmit={handleAddMovie} className="add-movie-form">
        <h2>Add New Movie</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;
