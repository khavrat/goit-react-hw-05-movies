import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import getMovieCredits from '../servises/api/getMovieCredits';

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCtedits = async () => {
      try {
        setError(null);

        const movieCredits = await getMovieCredits(movieId);
        setCredits(movieCredits.cast);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCtedits();
  }, [movieId]);

  return (
    <section>
      {error && <p>Error: {error.message}</p>}
      {credits && (
        <ul>
          {credits.slice(0, 6).map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
