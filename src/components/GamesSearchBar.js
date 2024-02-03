import React from "react";

const GamesSearchBar = ({
  handleInputChange,
  searchInput,
}) => {
  return (
    <nav
      className="navbar navbar-light mb-5 border-2"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <span className="navbar-brand text-capitalize fw-bold">
          Search by game name
        </span>
        <form className="col-sm-6 col-md-4 col-lg-3">
          <input
            className="form-control form-control-lg me-2 w-100"
            type="text"
            placeholder="Search here..."
            onChange={handleInputChange}
            value={searchInput}
          />
        </form>
      </div>
    </nav>
  );
};

export default GamesSearchBar;
