import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import carousel1 from '../../assets/Carousel-1.png';
import carousel2 from '../../assets/Carousel-2.png';
import carousel3 from '../../assets/Carousel-3.png';
import carousel4 from '../../assets/Carousel-4.png';
import carousel5 from '../../assets/Carousel-5.png';

const CategoryCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  const categories = [
    { name: "Bridal Look", image: carousel1 },
    { name: "Sangeet Night", image: carousel2 },
    { name: "Mehendi Vibes", image: carousel3 },
    { name: "Cocktail Glam", image: carousel4 },
    { name: "Festive Glow", image: carousel5 }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const getSlideClass = (index) => {
    const total = categories.length;
    const position = (index - activeSlide + total) % total;

    if (position === 0) return 'slide-center';
    if (position === 1) return 'slide-right';
    if (position === 2) return 'slide-far-right';
    if (position === total - 2) return 'slide-far-left';
    if (position === total - 1) return 'slide-left';
    return 'slide-hidden';
  };

  return (
    <section className="custom-carousel-section section-padding">
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}><ChevronLeft size={30} /></button>
        <div className="carousel-track">
          {categories.map((cat, index) => (
            <div key={index} className={`carousel-card ${getSlideClass(index)}`}>
              <img src={cat.image} alt={cat.name} loading="lazy" decoding="async" />
              <div className="carousel-text">
                <h3>{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={nextSlide}><ChevronRight size={30} /></button>
      </div>
    </section>
  );
};

export default CategoryCarousel;
