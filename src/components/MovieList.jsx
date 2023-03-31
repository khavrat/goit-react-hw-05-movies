import React from 'react';
import { useLocation } from 'react-router-dom';
import { List, Link } from '../components/MovieList.styled';

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </List>
    );
}

export default MovieList;