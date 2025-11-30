import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import CategoryCarousel from '../components/home/CategoryCarousel';
import AlternatingGrid from '../components/home/AlternatingGrid';
import ShopByCategories from '../components/home/ShopByCategories';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <CategoryCarousel />
      <AlternatingGrid />
      <ShopByCategories />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
