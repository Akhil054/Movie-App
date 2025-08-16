import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRated } from "../redux/thunks";
import MovieCard from "../components /MovieCard";
import Pagination from "../components /Pagination";

export default function TopRated() {
  const dispatch = useDispatch();
  const { data, status, page, total_pages, error } = useSelector((s) => s.movies.topRated);

  useEffect(() => {
    dispatch(fetchTopRated(1));
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(fetchTopRated(newPage));
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">Top Rated Movies</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="text-danger">{error}</p>}
      <div className="row">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} totalPages={Math.min(total_pages, 500)} onPageChange={handlePageChange} />
    </div>
  );
}
