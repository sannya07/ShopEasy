import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={'About Us'}>
      <div className="about-container bg-black text-white min-h-screen py-5">
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
                Our Story
              </h1>
              <p className="lead text-gray-400 mx-auto" style={{maxWidth: "700px"}}>
                ShopEasy is more than just a store - we're on a mission to make shopping 
                accessible, enjoyable, and hassle-free for everyone.
              </p>
            </div>
          </div>

          {/* Our Journey Section */}
          <div className="row mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="p-4 bg-dark rounded-lg shadow-lg h-100" style={{backgroundColor: "#1a1a1a"}}>
                <h2 className="mb-4 fs-2 fw-light">Our Journey</h2>
                <p className="text-gray-400">
                ShopEasy began as a passionate 6th semester project with the vision of creating a smooth, user-friendly online shopping experience. Built using the powerful MERN stack (MongoDB, Express.js, React, and Node.js), ShopEasy combines performance, responsiveness, and modern design to deliver a seamless e-commerce platform.
                </p>
                <p className="text-gray-400">
                From product browsing and cart management to secure checkout, every feature is crafted to reflect real-world retail functionality while maintaining clean code architecture and scalability.
                </p>
                <p className="text-gray-400">
                  Today, we offer thousands of products across dozens of categories, but our 
                  core mission remains unchanged: to make shopping easy, accessible, and enjoyable for everyone.
                </p>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="p-4 bg-dark rounded-lg shadow-lg h-100" style={{backgroundColor: "#1a1a1a"}}>
                <h2 className="mb-4 fs-2 fw-light">Why Choose ShopEasy?</h2>
                
                {/* Feature boxes with gradient icons */}
                <div className="mb-4 d-flex align-items-center">
                  <div className="feature-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "50px",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-star text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Quality Guarantee</h5>
                    <p className="text-gray-400 mb-0">All products undergo rigorous quality testing before they reach you.</p>
                  </div>
                </div>
                
                <div className="mb-4 d-flex align-items-center">
                  <div className="feature-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "50px",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-truck text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Fast Delivery</h5>
                    <p className="text-gray-400 mb-0">Enjoy quick shipping with our optimized logistics network.</p>
                  </div>
                </div>
                
                <div className="mb-4 d-flex align-items-center">
                  <div className="feature-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "50px",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-shield-check text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Secure Shopping</h5>
                    <p className="text-gray-400 mb-0">Your data and transactions are protected with enterprise-grade security.</p>
                  </div>
                </div>
                
                <div className="mb-4 d-flex align-items-center">
                  <div className="feature-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "50px",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-headset text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">24/7 Support</h5>
                    <p className="text-gray-400 mb-0">Our customer service team is always ready to assist you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Values Section */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="fs-1 fw-light">Our Values</h2>
              <p className="text-gray-400">The principles that guide everything we do</p>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="p-4 bg-dark rounded-lg shadow-lg h-100 text-center" style={{backgroundColor: "#1a1a1a"}}>
                <div className="value-icon mb-3 mx-auto p-3 rounded-circle bg-gradient-to-r" 
                     style={{
                       backgroundImage: "linear-gradient(to right, #8b5cf6, #3b82f6)",
                       width: "70px",
                       height: "70px",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center"
                     }}>
                  <i className="bi bi-people text-white fs-3"></i>
                </div>
                <h3 className="fw-semibold mb-2">Customer First</h3>
                <p className="text-gray-400">
                  Every decision we make starts with the question: "How does this benefit our customers?"
                  Your satisfaction is our top priority.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="p-4 bg-dark rounded-lg shadow-lg h-100 text-center" style={{backgroundColor: "#1a1a1a"}}>
                <div className="value-icon mb-3 mx-auto p-3 rounded-circle bg-gradient-to-r" 
                     style={{
                       backgroundImage: "linear-gradient(to right, #3b82f6, #10b981)",
                       width: "70px",
                       height: "70px",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center"
                     }}>
                  <i className="bi bi-recycle text-white fs-3"></i>
                </div>
                <h3 className="fw-semibold mb-2">Sustainability</h3>
                <p className="text-gray-400">
                  We're committed to reducing our environmental footprint through eco-friendly 
                  packaging, carbon offset shipping, and sustainable product sourcing.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="p-4 bg-dark rounded-lg shadow-lg h-100 text-center" style={{backgroundColor: "#1a1a1a"}}>
                <div className="value-icon mb-3 mx-auto p-3 rounded-circle bg-gradient-to-r" 
                     style={{
                       backgroundImage: "linear-gradient(to right, #10b981, #8b5cf6)",
                       width: "70px",
                       height: "70px",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center"
                     }}>
                  <i className="bi bi-lightbulb text-white fs-3"></i>
                </div>
                <h3 className="fw-semibold mb-2">Innovation</h3>
                <p className="text-gray-400">
                  We continuously explore new technologies and ideas to improve your shopping experience 
                  and stay ahead of market trends.
                </p>
              </div>
            </div>
          </div>
          
          
          
          {/* Call to Action */}
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="p-5 bg-dark rounded-lg shadow-lg" style={{backgroundColor: "#1a1a1a"}}>
                <h2 className="fs-1 fw-light mb-3">Join the ShopEasy Family</h2>
                <p className="text-gray-400 mb-4 mx-auto" style={{maxWidth: "700px"}}>
                  Experience the difference that our commitment to quality, convenience, and customer 
                  satisfaction can make in your shopping journey.
                </p>
                <a href="/contact" className="btn btn-lg px-5 py-3 text-white fw-semibold"
                   style={{
                     backgroundImage: "linear-gradient(to right, #8b5cf6, #3b82f6, #10b981)",
                     transition: "transform 0.3s ease-in-out",
                     border: "none"
                   }}
                   onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                   onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  Contact Us Today
                </a>
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
        
        .value-icon:hover, .feature-icon:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        
        .team-image {
          transition: all 0.3s ease;
        }
        
        .team-image:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </Layout>
  );
};

export default About;