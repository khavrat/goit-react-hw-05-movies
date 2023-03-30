import axios from 'axios';
import { BASE_URL, API_KEY } from './baseForGetFunction';

async function getSearchMovies(movieName) {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${movieName}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getSearchMovies;
