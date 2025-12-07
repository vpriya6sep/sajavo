import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
  Package,
  TrendingUp,
  Calendar,
  MessageSquare,
  User,
  Plus,
  Eye,
  Edit,
  Trash2,
  IndianRupee,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import './LenderDashboard.css';
import { products } from '../data/products';

const LenderDashboard = () => {
  const [activeTab, setActiveTab] = useState('outfits');

  // Get actual product images
  const product1 = products.find(p => p.id === 1);
  const product2 = products.find(p => p.id === 2);
  const product3 = products.find(p => p.id === 3);

  const listedOutfits = [
    {
      id: 1,
      image: product1.image,
      name: 'Emerald Green Silk Lehenga',
      designer: 'Sabyasachi Mukherjee',
      price: 7500,
      status: 'active',
      views: 234,
      bookings: 8,
      earnings: 60000,
    },
    {
      id: 2,
      image: product2.image,
      name: 'Royal Blue Anarkali',
      designer: 'Manish Malhotra',
      price: 5400,
      status: 'active',
      views: 156,
      bookings: 5,
      earnings: 27000,
    },
    {
      id: 3,
      image: product3.image,
      name: 'Red Bridal Lehenga',
      designer: 'Tarun Tahiliani',
      price: 9000,
      status: 'inactive',
      views: 312,
      bookings: 12,
      earnings: 108000,
    },
  ];

  const bookings = [
    {
      id: 1,
      outfitName: 'Emerald Green Silk Lehenga',
      renterName: 'Priya Sharma',
      startDate: '2024-12-15',
      endDate: '2024-12-18',
      amount: 7500,
      status: 'confirmed',
    },
    {
      id: 2,
      outfitName: 'Royal Blue Anarkali',
      renterName: 'Anjali Patel',
      startDate: '2025-01-05',
      endDate: '2025-01-08',
      amount: 5400,
      status: 'pending',
    },
    {
      id: 3,
      outfitName: 'Red Bridal Lehenga',
      renterName: 'Neha Singh',
      startDate: '2024-11-10',
      endDate: '2024-11-13',
      amount: 9000,
      status: 'completed',
    },
  ];

  const messages = [
    {
      id: 1,
      from: 'Priya Sharma',
      outfit: 'Emerald Green Silk Lehenga',
      message: 'Is this available for December 15-18?',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      from: 'Anjali Patel',
      outfit: 'Royal Blue Anarkali',
      message: 'Can I see more photos of the blouse?',
      time: '1 day ago',
      unread: false,
    },
  ];

  const totalEarnings = listedOutfits.reduce((sum, outfit) => sum + outfit.earnings, 0);
  const totalBookings = listedOutfits.reduce((sum, outfit) => sum + outfit.bookings, 0);
  const activeOutfits = listedOutfits.filter((outfit) => outfit.status === 'active').length;

  return (
    <div>
      <Header />

      <div className="dashboard-page lender-dashboard">
        <div className="container">
          {/* Dashboard Header */}
          <div className="dashboard-header">
            <div className="user-welcome">
              <div className="user-avatar">
                <User size={32} />
              </div>
              <div>
                <h1>Welcome back, Vishnupriya!</h1>
                <p>Manage your listings and grow your earnings</p>
              </div>
            </div>
            <a href="/lend" className="btn btn-primary">
              <Plus size={20} />
              Add New Outfit
            </a>
          </div>

          {/* Earnings Overview */}
          <div className="earnings-overview">
            <div className="earnings-card main-earnings">
              <div className="earnings-header">
                <div>
                  <div className="earnings-label">Total Earnings</div>
                  <div className="earnings-value">
                    ₹{totalEarnings.toLocaleString()}
                  </div>
                  <div className="earnings-growth">
                    <TrendingUp size={16} />
                    <span>+12.5% from last month</span>
                  </div>
                </div>
                <div className="earnings-icon">
                  <TrendingUp size={32} />
                </div>
              </div>
              <div className="earnings-chart-container">
                <div className="chart-period">Last 6 months</div>
                <div className="earnings-chart">
                  <div className="chart-bar" style={{ height: '60%' }}>
                    <span className="chart-tooltip">₹28K</span>
                  </div>
                  <div className="chart-bar" style={{ height: '80%' }}>
                    <span className="chart-tooltip">₹35K</span>
                  </div>
                  <div className="chart-bar" style={{ height: '70%' }}>
                    <span className="chart-tooltip">₹32K</span>
                  </div>
                  <div className="chart-bar" style={{ height: '90%' }}>
                    <span className="chart-tooltip">₹38K</span>
                  </div>
                  <div className="chart-bar" style={{ height: '100%' }}>
                    <span className="chart-tooltip">₹42K</span>
                  </div>
                  <div className="chart-bar" style={{ height: '85%' }}>
                    <span className="chart-tooltip">₹36K</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="earnings-stats">
              <div className="stat-card">
                <Package size={24} />
                <div>
                  <div className="stat-value">{activeOutfits}</div>
                  <div className="stat-label">Active Outfits</div>
                </div>
              </div>
              <div className="stat-card">
                <Calendar size={24} />
                <div>
                  <div className="stat-value">{totalBookings}</div>
                  <div className="stat-label">Total Bookings</div>
                </div>
              </div>
              <div className="stat-card">
                <BarChart3 size={24} />
                <div>
                  <div className="stat-value">₹{(totalEarnings / 12).toFixed(0)}</div>
                  <div className="stat-label">Avg. Monthly</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="dashboard-content">
            {/* Sidebar Navigation */}
            <aside className="dashboard-sidebar">
              <nav className="dashboard-nav">
                <button
                  className={`nav-item ${activeTab === 'outfits' ? 'active' : ''}`}
                  onClick={() => setActiveTab('outfits')}
                >
                  <Package size={20} />
                  <span>My Outfits</span>
                </button>
                <button
                  className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bookings')}
                >
                  <Calendar size={20} />
                  <span>Bookings</span>
                </button>
                <button
                  className={`nav-item ${activeTab === 'earnings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('earnings')}
                >
                  <TrendingUp size={20} />
                  <span>Earnings</span>
                </button>
                <button
                  className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
                  onClick={() => setActiveTab('messages')}
                >
                  <MessageSquare size={20} />
                  <span>Messages</span>
                  {messages.filter((m) => m.unread).length > 0 && (
                    <span className="badge">{messages.filter((m) => m.unread).length}</span>
                  )}
                </button>
                <button
                  className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User size={20} />
                  <span>My Profile</span>
                </button>
              </nav>
            </aside>

            {/* Main Section */}
            <main className="dashboard-main">
              {activeTab === 'outfits' && (
                <section>
                  <div className="section-header">
                    <h2>My Outfits</h2>
                    <a href="/lend" className="btn btn-outline">
                      <Plus size={18} />
                      Add New
                    </a>
                  </div>
                  <div className="outfits-grid">
                    {listedOutfits.map((outfit) => (
                      <div key={outfit.id} className="outfit-card">
                        <div className="outfit-image-container">
                          <img src={outfit.image} alt={outfit.name} className="outfit-image" />
                          <span className={`outfit-status ${outfit.status}`}>
                            {outfit.status === 'active' ? (
                              <>
                                <CheckCircle size={14} />
                                Active
                              </>
                            ) : (
                              <>
                                <XCircle size={14} />
                                Inactive
                              </>
                            )}
                          </span>
                        </div>
                        <div className="outfit-info">
                          <h3>{outfit.name}</h3>
                          <p className="designer">{outfit.designer}</p>
                          <div className="outfit-stats">
                            <span>
                              <Eye size={14} />
                              {outfit.views} views
                            </span>
                            <span>
                              <Calendar size={14} />
                              {outfit.bookings} bookings
                            </span>
                          </div>
                          <div className="outfit-price">₹{outfit.price.toLocaleString()}/day</div>
                          <div className="outfit-earnings">
                            Total Earned: ₹{outfit.earnings.toLocaleString()}
                          </div>
                          <div className="outfit-actions">
                            <button className="btn-icon" title="View">
                              <Eye size={18} />
                            </button>
                            <button className="btn-icon" title="Edit">
                              <Edit size={18} />
                            </button>
                            <button className="btn-icon" title="Delete">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'bookings' && (
                <section>
                  <h2>Bookings</h2>
                  <div className="bookings-list">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="booking-card">
                        <div className="booking-header">
                          <div>
                            <h3>{booking.outfitName}</h3>
                            <p className="renter-name">Rented by: {booking.renterName}</p>
                          </div>
                          <span className={`status-badge ${booking.status}`}>
                            {booking.status === 'confirmed'
                              ? 'Confirmed'
                              : booking.status === 'pending'
                              ? 'Pending'
                              : 'Completed'}
                          </span>
                        </div>
                        <div className="booking-details">
                          <div className="booking-dates">
                            <Calendar size={16} />
                            <span>
                              {booking.startDate} to {booking.endDate}
                            </span>
                          </div>
                          <div className="booking-amount">₹{booking.amount.toLocaleString()}</div>
                        </div>
                        <div className="booking-actions">
                          <button className="btn btn-outline btn-sm">View Details</button>
                          <button className="btn btn-primary btn-sm">Contact Renter</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'earnings' && (
                <section>
                  <h2>Earnings Details</h2>
                  <div className="earnings-details">
                    <div className="earnings-summary">
                      <div className="summary-item">
                        <div className="summary-label">Total Earnings</div>
                        <div className="summary-value">₹{totalEarnings.toLocaleString()}</div>
                      </div>
                      <div className="summary-item">
                        <div className="summary-label">Pending Payouts</div>
                        <div className="summary-value">₹12,900</div>
                      </div>
                      <div className="summary-item">
                        <div className="summary-label">This Month</div>
                        <div className="summary-value">₹15,400</div>
                      </div>
                    </div>
                    <div className="earnings-breakdown">
                      <h3>Earnings by Outfit</h3>
                      {listedOutfits.map((outfit) => (
                        <div key={outfit.id} className="breakdown-item">
                          <div className="breakdown-info">
                            <div className="breakdown-name">{outfit.name}</div>
                            <div className="breakdown-bookings">{outfit.bookings} bookings</div>
                          </div>
                          <div className="breakdown-amount">
                            ₹{outfit.earnings.toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 'messages' && (
                <section>
                  <h2>Messages</h2>
                  <div className="messages-list">
                    {messages.map((message) => (
                      <div key={message.id} className={`message-card ${message.unread ? 'unread' : ''}`}>
                        <div className="message-header">
                          <div>
                            <h3>{message.from}</h3>
                            <p className="message-outfit">Re: {message.outfit}</p>
                          </div>
                          <span className="message-time">
                            <Clock size={14} />
                            {message.time}
                          </span>
                        </div>
                        <p className="message-text">{message.message}</p>
                        <button className="btn btn-primary btn-sm">Reply</button>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'profile' && (
                <section>
                  <h2>My Profile</h2>
                  <div className="profile-form">
                    {/* Personal Information Section */}
                    <div className="profile-section">
                      <div className="section-title">
                        <User size={20} />
                        <h3>Personal Information</h3>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Full Name *</label>
                          <input type="text" className="form-input" defaultValue="Vishnupriya Pandey" required />
                        </div>
                        <div className="form-group">
                          <label>Phone Number *</label>
                          <input type="tel" className="form-input" defaultValue="+91 86049 55155" required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Email Address *</label>
                          <input type="email" className="form-input" defaultValue="vpriya6sep@gmail.com" required />
                        </div>
                        <div className="form-group">
                          <label>City / Location *</label>
                          <input type="text" className="form-input" defaultValue="Mumbai, Maharashtra" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Complete Address</label>
                        <textarea
                          className="form-textarea"
                          rows="3"
                          defaultValue="456, Park Street, Bandra West, Mumbai - 400050"
                          placeholder="Enter your complete address for pickup/delivery"
                        />
                      </div>
                    </div>

                    {/* Store / Wardrobe Details Section */}
                    <div className="profile-section">
                      <div className="section-title">
                        <Package size={20} />
                        <h3>Store / Personal Wardrobe Details</h3>
                      </div>
                      <div className="form-group">
                        <label>Are you a Designer / Boutique or an Individual? *</label>
                        <div className="radio-group">
                          <label className="radio-label">
                            <input type="radio" name="lenderType" value="designer" defaultChecked />
                            <span>Designer / Boutique</span>
                          </label>
                          <label className="radio-label">
                            <input type="radio" name="lenderType" value="individual" />
                            <span>Individual Wardrobe Owner</span>
                          </label>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Brand / Store Name (if applicable)</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Enter your brand or store name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Website / Instagram Link (optional)</label>
                          <input 
                            type="url" 
                            className="form-input" 
                            placeholder="https://instagram.com/yourbrand"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Business Description (optional)</label>
                        <textarea
                          className="form-textarea"
                          rows="3"
                          placeholder="Tell us about your collection, specialties, and what makes your outfits unique"
                        />
                      </div>
                    </div>

                    {/* Garment Listing Information Section */}
                    <div className="profile-section">
                      <div className="section-title">
                        <BarChart3 size={20} />
                        <h3>Garment Listing Information</h3>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Total Outfits Available</label>
                          <input 
                            type="number" 
                            className="form-input" 
                            defaultValue="3"
                            min="0"
                          />
                        </div>
                        <div className="form-group">
                          <label>Average Rental Price Range</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            defaultValue="₹5,000 - ₹10,000"
                            placeholder="₹5,000 - ₹10,000"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Primary Categories (Select multiple)</label>
                        <div className="checkbox-group">
                          <label className="checkbox-label">
                            <input type="checkbox" defaultChecked />
                            <span>Bridal Lehengas</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" defaultChecked />
                            <span>Anarkalis</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Sarees</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Sherwanis</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Indo-Western</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Gowns</span>
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Occasions Catered (Select multiple)</label>
                        <div className="checkbox-group">
                          <label className="checkbox-label">
                            <input type="checkbox" defaultChecked />
                            <span>Weddings</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" defaultChecked />
                            <span>Sangeet</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Mehendi</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Cocktail Party</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Festive Events</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Reception</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Payment & Banking Section */}
                    <div className="profile-section">
                      <div className="section-title">
                        <IndianRupee size={20} />
                        <h3>Payment & Banking Details</h3>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Bank Name *</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Enter bank name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Account Holder Name *</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder="As per bank records"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Account Number *</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            defaultValue="XXXX XXXX XXXX 1234"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>IFSC Code *</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Enter IFSC code"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>UPI ID (optional)</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="yourname@upi"
                        />
                      </div>
                    </div>

                    {/* Preferences Section */}
                    <div className="profile-section">
                      <div className="section-title">
                        <CheckCircle size={20} />
                        <h3>Rental Preferences</h3>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Minimum Rental Days</label>
                          <select className="form-input">
                            <option value="3">3 Days</option>
                            <option value="4" selected>4 Days</option>
                            <option value="5">5 Days</option>
                            <option value="7">7 Days</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Security Deposit Required</label>
                          <select className="form-input">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="varies" selected>Varies by outfit</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Delivery Options</label>
                        <div className="checkbox-group">
                          <label className="checkbox-label">
                            <input type="checkbox" defaultChecked />
                            <span>Self Pickup</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" defaultChecked />
                            <span>Home Delivery (charges apply)</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Courier Service</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">
                      <button type="button" className="btn btn-outline">Cancel</button>
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </section>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LenderDashboard;
