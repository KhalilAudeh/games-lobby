import React from "react";

const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={goToPreviousPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNb) => (
          <li
            key={pageNb}
            className={`page-item ${currentPage === pageNb ? "active" : ""} `}
          >
            <a
              onClick={() => setCurrentPage(pageNb)}
              className="page-link"
              href="#"
            >
              {pageNb}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={goToNextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
