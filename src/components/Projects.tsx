'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Frugal Innovation Hub - Employee Onboarding Tool',
      description: 'A comprehensive project management tool built with Next.js, MongoDB, and Tailwind CSS that helps new employees access all necessary details about company projects and ongoing initiatives. Features include centralized information access, streamlined onboarding processes, and a bug-tracking system with Node.js and MongoDB for efficient project management and team transparency.',
      image: '/fih-project.png',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Node.js', 'Project Management', 'Bug Tracking'],
      github: '',
      live: '',
      featured: true
    },
    {
      title: 'Beyond Pixels',
      description: 'An AI-powered accessibility tool designed to enhance web accessibility for visually impaired users. Built as a browser extension that integrates with websites, allowing users to retrieve AI-generated descriptions of images in real time using Google Gemini API. Ensures that visually impaired users receive meaningful insights rather than just file paths or missing alt text.',
      image: '/beyond-pixels.png',
      technologies: ['JavaScript', 'Browser Extension', 'Google Gemini API', 'Node.js', 'Accessibility', 'AI/ML'],
      github: 'https://github.com/rebeccad71011/BeyondPixels',
      live: '',
      featured: true
    },
    {
      title: 'mySchedules',
      description: 'A shift management system built using Angular for frontend, Django for backend, and PostgreSQL for database. Designed to help part-time workers and managers manage their shift timings and track worked shifts. Features include shift pickup, real-time shift swaps, releases, and approval using Angular\'s dynamic UI and Django\'s REST APIs, reducing scheduling conflicts by 30%. Includes calendar views and email notifications for enhanced user experience.',
      image: '/mySchedules.png',
      technologies: ['Angular', 'Django', 'PostgreSQL', 'REST APIs', 'Email Notifications', 'Calendar Integration'],
      github: 'https://github.com/sahajpatel008/mySchedules',
      live: '',
      featured: true
    },
    {
      title: 'Billing and Inventory Management System',
      description: 'A full-stack billing and inventory management system using C# and MySQL to streamline stock control, billing, and inventory tracking for around 100 products and 20 daily transactions. Features include product/category CRUD operations, tax calculations, billing reports, advanced search/filter capabilities, and secure user authentication with role-based access control, supporting 5-10 concurrent users.',
      image: '/billing_Inventory.png',
      technologies: ['C#', 'MySQL', 'Full-Stack', 'CRUD Operations', 'Role-Based Access Control', 'Inventory Management'],
      github: 'https://github.com/bhattrishita/billing-and-inventory-management-system',
      live: '',
      featured: false
    },
    {
      title: 'Titanic - Supervised ML Pipeline',
      description: 'A supervised machine learning pipeline built to predict Titanic passenger survival using features like age, gender, class, and embarkation port. Implemented data cleaning, feature engineering, and trained three models: Logistic Regression, SVM,<|uniquepaddingtoken428|> Random Forest. Used GridSearchCV for hyperparameter tuning and achieved 94% ROC-AUC with Random Forest, applying stratified cross-validation to mitigate overfitting.',
      image: '/titanic-ml.png',
      technologies: ['Python', 'scikit-learn', 'Machine Learning', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation'],
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
      title: 'Google Drive to AWS Migration Tool',
      description: 'A utility tool that automates the migration of files from Google Drive to AWS S3, ensuring efficient, secure, and reliable cloud storage transfer.',
      image: '/gdrive-aws.png',
      technologies: ['Python', 'AWS S3', 'Google Drive API', 'Automation'],
      github: '',
      live: '',
      featured: false
    },
    {
      title: 'E-commerce Platform (Dots & Coms)',
      description: 'High-performance e-commerce platform with authentication, session management, and responsive design, reducing login drop-offs by 25%.',
      image: '/ecommerce-dots.png',
      technologies: ['Node.js', 'MongoDB', 'Auth0', 'Bootstrap', 'jQuery'],
      github: '',
      live: '',
      featured: false
    },
    {
      title: 'Project Management Dashboard',
      description: 'Real-time task tracking system with custom data visualization charts including sunburst and Kanban views, improving task visibility for 50+ users.',
      image: '/pm-dashboard.png',
      technologies: ['Angular', 'TypeScript', 'Data Visualization', 'REST APIs'],
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
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
          {/* Controlled carousel with 3 cards per page */}
          {(() => {
            const pages = Math.ceil(projects.length / 3)
            return null
          })()}
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
  const pages = useMemo(() => {
    const chunks: Project[][] = []
    for (let i = 0; i < projects.length; i += 3) {
      chunks.push(projects.slice(i, i + 3))
    }
    // For infinite scroll: add duplicate of last page at start, and first page at end
    if (chunks.length > 1) {
      return [chunks[chunks.length - 1], ...chunks, chunks[0]]
    }
    return chunks
  }, [projects])

  const [page, setPage] = useState(1) // Start at index 1 (real first page)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Get real page count (without duplicates)
  const realPagesCount = useMemo(() => {
    const chunks: Project[][] = []
    for (let i = 0; i < projects.length; i += 3) {
      chunks.push(projects.slice(i, i + 3))
    }
    return chunks.length
  }, [projects])

  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => {
        const next = p + 1
        if (next >= pages.length - 1) {
          // If we're about to reach the duplicate first page, instantly jump to real first
          setTimeout(() => {
            setIsTransitioning(false)
            setPage(1)
            setTimeout(() => setIsTransitioning(true), 50)
          }, 1200)
          return next
        }
        return next
      })
    }, 10000)
    return () => clearInterval(id)
  }, [pages.length, realPagesCount])

  const prev = () => {
    const newPage = page - 1
    if (newPage <= 0) {
      // If going backwards from real first, jump to real last
      setIsTransitioning(false)
      setPage(realPagesCount)
      setTimeout(() => setIsTransitioning(true), 50)
      return
    }
    setPage(newPage)
  }

  const next = () => {
    const newPage = page + 1
    if (newPage >= pages.length - 1) {
      // If we're about to reach the duplicate first page, instantly jump to real first
      setIsTransitioning(false)
      setPage(newPage)
      setTimeout(() => {
        setPage(1)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 1200)
      return
    }
    setPage(newPage)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={`flex ${isTransitioning ? 'transition-transform duration-[1200ms] ease-in-out' : ''}`}
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="min-w-full grid md:grid-cols-3 gap-5">
              {chunk.map((project, index) => (
                <div key={`${chunkIndex}-${index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-200">
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">Featured</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-secondary text-sm py-1.5 px-4">
                        <Github size={16} /> View Source Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button onClick={prev} className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white border border-primary-200 rounded-full w-10 h-10 shadow hover:bg-primary-50 text-primary-600 hover:text-primary-700 flex items-center justify-center text-xl font-bold transition-colors duration-200">‹</button>
      <button onClick={next} className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white border border-primary-200 rounded-full w-10 h-10 shadow hover:bg-primary-50 text-primary-600 hover:text-primary-700 flex items-center justify-center text-xl font-bold transition-colors duration-200">›</button>
    </div>
  )
}
