import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-white head fixed-top">
        <div className="container-fluid position-relative">
          <button
            style={{ right: "5px", top: "-5px" }}
            className="btn position-absolute d-xl-none d-flex"
            data-bs-toggle="offcanvas"
            data-bs-target="#canvas"
          >
            <i className="bi bi-arrow-left-circle d-flex pt-1 fs-3"></i>
          </button>
          <a className="navbar-brand me-xl-0 me-5" href="#">
            داشبورد
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse input-group justify-content-end ps-lg-3 pt-md-0 pt-3"
            id="navbarSupportedContent"
          >
            <form className="position-relative d-flex">
              <input
                className="form-control pe-5 bg-light"
                type="search"
                placeholder="جستجوی..."
                aria-label="Search"
              />
              <label
                style={{ top: 0, bottom: 0, right: "5px" }}
                className="position-absolute btn d-flex align-items-center"
                type="submit"
              >
                <i className="bi bi-search d-flex"></i>
              </label>
            </form>
            {/* <Link to="/login" className="btn btn-secondary me-5">
              ورود
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
