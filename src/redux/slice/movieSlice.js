import { createSlice } from "@reduxjs/toolkit";
import { fetchPopular, fetchTopRated, fetchUpcoming, fetchSearch, fetchMovieDetail } from "../thunks";

const initialListState = { data: [], page: 1, total_pages: 1, status: "idle", error: null };

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popular: { ...initialListState },
    topRated: { ...initialListState },
    upcoming: { ...initialListState },
    search: { ...initialListState, query: "" },
    detail: { movie: null, credits: null, status: "idle", error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    const addListCases = (thunk, key) => {
      builder
        .addCase(thunk.pending, (state) => {
          state[key].status = "loading";
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state[key].status = "succeeded";
          state[key].data = action.payload.results;
          state[key].page = action.payload.page;
          state[key].total_pages = action.payload.total_pages;
          if (key === "search") state[key].query = action.payload.query;
        })
        .addCase(thunk.rejected, (state, action) => {
          state[key].status = "failed";
          state[key].error = action.error.message;
        });
    };

    addListCases(fetchPopular, "popular");
    addListCases(fetchTopRated, "topRated");
    addListCases(fetchUpcoming, "upcoming");
    addListCases(fetchSearch, "search");

    builder
      .addCase(fetchMovieDetail.pending, (state) => {
        state.detail.status = "loading";
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.detail.status = "succeeded";
        state.detail.movie = action.payload.movie;
        state.detail.credits = action.payload.credits;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.detail.status = "failed";
        state.detail.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
