import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './Auth.css';

const Auth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [userType, setUserType] = useState('renter');
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, userType, type: activeTab });
    
    // Store user type in localStorage for persistence
    localStorage.setItem('userType', userType);
    localStorage.setItem('isAuthenticated', 'true');
    
    // Redirect to appropriate dashboard based on user type
    if (userType === 'renter') {
      navigate('/dashboard/renter');
    } else {
      navigate('/dashboard/lender');
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login initiated');
    
    // For demo purposes, default to renter dashboard
    // In production, you'd get the user type from Google OAuth response
    localStorage.setItem('userType', 'renter');
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard/renter');
  };

  return (
    <div>
      <Header />
      <div className="auth-page">
        <div className="auth-container">
          {/* Tabs */}
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2>{activeTab === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
            <p>
              {activeTab === 'login'
                ? 'Enter your details to access your account'
                : 'Join Sajavo and start renting luxury outfits'}
            </p>

            {/* User Type Selection (Only for Register) */}
            {activeTab === 'register' && (
              <div className="user-type-selection">
                <div
                  className={`user-type-card ${userType === 'renter' ? 'active' : ''}`}
                  onClick={() => setUserType('renter')}
                >
                  <h3>Renter</h3>
                  <p>Rent luxury outfits</p>
                </div>
                <div
                  className={`user-type-card ${userType === 'lender' ? 'active' : ''}`}
                  onClick={() => setUserType('lender')}
                >
                  <h3>Lender</h3>
                  <p>Lend your wardrobe</p>
                </div>
              </div>
            )}

            {/* Phone Input */}
            <div className="form-group-auth">
              <label htmlFor="phone">Phone Number</label>
              <div className="phone-input">
                <div className="phone-prefix">+91</div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="form-group-auth">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="mail ID"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="auth-submit-btn">
              Enter
            </button>

            {/* Divider */}
            <div className="auth-divider">or continue with</div>

            {/* Social Login */}
            <button type="button" className="social-login-btn" onClick={handleGoogleLogin}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M19.8 10.2273C19.8 9.51818 19.7364 8.83636 19.6182 8.18182H10V12.05H15.4818C15.2364 13.3 14.5273 14.3591 13.4727 15.0682V17.5773H16.7636C18.7182 15.8364 19.8 13.2727 19.8 10.2273Z"
                  fill="#4285F4"
                />
                <path
                  d="M10 20C12.7 20 14.9636 19.1045 16.7636 17.5773L13.4727 15.0682C12.5909 15.6682 11.4545 16.0227 10 16.0227C7.39545 16.0227 5.19091 14.2636 4.40455 11.9H0.995454V14.4909C2.78636 18.0591 6.10909 20 10 20Z"
                  fill="#34A853"
                />
                <path
                  d="M4.40455 11.9C4.19091 11.3 4.06818 10.6591 4.06818 10C4.06818 9.34091 4.19091 8.7 4.40455 8.1V5.50909H0.995454C0.359091 6.77273 0 8.19545 0 10C0 11.8045 0.359091 13.2273 0.995454 14.4909L4.40455 11.9Z"
                  fill="#FBBC04"
                />
                <path
                  d="M10 3.97727C11.5864 3.97727 13.0091 4.51818 14.1273 5.57273L17.0227 2.67727C14.9545 0.772727 12.6909 0 10 0C6.10909 0 2.78636 1.94091 0.995454 5.50909L4.40455 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            {/* Footer */}
            <div className="auth-footer">
              {activeTab === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('register'); }}>
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('login'); }}>
                    Sign in
                  </a>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
