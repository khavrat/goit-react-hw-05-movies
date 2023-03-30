import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import getMovieReviews from '../servises/api/getMovieReviews';

const Reviews = () => {
  const [reviews, setReview] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setError(null);

        const movieReviews = await getMovieReviews(movieId);
        setReview(movieReviews.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <section>
      {error && <p>Error: {error.message}</p>}
      {reviews && reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>'{review.content}'</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We have no reviews of this film</p>
      )}
    </section>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
