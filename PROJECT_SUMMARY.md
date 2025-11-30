# Sajavo - Luxury Outfit Rental Platform

## 🌟 Project Overview

Sajavo is a comprehensive luxury outfit rental platform built with React and Vite, enabling peer-to-peer (C2C) rental of designer outfits. The platform connects outfit lenders with renters, providing a seamless experience for both parties with features like browsing catalogs, booking management, earnings tracking, and secure payments.

## 🛠️ Tech Stack

### Core Technologies
- **React 18.2.0** - Frontend framework with functional components and hooks
- **Vite 5.2.0** - Build tool and development server
- **React Router DOM 6.22.3** - Client-side routing

### UI & Styling
- **Vanilla CSS** - Custom styling with CSS modules
- **CSS Variables** - Centralized design system
- **lucide-react 0.363.0** - Icon library

### Deployment
- **GitHub Pages** - Hosting platform
- **gh-pages 6.1.1** - Deployment package

## 📁 Project Structure

```
sajavo/
├── src/
│   ├── assets/                  # Images and static assets
│   │   ├── card-1.png
│   │   ├── card-2.png
│   │   ├── card-3.png
│   │   ├── card-4.png
│   │   ├── Carousel-1.png
│   │   ├── Carousel-2.png
│   │   ├── Carousel-3.png
│   │   ├── Carousel-4.png
│   │   ├── Carousel-5.png
│   │   ├── Category-1.png
│   │   ├── Category-2.png
│   │   ├── Category-3.png
│   │   ├── Category-4.png
│   │   └── hero-bg.png
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx       # Navigation header with auth links
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx       # Footer with links and social media
│   │   │   └── Footer.css
│   │   │
│   │   ├── home/
│   │   │   ├── AlternatingGrid.jsx
│   │   │   ├── CategoryCarousel.jsx
│   │   │   ├── CTASection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── ShopByCategories.jsx
│   │   │   └── Testimonials.jsx
│   │   │
│   │   └── product/
│   │       ├── ProductCard.jsx  # Reusable product card component
│   │       └── ProductCard.css
│   │
│   ├── pages/
│   │   ├── Home.jsx             # Landing page with hero and features
│   │   ├── Home.css
│   │   ├── About.jsx            # Company story, mission, team
│   │   ├── About.css
│   │   ├── Auth.jsx             # Login/Register with tabs
│   │   ├── Auth.css
│   │   ├── Catalog.jsx          # Product browsing with filters
│   │   ├── Catalog.css
│   │   ├── ProductDetails.jsx   # Detailed product view
│   │   ├── ProductDetails.css
│   │   ├── Wishlist.jsx         # Saved items management
│   │   ├── Wishlist.css
│   │   ├── Checkout.jsx         # Multi-step booking flow
│   │   ├── Checkout.css
│   │   ├── LendOutfit.jsx       # Upload form for lenders
│   │   ├── LendOutfit.css
│   │   ├── HowItWorks.jsx       # Platform information
│   │   ├── HowItWorks.css
│   │   ├── RenterDashboard.jsx  # Renter management panel
│   │   ├── RenterDashboard.css
│   │   ├── LenderDashboard.jsx  # Lender management panel
│   │   └── LenderDashboard.css
│   │
│   ├── styles/
│   │   └── variables.css        # Design system tokens
│   │
│   ├── App.jsx                  # Main routing configuration
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
│
├── public/                      # Public assets
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                    # Project documentation
```

## ✨ Features & Pages

### 1. Home Page (`/`)
- **Hero Section**: Eye-catching banner with CTA buttons
- **Category Carousel**: Browse by categories (Wedding, Festive, Party, etc.)
- **How It Works**: Step-by-step process explanation
- **Featured Collections**: Curated outfit selections
- **Testimonials**: User reviews and ratings
- **CTAs**: Multiple conversion points

### 2. About Us Page (`/about`)
- **Company Story**: Brand narrative and values
- **Mission Statement**: Vision cards with icons
- **How C2C Works**: 3-step process visualization
- **Trust & Safety**: Security features grid
- **Team Section**: Founder/team member profiles

### 3. Authentication Page (`/auth`)
- **Tab Navigation**: Switch between Login/Register
- **Phone Authentication**: Indian phone number input (+91)
- **Email Field**: Optional email registration
- **User Type Selection**: Choose Renter or Lender
- **Social Login**: Google authentication option
- **Form Validation**: Real-time input validation

