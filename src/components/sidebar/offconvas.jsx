import React from "react";
import { HashLink } from "react-router-hash-link";

const Offconvas = () => {
  return (
    <div
      className="offcanvas offcanvas-end offcanvas-xl vh-100 sidebar-nav"
      tabIndex="0"
      id="canvas"
    >
      <div className="offcanvas-header px-4">
        <h5 className="offcanvas-title d-flex align-items-center gap-3">
          <i className="bi bi-link-45deg logo_icon"></i>
          <span className="">پنل ادمین</span>
        </h5>
      </div>
      <div className="offcanvas-body p-0 directionDiv">
        <nav>
          <ul className="navbar-nav px-3 gap-4">
            <li data-bs-dismiss="offcanvas">
              <HashLink
                to="/#sellByToday"
                className="active nav-link link-dark sidebar_link fs-5"
              >
                <i className="bi bi-bar-chart ms-3"></i>
                <span>فروش امروز</span>
              </HashLink>
            </li>
            <li data-bs-dismiss="offcanvas">
              <HashLink
                to="/#sellByOnline"
                className="active nav-link link-dark sidebar_link fs-5"
              >
                <i className="bi bi-cart ms-3"></i>
                <span> آمار فروش آنلاین </span>
              </HashLink>
            </li>
            <li data-bs-dismiss="offcanvas">
              <HashLink
                to="/#sellByCity"
                className="active nav-link link-dark sidebar_link fs-5"
              >
                <i className="bi bi-shop-window ms-3"></i>
                <span> فعال ترین شهرها </span>
              </HashLink>
            </li>
            <li data-bs-dismiss="offcanvas">
              <HashLink
                to="/#bestSell"
                className="active nav-link link-dark sidebar_link fs-5"
              >
                <i className="bi bi-bag ms-3"></i>
                <span> پرفروش ترین ها </span>
              </HashLink>
            </li>
            <li data-bs-dismiss="offcanvas">
              <HashLink
                to="/#"
                className="active nav-link link-dark sidebar_link fs-5"
              >
                <i className="bi bi-gear d-flex ms-3"></i>
                <span> تنظیمات </span>
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Offconvas;
