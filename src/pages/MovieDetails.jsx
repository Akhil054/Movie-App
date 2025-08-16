import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../redux/thunks";
import { IMG_BASE } from "../services/movieApi.js";

export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie, credits, status, error } = useSelector((s) => s.movies.detail);

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p className="text-danger">{error}</p>;
  if (!movie) return null;

  const poster = movie.poster_path
    ? IMG_BASE + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-md-4">
          <img src={poster} alt={movie.title} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p className="text-muted">
            Release: {movie.release_date} • Runtime: {movie.runtime} min • ⭐ {movie.vote_average?.toFixed(1)}
          </p>
          <p>{movie.overview}</p>
          {movie.genres?.map((g) => (
            <span key={g.id} className="badge bg-secondary me-2">{g.name}</span>
          ))}
        </div>
      </div>

      <hr className="my-4" />
      <h4>Cast</h4>
      <div className="row">
        {credits?.cast?.slice(0, 12).map((c) => {
          const img = c.profile_path
            ? IMG_BASE + c.profile_path
            : "https://via.placeholder.com/300x450?text=No+Image";
          return (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" key={c.cast_id || c.credit_id}>
              <div className="card h-100">
                <img src={img} alt={c.name} className="card-img-top" />
                <div className="card-body p-2">
                  <div className="fw-semibold small text-truncate">{c.name}</div>
                  <div className="text-muted small text-truncate">{c.character}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
