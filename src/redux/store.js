import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
