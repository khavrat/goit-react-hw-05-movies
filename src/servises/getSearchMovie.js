import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '8a9eba837e68269aae614f789a756a23';

async function getSearchMovies( movieName ) {
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
