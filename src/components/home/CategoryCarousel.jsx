import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import carousel1 from '../../assets/Carousel-1.png';
import carousel2 from '../../assets/Carousel-2.png';
import carousel3 from '../../assets/Carousel-3.png';
import carousel4 from '../../assets/Carousel-4.png';
import carousel5 from '../../assets/Carousel-5.png';

const CategoryCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  const categories = [
    { name: "Wedding Look", image: carousel1, link: "/catalog?occasion=Wedding" },
    { name: "Diwali Look", image: carousel2, link: "/catalog?occasion=Sangeet" },
    { name: "Bridal Look", image: carousel3, link: "/catalog?occasion=Mehendi" },
    { name: "Sangeet Ready", image: carousel4, link: "/catalog?occasion=Cocktail" },
    { name: "Mehendi Vibes", image: carousel5, link: "/catalog?occasion=Festive" }
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
              <Link to={cat.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <img src={cat.image} alt={cat.name} loading="lazy" decoding="async" />
                <div className="carousel-text">
                  <h3>{cat.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={nextSlide}><ChevronRight size={30} /></button>
      </div>
    </section>
  );
};

export default CategoryCarousel;
