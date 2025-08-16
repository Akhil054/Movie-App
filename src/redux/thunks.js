import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getSearchResults,
  getMovieDetails,
  getMovieCredits
} from "../services/movieApi";

export const fetchPopular = createAsyncThunk("movies/fetchPopular", async (page = 1) => {
  return await getPopularMovies(page);
});

export const fetchTopRated = createAsyncThunk("movies/fetchTopRated", async (page = 1) => {
  return await getTopRatedMovies(page);
});

export const fetchUpcoming = createAsyncThunk("movies/fetchUpcoming", async (page = 1) => {
  return await getUpcomingMovies(page);
});

export const fetchSearch = createAsyncThunk("movies/fetchSearch", async ({ query, page = 1 }) => {
  const data = await getSearchResults(query, page);
  return { ...data, query };
});

export const fetchMovieDetail = createAsyncThunk("movies/fetchMovieDetail", async (id) => {
  const movie = await getMovieDetails(id);
  const credits = await getMovieCredits(id);
  return { movie, credits };
});
