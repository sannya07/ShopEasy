import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm py-3 fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold fs-4 text-gradient d-flex align-items-center">
          🛒 ShopEasy
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link to="/" className="nav-link nav-hover text-light">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link nav-hover text-light">Category</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link nav-hover text-light">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link nav-hover text-light">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link nav-hover text-light">
                <i className="bi bi-cart4 me-1"></i>Cart (0)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Header Styles */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #9333ea, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-hover {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-hover::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #3b82f6;
          transition: width 0.3s ease-in-out;
        }

        .nav-hover:hover::after {
          width: 100%;
        }

        .nav-hover:hover {
          color: #3b82f6 !important;
        }
      `}</style>
    </nav>
  );
};

export default Header;
