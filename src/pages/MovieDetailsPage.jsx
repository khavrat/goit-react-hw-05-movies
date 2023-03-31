import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import BackLink from '../components/Backlink';
import getMovieDetails from '../servises/api/getMovieDetails';
import MovieDetails from '../components/MovieDetails';
import UnderLayout from '../components/UnderLayout';
import { BsArrowLeft } from 'react-icons/bs';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <>
        {' '}
        <BackLink to={backLinkHref.current}>
          <BsArrowLeft size={20} style={{ marginRight: '10px' }} />
          Go back
        </BackLink>
        {error && <p>Error: {error.message}</p>}
        {movie !== null && <MovieDetails movie={movie} />}
      </>
      <UnderLayout />
    </>
  );
};

export default MovieDetailsPage;
