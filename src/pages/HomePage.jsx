import { useState, useEffect } from 'react';
import getTrendingMovies from '../servises/api/getTrendingMovies';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  const location = useLocation();

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

  if (error) {
    return <div>{error.message}</div>;
  }
  if (movies)
    return (
      <main>
        <h2>Trending today</h2>
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
};

export default HomePage;
