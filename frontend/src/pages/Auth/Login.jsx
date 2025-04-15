import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [auth, setAuth]=useAuth();
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post("http://localhost:3002/api/v1/auth/login",{
                email,
                password
            })
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                setAuth({
                  ...auth,
                  user: res.data.user,
                  token: res.data.token
                })
                localStorage.setItem("auth", JSON.stringify(res.data))
                navigate('/')
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }
  return (
    <Layout title="Login | ShopEasy">
      <div className="container-fluid text-light py-5" style={{ minHeight: '100vh', background:'black', marginTop:'73px'}}>
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
                      <p className="text-secondary">Welcome back! Sign in to access your account.</p>
                    </div>
                    
                    <div className="mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3" style={{ color: '#00e676' }}>
                          <i className="bi bi-bag-check-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-light">View Your Orders</h5>
                          <p className="mb-0 text-secondary">Check status and order history</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3" style={{ color: '#00e676' }}>
                          <i className="bi bi-heart-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-light">Access Wishlist</h5>
                          <p className="mb-0 text-secondary">See saved items and favorites</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <div className="me-3" style={{ color: '#00e676' }}>
                          <i className="bi bi-gift-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-light">Exclusive Offers</h5>
                          <p className="mb-0 text-secondary">Unlock member-only discounts</p>
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
                    <div className="text-center mb-5">
                      <h3 className="text-light mb-1">Sign In</h3>
                      <p className="text-secondary">Enter your credentials to continue</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="inputEmail" className="form-label text-secondary small text-uppercase">Email address</label>
                        <input
                          type="email"
                          className="form-control form-control-lg bg-dark text-light border-secondary white-placeholder"
                          id="inputEmail"
                          placeholder="Enter your email address"
                          required
                          value={email}
                          onChange={(e)=> setEmail(e.target.value)}
                          style={{ borderRadius: '6px' }}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label text-secondary small text-uppercase">Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg bg-dark text-light border-secondary white-placeholder"
                          id="inputPassword"
                          placeholder="Enter your password"
                          required
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          style={{ borderRadius: '6px' }}
                        />
                      </div>

                    

                      <button 
                        type="submit" 
                        className="btn btn-lg w-100 mb-4 mt-5"
                        style={{ 
                          background: '#00e676',
                          color: '#000',
                          borderRadius: '6px',
                          fontWeight: '600',
                          border: 'none'
                        }}
                      >
                        Sign In
                      </button>
                      
                      <div className="text-center">
                        <p className="text-secondary mb-4">
                          Don't have an account? <a href="/register" style={{ color: '#00e676', textDecoration: 'none' }}>Create Account</a>
                        </p>
                      </div>
                      
                      {/* <div className="d-flex align-items-center my-4">
                        <hr className="flex-grow-1 border-secondary" />
                        <span className="px-3 text-secondary">OR</span>
                        <hr className="flex-grow-1 border-secondary" />
                      </div> */}
                      
                      {/* <div className="row g-3">
                        <div className="col-sm-4">
                          <button 
                            type="button" 
                            className="btn btn-outline-secondary w-100"
                            style={{ borderRadius: '6px' }}
                          >
                            <i className="bi bi-google me-2"></i>Google
                          </button>
                        </div>
                        <div className="col-sm-4">
                          <button 
                            type="button" 
                            className="btn btn-outline-secondary w-100"
                            style={{ borderRadius: '6px' }}
                          >
                            <i className="bi bi-facebook me-2"></i>Facebook
                          </button>
                        </div>
                        <div className="col-sm-4">
                          <button 
                            type="button" 
                            className="btn btn-outline-secondary w-100"
                            style={{ borderRadius: '6px' }}
                          >
                            <i className="bi bi-apple me-2"></i>Apple
                          </button>
                        </div>
                      </div> */}
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

export default Login;