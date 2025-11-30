import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ChevronRight } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './Cart.css';

const Cart = () => {
  // Mock Cart Data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Emerald Green Silk Lehenga",
      designer: "Sabyasachi Mukherjee",
      image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=800",
      price: 2500,
      size: "M",
      rentalPeriod: "Oct 24 - Oct 27",
      days: 3
    },
    {
      id: 2,
      name: "Ivory Wedding Sherwani",
      designer: "Manish Malhotra",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
      price: 3500,
      size: "L",
      rentalPeriod: "Nov 12 - Nov 15",
      days: 3
    }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const serviceFee = 150;
  const total = subtotal + serviceFee;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <div className="empty-cart-container">
          <h2>Your Bag is Empty</h2>
          <p>Looks like you haven't added any luxury outfits yet.</p>
          <Link to="/catalog" className="btn-primary">Explore Collection</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span className="current">Shopping Bag</span>
        </div>

        <h1 className="page-title">Your Shopping Bag ({cartItems.length})</h1>

        <div className="cart-layout">
          {/* Cart Items List */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <div className="item-header">
                    <div>
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-designer">by {item.designer}</p>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="item-meta">
                    <div className="meta-group">
                      <span className="meta-label">Size:</span>
                      <span className="meta-value">{item.size}</span>
                    </div>
                    <div className="meta-group">
                      <span className="meta-label">Dates:</span>
                      <span className="meta-value">{item.rentalPeriod} ({item.days} Days)</span>
                    </div>
                  </div>

                  <div className="item-price">
                    ₹{item.price.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Service Fee</span>
              <span>₹{serviceFee}</span>
            </div>
            <div className="summary-row">
              <span>Security Deposit (Refundable)</span>
              <span>₹0</span>
            </div>
            
            <div className="divider"></div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
              <ArrowRight size={18} />
            </Link>

            <p className="secure-text">
              <span role="img" aria-label="lock">🔒</span> Secure Checkout
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
