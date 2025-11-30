import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="testimonials container section-padding">
      <div className="section-header">
        <h2>What Our Customers Say</h2>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="quote-icon"><Quote size={40} /></div>
          <div className="stars">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
          </div>
          <p>"Experience couture without commitment. Because moments deserve more than a price tag."</p>
          <div className="testimonial-author">
            <div className="author-avatar">A</div>
            <div className="author-info">
              <span className="name">Ananya</span>
              <span className="location">Delhi</span>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="quote-icon"><Quote size={40} /></div>
          <div className="stars">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
          </div>
          <p>"The quality was pristine and the fit was perfect. Sajavo made my sister's wedding unforgettable!"</p>
          <div className="testimonial-author">
            <div className="author-avatar">P</div>
            <div className="author-info">
              <span className="name">Priya</span>
              <span className="location">Mumbai</span>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="quote-icon"><Quote size={40} /></div>
          <div className="stars">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
          </div>
          <p>"Seamless process from booking to return. Highly recommend for anyone looking for luxury on a budget."</p>
          <div className="testimonial-author">
            <div className="author-avatar">R</div>
            <div className="author-info">
              <span className="name">Rahul</span>
              <span className="location">Bangalore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
