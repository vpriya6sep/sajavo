import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Upload, X, Calendar, IndianRupee, Info, CheckCircle } from 'lucide-react';
import './LendOutfit.css';

const LendOutfit = () => {
  const [formData, setFormData] = useState({
    title: '',
    designer: '',
    category: '',
    occasion: '',
    size: [],
    condition: '',
    description: '',
    rentalPrice: '',
    securityDeposit: '',
    originalPrice: '',
    color: '',
    fabric: '',
    timesWorn: '',
  });

  const [images, setImages] = useState([]);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [step, setStep] = useState(1); // Multi-step form

  const categories = ['Bridal', 'Ethnic', 'Western', 'Saree', 'Indo-Western', 'Accessories'];
  const occasions = ['Wedding', 'Sangeet', 'Mehendi', 'Cocktail', 'Reception', 'Festive', 'Party'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'];
  const conditions = ['Brand New', 'Excellent', 'Good', 'Fair'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSizeToggle = (size) => {
    setFormData((prev) => ({
      ...prev,
      size: prev.size.includes(size)
        ? prev.size.filter((s) => s !== size)
        : [...prev.size, size],
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
  };

  const removeImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting listing:', formData, images);
    // Handle form submission
  };

  return (
    <div>
      <Header />

      <div className="lend-outfit-page">
        <div className="container">
          {/* Hero Section */}
          <div className="lend-hero">
            <h1>Lend Your Wardrobe</h1>
            <p>Turn your luxury outfits into earnings. Share your style, earn money!</p>
            <div className="benefits-grid">
              <div className="benefit-card">
                <IndianRupee size={32} />
                <h3>Earn Extra Income</h3>
                <p>Make money from outfits sitting in your wardrobe</p>
              </div>
              <div className="benefit-card">
                <CheckCircle size={32} />
                <h3>Verified Renters</h3>
                <p>All renters are verified with security deposits</p>
              </div>
              <div className="benefit-card">
                <Calendar size={32} />
                <h3>You Control Availability</h3>
                <p>Set your own calendar and rental prices</p>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="form-progress">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-circle">1</div>
              <span>Outfit Details</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-circle">2</div>
              <span>Photos & Pricing</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-circle">3</div>
              <span>Availability</span>
            </div>
          </div>

          {/* Form */}
          <form className="lend-form" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="form-step">
                <h2>Outfit Details</h2>

                <div className="form-group">
                  <label htmlFor="title">
                    Outfit Title <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-input"
                    placeholder="e.g., Red Bridal Lehenga with Gold Embroidery"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="designer">Designer/Brand</label>
                    <input
                      type="text"
                      id="designer"
                      name="designer"
                      className="form-input"
                      placeholder="e.g., Sabyasachi"
                      value={formData.designer}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">
                      Category <span className="required">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="form-input"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Occasion <span className="required">*</span>
                  </label>
                  <select
                    name="occasion"
                    className="form-input"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Occasion</option>
                    {occasions.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Available Sizes <span className="required">*</span>
                  </label>
                  <div className="size-buttons">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`size-btn ${formData.size.includes(size) ? 'active' : ''}`}
                        onClick={() => handleSizeToggle(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input
                      type="text"
                      id="color"
                      name="color"
                      className="form-input"
                      placeholder="e.g., Red, Gold"
                      value={formData.color}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="fabric">Fabric</label>
                    <input
                      type="text"
                      id="fabric"
                      name="fabric"
                      className="form-input"
                      placeholder="e.g., Silk, Chiffon"
                      value={formData.fabric}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="condition">
                      Condition <span className="required">*</span>
                    </label>
                    <select
                      id="condition"
                      name="condition"
                      className="form-input"
                      value={formData.condition}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Condition</option>
                      {conditions.map((cond) => (
                        <option key={cond} value={cond}>
                          {cond}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="timesWorn">Times Worn</label>
                    <input
                      type="number"
                      id="timesWorn"
                      name="timesWorn"
                      className="form-input"
                      placeholder="e.g., 1, 2, 3"
                      value={formData.timesWorn}
                      onChange={handleInputChange}
                      min="0"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">
                    Description <span className="required">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-textarea"
                    placeholder="Describe your outfit in detail - fabric, embellishments, fit, special features..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => setStep(2)}
                >
                  Next: Photos & Pricing
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Photos & Pricing</h2>

                {/* Photo Upload */}
                <div className="form-group">
                  <label>
                    Upload Photos <span className="required">*</span>
                  </label>
                  <p className="form-hint">Add at least 3 high-quality photos (max 10)</p>

                  <div className="image-upload-area">
                    {images.map((image) => (
                      <div key={image.id} className="image-preview">
                        <img src={image.preview} alt="Upload preview" />
                        <button
                          type="button"
                          className="remove-image"
                          onClick={() => removeImage(image.id)}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}

                    {images.length < 10 && (
                      <label className="upload-box">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                        />
                        <Upload size={32} />
                        <span>Upload Photos</span>
                      </label>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="pricing-section">
                  <h3>Set Your Pricing</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="rentalPrice">
                        Rental Price (per day) <span className="required">*</span>
                      </label>
                      <div className="input-with-icon">
                        <IndianRupee size={18} className="input-icon" />
                        <input
                          type="number"
                          id="rentalPrice"
                          name="rentalPrice"
                          className="form-input"
                          placeholder="e.g., 2500"
                          value={formData.rentalPrice}
                          onChange={handleInputChange}
                          min="0"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="securityDeposit">
                        Security Deposit <span className="required">*</span>
                      </label>
                      <div className="input-with-icon">
                        <IndianRupee size={18} className="input-icon" />
                        <input
                          type="number"
                          id="securityDeposit"
                          name="securityDeposit"
                          className="form-input"
                          placeholder="e.g., 15000"
                          value={formData.securityDeposit}
                          onChange={handleInputChange}
                          min="0"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="originalPrice">Original Purchase Price (optional)</label>
                    <div className="input-with-icon">
                      <IndianRupee size={18} className="input-icon" />
                      <input
                        type="number"
                        id="originalPrice"
                        name="originalPrice"
                        className="form-input"
                        placeholder="e.g., 150000"
                        value={formData.originalPrice}
                        onChange={handleInputChange}
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="info-box">
                    <Info size={20} />
                    <div>
                      <strong>Pricing Tips:</strong>
                      <ul>
                        <li>Research similar outfits to set competitive prices</li>
                        <li>Security deposit should be 50-70% of original price</li>
                        <li>Higher quality photos attract more renters</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn-outline btn-lg"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => setStep(3)}
                  >
                    Next: Availability
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2>Set Availability</h2>

                <div className="availability-section">
                  <p className="form-hint">
                    Mark the dates when your outfit is NOT available for rental
                  </p>

                  <div className="calendar-placeholder">
                    <Calendar size={64} />
                    <p>Calendar component would go here</p>
                    <p className="small-text">
                      In production, integrate a date picker library like react-day-picker
                    </p>
                  </div>

                  <div className="info-box">
                    <Info size={20} />
                    <div>
                      <strong>Availability Guidelines:</strong>
                      <ul>
                        <li>Keep your calendar updated to avoid booking conflicts</li>
                        <li>Block dates for personal use in advance</li>
                        <li>You can update availability anytime from your dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Approval Process Info */}
                <div className="approval-info">
                  <h3>What Happens Next?</h3>
                  <div className="approval-steps">
                    <div className="approval-step">
                      <div className="step-number">1</div>
                      <div>
                        <h4>Review</h4>
                        <p>Our team will review your listing within 24-48 hours</p>
                      </div>
                    </div>
                    <div className="approval-step">
                      <div className="step-number">2</div>
                      <div>
                        <h4>Verification</h4>
                        <p>We verify outfit authenticity and quality standards</p>
                      </div>
                    </div>
                    <div className="approval-step">
                      <div className="step-number">3</div>
                      <div>
                        <h4>Go Live</h4>
                        <p>Once approved, your outfit will be visible to renters</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn-outline btn-lg"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit for Approval
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LendOutfit;
