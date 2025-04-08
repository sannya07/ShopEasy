import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={'About Us'}>
      <div className="about-page-container bg-black text-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Header with improved styling */}
              <div className="text-center mb-5">
                <h1 className="display-3 fw-bold text-danger mb-3">About Us</h1>
                <div className="header-underline bg-danger mx-auto mb-4"></div>
                <p className="lead text-secondary fw-light">
                  Learn more about our journey, mission, and the team that makes it all possible.
                </p>
              </div>

              {/* Mission and Vision with enhanced styling */}
              <div className="card bg-dark border-danger border-start border-4 shadow-lg mb-5 hover-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="bi bi-bullseye fs-4"></i>
                    </div>
                    <h2 className="card-title text-danger m-0">Our Mission</h2>
                  </div>
                  <p className="text-light-emphasis fs-5">
                    At <strong className="text-danger">Your E-Commerce Store</strong>, our mission is to deliver quality products at affordable prices with unmatched customer satisfaction. 
                    We believe shopping should be easy, accessible, and joyful for everyone.
                  </p>
                </div>
              </div>

              <div className="card bg-dark border-danger border-start border-4 shadow-lg mb-5 hover-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="bi bi-eye fs-4"></i>
                    </div>
                    <h2 className="card-title text-danger m-0">Our Vision</h2>
                  </div>
                  <p className="text-light-emphasis fs-5">
                    We're building a future where online shopping feels as personal as your favorite local store — powered by technology, driven by values.
                  </p>
                </div>
              </div>

              {/* Our Story */}
              <div className="card bg-dark border-danger border-start border-4 shadow-lg mb-5 hover-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="bi bi-journal-text fs-4"></i>
                    </div>
                    <h2 className="card-title text-danger m-0">Our Story</h2>
                  </div>
                  <p className="text-light-emphasis fs-5">
                    What started as a small online project for our resume has evolved into a thriving e-commerce platform dedicated to exceptional customer experiences. From our humble beginnings, we've grown by listening to our customers and constantly improving our offerings.
                  </p>
                </div>
              </div>

              

              {/* Footer with enhanced styling */}
              <div className="about-footer mt-5 pt-4 border-top border-secondary text-center">
                <p className="text-secondary">Updated on April 8, 2025</p>
                <p className="text-secondary small">© 2025 Your E-Commerce Store. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS with enhanced dark theme styling */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css');

        .about-page-container {
          min-height: 100vh;
          
          background-attachment: fixed;
          background-size: cover;
        }

        .header-underline {
          height: 4px;
          width: 80px;
          border-radius: 2px;
        }

        .text-light-emphasis {
          color: #d1d1d1 !important;
        }

        .hover-card {
          transition: all 0.4s ease;
          background: linear-gradient(145deg, #1a1a1a, #222);
        }

        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(220, 53, 69, 0.2) !important;
        }

        .icon-box {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
        }

        .glow-effect {
          box-shadow: 0 0 25px rgba(220, 53, 69, 0.3);
        }

        .bg-gradient-overlay {
          background: radial-gradient(circle at top right, rgba(220, 53, 69, 0.1), transparent 70%);
          opacity: 0.6;
          z-index: 0;
        }

        .pulse-btn {
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .pulse-btn:hover {
          background-color: #c82333;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4) !important;
        }

        .pulse-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.5s;
          z-index: -1;
        }

        .pulse-btn:hover:before {
          transform: scale(2);
        }

        /* Enhanced scrollbar for dark theme */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        ::-webkit-scrollbar-thumb {
          background: #dc3545;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #c82333;
        }
      `}</style>

      {/* Bootstrap Icons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />
    </Layout>
  );
};

export default About;