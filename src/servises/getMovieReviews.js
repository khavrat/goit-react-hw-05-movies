import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '8a9eba837e68269aae614f789a756a23';

async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getMovieReviews;

