import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/thunks";
import MovieCard from "../components /MovieCard";
import Pagination from "../components /Pagination";

export default function SearchResults() {
  const dispatch = useDispatch();
  const { data, status, page, total_pages, query, error } = useSelector((s) => s.movies.search);

  const handlePageChange = (newPage) => {
    dispatch(fetchSearch({ query, page: newPage }));
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">Search Results {query && `for "${query}"`}</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="text-danger">{error}</p>}
      <div className="row">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {data.length > 0 && (
        <Pagination page={page} totalPages={Math.min(total_pages, 500)} onPageChange={handlePageChange} />
      )}
    </div>
  );
}
