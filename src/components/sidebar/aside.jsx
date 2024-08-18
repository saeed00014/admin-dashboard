import React from "react";
import { HashLink } from "react-router-hash-link";

const Aside = () => {
  return (
    <nav className="d-md-flex d-none flex-column vh-100 aside_nav fixed-top pt-2 bg-white">
      <h5 className="d-flex align-items-center justify-content-center gap-3">
        <i className="bi bi-link-45deg logo_icon"></i>
      </h5>
      <ul className="nav flex-column gap-4 h-100 bg-white align-items-center p-0 pt-2">
        <li className="nav-item">
          <HashLink to="/#sellByToday" className="aside_link nav-link active">
            <i className="bi bi-bar-chart d-flex"></i>
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink to="/#sellByCity" className="aside_link nav-link active">
            <i className="bi bi-cart d-flex"></i>
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink to="/#bestSell" className="aside_link nav-link active">
            <i className="bi bi-shop-window d-flex"></i>
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink to="/#sellByOnline" className="aside_link nav-link active">
            <i className="bi bi-bag d-flex"></i>
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink to="/#" className="aside_link nav-link active">
            <i className="bi bi-gear d-flex d-flex"></i>
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Aside;
