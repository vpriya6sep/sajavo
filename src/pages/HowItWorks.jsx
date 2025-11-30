import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
  Search,
  CreditCard,
  Package,
  RotateCcw,
  Upload,
  CheckCircle,
  TrendingUp,
  Truck,
  Shield,
  Users,
  Award,
  AlertCircle,
} from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const renterSteps = [
    {
      icon: <Search size={48} />,
      title: 'Browse & Discover',
      description:
        'Search through thousands of verified designer outfits. Filter by occasion, size, location, and price.',
      details: [
        'Advanced filters for easy discovery',
        'View detailed photos and descriptions',
        'Check availability calendar',
        'Read reviews from other renters',
      ],
    },
    {
      icon: <CreditCard size={48} />,
      title: 'Book & Pay',
      description:
        'Select your rental dates and complete secure payment with your preferred method.',
      details: [
        'Choose rental duration',
        'Pay securely online',
        'Refundable security deposit',
        'Instant booking confirmation',
      ],
    },
    {
      icon: <Package size={48} />,
      title: 'Receive & Wear',
      description:
        'Get the outfit delivered to your doorstep. Wear it and enjoy your special occasion!',
      details: [
        'Free doorstep delivery',
        'Professionally cleaned outfit',
        'Try before you wear',
        '24/7 customer support',
      ],
    },
    {
      icon: <RotateCcw size={48} />,
      title: 'Return',
      description:
        'After your event, simply return the outfit using our free pickup service.',
      details: [
        'Free pickup service',
        'No cleaning required',
        'Flexible return dates',
        'Security deposit refunded',
      ],
    },
  ];

  const lenderSteps = [
    {
      icon: <Upload size={48} />,
      title: 'Upload Your Outfit',
      description:
        'Take high-quality photos and provide detailed information about your designer outfit.',
      details: [
        'Add multiple photos',
        'Set your rental price',
        'Define security deposit',
        'Specify size and condition',
      ],
    },
    {
      icon: <CheckCircle size={48} />,
      title: 'Get Approved',
      description:
        'Our team reviews your listing for authenticity and quality within 24-48 hours.',
      details: [
        'Quick verification process',
        'Quality standards check',
        'Authenticity verification',
        'Listing optimization tips',
      ],
    },
    {
      icon: <Users size={48} />,
      title: 'Start Receiving Bookings',
      description:
        'Once approved, your outfit goes live and renters can start booking it.',
      details: [
        'Manage your calendar',
        'Accept/decline requests',
        'Communicate with renters',
        'Track booking status',
      ],
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Earn Money',
      description:
        'Receive payments directly to your account after each successful rental.',
      details: [
        'Competitive earnings',
        'Secure payments',
        'Transparent fee structure',
        'Monthly payouts',
      ],
    },
  ];

  const deliveryProcess = [
    {
      title: 'Order Placement',
      description: 'Renter books outfit and completes payment',
    },
    {
      title: 'Quality Check',
      description: 'We inspect and professionally clean the outfit',
    },
    {
      title: 'Delivery',
      description: 'Outfit delivered 1-2 days before your event',
    },
    {
      title: 'Enjoy Event',
      description: 'Wear the outfit and create memories',
    },
    {
      title: 'Return Pickup',
      description: 'We collect the outfit from your location',
    },
    {
      title: 'Inspection',
      description: 'Final check and security deposit refund',
    },
  ];

  const protectionPolicies = [
    {
      icon: <Shield />,
      title: 'Damage Protection',
      description:
        'Minor wear and tear is covered. Security deposit protects against major damage.',
    },
    {
      icon: <Award />,
      title: 'Quality Guarantee',
      description:
        'All outfits are inspected and professionally cleaned before each rental.',
    },
    {
      icon: <AlertCircle />,
      title: 'Dispute Resolution',
      description:
        'Our support team helps resolve any issues between renters and lenders.',
    },
  ];

  return (
    <div>
      <Header />

      <div className="how-it-works-page">
        {/* Hero Section */}
        <section className="hiw-hero">
          <div className="container">
            <h1>How Sajavo Works</h1>
            <p>Renting and lending luxury fashion made simple</p>
          </div>
        </section>

        {/* Renter Flow */}
        <section className="hiw-section renter-flow">
          <div className="container">
            <div className="section-header">
              <h2>For Renters</h2>
              <p>Find and rent your dream outfit in 4 easy steps</p>
            </div>

            <div className="steps-grid">
              {renterSteps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-icon renter">{step.icon}</div>
                  {/* <div className="step-number">Step {index + 1}</div> */}
                  <h3>{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <ul className="step-details">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="cta-section">
              <a href="/catalog" className="btn btn-primary btn-lg">
                Start Browsing
              </a>
            </div>
          </div>
        </section>

        {/* Lender Flow */}
        <section className="hiw-section lender-flow">
          <div className="container">
            <div className="section-header">
              <h2>For Lenders</h2>
              <p>Turn your wardrobe into earnings in 4 simple steps</p>
            </div>

            <div className="steps-grid">
              {lenderSteps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-icon lender">{step.icon}</div>
                  {/* <div className="step-number">Step {index + 1}</div> */}
                  <h3>{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <ul className="step-details">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="cta-section">
              <a href="/lend" className="btn btn-primary btn-lg">
                List Your Outfit
              </a>
            </div>
          </div>
        </section>

        {/* Delivery & Logistics */}
        <section className="hiw-section delivery-section">
          <div className="container">
            <div className="section-header">
              <Truck size={48} className="section-icon" />
              <h2>Delivery & Logistics</h2>
              <p>Seamless delivery and return process</p>
            </div>

            <div className="timeline">
              {deliveryProcess.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">{index + 1}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="logistics-features">
              <div className="feature-box">
                <h4>Express Delivery Available</h4>
                <p>Need it urgently? Get your outfit delivered in 24-48 hours</p>
              </div>
              <div className="feature-box">
                <h4>Flexible Return</h4>
                <p>Return within 1 day after your event with free pickup</p>
              </div>
              <div className="feature-box">
                <h4>Pan-India Service</h4>
                <p>We deliver to all major cities across India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Damage & Protection Policy */}
        <section className="hiw-section protection-section">
          <div className="container">
            <div className="section-header">
              <Shield size={48} className="section-icon" />
              <h2>Damage & Protection Policy</h2>
              <p>Your peace of mind is our priority</p>
            </div>

            <div className="protection-grid">
              {protectionPolicies.map((policy, index) => (
                <div key={index} className="protection-card">
                  <div className="policy-icon">{policy.icon}</div>
                  <h3>{policy.title}</h3>
                  <p>{policy.description}</p>
                </div>
              ))}
            </div>

            <div className="policy-details">
              <div className="policy-section">
                <h3>What's Covered</h3>
                <ul>
                  <li>Minor wear and tear from normal use</li>
                  <li>Small stains that can be professionally cleaned</li>
                  <li>Loose threads or minor alterations</li>
                  <li>Accidental damage (partial coverage)</li>
                </ul>
              </div>

              <div className="policy-section">
                <h3>What's Not Covered</h3>
                <ul>
                  <li>Intentional damage or misuse</li>
                  <li>Loss or theft of the outfit</li>
                  <li>Permanent stains or burns</li>
                  <li>Major alterations without permission</li>
                </ul>
              </div>

              <div className="policy-section">
                <h3>Security Deposit</h3>
                <ul>
                  <li>Refundable deposit ranges from 50-70% of outfit value</li>
                  <li>Held securely during rental period</li>
                  <li>Refunded within 5-7 business days after return</li>
                  <li>Deductions only for damages exceeding normal wear</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="hiw-section faq-section">
          <div className="container">
            <div className="section-header">
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-grid">
              <div className="faq-item">
                <h4>How long can I rent an outfit?</h4>
                <p>
                  Rental periods start from 3 days. You can extend based on availability and
                  agreement with the lender.
                </p>
              </div>
              <div className="faq-item">
                <h4>What if the outfit doesn't fit?</h4>
                <p>
                  We recommend checking size charts carefully. If there's a major fit issue,
                  contact us within 24 hours of delivery.
                </p>
              </div>
              <div className="faq-item">
                <h4>Do I need to clean the outfit before returning?</h4>
                <p>
                  No! We handle all professional cleaning. Just return the outfit in the same
                  condition you received it.
                </p>
              </div>
              <div className="faq-item">
                <h4>How do I become a verified lender?</h4>
                <p>
                  Complete your profile, submit government ID, and list your first outfit. Our
                  team will verify within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="hiw-cta">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of fashion lovers renting and lending luxury outfits</p>
            <div className="cta-buttons">
              <a href="/catalog" className="btn btn-primary btn-lg">
                Rent an Outfit
              </a>
              <a href="/lend" className="btn btn-outline btn-lg">
                Lend Your Wardrobe
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
