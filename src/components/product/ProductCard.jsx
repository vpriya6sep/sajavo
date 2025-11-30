import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, showRentButton = true }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
          <button 
            className="wishlist-btn" 
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation
              // Add wishlist logic here
            }}
          >
            <Heart size={18} />
          </button>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-price">
            <span className="price-label">Rent:</span>
            <span className="price-value">₹{product.price}</span>
          </div>
          {showRentButton && <button className="rent-btn">Rent Now</button>}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
