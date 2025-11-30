import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CategoryCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  const categories = [
    { name: "Bridal Look", image: "/src/assets/Carousel-1.png" },
    { name: "Sangeet Night", image: "/src/assets/Carousel-2.png" },
    { name: "Mehendi Vibes", image: "/src/assets/Carousel-3.png" },
    { name: "Cocktail Glam", image: "/src/assets/Carousel-4.png" },
    { name: "Festive Glow", image: "/src/assets/Carousel-5.png" }
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
              <img src={cat.image} alt={cat.name} />
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
