import axios from 'axios';

const API_KEY = '0b9e121856d6bc95384f79bdb563cceb';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const makeApiRequest = async (path, params = {}) => {
  const { data } = await axios.get(path, {
    params: { api_key: API_KEY, ...params },
  });
  return data;
};

export const trendingApi = () => makeApiRequest('/trending/movie/day', { page: 1 });

export const searchMovies = query =>
  makeApiRequest('/search/movie', {
    query,
    language: 'en-US',
    page: 1,
    include_adult: false,
  });

export const getMovieDetails = id =>
  makeApiRequest(`/movie/${id}`, { language: 'en-US' });

export const getMovieGenres = () =>
  makeApiRequest('/genre/movie/list', { language: 'en-US' });

export const getCast = id =>
  makeApiRequest(`/movie/${id}/credits`, { language: 'en-US' });

export const getMovieReviews = id =>
  makeApiRequest(`/movie/${id}/reviews`, { language: 'en-US', page: 1 });
