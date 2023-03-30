import axios from 'axios';
import { BASE_URL, API_KEY } from './baseForGetFunction';

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
