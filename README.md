# Rafay Zia - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases my full-stack development projects across various domains including real estate, AI, financial analysis, education, and enterprise systems.

## 🚀 Live Demo

**Portfolio Website**: [https://rafayzia.dev](https://rafayzia.dev)

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Modern UI**: Clean, professional design with shadcn/ui components
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation

### 📱 User Experience
- **Fast Loading**: Optimized performance with Next.js 14 App Router
- **SEO Optimized**: Meta tags, structured data, and search engine friendly
- **Interactive Elements**: Hover effects, loading states, and smooth transitions
- **Contact Form**: Functional contact form with email integration
- **Live Code Editor**: Interactive code demonstration component

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Component Library**: Reusable UI components with shadcn/ui
- **State Management**: React hooks and context for state management
- **Form Handling**: Formik with Zod validation
- **Icons**: Lucide React icons for consistent iconography

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - Modern component library
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Husky** - Git hooks
- **pnpm** - Package manager

### External Services
- **Vercel** - Deployment and hosting
- **Email Service** - Contact form integration
- **Google Analytics** - Website analytics (if configured)

## 📁 Project Structure

```
portfolio_latest/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact form
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header/Navigation
│   ├── hero.tsx          # Hero section
│   ├── live-code-editor.tsx # Interactive code editor
│   ├── mode-toggle.tsx   # Theme toggle
│   ├── projects.tsx      # Projects showcase
│   ├── seo-headings.tsx  # SEO components
│   ├── skills.tsx        # Skills section
│   ├── tech-ribbon.tsx   # Technology showcase
│   └── testimonials.tsx  # Testimonials
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio_latest
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Configure your environment variables
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript type checking
```

## 📊 Featured Projects

### 🏠 Estate Elevate - Real Estate Platform
A modern real estate platform built with Next.js 14, featuring property listings, user authentication, real-time chat, and interactive maps.

**Tech Stack**: Next.js 14, TypeScript, PostgreSQL, Prisma, Pusher, Real-time Chat, Maps
- **GitHub**: [https://github.com/hunter10471/Estate-Elevate](https://github.com/hunter10471/Estate-Elevate)
- **Live Demo**: [https://estate-elevate.vercel.app](https://estate-elevate.vercel.app)

### 🤖 Ace The AI Interview Coach
An AI-powered interview preparation platform with personalized coaching, real-time feedback, and comprehensive progress tracking.

**Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion, AI, Interview Prep
- **GitHub**: [https://github.com/hunter10471/Ace-TheAI](https://github.com/hunter10471/Ace-TheAI)
- **Live Demo**: [https://ace-the-ai.vercel.app](https://ace-the-ai.vercel.app)

### 📈 Financial Stock Analysis Platform
A comprehensive stock market analysis platform with advanced screening capabilities, real-time charts, and detailed financial metrics.

**Tech Stack**: Next.js 14, TypeScript, Chart.js, Algolia, Firebase, Financial Data
- **Live Demo**: [https://tweevest.com](https://tweevest.com)

### 🍽️ Restaurant Management System Backend
Enterprise-grade RESTful API backend service for restaurant management with order processing, inventory management, and payment integration.

**Tech Stack**: Node.js, Express, TypeScript, MySQL, Socket.IO, Stripe, AWS S3
- **Live Demo**: [http://194.164.91.243:5000/api-docs/#/](http://194.164.91.243:5000/api-docs/#/)

### 📚 Language Learning Web Application
A comprehensive, full-stack language learning platform with interactive flashcards, vocabulary management, and assessment tools.

**Tech Stack**: Next.js 13+, TypeScript, Tailwind CSS, Framer Motion, Flashcards, Education
- **Live Demo**: [https://dev.linguahub.com/vocabulary](https://dev.linguahub.com/vocabulary)

## 🎯 Key Features

### Interactive Components
- **Live Code Editor**: Interactive code demonstration with syntax highlighting
- **Project Filtering**: Filter projects by category (Frontend, Backend, Full Stack)
- **Smooth Animations**: Framer Motion powered page transitions and micro-interactions
- **Theme Toggle**: Dark/light mode with persistent preferences

### Performance Optimizations
- **Next.js 14 App Router**: Latest React features and optimizations
- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic code splitting for optimal loading
- **Static Generation**: Pre-rendered pages for better SEO and performance

### SEO & Accessibility
- **Meta Tags**: Dynamic meta tags for social sharing
- **Structured Data**: JSON-LD schema for search engines
- **Semantic HTML**: Proper HTML structure for accessibility
- **Keyboard Navigation**: Full keyboard accessibility support

## 🔧 Customization

### Adding New Projects
1. Update the `projects` array in `components/projects.tsx`
2. Add project details including title, description, tech stack, and links
3. Choose appropriate category (frontend, backend, fullstack)

### Styling
- **Tailwind CSS**: Utility-first styling approach
- **shadcn/ui**: Pre-built components for consistent design
- **Custom CSS**: Global styles in `app/globals.css`

### Configuration
- **Environment Variables**: Configure in `.env.local`
- **Site Metadata**: Update in `app/layout.tsx`
- **Contact Form**: Configure email service in `app/api/contact/route.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Mobile Experience

- **Responsive Design**: Mobile-first approach
- **Touch Optimized**: Touch-friendly interactions
- **Fast Loading**: Optimized for mobile networks
- **PWA Ready**: Progressive Web App capabilities

## 🔒 Security

- **Environment Variables**: Secure configuration management
- **Input Validation**: Form validation with Zod
- **HTTPS**: Secure connections in production
- **Content Security Policy**: CSP headers for security

## 🤝 Contributing

This is a personal portfolio project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [https://github.com/hunter10471](https://github.com/hunter10471)
- **Portfolio**: [https://rafayzia.dev](https://rafayzia.dev)

## 🙏 Acknowledgments

- **shadcn/ui** for the excellent component library
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Next.js** team for the amazing React framework
- **Vercel** for seamless deployment

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**

*This portfolio showcases my expertise in modern web development, full-stack applications, and creating exceptional user experiences.* 