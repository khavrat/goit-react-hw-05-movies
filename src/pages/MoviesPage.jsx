import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useLocation, Link, Outlet } from 'react-router-dom';
import SearchField from 'components/SearchField';
import getSearchMovies from '../servises/getSearchMovie';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const movieName = searchParams.get('query') ?? '';

  const updateSearchString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);

        const searchMovie = await getSearchMovies(movieName);
        if (searchMovie.results.length === 0) {
          setLoading(false);
          alert('nothing found, try again');
          setSearchParams('');
        } else {
          setLoading(true);
          setMovies(searchMovie.results);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
      setLoading(false);
    };
    if (movieName) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [movieName, setSearchParams]);

  const handleSubmit = SearchField => {
    updateSearchString(SearchField);
  };

  const showSearchField = location.state !== null;

  return (
    <>
      {!showSearchField && <SearchField onSubmit={handleSubmit} />}
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {movies !== null && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesPage;
