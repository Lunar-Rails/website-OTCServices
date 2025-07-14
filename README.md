# OTC Services

A modern, responsive website for OTC Services - a UAE-based IT consultancy and software house specializing in future-proof digital solutions.

## 🚀 About OTC Services

OTC Services delivers innovative, scalable, and secure digital solutions that evolve with your business. We specialize in:

- **Business Consulting** - Strategic guidance for digital transformation
- **Cyber Security** - Comprehensive security solutions and compliance
- **Software Development & Integration** - Custom software solutions
- **Business Analytics & Research** - Data-driven insights and decision making

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Forms**: Netlify Forms with React Phone Number Input

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ContactForm.tsx  # Contact form with Netlify integration
│   ├── FloatingLogo.tsx # Animated floating logo component
│   ├── Footer.tsx       # Site footer
│   ├── Logo.tsx         # Main company logo SVG
│   ├── Navbar.tsx       # Navigation component
│   └── logos/           # Partner logo components
├── pages/               # Page components
│   ├── About.tsx        # About us page
│   ├── Contact.tsx      # Contact page
│   ├── FAQ.tsx          # Frequently asked questions
│   ├── Home.tsx         # Homepage
│   └── Services.tsx     # Services page
├── App.tsx              # Main app component with routing
├── index.css            # Global styles and Tailwind imports
└── main.tsx             # App entry point
```

## 🎨 Design Features

- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Modern Gradient Branding** - Custom gradient color scheme throughout
- **Smooth Animations** - Hover effects and micro-interactions
- **Accessibility** - Semantic HTML and proper ARIA labels
- **SEO Optimized** - Meta tags, Open Graph, and structured data

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd otc-services
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment

The site is configured for deployment on Netlify with:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Form Handling**: Netlify Forms integration
- **Redirects**: Configured in `netlify.toml`

### Environment Setup

The site includes:
- Google Analytics tracking
- Netlify form handling
- SEO meta tags and Open Graph
- Progressive Web App manifest

## 📱 Features

### Contact Form
- Integrated with Netlify Forms
- Phone number validation with international support
- Spam protection with honeypot field
- Success/error page redirects

### SEO & Analytics
- Google Analytics integration
- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data for search engines

### Performance
- Optimized images and assets
- Lazy loading where appropriate
- Minimal bundle size with tree shaking
- Fast loading with Vite build system

## 🎯 Key Pages

- **Homepage** - Hero section, services overview, partners showcase
- **Services** - Detailed service descriptions with FAQ
- **About** - Company mission, vision, and team information
- **Contact** - Contact form and company information
- **FAQ** - Comprehensive frequently asked questions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by OTC Services.

## 📞 Contact

**OTC Services**
- Website: [https://otc.services](https://otc.services)
- Email: connect@otc.services
- Location: Dubai, UAE

---

Built with ❤️ by the OTC Services team