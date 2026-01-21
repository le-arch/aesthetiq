# 🏠 Design Aesthetiq - Interior Design Portfolio Website

A comprehensive, feature-rich interior design portfolio website with blog, virtual tours, e-commerce shop, and dark mode. Built with pure HTML, CSS, and JavaScript.

![Design Aesthetiq Banner](https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80)

---

## 📋 Table of Contents
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Feature Guide](#feature-guide)
- [Customization](#customization)
- [Technical Specifications](#technical-specifications)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [License](#license)

---

## ✨ Key Features

### 🎯 Core Functionality
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Dark Mode** - Toggle between light and dark themes with persistence
- ✅ **Smooth Animations** - CSS transitions and interactive elements
- ✅ **Modern Aesthetics** - Elegant color palette with premium typography

### 📑 Multi-Page Website (8 Pages)
1. **Homepage** - Eye-catching landing page
2. **Portfolio** - Interactive project gallery with filtering
3. **Blog** - Complete blogging platform with categories
4. **Virtual Tours** - 360° immersive project experiences
5. **Shop** - E-commerce store with cart and checkout
6. **Services** - Service offerings and descriptions
7. **About** - Company information and team
8. **Contact** - Contact form with validation

### 🛍️ E-Commerce Features
- Product categories and filtering
- Shopping cart with persistent storage
- Price range filtering
- Product details and quick view
- Checkout process

### 📸 Virtual Tours
- Interactive 360° scene navigation
- Hotspot-based room navigation
- VR mode compatibility
- Audio guide support
- Fullscreen viewing

### 📝 Blog System
- Article categories and tags
- Featured posts section
- Newsletter subscription
- Social sharing options
- Article modal viewing

### 🌙 Dark Mode
- System preference detection
- Manual toggle option
- Persistent user preference
- Complete theme coverage

---

## 📁 Project Structure

```
design-aesthetiq-portfolio/
│
├── 📄 HTML Files
│   ├── index.html          # Homepage
│   ├── portfolio.html      # Portfolio/Gallery
│   ├── blog.html           # Blog platform
│   ├── tours.html          # Virtual tours
│   ├── shop.html           # E-commerce shop
│   ├── services.html       # Services page
│   ├── about.html          # About page
│   └── contact.html        # Contact page
│
├── 📂 css/
│   ├── style.css           # Main global styles
│   ├── portfolio.css       # Portfolio page styles
│   ├── blog.css            # Blog styles
│   ├── tours.css           # Tours page styles
│   ├── shop.css            # Shop styles
│   └── responsive.css      # Media queries
│
├── 📂 js/
│   ├── main.js             # Navigation & header
│   ├── portfolio.js        # Portfolio filtering
│   ├── blog.js             # Blog functionality
│   ├── tours.js            # Tours & VR features
│   ├── shop.js             # Product management
│   ├── cart.js             # Shopping cart
│   ├── modal.js            # Modal windows
│   ├── darkmode.js         # Theme switching
│   ├── contact.js          # Form validation
│   └── about.js            # Animations
│
├── 📂 images/              # Project images
├── 📂 audio/               # Audio guides
├── 📂 videos/              # VR videos
├── 📂 fontawesome/         # Font Awesome icons
│
└── README.md               # Documentation
```

---

## 🚀 Getting Started

### Installation

1. **Download the Project**
   - Clone or download the ZIP file
   - Extract to your preferred location

2. **Open in Browser**
   - Open `index.html` in any modern web browser
   - No server setup required (static website)

3. **For Development**
   - Use VS Code with Live Server extension for auto-refresh
   - Edit files in your preferred editor

### Quick Navigation
- Homepage: `index.html`
- All pages accessible via top navigation menu
- Dark mode toggle in header
- Shopping cart icon in navigation

---

## 🎨 Feature Guide

### Portfolio Filtering
- Click on category buttons to filter projects
- Projects update dynamically
- Categories: Residential, Commercial, Modern, etc.

### Blog System
- Browse articles by category or tag
- Subscribe to newsletter
- Share articles on social media
- Read full articles in modal view

### Virtual Tours
- Navigate between rooms using arrow buttons
- Click hotspots for detailed information
- Enable VR mode for immersive experience
- Turn on audio guide for narration
- Try audio demo for sample narration

### E-Commerce Shop
- Browse products by category
- Filter by price range
- Add items to cart
- View cart summary
- Proceed to checkout

---

## 🛠️ Customization Guide

### Modifying Colors & Theme
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #C9A961;      /* Gold accent */
    --secondary-color: #1a1a1a;    /* Dark text */
    --light-color: #f5f5f5;        /* Light background */
    --white: #ffffff;
    --shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

### Adding New Products
In `js/shop.js`:
```javascript
{
    id: 1,
    name: "Product Name",
    category: "furniture",
    price: 24099.99,
    description: "Product description",
    image: "../images/product.jpg",
    rating: 4.8,
    reviews: 124
}
```

### Adding Blog Posts
In `js/blog.js`:
```javascript
{
    id: 1,
    title: "Post Title",
    category: "Design Tips",
    author: "Author Name",
    date: "January 21, 2024",
    content: "Post content here..."
}
```

### Adding Virtual Tours
In `js/tours.js`:
```javascript
{
    id: 1,
    title: "Tour Title",
    category: ["residential", "modern"],
    scenes: ["../images/scene1.jpg"],
    audioGuide: true,
    vrCompatible: true
}
```

---

## 📊 Technical Specifications

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Poppins (Sans-serif)
- **Font Source**: Google Fonts

### Color System
- **Light Mode**: Earthy tones with gold accents
- **Dark Mode**: Dark grays with gold highlights
- **Primary**: #C9A961 (Gold)
- **Secondary**: #1a1a1a (Dark)

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet Landscape**: 992px - 1199px
- **Tablet Portrait**: 768px - 991px
- **Mobile**: 576px - 767px
- **Small Mobile**: Below 576px

### Libraries & Resources
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts
- **Images**: Unsplash, local images
- **Videos**: Local video files

### JavaScript Features
- Event delegation
- LocalStorage for persistence
- Dynamic DOM manipulation
- Form validation
- Modal management

### CSS Features
- CSS Grid & Flexbox layouts
- CSS Variables for theming
- Media queries for responsiveness
- CSS transitions & transforms
- Pseudo-elements for decorations

### Performance
- Optimized images
- Efficient selectors
- Event delegation
- LocalStorage caching
- Lazy-load ready structure

---

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Site available at `https://username.github.io/repo-name`

### Netlify / Vercel
1. Drag and drop project folder, or
2. Connect GitHub repository
3. No build configuration needed (static site)
4. Deploy automatically

### Traditional Hosting
1. Upload all files via FTP/SSH
2. Point domain to hosting directory
3. Ensure `index.html` is in root

---

## 🖥️ Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Opera | Latest | ✅ Full |

---

## 🔒 SEO & Accessibility

### Implemented
- ✅ Semantic HTML5 markup
- ✅ Meta tags (description, keywords)
- ✅ Alt text for all images
- ✅ Proper heading hierarchy
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ Social media meta tags

### Best Practices
- Descriptive link text
- Color contrast compliance
- Keyboard navigation support
- ARIA labels where needed

---

## 🎯 Target Audience

- Homeowners seeking interior design services
- Property developers and real estate agents
- Design enthusiasts and DIY homeowners
- Architecture and design students
- E-commerce customers seeking home decor
- Design trend followers

---

## 🚀 Future Enhancements

Planned features:
- User authentication system
- Admin dashboard for content management
- Real-time chat support
- Advanced product customization
- AR room visualization
- Multi-language support
- Advanced analytics integration
- Payment gateway integration (Stripe, PayPal)
- Inventory management
- Customer review system
- Wishlist functionality
- Advanced search with filters
- Email marketing integration
- Social media integration
- SEO optimization tools

---

## 📝 License

This project is created by **Leonie** for Aesthetiq Interior Design.

---

## 🙏 Acknowledgments

- **Images**: Unsplash
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts
- **Inspiration**: Modern e-commerce & real estate platforms

---

## 📧 Contact

**Design Aesthetiq**
- 📍 Location: 123 Design Aesthetiq, Buea, Cameroon
- 📞 Phone: +237 670 142 124
- 📧 Email: info@aesthetiq.com | basilleonora@gmail.com
- 🕒 Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM

---

<div align="center">

**Created with ❤️ by Design Aesthetiq Studio**

If you find this project helpful, please give it a ⭐ on GitHub!

</div>


