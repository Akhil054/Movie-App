import React from "react";

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; // no pagination needed

  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <button
        className="btn btn-outline-primary me-2"
        disabled={page === 1}
        onClick={handlePrev}
      >
        ◀ Prev
      </button>

      <span className="fw-bold">
        Page {page} of {totalPages}
      </span>

      <button
        className="btn btn-outline-primary ms-2"
        disabled={page === totalPages}
        onClick={handleNext}
      >
        Next ▶
      </button>
    </div>
  );
}
