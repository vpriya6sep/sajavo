import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductCard from '../components/product/ProductCard';
import { Heart, Bell, BellOff, Trash2, ShoppingBag } from 'lucide-react';
import './Wishlist.css';

// Import images
import card1 from '../assets/card-1.png';
import card2 from '../assets/card-2.png';
import card3 from '../assets/card-3.png';
import card4 from '../assets/card-4.png';

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: card1,
      name: 'Emerald Green Silk Lehenga',
      designer: 'Sabyasachi Mukherjee',
      price: 2500,
      rating: 4.8,
      available: true,
      notifyOnAvailable: true,
    },
    {
      id: 2,
      image: card2,
      name: 'Royal Blue Anarkali',
      designer: 'Manish Malhotra',
      price: 1800,
      rating: 4.7,
      available: true,
      notifyOnAvailable: false,
    },
    {
      id: 3,
      image: card3,
      name: 'Red Bridal Lehenga',
      designer: 'Tarun Tahiliani',
      price: 3000,
      rating: 4.9,
      available: false,
      notifyOnAvailable: true,
    },
    {
      id: 4,
      image: card4,
      name: 'Golden Silk Saree',
      designer: 'Anita Dongre',
      price: 1500,
      rating: 4.6,
      available: true,
      notifyOnAvailable: false,
    },
  ]);

  const toggleNotification = (id) => {
    setWishlistItems(
      wishlistItems.map((item) =>
        item.id === id ? { ...item, notifyOnAvailable: !item.notifyOnAvailable } : item
      )
    );
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header />

      <div className="wishlist-page">
        <div className="container">
          {/* Header */}
          <div className="wishlist-header">
            <div>
              <h1>My Wishlist</h1>
              <p>{wishlistItems.length} items saved</p>
            </div>
            {wishlistItems.length > 0 && (
              <button className="btn btn-outline">
                <Trash2 size={18} />
                Clear All
              </button>
            )}
          </div>

          {/* Empty State */}
          {wishlistItems.length === 0 ? (
            <div className="empty-wishlist">
              <Heart size={64} />
              <h2>Your wishlist is empty</h2>
              <p>Start adding your favorite outfits to rent later</p>
              <button 
                onClick={() => navigate('/catalog')} 
                className="btn btn-primary"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            /* Wishlist Grid */
            <div className="wishlist-grid">
              {wishlistItems.map((item) => (
                <div key={item.id} className="wishlist-item">
                  <div className="wishlist-item-header">
                    <button
                      className="notification-toggle"
                      onClick={() => toggleNotification(item.id)}
                      title={
                        item.notifyOnAvailable
                          ? 'Disable notifications'
                          : 'Enable notifications'
                      }
                    >
                      {item.notifyOnAvailable ? (
                        <Bell size={18} className="active" />
                      ) : (
                        <BellOff size={18} />
                      )}
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromWishlist(item.id)}
                      title="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <ProductCard product={item} showRentButton={false} />

                  <div className="wishlist-item-actions">
                    {item.available ? (
                      <button className="btn btn-primary btn-full">
                        <ShoppingBag size={18} />
                        Rent Now
                      </button>
                    ) : (
                      <div className="unavailable-notice">
                        <p>Currently Unavailable</p>
                        {item.notifyOnAvailable && (
                            <span className="notify-badge">
                              <Bell size={12} />
                              Notify Me
                            </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Info Section */}
          {wishlistItems.length > 0 && (
            <div className="wishlist-info">
              <div className="info-card">
                <Bell size={24} />
                <div>
                  <h3>Get Notified</h3>
                  <p>
                    Enable notifications on items to get alerts when they become available for your
                    desired dates
                  </p>
                </div>
              </div>
              <div className="info-card">
                <Heart size={24} />
                <div>
                  <h3>Save Your Favorites</h3>
                  <p>
                    Keep track of outfits you love and rent them whenever you're ready for your
                    special occasion
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
