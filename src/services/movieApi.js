import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743"; // fallback key
const BASE_URL = "https://api.themoviedb.org/3";

export const IMG_BASE = "https://image.tmdb.org/t/p/w500";

const api = axios.create({ baseURL: BASE_URL });

// ✅ Popular Movies
export const getPopularMovies = async (page = 1) => {
  const res = await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  return res.data;
};

// ✅ Top Rated Movies
export const getTopRatedMovies = async (page = 1) => {
  const res = await api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
  return res.data;
};

// ✅ Upcoming Movies
export const getUpcomingMovies = async (page = 1) => {
  const res = await api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
  return res.data;
};

// ✅ Search Movies
export const getSearchResults = async (query, page = 1) => {
  const res = await api.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}`
  );
  return res.data;
};

// ✅ Movie Details
export const getMovieDetails = async (id) => {
  const res = await api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return res.data;
};

// ✅ Movie Credits
export const getMovieCredits = async (id) => {
  const res = await api.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return res.data;
};
