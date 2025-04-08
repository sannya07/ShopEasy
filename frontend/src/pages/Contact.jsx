import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';

const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
      <div className="contact-container bg-black text-white min-h-screen py-5">
        <div className="container py-5">
          {/* Page Header with Gradient Text */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h1 className="display-3 fw-bold mb-3 text-gradient"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #8b5cf6, #3b82f6, #10b981)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>
                Get In Touch
              </h1>
              <p className="lead text-gray-400 mx-auto" style={{maxWidth: "700px"}}>
                Have questions about our products, orders, or need assistance? 
                Our team at ShopEasy is here to help you with anything you need.
              </p>
            </div>
          </div>

          {/* Flex container for desktop view */}
          <div className="d-flex flex-column flex-lg-row gap-4">
            {/* Contact Information Column */}
            <div className="flex-grow-1">
              <div className="contact-info p-4 bg-dark rounded-lg shadow-lg h-100" style={{backgroundColor: "#1a1a1a"}}>
                <h2 className="mb-4 fs-2 fw-light">Contact Information</h2>
                
                {/* Contact methods with icons */}
                <div className="mb-4 d-flex align-items-center">
                  <div className="contact-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "50px",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-geo-alt text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Our Location</h5>
                    <p className="text-gray-400 mb-0">123 ShopEasy Plaza, Suite 101<br />Commerce City, CA 90210</p>
                  </div>
                </div>
                
                <div className="mb-4 d-flex align-items-center">
                  <div className="contact-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "50px",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-telephone text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Phone Number</h5>
                    <p className="text-gray-400 mb-0">+1 (800) SHOP-EASY<br />+1 (800) 746-7329</p>
                  </div>
                </div>
                
                <div className="mb-4 d-flex align-items-center">
                  <div className="contact-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "50px",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-envelope text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Email Address</h5>
                    <p className="text-gray-400 mb-0">support@shopeasy.com<br />sales@shopeasy.com</p>
                  </div>
                </div>
                
                <div className="mb-5 d-flex align-items-center">
                  <div className="contact-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "50px",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-clock text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Business Hours</h5>
                    <p className="text-gray-400 mb-0">Monday-Friday: 9AM - 8PM EST<br />Saturday-Sunday: 10AM - 6PM EST</p>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Map or Additional Information Column */}
            <div className="flex-grow-1">
              <div className="h-100 p-4 bg-dark rounded-lg shadow-lg d-flex flex-column" style={{backgroundColor: "#1a1a1a"}}>
                <h2 className="mb-4 fs-2 fw-light text-center">Whoever said money cannot buy happiness clearly did not know where to shop.</h2>
                
                {/* gif placeholder */}
                <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGZmdGNlcHpnZXJ1NDZ2N2hmcXF5NjlieXZ1Z2R2MHZ2bTZ2aXZ5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z2D26GunfUK1W/giphy.gif"
                alt="Dancing gif"
                className="w-64 h-auto"
                />

              </div>
            </div>
          </div>
                    
          {/* FAQ Section */}
          <div className="row mt-5">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="fs-1 fw-light">Frequently Asked Questions</h2>
              <p className="text-gray-400">Quick answers to common questions</p>
            </div>
            
            <div className="col-lg-10 mx-auto">
              <div className="accordion" id="contactFAQ">
                <div className="accordion-item bg-dark text-white border-0 mb-3 rounded-lg overflow-hidden">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is your return policy?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#contactFAQ">
                    <div className="accordion-body text-gray-400">
                      We offer a 30-day return policy for most items. Products must be in their original condition with all packaging and tags. Some items like personalized goods and special orders may have different return terms.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item bg-dark text-white border-0 mb-3 rounded-lg overflow-hidden">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How long does shipping take?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#contactFAQ">
                    <div className="accordion-body text-gray-400">
                      Standard shipping typically takes 3-5 business days within the continental US. Express shipping options (1-2 business days) are available at checkout. International shipping varies by location but generally takes 7-14 business days.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item bg-dark text-white border-0 mb-3 rounded-lg overflow-hidden">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Do you offer international shipping?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#contactFAQ">
                    <div className="accordion-body text-gray-400">
                      Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. Import duties and taxes may apply and are the responsibility of the customer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Styles */}
      <style jsx>{`
        .bg-black {
          background-color: #121212;
        }
        
        .bg-dark {
          background-color: #1a1a1a !important;
        }
        
        .text-gray-400 {
          color: #9ca3af;
        }
        
        .text-blue-400 {
          color: #60a5fa;
        }
        
        .text-purple-400 {
          color: #c084fc;
        }
        
        .text-emerald-400 {
          color: #34d399;
        }
        
        .text-emerald-500 {
          color: #10b981;
        }
        
        .social-link:hover {
          transform: translateY(-3px);
        }
        
        /* Override Bootstrap dark accordion styles */
        .accordion-button:not(.collapsed) {
          background-color: #1a1a1a;
          color: white;
          box-shadow: none;
        }
        
        .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(255,255,255,0.1);
        }
        
        .accordion-button::after {
          filter: invert(1);
        }
      `}</style>
    </Layout>
  );
};

export default Contact;