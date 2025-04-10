import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
import { ToastContainer} from 'react-toastify';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <>
    <Helmet>
      <meta charSet='utf-8' />
      <meta name="desciption" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta name="author" content={author} />
      <title>{title}</title>
    </Helmet>
    <Header/>
    <main style={{minHeight: '100vh'}}>
    <ToastContainer />
    {children}
    </main>
    <Footer/>
    </>
  )
}

Layout.defaultProps={
  title: 'Ecommerce App- Shop now',
  description: 'mern stack project',
  keywords: 'mern, react, node mongoDb',
  author: 'sanya'
};
export default Layout