import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useLocation, Outlet } from 'react-router-dom';
import SearchField from 'components/SearchField';
import getSearchMovies from '../servises/api/getSearchMovie';
import LoadingView from '../components/LoadingView';
import MovieList from 'components/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
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
          alert('nothing found, try again');
          setSearchParams('');
        } else {
          setMovies(searchMovie.results);
        }
      } catch (error) {
        setError(error.message);
      }
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
    <main>
      {!showSearchField && (
        <>
          <SearchField onSubmit={handleSubmit} />
            {error && <p>Error: {error.message}</p>}
            {movies !== null && (
              <MovieList movies={movies} />
            )}
        </>
      )}
      <Suspense fallback={<LoadingView />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesPage;
