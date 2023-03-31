import { useState, useEffect } from 'react';
import getTrendingMovies from '../servises/api/getTrendingMovies';
import MovieTrendingList from '../components/movieTrending/MovieTrendingList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies.results);
        setError('');
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      {error && <p>Error: {error.message}</p>}
      {movies !== null && <MovieTrendingList movies={movies} />}
    </main>
  );
};

export default HomePage;
