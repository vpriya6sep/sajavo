import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Shield, Users, Heart, TrendingUp, CheckCircle, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const trustFeatures = [
    {
      icon: <Shield size={32} />,
      title: 'Verified Listings',
      description: 'Every outfit is verified for authenticity and quality before listing',
    },
    {
      icon: <Users size={32} />,
      title: 'Trusted Community',
      description: 'Build trust through reviews and ratings from real renters',
    },
    {
      icon: <Heart size={32} />,
      title: 'Secure Payments',
      description: 'Safe and encrypted payment processing with buyer protection',
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Assurance',
      description: 'Professional cleaning and inspection after every rental',
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Browse & Select',
      description: 'Explore our curated collection of luxury outfits from verified lenders',
    },
    {
      step: '02',
      title: 'Book & Pay',
      description: 'Choose your dates, pay securely, and your outfit will be delivered',
    },
    {
      step: '03',
      title: 'Wear & Return',
      description: 'Enjoy your event and return the outfit with our easy pickup service',
    },
  ];

  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      description: 'Fashion enthusiast with 10+ years in luxury retail',
    },
    {
      name: 'Rahul Mehta',
      role: 'Co-Founder & CTO',
      description: 'Tech innovator building the future of fashion sharing',
    },
    {
      name: 'Ananya Singh',
      role: 'Head of Community',
      description: 'Connecting lenders and renters across India',
    },
    {
      name: 'Vikram Patel',
      role: 'Operations Lead',
      description: 'Ensuring seamless delivery and quality service',
    },
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Sajavo</h1>
          <p className="hero-subtitle">
            Redefining luxury fashion through sustainable sharing
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section story-section">
        <div className="container">
          <div className="section-content">
            <div className="content-column">
              <h2>Our Story</h2>
              <p>
                Sajavo was born from a simple observation: beautiful designer outfits sitting
                unused in wardrobes while others seek affordable access to luxury fashion for
                special occasions.
              </p>
              <p>
                We saw an opportunity to bridge this gap, creating a platform where fashion lovers
                could share their treasured pieces, earn extra income, and help others look their
                best without the hefty price tag.
              </p>
              <p>
                Today, Sajavo is India's premier peer-to-peer luxury rental platform, connecting
                thousands of lenders and renters across the country.
              </p>
            </div>
            <div className="content-column image-placeholder">
              <div className="placeholder-box">
                <TrendingUp size={64} />
                <span>Our Growth Story</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <div className="container">
          <div className="mission-header">
            <h2>Our Mission</h2>
            <p className="section-subtitle">
              Building a sustainable future for fashion, one rental at a time
            </p>
          </div>
          
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <Heart size={40} />
              </div>
              <h3>Sustainable Luxury</h3>
              <p>
                Reduce fashion waste by maximizing the use of every garment. When you rent or
                lend, you're making a positive environmental impact.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">
                <Users size={40} />
              </div>
              <h3>Sharing Economy</h3>
              <p>
                Empower individuals to monetize their wardrobes while providing affordable access
                to designer fashion for everyone.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">
                <CheckCircle size={40} />
              </div>
              <h3>Accessible Fashion</h3>
              <p>
                Make luxury fashion accessible to all, regardless of budget. Everyone deserves to
                look and feel their best on special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How C2C Works */}
      <section className="about-section how-c2c-section">
        <div className="container">
          <h2>How C2C Rental Works</h2>
          <p className="section-subtitle">
            A seamless experience connecting lenders and renters
          </p>
          
          <div className="how-it-works-grid">
            {howItWorks.map((item, index) => (
              <div key={index} className="how-it-works-card">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="cta-buttons">
            <button className="btn btn-primary">Start Renting</button>
            <button className="btn btn-outline">Lend Your Wardrobe</button>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="about-section trust-section">
        <div className="container">
          <h2>Trust & Safety</h2>
          <p className="section-subtitle">
            Your security is our top priority
          </p>
          
          <div className="trust-grid">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="trust-card">
                <div className="trust-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="trust-details">
            <div className="trust-detail-item">
              <h4>Identity Verification</h4>
              <p>
                All users undergo verification with government-issued ID and phone number
                confirmation to ensure a safe community.
              </p>
            </div>
            <div className="trust-detail-item">
              <h4>Security Deposits</h4>
              <p>
                Refundable deposits protect lenders while giving renters confidence in the
                quality of items they receive.
              </p>
            </div>
            <div className="trust-detail-item">
              <h4>Insurance Coverage</h4>
              <p>
                Every rental is covered by our protection policy against accidental damage during
                the rental period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate individuals building the future of fashion
          </p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-photo-placeholder">
                  <Users size={48} />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <h2>Join the Sajavo Community</h2>
          <p>
            Whether you're looking to rent designer pieces or earn from your wardrobe,
            we're here to make it happen.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
