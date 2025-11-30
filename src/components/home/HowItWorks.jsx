import React from 'react';
import { ShoppingBag, Sparkles, RotateCcw } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="how-it-works section-padding">
      <div className="container">
        <div className="section-header">
          <h2>How Sajavo Works</h2>
        </div>
        <div className="steps-grid">
          <div className="step">
            <div className="step-icon-wrapper">
              <div className="step-icon">
                <ShoppingBag size={32} />
              </div>
            </div>
            <h3>Rent</h3>
            <p>Choose from our exclusive collection of designer outfits.</p>
          </div>
          <div className="step">
            <div className="step-icon-wrapper">
              <div className="step-icon">
                <Sparkles size={32} />
              </div>
            </div>
            <h3>Wear</h3>
            <p>Flaunt your look and make memories that last forever.</p>
          </div>
          <div className="step">
            <div className="step-icon-wrapper">
              <div className="step-icon">
                <RotateCcw size={32} />
              </div>
            </div>
            <h3>Return</h3>
            <p>Pack it up and we'll pick it up. Dry cleaning is on us!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
