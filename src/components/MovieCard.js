import React from 'react'
import { Link } from 'react-router-dom';


const MovieCard = ({ id, title, description, posterURL, rating }) => {
    const imagestyle ={
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '5px',
        marginBottom: '10px'
  
    }
    return (
      <div className="movie-card">
        <img src={posterURL} alt={title} style={imagestyle}/>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Rating: {rating}</span>
        <h4>
        <Link to={`/movie/${id}`}>View Details</Link>
      </h4>
      </div>
    );
  };

export default MovieCard