import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
  Calendar,
  Package,
  Heart,
  CreditCard,
  User,
  Clock,
  MapPin,
  Star,
  Download,
  MessageCircle,
} from 'lucide-react';
import './RenterDashboard.css';

// Import images
import card1 from '../assets/card-1.png';
import card2 from '../assets/card-2.png';
import card3 from '../assets/card-3.png';
import card4 from '../assets/card-4.png';

const RenterDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingRentals = [
    {
      id: 1,
      image: card1,
      name: 'Emerald Green Silk Lehenga',
      designer: 'Sabyasachi Mukherjee',
      startDate: '2024-12-15',
      endDate: '2024-12-18',
      price: 7500,
      status: 'confirmed',
      lender: 'Priya Sharma',
    },
    {
      id: 2,
      image: card2,
      name: 'Royal Blue Anarkali',
      designer: 'Manish Malhotra',
      startDate: '2025-01-05',
      endDate: '2025-01-08',
      price: 5400,
      status: 'pending',
      lender: 'Anjali Patel',
    },
  ];

  const pastRentals = [
    {
      id: 3,
      image: card3,
      name: 'Red Bridal Lehenga',
      designer: 'Tarun Tahiliani',
      startDate: '2024-11-10',
      endDate: '2024-11-13',
      price: 9000,
      status: 'completed',
      lender: 'Neha Singh',
      rated: false,
    },
    {
      id: 4,
      image: card4,
      name: 'Golden Silk Saree',
      designer: 'Anita Dongre',
      startDate: '2024-10-20',
      endDate: '2024-10-23',
      price: 4500,
      status: 'completed',
      lender: 'Riya Mehta',
      rated: true,
    },
  ];

  const paymentHistory = [
    {
      id: 1,
      date: '2024-11-10',
      description: 'Red Bridal Lehenga - Rental',
      amount: 9000,
      status: 'paid',
    },
    {
      id: 2,
      date: '2024-11-18',
      description: 'Security Deposit Refund',
      amount: 30000,
      status: 'refunded',
    },
    {
      id: 3,
      date: '2024-12-01',
      description: 'Emerald Green Silk Lehenga - Rental',
      amount: 7500,
      status: 'paid',
    },
  ];

  return (
    <div>
      <Header />

      <div className="dashboard-page renter-dashboard">
        <div className="container">
          {/* Dashboard Header */}
          <div className="dashboard-header">
            <div className="user-welcome">
              <div className="user-avatar">
                <User size={32} />
              </div>
              <div>
                <h1>Welcome back, Sneha!</h1>
                <p>Manage your rentals and explore new outfits</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/catalog')} 
              className="btn btn-primary"
            >
              Browse Catalog
            </button>
          </div>

          {/* Dashboard Stats */}
          <div className="dashboard-stats">
            <div className="stat-card">
              <Package size={24} />
              <div>
                <div className="stat-value">{upcomingRentals.length}</div>
                <div className="stat-label">Upcoming Rentals</div>
              </div>
            </div>
            <div className="stat-card">
              <Clock size={24} />
              <div>
                <div className="stat-value">{pastRentals.length}</div>
                <div className="stat-label">Past Rentals</div>
              </div>
            </div>
            <div className="stat-card">
              <Heart size={24} />
              <div>
                <div className="stat-value">12</div>
                <div className="stat-label">Wishlist Items</div>
              </div>
            </div>
            <div className="stat-card">
              <Star size={24} />
              <div>
                <div className="stat-value">4.8</div>
                <div className="stat-label">Your Rating</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="dashboard-content">
            {/* Sidebar Navigation */}
            <aside className="dashboard-sidebar">
              <nav className="dashboard-nav">
                <button
                  className={`nav-item ${activeTab === 'upcoming' ? 'active' : ''}`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  <Calendar size={20} />
                  <span>Upcoming Rentals</span>
                </button>
                <button
                  className={`nav-item ${activeTab === 'past' ? 'active' : ''}`}
                  onClick={() => setActiveTab('past')}
                >
                  <Clock size={20} />
                  <span>Past Rentals</span>
                </button>
                <button
                  className={`nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
                  onClick={() => setActiveTab('wishlist')}
                >
                  <Heart size={20} />
                  <span>Wishlist</span>
                </button>
                <button
                  className={`nav-item ${activeTab === 'payments' ? 'active' : ''}`}
                  onClick={() => setActiveTab('payments')}
                >
                  <CreditCard size={20} />
                  <span>Payments</span>
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
              {activeTab === 'upcoming' && (
                <section>
                  <h2>Upcoming Rentals</h2>
                  <div className="rentals-list">
                    {upcomingRentals.map((rental) => (
                      <div key={rental.id} className="rental-card">
                        <img src={rental.image} alt={rental.name} className="rental-image" />
                        <div className="rental-details">
                          <div>
                            <h3>{rental.name}</h3>
                            <p className="designer">{rental.designer}</p>
                            <div className="rental-info">
                              <span>
                                <Calendar size={16} />
                                {rental.startDate} to {rental.endDate}
                              </span>
                              <span>
                                <MapPin size={16} />
                                Lender: {rental.lender}
                              </span>
                            </div>
                          </div>
                          <div className="rental-actions">
                            <div className="rental-price">₹{rental.price.toLocaleString()}</div>
                            <span className={`status-badge ${rental.status}`}>
                              {rental.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                            </span>
                            <button className="btn btn-outline btn-sm">
                              <MessageCircle size={16} />
                              Contact Lender
                            </button>
                            <button className="btn btn-primary btn-sm">View Details</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'past' && (
                <section>
                  <h2>Past Rentals</h2>
                  <div className="rentals-list">
                    {pastRentals.map((rental) => (
                      <div key={rental.id} className="rental-card">
                        <img src={rental.image} alt={rental.name} className="rental-image" />
                        <div className="rental-details">
                          <div>
                            <h3>{rental.name}</h3>
                            <p className="designer">{rental.designer}</p>
                            <div className="rental-info">
                              <span>
                                <Calendar size={16} />
                                {rental.startDate} to {rental.endDate}
                              </span>
                              <span>
                                <MapPin size={16} />
                                Lender: {rental.lender}
                              </span>
                            </div>
                          </div>
                          <div className="rental-actions">
                            <div className="rental-price">₹{rental.price.toLocaleString()}</div>
                            <span className="status-badge completed">Completed</span>
                            {!rental.rated && (
                              <button className="btn btn-primary btn-sm">
                                <Star size={16} />
                                Rate & Review
                              </button>
                            )}
                            <button className="btn btn-outline btn-sm">
                              <Download size={16} />
                              Invoice
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'wishlist' && (
                <section>
                  <h2>My Wishlist</h2>
                  <p>View your saved items on the <a href="/wishlist">Wishlist page</a></p>
                </section>
              )}

              {activeTab === 'payments' && (
                <section>
                  <h2>Payment History</h2>
                  <div className="payments-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paymentHistory.map((payment) => (
                          <tr key={payment.id}>
                            <td>{payment.date}</td>
                            <td>{payment.description}</td>
                            <td>₹{payment.amount.toLocaleString()}</td>
                            <td>
                              <span className={`status-badge ${payment.status}`}>
                                {payment.status}
                              </span>
                            </td>
                            <td>
                              <button className="btn-link">Download</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {activeTab === 'profile' && (
                <section>
                  <h2>My Profile</h2>
                  <div className="profile-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-input" defaultValue="Sneha Kapoor" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-input" defaultValue="sneha@example.com" />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" className="form-input" defaultValue="+91 98765 43210" />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <textarea className="form-textarea" rows="3" defaultValue="123, MG Road, Mumbai, Maharashtra - 400001" />
                    </div>
                    <button className="btn btn-primary">Update Profile</button>
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

export default RenterDashboard;
