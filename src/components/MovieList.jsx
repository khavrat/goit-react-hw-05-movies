import React from 'react';
import { useLocation } from 'react-router-dom';
import { List, Item, Link } from '../components/MovieList.styled';

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </Item>
        ))}
      </List>
    );
}

export default MovieList;