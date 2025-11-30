import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/returns">Return & Exchange</Link></li>
            <li><Link to="/size-guide">Size Guide</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/catalog?occasion=Wedding">Wedding Collection</Link></li>
            <li><Link to="/catalog?occasion=Sangeet">Pre-Wedding Looks</Link></li>
            <li><Link to="/catalog?occasion=Festive">Festive Wear</Link></li>
            <li><Link to="/catalog">Designer Outfits</Link></li>
            <li><Link to="/catalog?category=Accessories">Accessories</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Policies</h3>
          <ul>
            <li><Link to="/terms">Rental Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
            <li><Link to="/sustainability">Sustainability Commitment</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Sajavo</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/lend">Collaborate With Us</Link></li>
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
