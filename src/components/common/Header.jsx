import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          {/* Placeholder for logo image */}
          <span className="logo-icon">§</span> SAJAVO
        </Link>

        {showSearch ? (
          <div className="header-search-overlay" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Search products..." 
              autoFocus
              style={{ 
                width: '100%', 
                maxWidth: '500px', 
                padding: '0.5rem 1rem', 
                border: '1px solid #D4AF37', 
                borderRadius: '20px',
                outline: 'none'
              }} 
            />
            <button onClick={() => setShowSearch(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={22} />
            </button>
          </div>
        ) : (
          <nav className="nav-menu">
            <ul className="nav-links">
              <li><Link to="/availability">Date availability</Link></li>
              <li><Link to="/catalog?category=wedding">Wedding</Link></li>
              <li><Link to="/catalog?category=accessories">Accessories</Link></li>
            </ul>
          </nav>
        )}

        <div className="header-actions">
          {!showSearch && (
            <button className="icon-btn" aria-label="Search" onClick={() => setShowSearch(true)}>
              <Search size={22} strokeWidth={1.5} />
            </button>
          )}
          <Link to="/auth" className="icon-btn" aria-label="Account">
            <User size={22} strokeWidth={1.5} />
          </Link>
          <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
            <Heart size={22} strokeWidth={1.5} />
          </Link>
          <Link to="/cart" className="icon-btn" aria-label="Cart">
            <ShoppingBag size={22} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
