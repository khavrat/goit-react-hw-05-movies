import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import getMovieCredits from '../../servises/api/getMovieCredits';
import {
  Section,
  CreditList,
  CreditItem,
  ActorName,
  ActorChar,
} from './Cast.styled';

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
    <Section>
      {error && <p>Error: {error.message}</p>}
      {credits && credits.length !== 0 ? (
        <CreditList>
          {credits.slice(0, 10).map(actor => (
            <CreditItem key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img
                  src={`http://dummyimage.com/200x300/d5dff2.jpg&text=No+fhoto+${actor.name}`}
                  alt={actor.name}
                />
              )}
              <ActorName>{actor.name}</ActorName>
              <ActorChar>
                Character: <br />
                {actor.character}
              </ActorChar>
            </CreditItem>
          ))}
        </CreditList>
      ) : (
        <ActorChar>We don't have a cast list for this movie</ActorChar>
      )}
    </Section>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string
};

export default Cast;
