import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import LendOutfit from './pages/LendOutfit';
import HowItWorks from './pages/HowItWorks';
import RenterDashboard from './pages/RenterDashboard';
import LenderDashboard from './pages/LenderDashboard';
import DateAvailability from './pages/DateAvailability';

// Placeholder components for pages in development
const Placeholder = ({ title }) => (
  <div style={{ padding: '100px 20px', textAlign: 'center' }}>
    <h1>{title}</h1>
    <p>Coming Soon</p>
  </div>
);

import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/lend" element={<LendOutfit />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/availability" element={<DateAvailability />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard/renter" element={<RenterDashboard />} />
      <Route path="/dashboard/lender" element={<LenderDashboard />} />
      <Route path="/order-confirmation" element={<Placeholder title="Order Confirmed" />} />
      <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
    </Routes>
    </>
  );
}

export default App;