### 4. Catalog Page (`/catalog`)
- **Filter Sidebar** (Sticky):
  - Category (Lehenga, Saree, Anarkali, etc.)
  - Occasion (Wedding, Party, Festive, etc.)
  - Designer (Sabyasachi, Manish Malhotra, etc.)
  - Size (XS to XXL)
  - Price Range (slider)
  - Location Toggle (Near Me)
- **Search Bar**: Text search with icon
- **Sort Options**: Popular, Latest, Price (Low to High/High to Low)
- **View Toggle**: Grid/List view
- **Product Grid**: Responsive card layout
- **Pagination**: Page navigation with numbers

### 5. Product Details Page (`/product/:id`)
- **Image Gallery**: Main image with thumbnail navigation
- **Product Information**: Name, designer, description
- **Size Chart**: Available sizes with selection
- **Seller Verification**: Badge and seller details
- **Pricing Calculator**: Daily rate × rental duration
- **Date Picker**: Start and end date selection
- **Security Deposit**: Amount display
- **Reviews Section**: User ratings and comments
- **Recommended Products**: Similar items carousel

### 6. Wishlist Page (`/wishlist`)
- **Saved Items Grid**: ProductCard components
- **Notification Toggle**: Bell icon for price alerts
- **Availability Status**: In stock/Out of stock
- **Remove Functionality**: Delete from wishlist
- **Empty State**: Message when no items saved
- **Quick Actions**: View details, Add to booking

### 7. Checkout Page (`/checkout`)
- **Multi-Step Process**:
  - **Step 1**: Details & Delivery
    - Rental dates confirmation
    - Delivery option (Pickup/Delivery)
    - Shipping address form
  - **Step 2**: Payment & Confirmation
    - Payment method selection (Cards, UPI, Wallets)
    - Terms acceptance
- **Order Summary Sidebar** (Sticky):
  - Product preview
  - Rental dates
  - Price breakdown (Rental + Security + Delivery)
  - Total amount
- **Back/Next Navigation**: Step controls
- **Form Validation**: Required field checks

### 8. Lend Your Outfit Page (`/lend`)
- **Multi-Step Upload Form**:
  - **Step 1**: Outfit Details
    - Title, Designer, Category
    - Size selection (multi-select)
    - Condition description
  - **Step 2**: Photos & Pricing
    - Image upload (minimum 3 photos)
    - Image preview with delete option
    - Daily rental rate input
    - Security deposit amount
  - **Step 3**: Availability
    - Calendar placeholder for date blocking
    - Unavailable dates management
- **Approval Process Info**: Timeline expectation
- **Progress Indicator**: Step visualization
- **Form Validation**: Required fields, image count

### 9. How It Works Page (`/how-it-works`)
- **Renter Flow** (4 steps):
  1. Browse & Search
  2. Book & Pay
  3. Receive Outfit
  4. Return & Review
- **Lender Flow** (4 steps):
  1. Upload Outfit
  2. Get Approved
  3. Manage Bookings
  4. Earn Money
- **Delivery Process Timeline**: 6-stage visual timeline
- **Protection Policies Grid**: Quality, Payments, Insurance
- **FAQ Section**: Common questions
- **CTAs**: "Start Renting" / "Start Lending"

### 10. Renter Dashboard (`/dashboard/renter`)
- **Dashboard Header**: User welcome, Browse Catalog CTA
- **Stats Overview**: Upcoming rentals, Past rentals, Wishlist count, Rating
- **Sidebar Navigation** (5 tabs):
  1. **Upcoming Rentals**: Confirmed/Pending bookings with outfit cards, dates, lender contact
  2. **Past Rentals**: Completed rentals with Rate & Review buttons, Download invoice
  3. **Wishlist**: Link to full wishlist page
  4. **Payments**: Transaction history table with status badges
  5. **My Profile**: Edit personal details, address
- **Rental Cards**: Image, details, dates, actions
- **Status Badges**: Confirmed, Pending, Completed

### 11. Lender Dashboard (`/dashboard/lender`)
- **Dashboard Header**: User welcome, Add New Outfit CTA
- **Earnings Overview**:
  - Total Earnings Card (with chart)
  - Active Outfits count
  - Total Bookings count
  - Average Monthly earnings
- **Sidebar Navigation** (5 tabs):
  1. **My Outfits**: Grid of listed outfits with manage buttons, views/bookings stats
  2. **Bookings**: List of current/upcoming bookings with renter details
  3. **Earnings**: Earnings summary, breakdown by outfit
  4. **Messages**: Inbox from renters with unread badge
  5. **My Profile**: Edit details, bank account info
- **Outfit Cards**: Image, status (Active/Inactive), views, bookings, earnings, edit/delete
- **Visual Charts**: Earnings bar chart in main card

## 🎨 Design System

