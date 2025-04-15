import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './components/Layout/ScrollToTop.jsx';
import { AuthProvider } from './context/auth.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  <ScrollToTop/>
  </BrowserRouter>
  </AuthProvider>
)
