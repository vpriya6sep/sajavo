import React from 'react';
import { Link } from 'react-router-dom';

import carousel2 from '../../assets/Carousel-2.png';
import category1 from '../../assets/Category-1.png';
import category2 from '../../assets/Category-2.png';
import category3 from '../../assets/Category-3.png';
import category4 from '../../assets/Category-4.png';

const ShopByCategories = () => {
  return (
    <section className="shop-categories section-padding">
      <div className="container shop-categories-container">
        {/* Left Large Image */}
        <div className="shop-cat-left">
          <Link to="/catalog?occasion=Wedding">
            <img src={carousel2} alt="Wedding Outfits" loading="lazy" decoding="async" />
          </Link>
        </div>

        {/* Right Content */}
        <div className="shop-cat-right">
          <div className="shop-cat-header">
            <h2>Shop by Categories</h2>
            <p>Why buy when you can rent the best? Experience designer luxury without the lifelong cost.</p>
          </div>

          <div className="shop-cat-grid">
            <Link to="/catalog?category=Accessories" className="shop-cat-item">
              <div className="cat-img-box">
                <img src={category1} alt="Bridal chura" loading="lazy" decoding="async" />
              </div>
              <span>Bridal chura</span>
            </Link>
            <Link to="/catalog?category=Accessories" className="shop-cat-item">
              <div className="cat-img-box">
                <img src={category2} alt="Classic Gold Earrings" loading="lazy" decoding="async" />
              </div>
              <span>Classic Gold Earerings</span>
            </Link>
            <Link to="/catalog?category=Accessories" className="shop-cat-item">
              <div className="cat-img-box">
                <img src={category3} alt="Stoles & Dupattas" loading="lazy" decoding="async" />
              </div>
              <span>Stoles & Dupattas</span>
            </Link>
            <Link to="/catalog?category=Accessories" className="shop-cat-item">
              <div className="cat-img-box">
                <img src={category4} alt="Juttis & Footwear" loading="lazy" decoding="async" />
              </div>
              <span>Juttis & Footwear</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;
