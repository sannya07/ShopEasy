import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/auth';

// Constants and utility functions for the background animation
const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

// Beam component for animation
const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ opacity: [0, 1, 0], y: 32 * 8 }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
        position: 'absolute',
        zIndex: 50,
        height: '4rem',
        width: '1px',
        background: 'linear-gradient(to bottom, rgba(59,130,246,0), rgba(59,130,246,1))',
      }}
    />
  );
};

// Beams component - collection of animated beams
const Beams = () => {
  const { width } = useWindowSize();
  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

// Grid background component
const GradientGrid = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </motion.div>
  );
};

const HomePage = () => {
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 249.99,
      image: "/api/placeholder/300/300",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      image: "/api/placeholder/300/300",
      category: "Wearables"
    },
    {
      id: 3,
      name: "Designer Tote Bag",
      price: 129.99,
      image: "/api/placeholder/300/300",
      category: "Fashion"
    },
    {
      id: 4,
      name: "Ultra HD Smart TV",
      price: 899.99,
      image: "/api/placeholder/300/300",
      category: "Electronics"
    }
  ];

  const [auth, setAuth]=useAuth();
  return (
    <Layout title={'ShopEasy - Your One-Stop Online Shop'}>
      <div className=" -z-10 homepage-container relative overflow-hidden bg-black text-white min-h-screen py-5">
        {/* Background Animation Components */}
        <Beams />
        <GradientGrid />
        
        {/* Main Content */}
        <div className="container py-5 relative z-20">
          {/* Hero Section */}
          <div className="row align-items-center mb-5 py-5">
            <div className="col-lg-6">
              <pre>{JSON.stringify(auth,null,4)}</pre>
              <motion.h1 
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
                className="display-2 fw-bold mb-3 text-gradient"
                style={{
                  backgroundImage: "linear-gradient(45deg, #8b5cf6, #3b82f6, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                Shop Smarter, Not Harder
              </motion.h1>
              <motion.p 
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
                className="lead text-gray-400 mb-4">
                Discover premium products at unbeatable prices. Join thousands of satisfied customers who've made ShopEasy their favorite online destination.
              </motion.p>
              <motion.div 
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
                className="d-flex gap-3">
                <button className="btn btn-lg px-4 py-2 text-white border-0 rounded-lg"
                        style={{
                          backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                        }}>
                  Shop Now
                </button>
                <button className="btn btn-lg px-4 py-2 text-white bg-dark border-0 rounded-lg">
                  View Deals
                </button>
              </motion.div>
            </div>
            <motion.div 
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
              className="col-lg-6 mt-5 mt-lg-0 text-center">
             <img src="ShoppingExperience.jpg" alt="Shopping experience" class="img-fluid rounded-3 shadow-lg"/>

            </motion.div>
          </div>

          {/* Featured Categories */}
          <div className="row mb-5 pt-3">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="display-5 fw-light">Shop By Category</h2>
              <p className="text-gray-400">Explore our curated collection of premium products</p>
            </div>
            
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center gap-4">
                {/* Category 1 */}
                <div className="category-card p-4 bg-dark rounded-lg shadow-lg text-center" 
                     style={{width: "220px", backgroundColor: "#1a1a1a", cursor: "pointer"}}>
                  <div className="category-icon mb-3 p-3 rounded-circle bg-gradient-to-r mx-auto" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "80px",
                         height: "80px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-laptop text-white fs-3"></i>
                  </div>
                  <h4 className="fw-semibold">Electronics</h4>
                  <p className="text-gray-400">Latest gadgets and tech</p>
                </div>
                
                {/* Category 2 */}
                <div className="category-card p-4 bg-dark rounded-lg shadow-lg text-center" 
                     style={{width: "220px", backgroundColor: "#1a1a1a", cursor: "pointer"}}>
                  <div className="category-icon mb-3 p-3 rounded-circle bg-gradient-to-r mx-auto" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "80px",
                         height: "80px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-handbag text-white fs-3"></i>
                  </div>
                  <h4 className="fw-semibold">Fashion</h4>
                  <p className="text-gray-400">Trendy apparel and accessories</p>
                </div>
                
                {/* Category 3 */}
                <div className="category-card p-4 bg-dark rounded-lg shadow-lg text-center" 
                     style={{width: "220px", backgroundColor: "#1a1a1a", cursor: "pointer"}}>
                  <div className="category-icon mb-3 p-3 rounded-circle bg-gradient-to-r mx-auto" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "80px",
                         height: "80px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-house-heart text-white fs-3"></i>
                  </div>
                  <h4 className="fw-semibold">Home</h4>
                  <p className="text-gray-400">Decor & kitchen essentials</p>
                </div>
                
                {/* Category 4 */}
                <div className="category-card p-4 bg-dark rounded-lg shadow-lg text-center" 
                     style={{width: "220px", backgroundColor: "#1a1a1a", cursor: "pointer"}}>
                  <div className="category-icon mb-3 p-3 rounded-circle bg-gradient-to-r mx-auto" 
                       style={{
                         backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                         width: "80px",
                         height: "80px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center"
                       }}>
                    <i className="bi bi-heart-pulse text-white fs-3"></i>
                  </div>
                  <h4 className="fw-semibold">Wellness</h4>
                  <p className="text-gray-400">Health & beauty products</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured Products */}
          <div className="row mb-5 pt-5">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="display-5 fw-light">Featured Products</h2>
              <p className="text-gray-400">Handpicked selection of our best sellers</p>
            </div>
            
            <div className="col-12">
              <div className="row g-4">
                {featuredProducts.map(product => (
                  <div key={product.id} className="col-md-6 col-lg-3">
                    <div className="product-card bg-dark p-3 rounded-lg shadow-lg h-100" style={{backgroundColor: "#1a1a1a"}}>
                      <div className="product-image mb-3">
                        <img src={product.image} alt={product.name} className="img-fluid rounded" />
                      </div>
                      <div className="product-badge mb-2">
                        <span className="badge" 
                              style={{
                                backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                                color: "white"
                              }}>
                          {product.category}
                        </span>
                      </div>
                      <h5 className="product-title fw-semibold">{product.name}</h5>
                      <p className="product-price text-emerald-500 fw-bold">${product.price}</p>
                      <button className="btn w-100 text-white border-0" 
                              style={{
                                backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                              }}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="row mb-5 pt-5 ">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="display-5 fw-light">What Our Customers Say</h2>
              <p className="text-gray-400">Join thousands of satisfied shoppers</p>
            </div>
            
            <div className="col-12">
              <div className="row g-4">
                {/* Testimonial 1 */}
                <div className="col-md-4">
                  <div className="testimonial-card p-4 bg-dark rounded-lg shadow-lg" style={{backgroundColor: "#1a1a1a"}}>
                    <div className="d-flex mb-3">
                      <div className="me-3">
                        <div className="testimonial-avatar rounded-circle bg-gradient-to-r"
                             style={{
                               backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                               width: "60px",
                               height: "60px",
                               display: "flex",
                               alignItems: "center",
                               justifyContent: "center"
                             }}>
                          <span className="text-white fw-bold">JD</span>
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-1">Jane Doe</h5>
                        <div className="stars text-warning">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      "ShopEasy has the best customer service I've ever experienced. My order arrived earlier than expected and the quality exceeded my expectations."
                    </p>
                  </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="col-md-4">
                  <div className="testimonial-card p-4 bg-dark rounded-lg shadow-lg" style={{backgroundColor: "#1a1a1a"}}>
                    <div className="d-flex mb-3">
                      <div className="me-3">
                        <div className="testimonial-avatar rounded-circle bg-gradient-to-r"
                             style={{
                               backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                               width: "60px",
                               height: "60px",
                               display: "flex",
                               alignItems: "center",
                               justifyContent: "center"
                             }}>
                          <span className="text-white fw-bold">MS</span>
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-1">Michael Smith</h5>
                        <div className="stars text-warning">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      "I've been shopping with ShopEasy for years now. The prices are competitive and the product selection is unmatched. Highly recommended!"
                    </p>
                  </div>
                </div>
                
                {/* Testimonial 3 */}
                <div className="col-md-4">
                  <div className="testimonial-card p-4 bg-dark rounded-lg shadow-lg" style={{backgroundColor: "#1a1a1a"}}>
                    <div className="d-flex mb-3">
                      <div className="me-3">
                        <div className="testimonial-avatar rounded-circle bg-gradient-to-r"
                             style={{
                               backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                               width: "60px",
                               height: "60px",
                               display: "flex",
                               alignItems: "center",
                               justifyContent: "center"
                             }}>
                          <span className="text-white fw-bold">AL</span>
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-1">Aisha Lee</h5>
                        <div className="stars text-warning">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      "The return process was so easy and hassle-free. That's what keeps me coming back to ShopEasy. Plus the website is super intuitive!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="row my-5 py-5">
            <div className="col-lg-10 mx-auto">
              <div className="newsletter-container p-5 rounded-lg shadow-lg text-center rounded" 
                   style={{
                     backgroundImage: "linear-gradient(to right, rgba(37, 99, 235, 0.7), rgba(147, 51, 234, 0.7))",
                   }}>
                <h2 className="display-5 fw-light mb-3">Join Our Newsletter</h2>
                <p className="lead mb-4">Get exclusive deals, new product alerts, and 10% off your first order</p>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="input-group mb-3">
                      <input type="email" className="form-control form-control-lg" placeholder="Your email address" />
                      <button className="btn btn-dark px-4" type="button">Subscribe</button>
                    </div>
                    <p className="small text-white-50">By subscribing, you agree to our privacy policy and terms of service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Styles - Convert from styled-jsx to regular style object */}
      <style dangerouslySetInnerHTML={{__html: `
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
        
        .category-card:hover, .product-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
        
        .testimonial-card {
          height: 100%;
        }
        
        .btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
      `}} />
    </Layout>
  );
};

export default HomePage;