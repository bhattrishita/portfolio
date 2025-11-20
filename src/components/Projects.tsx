'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Billing and Inventory Management System',
      description: 'A full-stack billing and inventory management system using C# and MySQL to streamline stock control, billing, and inventory tracking for around 100 products and 20 daily transactions. Features include product/category CRUD operations, tax calculations, billing reports, advanced search/filter capabilities, and secure user authentication with role-based access control, supporting 5-10 concurrent users.',
      image: '/billing_Inventory.png',
      technologies: ['C#', 'MySQL', 'Full-Stack', 'CRUD Operations', 'Role-Based Access Control', 'Inventory Management'],
      github: 'https://github.com/bhattrishita/billing-and-inventory-management-system',
      live: '',
      featured: true
    },
    {
      title: 'Drive to S3',
      description: 'Web app that enables Auth0 login and connects Google Drive, Notion, and Slack via OAuth 2.0. Backend (Node.js/Express) manages tokens and APIs; frontend (Next.js/Tailwind) displays authenticated documents. Fetched data is uploaded securely to AWS S3 for centralized management.',
      image: '/gdrive-aws.png',
      technologies: ['Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Auth0', 'AWS S3', 'OAuth 2.0'],
      github: 'https://github.com/bhattrishita/panora-googledrive-integration',
      live: '',
      featured: true
    },
    {
      title: 'NVDA-NIM (RAG App)',
      description: 'Interactive Streamlit app demonstrating Retrieval-Augmented Generation using NVIDIA\'s NIM APIs. Users upload PDFs; content is embedded with LangChain + FAISS and queried via NVIDIA-hosted LLM for document-aware answers.',
      image: '/rag-nvda.png',
      technologies: ['Streamlit', 'LangChain', 'FAISS', 'NVIDIA NIM', 'Python', 'LLM'],
      github: '',
      live: '',
      featured: true
    },
    {
      title: 'Expense Tracker',
      description: 'Splitwise-style expense tracker with a Java backend implementing 18 design patterns for scalability. Supports auth, session management, group expenses, multiple split methods (equal/percentage/exact), real-time balances, and undo.',
      image: '/expense-tracker.png',
      technologies: ['Java', 'Design Patterns', 'Backend', 'OOP'],
      github: 'https://github.com/bhattrishita/designPatterns',
      live: '',
      featured: false
    },
    {
      title: 'InsightGridAI',
      description: 'AI-powered business copilot that turns raw financial/operational data into simulations and predictive insights. Built on AWS serverless (Athena, S3, Bedrock) with custom Python ML for natural-language queries, forecasting, and what-if scenarios.',
      image: '/insightgridai.png',
      technologies: ['AWS Athena', 'AWS S3', 'AWS Bedrock', 'Python', 'Serverless', 'Machine Learning'],
      github: 'https://github.com/khushiatcode/InsightGridAI',
      live: '',
      featured: false
    },
    {
      title: 'mySchedules',
      description: 'Comprehensive shift management system using Angular, Django, and PostgreSQL to help part-time workers and managers efficiently manage and track shifts. Supports pickups, swaps, releases, and approvals, reducing conflicts. Email notifications integrated via Django backend to inform users of updates in real time.',
      image: '/mySchedules.png',
      technologies: ['Angular', 'Django', 'PostgreSQL', 'REST API', 'Email Service'],
      github: 'https://github.com/sahajpatel008/mySchedules',
      live: '',
      featured: false
    },
    {
      title: 'Beyond Pixels',
      description: 'An AI-powered accessibility tool designed to enhance web accessibility for visually impaired users. Built as a browser extension that integrates with websites, allowing users to retrieve AI-generated descriptions of images in real time using Google Gemini API. Ensures that visually impaired users receive meaningful insights rather than just file paths or missing alt text.',
      image: '/beyond-pixels.png',
      technologies: ['JavaScript', 'Browser Extension', 'Google Gemini API', 'Node.js', 'Accessibility', 'AI/ML'],
      github: 'https://github.com/rebeccad71011/BeyondPixels',
      live: '',
      featured: false
    },
    {
      title: 'Titanic – Supervised ML',
      description: 'Built an ML pipeline to predict Titanic passenger survival using Logistic Regression, SVM, and Random Forest. Included preprocessing, encoding, and hyperparameter tuning with GridSearchCV; achieved strong ROC-AUC with stratified cross-validation and validated using precision-recall and confusion matrices.',
      image: '/titanic-ml.png',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
      github: '',
      live: '',
      featured: false
    },
    {
      title: 'FatJ Café Website',
      description: 'A responsive website developed for a local café to showcase their menu, location, and contact details. Built with HTML, CSS, and JavaScript, featuring a clean and responsive UI design to enhance customer experience and improve online presence.',
      image: '/fatj-cafe.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Web Development'],
      github: 'https://github.com/bhattrishita/fatj-website',
      live: '',
      featured: false
    },
    {
      title: 'Frugal Innovation Hub',
      description: 'Developed a tool to assist new employees in accessing detailed information about projects they will be involved in and other ongoing projects. Built with Next.js, MongoDB, and Tailwind CSS to centralize onboarding information. Added a Node.js + MongoDB bug-tracking feature to record, describe, and monitor bugs, improving transparency and collaboration.',
      image: '/fih-project.png',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Node.js'],
      github: '',
      live: '',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-3">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel projects={projects} />
        </motion.div>
                    </div>
    </section>
  )
}

