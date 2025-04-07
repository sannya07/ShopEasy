import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const PageNotFound = () => {
  const errorId = `404-${Math.floor(Math.random() * 1000000)}`;

  return (
    <Layout>
      <div className="page-not-found-container bg-black text-white min-vh-100 d-flex align-items-center justify-content-center px-4 py-5">
        <div className="container text-center">
          {/* Gradient 404 */}
          <h1 className="display-1 fw-bold text-gradient pulse mb-2">404</h1>

          {/* Subheading */}
          <h2 className="fs-1 mb-3">Oops! Page Not Found</h2>
          <p className="lead text-gray-400 mb-4">
            We searched every aisle of ShopEasy but couldn’t find what you're looking for.
          </p>

          {/* CTA Buttons */}
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-5">
            <Link to="/" className="btn btn-primary btn-lg px-4 py-3 rounded-pill shadow bg-gradient-to-r">
              <i className="bi bi-house-door me-2"></i>Back to Home
            </Link>
            <Link to="/products" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill shadow">
              <i className="bi bi-bag me-2"></i>Browse Products
            </Link>
          </div>

          {/* Floating Animation Graphic */}
          <div className="floating-icon d-none d-md-block mb-4">
            <div className="rounded-circle bg-purple-700 opacity-25 pulse" style={{ width: 150, height: 150, margin: 'auto', position: 'relative' }}>
              <i className="bi bi-exclamation-triangle-fill text-white" style={{ fontSize: '2.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></i>
            </div>
          </div>

          {/* Support */}
          <div className="mt-5 text-gray-400">
            <p>Need help? <a href="/contact" className="text-decoration-none text-info hover-text-white">Contact our support team</a></p>
            <p className="small mt-3 text-muted">Error ID: {errorId}</p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #9333ea, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bg-gradient-to-r {
          background: linear-gradient(to right, #2563eb, #9333ea);
          border: none;
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .text-gray-400 {
          color: #9ca3af;
        }

        .hover-text-white:hover {
          color: #ffffff !important;
        }

        .floating-icon {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </Layout>
  );
};

export default PageNotFound;
