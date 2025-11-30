import React from 'react';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Return & Exchange</a></li>
            <li><a href="#">Size Guid</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">Wedding Collection</a></li>
            <li><a href="#">Pre-Wedding Looks</a></li>
            <li><a href="#">Festive Wear</a></li>
            <li><a href="#">Designer Outfits</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Policies</h3>
          <ul>
            <li><a href="#">Rental Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Sustainability Commitment</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Sajavo</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Collaborate With Us</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-newsletter">
          <h4>Subscribe to our newsletter</h4>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter Email Address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-extras">
          <div className="footer-payment">
            <h4>100% Secure Payments</h4>
            <div className="payment-methods-text">
              <span>Visa</span>
              <span className="separator">•</span>
              <span>Mastercard</span>
              <span className="separator">•</span>
              <span>PayPal</span>
              <span className="separator">•</span>
              <span>UPI</span>
            </div>
          </div>

          <div className="footer-social">
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
