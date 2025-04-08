import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
      <div className="privacy-policy-container bg-black text-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Header Section with improved styling */}
              <div className="text-center mb-5">
                <h1 className="display-3 fw-bold text-danger mb-3">Privacy Policy</h1>
                <div className="header-underline bg-danger mx-auto mb-4"></div>
                <p className="lead text-secondary">We value your privacy and are committed to protecting your personal information.</p>
              </div>

              {/* Information Collection with enhanced styling */}
              <div className="card bg-dark border-danger border-start border-4 shadow-lg mb-5 hover-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="bi bi-database-fill fs-4"></i>
                    </div>
                    <h2 className="card-title text-danger m-0">Information We Collect</h2>
                  </div>
                  <p className="text-light">We collect various types of information from users, including:</p>
                  <ul className="list-group list-group-flush bg-transparent custom-list">
                    <li className="list-group-item bg-transparent text-light border-secondary ps-4 py-3">
                      <i className="bi bi-person-lines-fill text-danger me-2"></i>
                      Personal information you provide when registering or making a purchase
                    </li>
                    <li className="list-group-item bg-transparent text-light border-secondary ps-4 py-3">
                      <i className="bi bi-device-ssd text-danger me-2"></i>
                      Details about your device and internet connection
                    </li>
                    <li className="list-group-item bg-transparent text-light border-secondary ps-4 py-3">
                      <i className="bi bi-activity text-danger me-2"></i>
                      Your browsing activity and preferences on our platform
                    </li>
                  </ul>
                </div>
              </div>

              {/* Usage Information with enhanced styling */}
              <div className="card bg-dark border-danger border-start border-4 shadow-lg mb-5 hover-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="bi bi-clipboard-data fs-4"></i>
                    </div>
                    <h2 className="card-title text-danger m-0">How We Use Your Information</h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <div className="info-box p-4 border-start border-danger border-4 rounded-3 shadow-sm">
                        <div className="d-flex align-items-center mb-3">
                          <i className="bi bi-bag-check text-danger fs-4 me-2"></i>
                          <h5 className="text-danger m-0">To Provide Our Services</h5>
                        </div>
                        <p className="mb-0 text-secondary">Processing transactions, managing accounts, and customer support.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box p-4 border-start border-danger border-4 rounded-3 shadow-sm">
                        <div className="d-flex align-items-center mb-3">
                          <i className="bi bi-graph-up text-danger fs-4 me-2"></i>
                          <h5 className="text-danger m-0">To Improve Our Platform</h5>
                        </div>
                        <p className="mb-0 text-secondary">Enhancing user experience through data analysis and feedback.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Policy with enhanced styling */}
              <div className="card bg-dark border-danger border-start border-4 shadow-lg mb-5 hover-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="bi bi-cookie fs-4"></i>
                    </div>
                    <h2 className="card-title text-danger m-0">Cookie Policy</h2>
                  </div>
                  <p className="text-light">Cookies help enhance your experience. By using our website, you consent to our cookie usage.</p>
                  <div className="alert custom-alert d-flex align-items-center mt-4" role="alert">
                    <i className="bi bi-info-circle-fill fs-4 me-3 text-danger"></i>
                    <div className="text-light">You may modify cookie settings anytime via your browser preferences.</div>
                  </div>
                </div>
              </div>

              {/* Your Rights with enhanced styling */}
              <div className="card bg-dark border-danger border-start border-4 shadow-lg mb-5 hover-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="bi bi-shield-check fs-4"></i>
                    </div>
                    <h2 className="card-title text-danger m-0">Your Rights</h2>
                  </div>
                  <div className="accordion accordion-flush custom-accordion" id="privacyRightsAccordion">
                    {[
                      { icon: 'bi-eye', title: 'Right to Access', content: 'You have the right to request access to the personal data we hold about you.' },
                      { icon: 'bi-pencil-square', title: 'Right to Correction', content: 'You can request correction of your personal information if it is inaccurate or incomplete.' },
                      { icon: 'bi-trash', title: 'Right to Deletion', content: 'In certain circumstances, you have the right to request deletion of your personal data.' },
                    ].map((item, index) => (
                      <div className="accordion-item bg-transparent border-0 mb-3 shadow-sm" key={index}>
                        <h3 className="accordion-header">
                          <button className="accordion-button collapsed bg-dark-subtle text-light" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false">
                            <i className={`bi ${item.icon} me-2 text-danger`}></i>
                            {item.title}
                          </button>
                        </h3>
                        <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#privacyRightsAccordion">
                          <div className="accordion-body text-secondary bg-dark-subtle">{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact with enhanced styling */}
              <div className="contact-section text-center p-5 border border-danger rounded-3 bg-black position-relative mb-5 glow-effect">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-overlay rounded-3"></div>
                <div className="position-relative">
                  <h2 className="text-danger mb-3 fw-bold">Questions?</h2>
                  <p className="mb-4 text-light">We're happy to help you with inquiries regarding your privacy.</p>
                  <Link to='/contact' className="btn btn-danger btn-lg px-5 py-3 fw-bold shadow-lg pulse-btn">
                    <i className="bi bi-envelope-fill me-2"></i> Contact Our Privacy Team
                  </Link>
                </div>
              </div>

              {/* Footer with enhanced styling */}
              <div className="policy-footer mt-5 pt-4 border-top border-secondary text-center">
                <p className="text-secondary">Last updated: April 8, 2025</p>
                <p className="text-secondary small">© 2025 Your E-Commerce Store. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styling with enhanced dark theme */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css');

        .privacy-policy-container {
          min-height: 100vh;
          background-color: black;
          background-attachment: fixed;
          background-size: cover;
        }

        .header-underline {
          height: 4px;
          width: 80px;
          border-radius: 2px;
        }

        .text-secondary {
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

        .info-box {
          background-color: rgba(25, 25, 25, 0.75);
          height: 100%;
          transition: all 0.3s ease;
        }

        .info-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(220, 53, 69, 0.15) !important;
          background-color: rgba(30, 30, 30, 0.9);
        }

        .custom-list .list-group-item {
          position: relative;
          transition: all 0.3s ease;
        }

        .custom-list .list-group-item:hover {
          background-color: rgba(220, 53, 69, 0.05) !important;
          padding-left: 2rem !important;
        }

        .custom-accordion .accordion-button {
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .custom-accordion .accordion-button:not(.collapsed) {
          background-color: #dc3545;
          color: white;
        }

        .custom-accordion .accordion-button:focus {
          box-shadow: none;
          border-color: #dc3545;
        }

        .custom-accordion .accordion-button:hover {
          background-color: rgba(220, 53, 69, 0.1);
        }

        .bg-dark-subtle {
          background-color: #1a1a1a !important;
        }

        .custom-alert {
          background-color: rgba(220, 53, 69, 0.05);
          border: 1px solid rgba(220, 53, 69, 0.2);
          border-radius: 6px;
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

export default Policy;