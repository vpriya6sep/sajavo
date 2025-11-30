import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { products } from '../data/products';
import {
  Calendar,
  MapPin,
  Truck,
  Shield,
  CreditCard,
  CheckCircle,
  Info,
} from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Details, 2: Confirmation
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    deliveryOption: 'standard',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'card',
  });

  // Get actual product data
  const actualProduct = products.find(p => p.id === 1);
  const product = {
    id: actualProduct.id,
    name: actualProduct.name,
    designer: actualProduct.designer,
    image: actualProduct.image,
    pricePerDay: actualProduct.price,
    securityDeposit: 15000,
  };

  const calculateRentalDays = () => {
    if (!formData.startDate || !formData.endDate) return 3;
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 1;
  };

  const rentalDays = calculateRentalDays();
  const rentalCost = product.pricePerDay * rentalDays;
  const deliveryFee = formData.deliveryOption === 'express' ? 1000 : 500;
  const total = rentalCost + deliveryFee;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Process payment
      console.log('Processing payment...', formData);
      // Navigate to confirmation
      navigate('/order-confirmation');
    }
  };

  return (
    <div>
      <Header />

      <div className="checkout-page">
        <div className="container">
          {/* Progress Steps */}
          <div className="checkout-progress">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <span>Rental Details</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <span>Confirmation</span>
            </div>
          </div>

          <div className="checkout-content">
            {/* Main Form */}
            <div className="checkout-form-section">
              {step === 1 ? (
                <form onSubmit={handleSubmit}>
                  {/* Date Selection */}
                  <div className="form-section">
                    <h2>
                      <Calendar size={24} />
                      Rental Period
                    </h2>
                    <div className="date-inputs-grid">
                      <div className="form-group">
                        <label htmlFor="startDate">Start Date</label>
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          className="form-input"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="endDate">End Date</label>
                        <input
                          type="date"
                          id="endDate"
                          name="endDate"
                          className="form-input"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          required
                          min={formData.startDate}
                        />
                      </div>
                    </div>
                    <div className="info-box">
                      <Info size={18} />
                      <p>Rental duration: {rentalDays} days</p>
                    </div>
                  </div>

                  {/* Delivery Options */}
                  <div className="form-section">
                    <h2>
                      <Truck size={24} />
                      Delivery Options
                    </h2>
                    <div className="delivery-options">
                      <label className={`delivery-option ${formData.deliveryOption === 'standard' ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="deliveryOption"
                          value="standard"
                          checked={formData.deliveryOption === 'standard'}
                          onChange={handleInputChange}
                        />
                        <div className="option-content">
                          <div>
                            <h4>Standard Delivery</h4>
                            <p>Delivered in 3-5 days</p>
                          </div>
                          <span className="option-price">₹500</span>
                        </div>
                      </label>
                      <label className={`delivery-option ${formData.deliveryOption === 'express' ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="deliveryOption"
                          value="express"
                          checked={formData.deliveryOption === 'express'}
                          onChange={handleInputChange}
                        />
                        <div className="option-content">
                          <div>
                            <h4>Express Delivery</h4>
                            <p>Delivered in 1-2 days</p>
                          </div>
                          <span className="option-price">₹1,000</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="form-section">
                    <h2>
                      <MapPin size={24} />
                      Delivery Address
                    </h2>
                    <div className="form-group">
                      <label htmlFor="address">Street Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-input"
                        placeholder="Enter your complete address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="form-input"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pincode">Pincode</label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          className="form-input"
                          placeholder="000000"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          pattern="[0-9]{6}"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="form-section">
                    <h2>
                      <CreditCard size={24} />
                      Payment Method
                    </h2>
                    <div className="payment-methods">
                      <label className={`payment-method ${formData.paymentMethod === 'card' ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                        />
                        <div>
                          <h4>Credit/Debit Card</h4>
                          <p>Visa, Mastercard, Amex</p>
                        </div>
                      </label>
                      <label className={`payment-method ${formData.paymentMethod === 'upi' ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === 'upi'}
                          onChange={handleInputChange}
                        />
                        <div>
                          <h4>UPI</h4>
                          <p>Google Pay, PhonePe, Paytm</p>
                        </div>
                      </label>
                      <label className={`payment-method ${formData.paymentMethod === 'netbanking' ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="netbanking"
                          checked={formData.paymentMethod === 'netbanking'}
                          onChange={handleInputChange}
                        />
                        <div>
                          <h4>Net Banking</h4>
                          <p>All major banks</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg">
                    Continue
                  </button>
                </form>
              ) : (
                /* Confirmation Step */
                <div className="confirmation-section">
                  <div className="confirmation-header">
                    <CheckCircle size={64} className="success-icon" />
                    <h2>Review Your Order</h2>
                    <p>Please review your rental details before confirming</p>
                  </div>

                  <div className="confirmation-details">
                    <div className="detail-group">
                      <h3>Rental Period</h3>
                      <p>{formData.startDate} to {formData.endDate}</p>
                      <p className="detail-subtext">{rentalDays} days</p>
                    </div>

                    <div className="detail-group">
                      <h3>Delivery Address</h3>
                      <p>{formData.address}</p>
                      <p className="detail-subtext">{formData.city}, {formData.pincode}</p>
                    </div>

                    <div className="detail-group">
                      <h3>Delivery Option</h3>
                      <p>{formData.deliveryOption === 'express' ? 'Express Delivery (1-2 days)' : 'Standard Delivery (3-5 days)'}</p>
                    </div>

                    <div className="detail-group">
                      <h3>Payment Method</h3>
                      <p>{formData.paymentMethod === 'card' ? 'Credit/Debit Card' : formData.paymentMethod === 'upi' ? 'UPI' : 'Net Banking'}</p>
                    </div>
                  </div>

                  <div className="confirmation-actions">
                    <button onClick={() => setStep(1)} className="btn btn-outline btn-lg">
                      Go Back
                    </button>
                    <button onClick={handleSubmit} className="btn btn-primary btn-lg">
                      Confirm & Pay
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="order-summary">
              <h3>Order Summary</h3>
              
              <div className="summary-product">
                <img src={product.image} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.designer}</p>
                </div>
              </div>

              <div className="summary-details">
                <div className="summary-row">
                  <span>Rental ({rentalDays} days)</span>
                  <span>₹{rentalCost.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="summary-row total">
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="security-deposit-info">
                <Shield size={20} />
                <div>
                  <h4>Security Deposit</h4>
                  <p>₹{product.securityDeposit.toLocaleString()}</p>
                  <span>Fully refundable</span>
                </div>
              </div>

              <div className="summary-features">
                <div className="feature">
                  <CheckCircle size={16} />
                  <span>Damage protection included</span>
                </div>
                <div className="feature">
                  <CheckCircle size={16} />
                  <span>Free return pickup</span>
                </div>
                <div className="feature">
                  <CheckCircle size={16} />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
