import React, { useState } from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <section className="hero">
      <div className="gold-bar"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1>
          <span className="italic-serif">Dress Your Dreams</span>
          <br />
          <span className="subtitle" style={{ fontSize: '1.5rem', display: 'block', marginTop: '1rem' }}>with SAJAVO</span>
        </h1>
        
        <div className="hero-search-bar" style={{ marginTop: '2rem', maxWidth: '600px' }}>
          <div className="search-input-wrapper" style={{ display: 'flex', background: 'white', padding: '0.5rem', borderRadius: '50px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
            <input 
              type="text" 
              placeholder="Search by Outfit / Occasion / Designer" 
              style={{ flex: 1, border: 'none', padding: '1rem 1.5rem', fontSize: '1rem', outline: 'none', borderRadius: '50px' }}
            />
            <button className="btn btn-primary" style={{ borderRadius: '50px', padding: '0.8rem 2rem' }}>Search</button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
