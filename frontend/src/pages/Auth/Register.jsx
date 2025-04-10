import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
const Register = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  const [address,setAddress]=useState("")

  // form function
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,email,password,address,phone)
    toast.success('Registerd Successfully')
  }
  return (
    <Layout title="Register | ShopEasy">
      <div className="container" style={{ marginTop: '100px', maxWidth: '600px' }}>
        <h2 className="text-center mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="inputName"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              id="inputPassword"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputPhone" className="form-label">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="inputPhone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="form-control"
              id="inputAddress"
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsCheck"
            />
            <label className="form-check-label" htmlFor="termsCheck">I agree to the terms</label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
