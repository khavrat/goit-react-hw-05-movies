import { useState, useEffect } from 'react';
import getTrendingMovies from '../servises/getPopularMovies';
import LoadingView from '../components/LoadingView';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies.results);
        setLoading(false);
        setError('');
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <LoadingView />;
  }
  if (movies)
    return (
      <main>
        <h2>This is HomePage with popularMovies</h2>
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
        ;
      </main>
    );
};

export default HomePage;
