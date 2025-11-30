import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Shine brighter this Diwali</h2>
        <p>Rent your festive glow today.</p>
        <Link to="/catalog" className="btn btn-primary">Explore Collection</Link>
      </div>
    </section>
  );
};

export default CTASection;
