import React from 'react';
import { BrowserRouter,Route, Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
     <BrowserRouter> 
        <a href="#" className="navbar-brand">
          PrePer/.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/schedule" className="nav-link">
                Book your Free Session <br /> 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/session" className="nav-link">
                Session Mode <br /> 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login <br /> Offline <br /> 
              </Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </div>

    </nav>
  );
};

export default Navbar;