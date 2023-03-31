import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, Link } from './MovieSearchList.styled';

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
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieList;
