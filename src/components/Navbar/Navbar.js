import React from "react";
import {Link} from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container ">
          <Link className="navbar-brand fs-3 navbar-log" to="/">
            Personal<span className="navspan">Web</span>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link className="nav-a " smoothria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link  className="nav-a "  to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-a" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link  className="nav-a" to="/project">
                  Project
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link  className="nav-a" to="/review">
                  Review
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link  className="nav-a" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
