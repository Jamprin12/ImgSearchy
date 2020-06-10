import React from "react";

const Pagination = ({ previusPage, nextPage }) => {
  return (
    <div className="py-3">
      <button onClick={previusPage} type="button" className="btn btn-info mr-1">
        &larr; Previus
      </button>
      <button onClick={nextPage} type="button" className="btn btn-info mr-1">
        Next &rarr;
      </button>
    </div>
  );
};

export default Pagination;
