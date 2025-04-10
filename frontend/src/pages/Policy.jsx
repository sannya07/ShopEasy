import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
  const [activePolicy, setActivePolicy] = useState('privacy');

  return (
    <Layout title={'Policies'}>
      <div className="policy-container bg-black text-white min-h-screen py-5">
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
                Our Policies
              </h1>
              <p className="lead text-gray-400 mx-auto" style={{maxWidth: "700px"}}>
                At ShopEasy, we believe in transparency and clear communication. 
                Our policies are designed to protect both our customers and our business.
              </p>
            </div>
          </div>

          {/* Policy Navigation and Content */}
          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="p-4 bg-dark rounded-lg shadow-lg" style={{backgroundColor: "#1a1a1a"}}>
                <h3 className="fs-4 fw-light mb-4">Policy Categories</h3>
                
                <div className="nav flex-column nav-pills">
                  <button 
                    className={`nav-link text-start mb-2 ${activePolicy === 'privacy' ? 'active' : ''}`} 
                    style={{
                      backgroundColor: activePolicy === 'privacy' ? '#3b82f6' : 'transparent',
                      color: activePolicy === 'privacy' ? 'white' : '#9ca3af',
                      border: 'none'
                    }}
                    onClick={() => setActivePolicy('privacy')}
                  >
                    <i className="bi bi-shield-lock me-2"></i>
                    Privacy Policy
                  </button>
                  
                  <button 
                    className={`nav-link text-start mb-2 ${activePolicy === 'terms' ? 'active' : ''}`} 
                    style={{
                      backgroundColor: activePolicy === 'terms' ? '#3b82f6' : 'transparent',
                      color: activePolicy === 'terms' ? 'white' : '#9ca3af',
                      border: 'none'
                    }}
                    onClick={() => setActivePolicy('terms')}
                  >
                    <i className="bi bi-file-text me-2"></i>
                    Terms of Service
                  </button>
                  
                  <button 
                    className={`nav-link text-start mb-2 ${activePolicy === 'shipping' ? 'active' : ''}`} 
                    style={{
                      backgroundColor: activePolicy === 'shipping' ? '#3b82f6' : 'transparent',
                      color: activePolicy === 'shipping' ? 'white' : '#9ca3af',
                      border: 'none'
                    }}
                    onClick={() => setActivePolicy('shipping')}
                  >
                    <i className="bi bi-truck me-2"></i>
                    Shipping Policy
                  </button>
                  
                  <button 
                    className={`nav-link text-start mb-2 ${activePolicy === 'returns' ? 'active' : ''}`} 
                    style={{
                      backgroundColor: activePolicy === 'returns' ? '#3b82f6' : 'transparent',
                      color: activePolicy === 'returns' ? 'white' : '#9ca3af',
                      border: 'none'
                    }}
                    onClick={() => setActivePolicy('returns')}
                  >
                    <i className="bi bi-arrow-return-left me-2"></i>
                    Return & Refund Policy
                  </button>
                  
                  <button 
                    className={`nav-link text-start ${activePolicy === 'cookies' ? 'active' : ''}`} 
                    style={{
                      backgroundColor: activePolicy === 'cookies' ? '#3b82f6' : 'transparent',
                      color: activePolicy === 'cookies' ? 'white' : '#9ca3af',
                      border: 'none'
                    }}
                    onClick={() => setActivePolicy('cookies')}
                  >
                    <i className="bi bi-cookie me-2"></i>
                    Cookie Policy
                  </button>
                </div>

                <div className="mt-5 p-3 bg-gradient-to-r rounded-lg" 
                     style={{
                       backgroundImage: "linear-gradient(to right, rgba(43, 43, 43, 0.8), rgba(55, 55, 55, 0.8))"
                     }}>
                  <p className="mb-2 text-gray-400 small">
                    <i className="bi bi-info-circle me-2 text-blue-400"></i>
                    These policies were last updated on March 15, 2025.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-9">
              <div className="p-4 bg-dark rounded-lg shadow-lg" style={{backgroundColor: "#1a1a1a"}}>
                {/* Privacy Policy */}
                {activePolicy === 'privacy' && (
                  <div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="policy-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                           style={{
                             backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
                             width: "50px",
                             height: "50px",
                             display: "flex",
                             alignItems: "center",
                             justifyContent: "center"
                           }}>
                        <i className="bi bi-shield-lock text-white fs-5"></i>
                      </div>
                      <h2 className="fs-2 fw-light mb-0">Privacy Policy</h2>
                    </div>
                    
                    <div className="policy-content">
                      <h3 className="fs-4 fw-semibold text-blue-400 mb-3">1. Introduction</h3>
                      <p className="text-gray-400 mb-4">
                        At ShopEasy, we take your privacy seriously. This Privacy Policy explains how we collect, 
                        use, disclose, and safeguard your information when you visit our website or make purchases. 
                        Please read this policy carefully to understand our practices regarding your personal data.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-blue-400 mb-3">2. Information We Collect</h3>
                      <p className="text-gray-400 mb-3">
                        We collect several types of information from and about users of our website, including:
                      </p>
                      <ul className="text-gray-400 mb-4">
                        <li className="mb-2">Personal identifiers such as name, postal address, email address, phone number, and credit card information when you make a purchase.</li>
                        <li className="mb-2">Account credentials if you create an account with us.</li>
                        <li className="mb-2">Order history and product preferences.</li>
                        <li className="mb-2">Device and usage information collected automatically when you visit our site.</li>
                      </ul>
                      
                      <h3 className="fs-4 fw-semibold text-blue-400 mb-3">3. How We Use Your Information</h3>
                      <p className="text-gray-400 mb-3">
                        We use the information we collect about you for various purposes, including:
                      </p>
                      <ul className="text-gray-400 mb-4">
                        <li className="mb-2">Processing and fulfilling your orders.</li>
                        <li className="mb-2">Creating and managing your account.</li>
                        <li className="mb-2">Providing customer support.</li>
                        <li className="mb-2">Sending transactional emails and order updates.</li>
                        <li className="mb-2">Improving our website and product offerings.</li>
                        <li className="mb-2">Marketing and promotional communications (with your consent).</li>
                      </ul>
                      
                      <h3 className="fs-4 fw-semibold text-blue-400 mb-3">4. Information Sharing</h3>
                      <p className="text-gray-400 mb-3">
                        We may share your personal information with:
                      </p>
                      <ul className="text-gray-400 mb-4">
                        <li className="mb-2">Service providers who perform services on our behalf.</li>
                        <li className="mb-2">Payment processors to complete transactions.</li>
                        <li className="mb-2">Shipping partners to deliver your orders.</li>
                        <li className="mb-2">Legal authorities when required by law.</li>
                      </ul>
                      
                      <h3 className="fs-4 fw-semibold text-blue-400 mb-3">5. Your Rights</h3>
                      <p className="text-gray-400 mb-3">
                        Depending on your location, you may have certain rights regarding your personal data, including:
                      </p>
                      <ul className="text-gray-400 mb-4">
                        <li className="mb-2">Right to access the personal data we hold about you.</li>
                        <li className="mb-2">Right to correct inaccurate information.</li>
                        <li className="mb-2">Right to request deletion of your personal data.</li>
                        <li className="mb-2">Right to restrict or object to processing.</li>
                        <li className="mb-2">Right to data portability.</li>
                      </ul>
                      
                      <p className="text-gray-400">
                        For any privacy-related questions or to exercise your rights, please contact our Data Protection 
                        Officer at privacy@shopeasy.com.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Terms of Service */}
                {activePolicy === 'terms' && (
                  <div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="policy-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                           style={{
                             backgroundImage: "linear-gradient(to right, #3b82f6, #10b981)",
                             width: "50px",
                             height: "50px",
                             display: "flex",
                             alignItems: "center",
                             justifyContent: "center"
                           }}>
                        <i className="bi bi-file-text text-white fs-5"></i>
                      </div>
                      <h2 className="fs-2 fw-light mb-0">Terms of Service</h2>
                    </div>
                    
                    <div className="policy-content">
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">1. Agreement to Terms</h3>
                      <p className="text-gray-400 mb-4">
                        By accessing or using the ShopEasy website and services, you agree to be bound by these Terms of Service.
                        If you do not agree to these terms, please do not use our website or services.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">2. Account Registration</h3>
                      <p className="text-gray-400 mb-4">
                        To access certain features of our website, you may need to create an account. You are responsible
                        for maintaining the confidentiality of your account information and for all activities that occur
                        under your account. You agree to provide accurate information and to update it as necessary.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">3. Intellectual Property Rights</h3>
                      <p className="text-gray-400 mb-4">
                        All content on the ShopEasy website, including text, graphics, logos, images, and software, is the
                        property of ShopEasy or its content suppliers and is protected by international copyright laws.
                        The compilation of all content on this site is the exclusive property of ShopEasy.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">4. User Conduct</h3>
                      <p className="text-gray-400 mb-3">
                        When using our website, you agree not to:
                      </p>
                      <ul className="text-gray-400 mb-4">
                        <li className="mb-2">Violate any applicable laws or regulations.</li>
                        <li className="mb-2">Infringe upon the rights of others.</li>
                        <li className="mb-2">Use the service to transmit harmful code or interfere with its operation.</li>
                        <li className="mb-2">Impersonate any person or entity.</li>
                        <li className="mb-2">Engage in any activity that could disable, overburden, or impair our services.</li>
                      </ul>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">5. Limitation of Liability</h3>
                      <p className="text-gray-400 mb-4">
                        ShopEasy shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                        resulting from your access to or use of, or inability to access or use, the website or any content
                        provided on or through the website.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">6. Governing Law</h3>
                      <p className="text-gray-400 mb-4">
                        These Terms of Service shall be governed by and construed in accordance with the laws of the state of
                        California, without regard to its conflict of law provisions.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">7. Changes to Terms</h3>
                      <p className="text-gray-400">
                        We reserve the right to modify these Terms of Service at any time. It is your responsibility to check
                        our website periodically for changes. Your continued use of our website following the posting of revised
                        Terms of Service means you accept those changes.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Shipping Policy */}
                {activePolicy === 'shipping' && (
                  <div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="policy-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                           style={{
                             backgroundImage: "linear-gradient(to right, #8b5cf6, #3b82f6)",
                             width: "50px",
                             height: "50px",
                             display: "flex",
                             alignItems: "center",
                             justifyContent: "center"
                           }}>
                        <i className="bi bi-truck text-white fs-5"></i>
                      </div>
                      <h2 className="fs-2 fw-light mb-0">Shipping Policy</h2>
                    </div>
                    
                    <div className="policy-content">
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">1. Processing Time</h3>
                      <p className="text-gray-400 mb-4">
                        All orders are processed within 1-2 business days after receiving your order confirmation email.
                        Orders placed during weekends or holidays will be processed on the next business day.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">2. Shipping Options</h3>
                      <p className="text-gray-400 mb-3">
                        We offer several shipping options to meet your needs:
                      </p>
                      <ul className="text-gray-400 mb-4">
                        <li className="mb-2"><strong>Standard Shipping:</strong> 3-5 business days (Free on orders over $50)</li>
                        <li className="mb-2"><strong>Express Shipping:</strong> 2-3 business days ($8.95)</li>
                        <li className="mb-2"><strong>Next Day Shipping:</strong> 1 business day ($19.95)</li>
                        <li className="mb-2"><strong>International Shipping:</strong> 7-14 business days (Rates vary by location)</li>
                      </ul>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">3. Tracking Information</h3>
                      <p className="text-gray-400 mb-4">
                        Once your order ships, you will receive a shipping confirmation email with a tracking number.
                        You can track your package by clicking the tracking link in the email or by logging into your
                        ShopEasy account.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">4. International Shipping</h3>
                      <p className="text-gray-400 mb-4">
                        We ship to most countries worldwide. International customers may be subject to import duties,
                        taxes, and fees which are not included in the item price or shipping cost. These charges are
                        the buyer's responsibility.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">5. Shipping Restrictions</h3>
                      <p className="text-gray-400 mb-4">
                        Some products cannot be shipped to certain international destinations due to local regulations
                        or product specifications. If this applies to your order, we will notify you as soon as possible.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">6. Shipping Delays</h3>
                      <p className="text-gray-400">
                        While we make every effort to ship orders on time, occasional delays may occur due to weather
                        conditions, customs clearance, or other circumstances beyond our control. We appreciate your
                        understanding in such cases.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Return & Refund Policy */}
                {activePolicy === 'returns' && (
                  <div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="policy-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                           style={{
                             backgroundImage: "linear-gradient(to right, #10b981, #3b82f6)",
                             width: "50px",
                             height: "50px",
                             display: "flex",
                             alignItems: "center",
                             justifyContent: "center"
                           }}>
                        <i className="bi bi-arrow-return-left text-white fs-5"></i>
                      </div>
                      <h2 className="fs-2 fw-light mb-0">Return & Refund Policy</h2>
                    </div>
                    
                    <div className="policy-content">
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">1. Return Period</h3>
                      <p className="text-gray-400 mb-4">
                        We offer a 30-day return policy for most items. To be eligible for a return, your item must be
                        unused, in the same condition that you received it, and in its original packaging. You'll need
                        your receipt or proof of purchase.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">2. Return Process</h3>
                      <p className="text-gray-400 mb-3">
                        To initiate a return:
                      </p>
                      <ol className="text-gray-400 mb-4">
                        <li className="mb-2">Log into your ShopEasy account and visit the "Orders" section</li>
                        <li className="mb-2">Select the order containing the item(s) you wish to return</li>
                        <li className="mb-2">Click "Return Items" and follow the instructions</li>
                        <li className="mb-2">Print the provided return shipping label</li>
                        <li className="mb-2">Pack the items securely in their original packaging</li>
                        <li className="mb-2">Attach the return label and drop off the package at the designated shipping carrier</li>
                      </ol>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">3. Refunds</h3>
                      <p className="text-gray-400 mb-4">
                        Once we receive your returned item, we will inspect it and notify you that we've received it.
                        We will immediately notify you of the status of your refund after inspecting the item.
                        If your return is approved, we will initiate a refund to your original method of payment.
                        Depending on your payment provider, refunds may take 5-10 business days to process.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">4. Exchanges</h3>
                      <p className="text-gray-400 mb-4">
                        If you need to exchange an item for a different size or color, please return the original item
                        and place a new order for the desired item. This ensures the fastest processing time for your exchange.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">5. Non-Returnable Items</h3>
                      <p className="text-gray-400 mb-3">
                        The following items cannot be returned:
                      </p>
                      <ul className="text-gray-400 mb-4">
                        <li className="mb-2">Gift cards</li>
                        <li className="mb-2">Downloadable software products</li>
                        <li className="mb-2">Personalized or custom-made items</li>
                        <li className="mb-2">Items marked as final sale</li>
                        <li className="mb-2">Intimate apparel, swimwear, and undergarments for hygiene reasons</li>
                      </ul>
                      
                      <h3 className="fs-4 fw-semibold text-emerald-400 mb-3">6. Damaged or Defective Items</h3>
                      <p className="text-gray-400">
                        If you receive a damaged or defective item, please contact our customer service team at
                        support@shopeasy.com within 48 hours of receiving your order. Include your order number and
                        photos of the damaged/defective product. We will provide instructions for returning the item
                        and will cover the return shipping costs in these cases.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Cookie Policy */}
                {activePolicy === 'cookies' && (
                  <div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="policy-icon me-3 p-3 rounded-circle bg-gradient-to-r" 
                           style={{
                             backgroundImage: "linear-gradient(to right, #9333ea, #8b5cf6)",
                             width: "50px",
                             height: "50px",
                             display: "flex",
                             alignItems: "center",
                             justifyContent: "center"
                           }}>
                        <i className="bi bi-cookie text-white fs-5"></i>
                      </div>
                      <h2 className="fs-2 fw-light mb-0">Cookie Policy</h2>
                    </div>
                    
                    <div className="policy-content">
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">1. What Are Cookies</h3>
                      <p className="text-gray-400 mb-4">
                        Cookies are small text files that are placed on your device when you visit our website.
                        They help us provide you with a better experience by enabling certain functions like remembering
                        your preferences, login status, and shopping cart items.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">2. Types of Cookies We Use</h3>
                      <p className="text-gray-400 mb-3">
                        We use several types of cookies for different purposes:
                      </p>
                      <ul className="text-gray-400 mb-4">
                        <li className="mb-2"><strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be disabled.</li>
                        <li className="mb-2"><strong>Preference Cookies:</strong> These remember your settings and preferences to enhance your experience.</li>
                        <li className="mb-2"><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website.</li>
                        <li className="mb-2"><strong>Marketing Cookies:</strong> These track your activity to deliver personalized ads and content.</li>
                      </ul>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">3. How to Manage Cookies</h3>
                      <p className="text-gray-400 mb-4">
                        Most web browsers allow you to control cookies through their settings. You can usually find
                        these settings in the "Options," "Preferences," or "Settings" menu of your browser. You can
                        delete existing cookies, allow or block all cookies, or block cookies from particular sites.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">4. Third-Party Cookies</h3>
                      <p className="text-gray-400 mb-4">
                        Our website may use third-party services that also use cookies. These include analytics
                        services, payment processors, and social media platforms. These third parties have their own
                        privacy policies which govern their use of cookies.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">5. Changes to Our Cookie Policy</h3>
                      <p className="text-gray-400 mb-4">
                        We may update our Cookie Policy from time to time. Any changes will be posted on this page
                        with an updated revision date. We encourage you to review this Cookie Policy periodically
                        for any changes.
                      </p>
                      
                      <h3 className="fs-4 fw-semibold text-purple-400 mb-3">6. Contact Us</h3>
                      <p className="text-gray-400">
                        If you have any questions about our Cookie Policy, please contact us at privacy@shopeasy.com.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Policy Highlight Box */}
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="p-4 bg-dark rounded-lg shadow-lg" style={{backgroundColor: "#1a1a1a"}}>
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h3 className="fs-3 fw-light mb-3">Still Have Questions?</h3>
                    <p className="text-gray-400 mb-0">
                      Our customer support team is available to help you understand our policies 
                      and answer any specific questions you might have.
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <a href="/contact" className="btn btn-lg px-4 py-2 text-white fw-semibold"
                       style={{
                         backgroundImage: "linear-gradient(to right, #8b5cf6, #3b82f6, #10b981)",
                         transition: "transform 0.3s ease-in-out",
                         border: "none"
                       }}
                       onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                       onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                    >
                      Contact Support
                    </a>
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
        
        .nav-link {
          transition: all 0.2s ease-in-out;
        }
        
        .nav-link:hover:not(.active) {
          background-color: rgba(75, 85, 99, 0.2);
          color: white !important;
        }
        
        .policy-icon {
          transition: all 0.3s ease;
        }
        
        .policy-content h3 {
          margin-top: 30px;
        }
        
        .policy-content h3:first-of-type {
          margin-top: 0;
        }
      `}</style>
    </Layout>
  );
};

export default Policy;