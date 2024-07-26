// src/components/MovieDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const videoId = movie.trailerUrl.split('v=')[1];


  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    <hr/>
      <button onClick={() => navigate('/')}>Back to Movie List</button>
    </div>
  );
};

export default MovieDetail;
