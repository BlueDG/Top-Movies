import axios from 'axios';

export async function getPopularMovies(setMovies) {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        page: 1,
      },
    });
    setMovies(res.data.results);
  } catch {
    return setMovies([]);
  }
}

// api for genres avec id qui relie id du genre à id de cette api
export async function getGenres(setGenres) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?`,
      {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      }
    );
    setGenres(res.data.genres);
  } catch {
    return setGenres([]);
  }
}

// api changeante pour le carousel
export async function getOtherMovies(setOtherMovies, page) {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        page: page,
      },
    });
    setOtherMovies(res.data.results);
  } catch {
    return setOtherMovies([]);
  }
}
