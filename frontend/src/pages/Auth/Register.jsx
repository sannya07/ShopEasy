import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3002/api/v1/auth/register', { name, email, password, phone, address });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <Layout title="Register | ShopEasy">
      <div className="container-fluid text-light py-5" style={{ minHeight: '100vh' , background:'black', marginTop: '75px'}}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card bg-dark border-0 shadow">
              <div className="row g-0">
                {/* Left side with accent color and branding */}
                <div className="col-md-5 d-none d-md-block" style={{ 
                  background: 'black', 
                  borderRight: '1px solid #333',
                  borderRadius: '8px 0 0 8px',
                  position: 'relative'
                }}>
                  <div className="d-flex flex-column justify-content-between h-100 p-5">
                    <div>
                      <h2 className="display-6 fw-bold text-light mb-3">ShopEasy</h2>
                      <p className="text-secondary">Create your account and join thousands of satisfied customers.</p>
                    </div>
                    
                    <div className="mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3" style={{ color: '#00e676' }}>
                          <i className="bi bci-check-circle-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-light">Fast Checkout</h5>
                          <p className="mb-0 text-secondary">Save time with quick purchase process</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3" style={{ color: '#00e676' }}>
                          <i className="bi bi-check-circle-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-light">Order Tracking</h5>
                          <p className="mb-0 text-secondary">Monitor your orders in real-time</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <div className="me-3" style={{ color: '#00e676' }}>
                          <i className="bi bi-check-circle-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-light">Exclusive Deals</h5>
                          <p className="mb-0 text-secondary">Get access to member-only offers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '0', 
                    left: '0', 
                    width: '100%', 
                    height: '5px', 
                    background: 'linear-gradient(90deg, #00e676, #00b0ff)' 
                  }}></div>
                </div>
                
                {/* Right side with form */}
                <div className="col-md-7">
                  <div className="card-body p-4 p-md-5">
                    <div className="text-center mb-4">
                      <h3 className="text-light mb-1">Create Account</h3>
                      <p className="text-secondary">Fill in your details to get started</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="inputName" className="form-label text-secondary small text-uppercase">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control form-control-lg bg-dark text-white border-secondary white-placeholder"
                          id="inputName"
                          placeholder="Enter your full name"
                          required
                          style={{ borderRadius: '6px' }}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="inputEmail" className="form-label text-secondary small text-uppercase white-placeholder">Email address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control form-control-lg bg-dark text-light border-secondary white-placeholder"
                          id="inputEmail"
                          placeholder="Enter your email address"
                          required
                          style={{ borderRadius: '6px' }}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="inputPassword" className="form-label text-secondary small text-uppercase white-placeholder">Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control form-control-lg bg-dark text-light border-secondary white-placeholder"
                          id="inputPassword"
                          placeholder="Create a strong password"
                          required
                          style={{ borderRadius: '6px' }}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="inputPhone" className="form-label text-secondary small text-uppercase white-placeholder">Phone</label>
                          <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control form-control-lg bg-dark text-light border-secondary white-placeholder"
                            id="inputPhone"
                            placeholder="Phone number"
                            required
                            style={{ borderRadius: '6px' }}
                          />
                        </div>
                        
                        <div className="col-md-6 mb-4">
                          <label htmlFor="inputAddress" className="form-label text-secondary small text-uppercase white-placeholder">Address</label>
                          <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control form-control-lg bg-dark text-light border-secondary white-placeholder"
                            id="inputAddress"
                            placeholder="Your address"
                            required
                            style={{ borderRadius: '6px' }}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="termsCheck"
                            required
                          />
                          <label className="form-check-label text-secondary" htmlFor="termsCheck">
                            I agree to the <Link to="/policy" style={{ color: '#00e676', textDecoration: 'none' }}>Terms of Service</Link> and <Link to="/policy" style={{ color: '#00e676', textDecoration: 'none' }}>Privacy Policy</Link>
                          </label>
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        className="btn btn-lg w-100 mb-4"
                        style={{ 
                          background: '#00e676',
                          color: '#000',
                          borderRadius: '6px',
                          fontWeight: '600',
                          border: 'none'
                        }}
                      >
                        Create Account
                      </button>
                      
                      <div className="text-center">
                        <p className="text-secondary mb-0">
                          Already have an account? <a href="/login" style={{ color: '#00e676', textDecoration: 'none' }}>Sign In</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;