export default Projects

// Carousel component (3 cards per page, infinite continuous scroll, prev/next, auto-advance every 10s)
type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
  featured: boolean
}

function Carousel({ projects }: { projects: Project[] }) {
  // Track screen size for responsive card display
  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2) // Tablet: 2 cards
      } else {
        setCardsPerView(3) // Desktop: 3 cards
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // For infinite scroll: prepend last N projects, append first N projects
  const infiniteProjects = useMemo(() => {
    if (projects.length <= cardsPerView) return projects
    const lastN = projects.slice(-cardsPerView)
    const firstN = projects.slice(0, cardsPerView)
    return [...lastN, ...projects, ...firstN]
  }, [projects, cardsPerView])

  const [currentIndex, setCurrentIndex] = useState(cardsPerView) // Start at real first project
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Reset currentIndex when cardsPerView changes
  useEffect(() => {
    setIsTransitioning(false)
    setCurrentIndex(cardsPerView)
    setTimeout(() => setIsTransitioning(true), 50)
  }, [cardsPerView])

  // Calculate how much to translate based on cards per view
  const translateX = (currentIndex * 100) / cardsPerView

  const handleNext = () => {
    if (projects.length <= cardsPerView) return
    
    const nextIndex = currentIndex + 1
    
    // If we're about to reach the appended first N projects, loop back
    if (nextIndex >= infiniteProjects.length - cardsPerView) {
      setCurrentIndex(nextIndex)
      // After transition, instantly jump to real first
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(cardsPerView)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 600)
    } else {
      setCurrentIndex(nextIndex)
    }
  }

  const handlePrev = () => {
    if (projects.length <= cardsPerView) return
    
    const prevIndex = currentIndex - 1
    
    // If we're at the real first, jump to before the prepended last N (no transition)
    if (prevIndex < cardsPerView) {
      setIsTransitioning(false)
      setCurrentIndex(infiniteProjects.length - cardsPerView * 2)
      setTimeout(() => {
        setIsTransitioning(true)
        setCurrentIndex(infiniteProjects.length - cardsPerView * 2)
      }, 50)
    } else {
      setCurrentIndex(prevIndex)
    }
  }

  // Auto-advance every 10 seconds
  useEffect(() => {
    if (projects.length <= cardsPerView) return
    
    const interval = setInterval(() => {
      handleNext()
    }, 10000)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, cardsPerView])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={`flex flex-nowrap items-stretch ${isTransitioning ? 'transition-transform duration-[600ms] ease-in-out' : ''}`}
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {infiniteProjects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 flex">
              <div className="rounded-2xl p-[1px] bg-zinc-800 hover:bg-gradient-to-r hover:from-primary-500 hover:via-purple-500 hover:to-pink-500 overflow-hidden transition-all duration-300 group flex-1 flex flex-col">
                <div className="relative bg-zinc-900 rounded-2xl shadow-lg overflow-hidden group flex-1 flex flex-col">
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2.5 py-0.5 bg-zinc-800 text-gray-200 rounded-full text-xs font-medium hover:bg-primary-900/40 hover:text-primary-300 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* GitHub Link Overlay on Hover */}
                {project.github && (
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-900 transition-all duration-200 shadow-lg hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {projects.length > cardsPerView && (
        <>
          <button 
            onClick={handlePrev} 
            className="absolute left-0 md:-left-3 top-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-full w-10 h-10 shadow-lg hover:bg-zinc-800 hover:border-zinc-600 text-gray-300 hover:text-primary-400 flex items-center justify-center text-xl font-bold transition-colors duration-200 z-10"
            aria-label="Previous"
          >
            ‹
          </button>
          <button 
            onClick={handleNext} 
            className="absolute right-0 md:-right-3 top-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-full w-10 h-10 shadow-lg hover:bg-zinc-800 hover:border-zinc-600 text-gray-300 hover:text-primary-400 flex items-center justify-center text-xl font-bold transition-colors duration-200 z-10"
            aria-label="Next"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}
