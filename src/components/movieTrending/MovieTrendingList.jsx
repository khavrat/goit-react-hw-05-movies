import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Title, List, Link } from './MovieTrendingList.styled';

const MovieTrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <section>
      {' '}
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </List>
    </section>
  );
};

MovieTrendingList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieTrendingList;
