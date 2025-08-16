import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components /Navbar";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import SearchResults from "./pages/SearchResult";
import MovieDetail from "./pages/MovieDetails";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="*"
          element={<h2 className="text-center py-5">404 - Page Not Found</h2>}
        />
      </Routes>
    </>
  );
}
