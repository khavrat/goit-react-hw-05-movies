import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import BackLink from '../components/Backlink';
import getMovieDetails from '../servises/getMovieDetails';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const movieDetails = await getMovieDetails(movieId);

        setLoading(true);
        setMovie(movieDetails);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [movieId]);


  return (
    <>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {movie !== null && (
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="poster the film"
          ></img>
          <div>
            <h3>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h3>
            <p>
              <span>User Score: </span>
              {`${movie.vote_average}`}
            </p>
            <p>
              <span>Overview: </span>
              {`${movie.overview}`}
            </p>
            <p>
              <span>Genres: </span>
              {`${movie.genres.map(genre => genre.name).join(', ')}`}
            </p>
          </div>
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
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      )}
    </>
  );
};

export default MovieDetailsPage;
