import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import BackLink from '../components/Backlink';
import getMovieDetails from '../servises/api/getMovieDetails';
import LoadingView from '../components/LoadingView';
import MovieDetails from '../components/MovieDetails';
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
        setError(null);

        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref.current}>
        <BsArrowLeft size={20} style={{ marginRight: '10px' }} />
        Go back
      </BackLink>
      {error && <p>Error: {error.message}</p>}
      {movie !== null && (
        <>
          <MovieDetails movie={movie} />
          <ul>
            <li>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </li>
          </ul>
        </>
      )}
      <Suspense fallback={<LoadingView />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
