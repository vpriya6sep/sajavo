import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductCard from '../components/product/ProductCard';
import { Search, MapPin, Grid, List, Filter, X } from 'lucide-react';
import './Catalog.css';

// Import images
import card1 from '../assets/card-1.png';
import card2 from '../assets/card-2.png';
import card3 from '../assets/card-3.png';
import { products as allProducts } from '../data/products';
const Catalog = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [locationBased, setLocationBased] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: [],
    occasion: [],
    designer: [],
    size: [],
    priceMin: '',
    priceMax: '',
    location: '',
  });

  // Mock products data


  const filterOptions = {
    category: [
      { label: 'Bridal', count: 3 },
      { label: 'Ethnic', count: 2 },
      { label: 'Western', count: 2 },
      { label: 'Saree', count: 1 },
    ],
    occasion: [
      { label: 'Wedding', count: 3 },
      { label: 'Sangeet', count: 1 },
      { label: 'Mehendi', count: 1 },
      { label: 'Cocktail', count: 2 },
      { label: 'Festive', count: 1 },
    ],
    designer: [
      { label: 'Sabyasachi Mukherjee', count: 2 },
      { label: 'Manish Malhotra', count: 1 },
      { label: 'Tarun Tahiliani', count: 1 },
      { label: 'Anita Dongre', count: 2 },
      { label: 'Gaurav Gupta', count: 2 },
    ],
    size: [
      { label: 'S', count: 5 },
      { label: 'M', count: 7 },
      { label: 'L', count: 6 },
      { label: 'XL', count: 2 },
    ],
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      const current = prev[filterType];
      if (Array.isArray(current)) {
        const newValue = current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value];
        return { ...prev, [filterType]: newValue };
      }
      return { ...prev, [filterType]: value };
    });
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      occasion: [],
      designer: [],
      size: [],
      priceMin: '',
      priceMax: '',
      location: '',
    });
  };

  const filteredProducts = allProducts; // In real app, apply filters here
  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <Header />

      <div className="catalog-page">
        <div className="catalog-header">
          <div className="container">
            <h1>Browse Catalog</h1>
            <p>Discover luxury outfits for every occasion</p>

            {/* Search Bar */}
            <div className="catalog-search">
              <div className="search-input-wrapper">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by outfit, occasion, or designer..."
                />
              </div>
              <button
                className={`location-toggle ${locationBased ? 'active' : ''}`}
                onClick={() => setLocationBased(!locationBased)}
              >
                <MapPin size={18} />
                Near Me
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          {/* Mobile Filter Toggle */}
          <button
            className="mobile-filter-toggle"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <Filter size={20} />
            Filters
          </button>

          {/* Filters Overlay for Mobile */}
          <div
            className={`filters-overlay ${mobileFiltersOpen ? 'open' : ''}`}
            onClick={() => setMobileFiltersOpen(false)}
          ></div>

          <div className="catalog-main">
            {/* Filters Sidebar */}
            <aside className={`filters-sidebar ${mobileFiltersOpen ? 'open' : ''}`}>
              <div className="filters-header">
                <h3>Filters</h3>
                <button className="clear-filters" onClick={clearFilters}>
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="filter-group">
                <h4>Category</h4>
                <div className="filter-options">
                  {filterOptions.category.map((option) => (
                    <label key={option.label} className="filter-option">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(option.label)}
                        onChange={() => handleFilterChange('category', option.label)}
                      />
                      <span>{option.label}</span>
                      <span className="option-count">({option.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Occasion Filter */}
              <div className="filter-group">
                <h4>Occasion</h4>
                <div className="filter-options">
                  {filterOptions.occasion.map((option) => (
                    <label key={option.label} className="filter-option">
                      <input
                        type="checkbox"
                        checked={filters.occasion.includes(option.label)}
                        onChange={() => handleFilterChange('occasion', option.label)}
                      />
                      <span>{option.label}</span>
                      <span className="option-count">({option.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Designer Filter */}
              <div className="filter-group">
                <h4>Designer</h4>
                <div className="filter-options">
                  {filterOptions.designer.map((option) => (
                    <label key={option.label} className="filter-option">
                      <input
                        type="checkbox"
                        checked={filters.designer.includes(option.label)}
                        onChange={() => handleFilterChange('designer', option.label)}
                      />
                      <span>{option.label}</span>
                      <span className="option-count">({option.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="filter-group">
                <h4>Size</h4>
                <div className="filter-options">
                  {filterOptions.size.map((option) => (
                    <label key={option.label} className="filter-option">
                      <input
                        type="checkbox"
                        checked={filters.size.includes(option.label)}
                        onChange={() => handleFilterChange('size', option.label)}
                      />
                      <span>{option.label}</span>
                      <span className="option-count">({option.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="filter-group">
                <h4>Price Range (per day)</h4>
                <div className="price-range">
                  <div className="price-inputs">
                    <input
                      type="number"
                      className="price-input"
                      placeholder="Min"
                      value={filters.priceMin}
                      onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                    />
                    <input
                      type="number"
                      className="price-input"
                      placeholder="Max"
                      value={filters.priceMax}
                      onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Section */}
            <div className="products-section">
              <div className="products-header">
                <div className="results-count">
                  Showing <strong>{displayedProducts.length}</strong> of{' '}
                  <strong>{filteredProducts.length}</strong> outfits
                </div>

                <div className="sort-controls">
                  <label>Sort by:</label>
                  <select
                    className="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popular">Popular</option>
                    <option value="latest">Latest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>

                  <div className="view-toggle">
                    <button
                      className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination">
                <button
                  className="pagination-btn"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className="pagination-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