### Color Palette
```css
--color-primary: #1a1a2e;      /* Dark navy */
--color-secondary: #16213e;    /* Deep blue */
--color-accent: #D4AF37;       /* Luxury gold */
--color-bg-primary: #ffffff;   /* White */
--color-bg-secondary: #f8f9fa; /* Light gray */
--color-text-primary: #1a1a2e; /* Dark text */
--color-text-secondary: #6c757d; /* Gray text */
--color-border: #dee2e6;       /* Light border */
```

### Typography
- **Display Font**: Playfair Display (Headings, Elegant serif)
- **Body Font**: Inter (Body text, Modern sans-serif)
- **Font Sizes**: xs (12px) → 5xl (48px)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing Scale
```css
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
--spacing-3xl: 4rem;      /* 64px */
--spacing-4xl: 6rem;      /* 96px */
```

### Components
- **Border Radius**: sm (4px), md (8px), lg (12px), full (9999px)
- **Shadows**: sm, md, lg for depth hierarchy
- **Transitions**: 200ms ease for smooth interactions
- **Z-Index Layers**: Organized stacking context

## 🔄 User Flows

### Renter Journey
1. Browse Catalog → Filter/Search
2. View Product Details → Check availability
3. Select dates → Add to wishlist/Book
4. Checkout → Enter delivery details
5. Payment → Confirm booking
6. Track order → Receive outfit
7. Use outfit → Return
8. Rate & Review

### Lender Journey
1. Sign up as Lender
2. Upload outfit details
3. Add photos & set pricing
4. Set availability calendar
5. Wait for approval (24-48 hours)
6. Manage bookings in dashboard
7. Coordinate with renters
8. Track earnings
9. Withdraw money

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Collapsible navigation menu
- Stacked layouts (filters become overlay)
- Touch-friendly buttons (min 44px height)
- Optimized image sizes
- Simplified tables (card view)
- Bottom navigation for dashboards

## 🔐 Security Features (Planned for Backend Integration)

- **Authentication**: JWT tokens, OAuth
- **Payment Security**: PCI-compliant payment gateway
- **Data Encryption**: HTTPS, encrypted storage
- **Verification**: Phone/Email OTP
- **Security Deposits**: Hold & release mechanism
- **Review System**: Prevent fake reviews
- **Dispute Resolution**: Refund/complaint handling

## 🚀 Deployment

### Build Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### GitHub Pages Configuration
- **Repository**: chinmaypandey62/sajavo
- **URL**: https://chinmaypandey62.github.io/sajavo
- **Base Path**: './' (configured in vite.config.js)
- **Branch**: gh-pages (auto-deployed)

## 📊 Project Status

### ✅ Completed Features (100%)
1. ✅ CSS Variables & Design System
2. ✅ Authentication Page (Login/Register)
3. ✅ About Us Page (Story, Mission, Team)
4. ✅ Product Details Page (Gallery, Reviews)
5. ✅ Wishlist Page (Saved items, Notifications)
6. ✅ Checkout Page (Multi-step booking)
7. ✅ Enhanced Catalog (Filters, Search, Sort)
8. ✅ Lend Outfit Page (Upload form)
9. ✅ How It Works Page (Informational)
10. ✅ Renter Dashboard (Rentals, Payments, Profile)
11. ✅ Lender Dashboard (Outfits, Earnings, Messages)
12. ✅ Routing & Documentation

### 🔮 Future Enhancements
- **Backend Integration**: 
  - User authentication API
  - Product database
  - Booking management system
  - Payment gateway integration
  - Real-time messaging
  
- **Advanced Features**:
  - AI-based outfit recommendations
  - Virtual try-on (AR)
  - Size prediction algorithm
  - Dynamic pricing
  - Multi-language support
  - Push notifications
  - Email notifications
  - SMS alerts
  
- **Analytics**:
  - User behavior tracking
  - Conversion optimization
  - A/B testing
  - Heat maps
  
- **Performance**:
  - Image optimization (WebP, lazy loading)
  - Code splitting
  - Service workers (PWA)
  - CDN integration

## 🤝 Contributing

This is a production-ready frontend application. For backend integration:
1. Replace mock data with API calls
2. Implement authentication flow
3. Connect payment gateway
4. Set up real-time features
5. Add error handling & loading states

## 📄 License

This project is proprietary software for Sajavo Luxury Rental Platform.

## 👥 Team

Built as a comprehensive luxury rental platform with focus on:
- Elegant UI/UX design
- Responsive layouts
- Consistent design language
- Production-ready code
- Scalable architecture

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: Production-Ready Frontend ✨
