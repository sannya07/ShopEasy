import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-black text-light py-4 mt-auto">
      <div className="container text-center">
        {/* Brand */}
        <h5 className="fw-bold text-gradient mb-2">ShopEasy</h5>

        {/* Rights */}
        <p className="mb-2 text-gray-400">
          All rights reserved &copy; {new Date().getFullYear()}
        </p>

        {/* Links */}
        <div className="d-flex justify-content-center gap-4">
          <Link to="/about" className="footer-link text-decoration-none text-light">
            About
          </Link>
          <Link to="/contact" className="footer-link text-decoration-none text-light">
            Contact
          </Link>
          <Link to="/policy" className="footer-link text-decoration-none text-light">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Footer Styles */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #9333ea, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-gray-400 {
          color: #9ca3af;
        }

        .footer-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .footer-link::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #3b82f6;
          transition: width 0.3s;
          position: absolute;
          bottom: -4px;
          left: 0;
        }

        .footer-link:hover {
          color: #3b82f6;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        @media (max-width: 576px) {
          .footer-link {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
