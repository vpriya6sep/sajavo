import React from 'react';

const ShopByCategories = () => {
  return (
    <section className="shop-categories section-padding">
      <div className="container shop-categories-container">
        {/* Left Large Image */}
        <div className="shop-cat-left">
          <img src="/src/assets/Carousel-2.png" alt="Wedding Outfits" />
        </div>

        {/* Right Content */}
        <div className="shop-cat-right">
          <div className="shop-cat-header">
            <h2>Shop by Categories</h2>
            <p>Why buy when you can rent the best? Experience designer luxury without the lifelong cost.</p>
          </div>

          <div className="shop-cat-grid">
            <div className="shop-cat-item">
              <div className="cat-img-box">
                <img src="/src/assets/Category-1.png" alt="Bridal chura" />
              </div>
              <span>Bridal chura</span>
            </div>
            <div className="shop-cat-item">
              <div className="cat-img-box">
                <img src="/src/assets/Category-2.png" alt="Classic Gold Earrings" />
              </div>
              <span>Classic Gold Earerings</span>
            </div>
            <div className="shop-cat-item">
              <div className="cat-img-box">
                <img src="/src/assets/Category-3.png" alt="Stoles & Dupattas" />
              </div>
              <span>Stoles & Dupattas</span>
            </div>
            <div className="shop-cat-item">
              <div className="cat-img-box">
                <img src="/src/assets/Category-4.png" alt="Juttis & Footwear" />
              </div>
              <span>Juttis & Footwear</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;
