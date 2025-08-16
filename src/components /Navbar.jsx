import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../redux/thunks";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    // Dispatch Redux search thunk
    dispatch(fetchSearch({ query, page: 1 }));

    // Navigate to SearchResults page
    navigate("/search");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🎬 Movie App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Popular</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top-rated">Top Rated</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming">Upcoming</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
