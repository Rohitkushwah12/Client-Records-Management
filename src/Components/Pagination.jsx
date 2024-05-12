import React from 'react';

const Pagination = ({ recordsPerPage, totalRecords, currentPage, paginate }) => {
  const pageNumbers = Math.ceil(totalRecords / recordsPerPage);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} >
          <button
            className="page-link"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {[...Array(pageNumbers).keys()].map((number) => (
          <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
            <button onClick={() => paginate(number + 1)} className="page-link">
              {number + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === pageNumbers ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
