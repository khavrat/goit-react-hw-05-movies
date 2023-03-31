import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import getMovieReviews from '../../servises/api/getMovieReviews';
import {
  Section,
  ReviewsList,
  ReviewItem,
  ReviewerName,
  ReviewContent,
} from './Reviws.styled';

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
    <Section>
      {error && <p>Error: {error.message}</p>}
      {reviews && reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewerName>Author: {review.author}</ReviewerName>
              <ReviewContent>'{review.content}'</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <ReviewContent>We have no reviews of this film</ReviewContent>
      )}
    </Section>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string
};

export default Reviews;
