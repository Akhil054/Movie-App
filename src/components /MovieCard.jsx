import React from "react";
import { Link } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={IMG_URL + movie.poster_path} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
}
