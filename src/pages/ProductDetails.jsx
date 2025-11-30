import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2, ChevronRight, Minus, Plus, ShoppingBag } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    // Find product by ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setActiveImage(0);
    setSelectedSize('');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="loading-state">
        <Header />
        <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h2>Loading...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock related products (ensure at least 4, max 8)
  let related = products.filter(p => p.id !== product.id && p.category === product.category);
  if (related.length < 4) {
    const others = products.filter(p => p.id !== product.id && p.category !== product.category);
    related = [...related, ...others];
  }
  const relatedProducts = related.slice(0, 8);

  return (
    <div className="product-details-page">
      <Header />
      
      <div className="container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/catalog">Catalog</Link>
          <ChevronRight size={14} />
          <span className="current">{product.name}</span>
        </div>

        <div className="product-layout">
          {/* Left Column: Images */}
          <div className="product-gallery">
            <div className="thumbnail-list">
              {product.images.map((img, index) => (
                <button 
                  key={index} 
                  className={`thumbnail-btn ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} />
                </button>
              ))}
            </div>
            <div className="main-image-container">
              <img src={product.images[activeImage]} alt={product.name} className="main-image" />
              <button className="wishlist-btn-large">
                <Heart size={24} />
              </button>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="product-info-column">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-meta-row">
                <div className="rating-badge">
                  <Star size={16} fill="currentColor" />
                  <span>{product.rating}</span>
                  <span className="review-count">({product.reviews} Reviews)</span>
                </div>
                <span className="designer-name">By {product.designer}</span>
              </div>
              <div className="product-price-large">
                <span className="currency">₹</span>
                <span className="amount">{product.price}</span>
                <span className="per-day">/ day</span>
              </div>
            </div>

            <div className="divider"></div>

            {/* Size Selector */}
            <div className="selection-group">
              <div className="group-header">
                <span className="label">Select Size</span>
                <button className="size-guide-btn">Size Guide</button>
              </div>
              <div className="size-options">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Picker Mock */}
            <div className="selection-group">
              <span className="label">Check Availability</span>
              <div className="date-picker-mock">
                <input type="date" className="date-input" />
                <span className="to-text">to</span>
                <input type="date" className="date-input" />
              </div>
            </div>

            {/* Actions */}
            <div className="action-buttons">
              <button className="btn-primary rent-now-btn">
                Rent Now
              </button>
              <button className="btn-outline add-cart-btn">
                <ShoppingBag size={20} />
                Add to Cart
              </button>
            </div>

            {/* Accordion / Tabs */}
            <div className="product-tabs">
              <div className="tab-headers">
                <button 
                  className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
                  onClick={() => setActiveTab('details')}
                >
                  Details
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
                  onClick={() => setActiveTab('shipping')}
                >
                  Shipping
                </button>
              </div>
              <div className="tab-content">
                {activeTab === 'description' && (
                  <p>{product.description}</p>
                )}
                {activeTab === 'details' && (
                  <ul className="details-list">
                    <li><strong>Fabric:</strong> {product.fabric}</li>
                    <li><strong>Fit:</strong> {product.fit}</li>
                    <li><strong>Care:</strong> {product.care}</li>
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <p>Free shipping and returns. Dry cleaning is on us. Delivery within 3-5 business days.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products">
          <h2 className="section-title">You May Also Like</h2>
          <div className="related-grid">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
