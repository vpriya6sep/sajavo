import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductCard from '../components/product/ProductCard';
import { Calendar, Clock, Package, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import './DateAvailability.css';

const DateAvailability = () => {
  const [eventDate, setEventDate] = useState('');
  const [rentalDuration, setRentalDuration] = useState(3);
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [availableProducts, setAvailableProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Calculate delivery and return dates
  useEffect(() => {
    if (eventDate) {
      const event = new Date(eventDate);
      
      // Delivery: 2 days before event
      const delivery = new Date(event);
      delivery.setDate(delivery.getDate() - 2);
      setDeliveryDate(delivery.toISOString().split('T')[0]);
      
      // Return: rental duration + 2 days buffer after event
      const returnDay = new Date(event);
      returnDay.setDate(returnDay.getDate() + rentalDuration + 2);
      setReturnDate(returnDay.toISOString().split('T')[0]);
    }
  }, [eventDate, rentalDuration]);

  // Filter available products
  const handleCheckAvailability = () => {
    if (!eventDate) {
      alert('Please select your event date');
      return;
    }

    // Filter products based on occasion if selected
    let filtered = selectedOccasion 
      ? products.filter(p => p.occasion === selectedOccasion)
      : products;

    // In a real app, this would check actual booking database
    // For now, randomly show 80% as available
    filtered = filtered.filter(() => Math.random() > 0.2);

    setAvailableProducts(filtered);
    setShowResults(true);
  };

  const occasions = ['Wedding', 'Sangeet', 'Mehendi', 'Cocktail', 'Reception', 'Festive', 'Haldi'];

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="date-availability-page">
      <Header />

      {/* Hero Section */}
      <section className="availability-hero">
        <div className="container">
          <div className="hero-content-center">
            <Calendar className="hero-icon" size={60} strokeWidth={1.5} />
            <h1>Check Date Availability</h1>
            <p className="subtitle">
              Find the perfect outfit for your special day. Select your event date 
              and discover which designer pieces are available for you.
            </p>
          </div>
        </div>
      </section>

      {/* Date Selection Form */}
      <section className="date-selector-section section-padding">
        <div className="container">
          <div className="date-selector-card">
            <h2>When is your event?</h2>
            <p className="section-subtitle">Select your dates and we'll show you what's available</p>

            <div className="date-form">
              {/* Event Date */}
              <div className="form-group">
                <label htmlFor="event-date">
                  <Calendar size={20} />
                  Event Date *
                </label>
                <input
                  type="date"
                  id="event-date"
                  value={eventDate}
                  min={today}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </div>

              {/* Rental Duration */}
              <div className="form-group">
                <label htmlFor="duration">
                  <Clock size={20} />
                  Rental Duration
                </label>
                <select
                  id="duration"
                  value={rentalDuration}
                  onChange={(e) => setRentalDuration(Number(e.target.value))}
                >
                  <option value={3}>3 Days</option>
                  <option value={4}>4 Days</option>
                  <option value={5}>5 Days</option>
                  <option value={7}>7 Days</option>
                  <option value={10}>10 Days</option>
                </select>
              </div>

              {/* Occasion Type */}
              <div className="form-group full-width">
                <label>
                  <Package size={20} />
                  Occasion Type (Optional)
                </label>
                <div className="occasion-chips">
                  <button
                    className={`chip ${selectedOccasion === '' ? 'active' : ''}`}
                    onClick={() => setSelectedOccasion('')}
                  >
                    All
                  </button>
                  {occasions.map((occasion) => (
                    <button
                      key={occasion}
                      className={`chip ${selectedOccasion === occasion ? 'active' : ''}`}
                      onClick={() => setSelectedOccasion(occasion)}
                    >
                      {occasion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Display */}
              {eventDate && (
                <div className="rental-timeline">
                  <div className="timeline-item">
                    <div className="timeline-icon delivery">
                      <Package size={24} />
                    </div>
                    <div className="timeline-content">
                      <h4>Delivery</h4>
                      <p>{formatDate(deliveryDate)}</p>
                      <span className="timeline-note">2 days before event</span>
                    </div>
                  </div>

                  <div className="timeline-connector"></div>

                  <div className="timeline-item">
                    <div className="timeline-icon event">
                      <Calendar size={24} />
                    </div>
                    <div className="timeline-content">
                      <h4>Event Day</h4>
                      <p>{formatDate(eventDate)}</p>
                      <span className="timeline-note">Your special day</span>
                    </div>
                  </div>

                  <div className="timeline-connector"></div>

                  <div className="timeline-item">
                    <div className="timeline-icon return">
                      <CheckCircle size={24} />
                    </div>
                    <div className="timeline-content">
                      <h4>Return</h4>
                      <p>{formatDate(returnDate)}</p>
                      <span className="timeline-note">{rentalDuration} days + 2 buffer</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Check Availability Button */}
              <button 
                className="btn btn-primary btn-large"
                onClick={handleCheckAvailability}
                disabled={!eventDate}
              >
                Check Availability
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Products */}
      {showResults && (
        <section className="available-products-section section-padding">
          <div className="container">
            <div className="section-header">
              <h2>
                {availableProducts.length} Outfits Available
                {selectedOccasion && ` for ${selectedOccasion}`}
              </h2>
              <p>
                For {formatDate(eventDate)} 
                {selectedOccasion && ` • ${selectedOccasion} Collection`}
              </p>
            </div>

            {availableProducts.length > 0 ? (
              <div className="products-grid">
                {availableProducts.slice(0, 12).map((product) => (
                  <div key={product.id} className="product-wrapper">
                    <div className="availability-badge">
                      <CheckCircle size={16} />
                      Available
                    </div>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <Info size={48} />
                <h3>No products available for selected dates</h3>
                <p>Try adjusting your dates or check our full catalog</p>
                <Link to="/catalog" className="btn btn-outline">
                  Browse All Products
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="how-booking-works section-padding bg-beige">
        <div className="container">
          <h2 className="text-center">How Booking Works</h2>
          <p className="section-subtitle text-center">
            Simple steps to reserve your dream outfit
          </p>

          <div className="booking-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <Calendar size={40} />
              <h3>Select Your Date</h3>
              <p>Choose your event date and rental duration</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <Package size={40} />
              <h3>Browse Available</h3>
              <p>View all outfits free on your selected dates</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <CheckCircle size={40} />
              <h3>Reserve & Pay</h3>
              <p>Secure your outfit with a simple booking</p>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <Package size={40} />
              <h3>Receive & Return</h3>
              <p>Get it delivered, enjoy, and send it back</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="availability-faq section-padding">
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How far in advance should I book?</h3>
              <p>
                We recommend booking at least 2-3 weeks in advance for popular dates. 
                However, we also accommodate last-minute bookings based on availability.
              </p>
            </div>

            <div className="faq-item">
              <h3>What if my outfit isn't available?</h3>
              <p>
                Try adjusting your dates by a day or two, or explore similar styles. 
                You can also add items to your wishlist to get notified when they're available.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I extend my rental period?</h3>
              <p>
                Yes! Contact us before your return date and we'll check if an extension 
                is possible. Additional charges will apply.
              </p>
            </div>

            <div className="faq-item">
              <h3>What about delivery and pickup?</h3>
              <p>
                We deliver 2 days before your event and collect 2 days after. 
                Delivery and pickup are included in your rental price for most locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="availability-cta section-padding">
        <div className="container text-center">
          <h2>Can't Find What You're Looking For?</h2>
          <p>Browse our complete collection or get in touch with our team</p>
          <div className="cta-buttons">
            <Link to="/catalog" className="btn btn-primary">
              Browse Full Catalog
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DateAvailability;
