# Rishita Bhatt - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, a clean design, and a comprehensive showcase of projects and experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Experience Timeline**: Visual timeline showcasing professional experience
- **Project Showcase**: Featured projects with detailed descriptions
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero/About section
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects showcase
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer component
└── lib/
    └── utils.ts             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd rishita-portfolio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, and description
   - Add your social media links
   - Replace profile image

2. **Experience Section** (`src/components/Experience.tsx`):
   - Update work experience entries
   - Modify skills and technologies
   - Add/remove experience items

3. **Projects Section** (`src/components/Projects.tsx`):
   - Update project information
   - Add your project images
   - Update GitHub and live demo links

4. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information
   - Modify social media links
   - Update location and phone number

### Styling

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Modify font families in `tailwind.config.js` and `globals.css`
- **Animations**: Customize animations in individual components

### Images

Place your images in the `public/` directory:
- `profile.png` - Your profile picture
- `Rishita_Bhatt_Resume.pdf` - Your resume
- Project images (update paths in Projects component)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms

The project can be deployed to any static hosting platform that supports Next.js.

## 📱 Sections

### 1. Hero/About
- Personal introduction
- Professional title
- Call-to-action buttons
- Social media links

### 2. Experience
- Timeline of professional experience
- Skills showcase
- Technology stack

### 3. Projects
- Featured projects
- Project descriptions
- Technology tags
- Live demo and source code links

### 4. Contact
- Contact form
- Contact information
- Social media links

## 🎨 Design Features

- **Gradient Text**: Eye-catching gradient text effects
- **Glass Morphism**: Modern glass-like effects
- **Smooth Animations**: Framer Motion animations
- **Hover Effects**: Interactive hover states
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out!

---

**Built with ❤️ by Rishita Bhatt**
