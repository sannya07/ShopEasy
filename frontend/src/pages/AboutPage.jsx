import React from 'react'
import Layout from '../components/Layout/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold">About ShopEasy 🛒</h1>
            <p className="lead mt-3">
              Welcome to <strong>ShopEasy</strong> — your one-stop online destination for everything you need! From daily essentials to the trendiest fashion, we make shopping smooth, fast, and fun.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Fast Delivery"
              className="img-fluid mb-3"
              style={{ width: '80px' }}
            />
            <h5>Fast Delivery</h5>
            <p>Get your orders lightning-fast with our reliable delivery partners.</p>
          </div>

          <div className="col-md-4 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
              alt="Secure Payments"
              className="img-fluid mb-3"
              style={{ width: '80px' }}
            />
            <h5>Secure Payments</h5>
            <p>Shop with peace of mind — we support multiple secure payment methods.</p>
          </div>

          <div className="col-md-4 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/929/929426.png"
              alt="Customer Support"
              className="img-fluid mb-3"
              style={{ width: '80px' }}
            />
            <h5>24/7 Support</h5>
            <p>Got questions? Our support team is here for you, day and night.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <p className="text-muted text-center">
              At ShopEasy, we’re committed to making your shopping experience better with every click.
              Thank you for choosing us ❤️
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
