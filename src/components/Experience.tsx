'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2, X } from 'lucide-react'
import { useState, useMemo } from 'react'

const experiences = [
  {
    title: 'AI/ML Intern (Software Developer)',
    company: 'SNAP Life Sciences',
    location: 'Remote',
    period: 'July 2025 – December 2025',
    description: 'Spearheaded microservices-based APIs with Node.js and Spring Boot, integrated Couchbase authentication and role-based access control to achieve 99.99% authentication success and stronger data security. Pioneered machine learning models in Python to predict drug net pricing, applied cleaning and feature engineering to boost accuracy by 5% and enhance scalability. Built and containerized React and Streamlit dashboards with Docker, ensured reproducible deployments and faster insights for technical and business teams.',
    technologies: ['Node.js', 'Spring Boot', 'Python', 'Couchbase', 'Docker', 'React', 'Streamlit', 'Machine Learning', 'AWS'],
    type: 'internship'
  },
  {
    title: 'Fullstack Engineer',
    company: 'Minimal Dot',
    location: 'India',
    period: 'May 2023 – June 2024',
    description: 'Designed and developed a real-time task tracking system for a project management tool using Angular, TypeScript, and RESTful API, implementing custom sunburst and Kanban charts with data visualization logic written from scratch, improving task visibility for 50+ active users. Implemented secure document storage with AWS S3, enabling version-controlled uploads of up to 100 files per batch and improving collaboration for distributed teams. Applied strong problem-solving skills while conducting unit and integration tests and establishing a CI/CD pipeline, reducing deployment failures by 25% and improving release scalability.',
    technologies: ['Angular', 'TypeScript', 'RESTful APIs', 'AWS S3', 'CI/CD', 'Unit Testing', 'Integration Testing', 'Data Visualization'],
    type: 'fulltime'
  },
  {
    title: 'Software Engineering Intern',
    company: 'Dots & Coms',
    location: 'India',
    period: 'January 2022 – April 2022',
    description: 'Developed high-performance, responsive web interfaces using HTML/CSS, Bootstrap, and jQuery, improving page load times by 20% and boosting engagement across mobile and desktop. Implemented authentication and session management for an e-commerce platform with NodeJS, MongoDB, and Auth0, reducing login-related drop-offs by 25%. Contributed to Agile sprints, delivering 10+ full-stack features while optimizing back-end queries to cut API response times by 15%.',
    technologies: ['HTML/CSS', 'Bootstrap', 'jQuery', 'Node.js', 'MongoDB', 'Auth0', 'Agile', 'E-commerce'],
    type: 'internship'
  },
  {
    title: 'Software Developer',
    company: 'Frugal Innovation Hub - Santa Clara University',
    location: 'Santa Clara, CA',
    period: 'September 2024 – Present',
    description: 'Working on projects that help new employees access necessary details about company projects and ongoing initiatives. Built tools using Next.js, MongoDB, and Tailwind CSS to streamline onboarding processes. Developed bug-tracking features with Node.js and MongoDB for efficient project management and team transparency.',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Node.js', 'Project Management', 'Bug Tracking'],
    type: 'volunteer'
  }
]

const Experience = () => {

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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'fulltime':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'volunteer':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'academic':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Sort experiences by year (most recent first)
  const sortedExperiences = useMemo(() => {
    const withYear = experiences.map((e) => {
      const match = e.period.match(/\d{4}/)
      const year = match ? parseInt(match[0], 10) : 0
      return { ...e, __year: year }
    })
    return withYear.sort((a, b) => b.__year - a.__year)
  }, [])

  // Accent colors for timeline dots (dark-theme friendly)
  const accentColors = [
    { dot: 'bg-emerald-400', ring: 'ring-emerald-900/40' },
    { dot: 'bg-sky-400', ring: 'ring-sky-900/40' },
    { dot: 'bg-amber-400', ring: 'ring-amber-900/40' },
    { dot: 'bg-rose-400', ring: 'ring-rose-900/40' },
    { dot: 'bg-violet-400', ring: 'ring-violet-900/40' },
  ]

  const extractMonthYear = (period: string): string => {
    const match = period.match(/^[A-Za-z]+\s\d{4}/)
    return match ? match[0] : (period.match(/\d{4}/)?.[0] ?? '')
  }

  return (
    <section id="experience" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-3 sm:mb-4">
            Experience
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development and academic pursuits
          </p>
        </motion.div>

        {/* Timeline - Vertical on Mobile, Horizontal on Desktop */}
        <div className="relative mx-auto max-w-6xl py-8 sm:py-16">
          {/* Mobile: Vertical Timeline */}
          <div className="block sm:hidden px-4">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-700" />
              
              <div className="space-y-8">
                {sortedExperiences.map((exp, index) => {
                  const monthYear = extractMonthYear(exp.period)
                  const accents = accentColors[index % accentColors.length]
                  
                  return (
                    <div key={index} className="relative pl-12">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2">
                        <div className={`w-8 h-8 rounded-full border-4 border-black ${accents.dot} shadow-lg ring-2 ${accents.ring}`} />
                      </div>
                      
                      {/* Content */}
                      <div className="hover:opacity-80 transition-opacity duration-200 text-left">
                        <div className="text-xs font-semibold text-zinc-400 mb-1">{monthYear}</div>
                        <div className="text-base font-bold text-gray-100 mb-1">{exp.company}</div>
                        <div className="text-sm text-gray-300 mb-1">{exp.title}</div>
                        <button
                          onClick={() => setSelectedIndex(index)}
                          className="text-xs text-white hover:text-gray-300 underline transition-colors duration-200"
                        >
                          view details
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden sm:block">
            {/* Timeline rail centered */}
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-zinc-700 rounded-full" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
              {sortedExperiences.map((exp, index) => {
                const isTop = index % 2 === 0
                const monthYear = extractMonthYear(exp.period)
                const accents = accentColors[index % accentColors.length]
                
                return (
                  <div 
                    key={index} 
                    className="relative h-auto min-h-[200px]"
                  >
                    {/* Connector line from rail to label */}
                    <div className={`absolute left-1/2 w-px bg-zinc-700 ${isTop ? 'top-0 bottom-1/2' : 'top-1/2 bottom-0'} transition-colors duration-200`} />

                    {/* Timeline dot */}
                    <div 
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <div className={`w-6 h-6 rounded-full border-4 border-black ${accents.dot} shadow-lg ring-2 ${accents.ring} transition-transform duration-200 hover:scale-125`} />
                    </div>

                    {/* Label above/below - now with full content */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 ${isTop ? 'top-0 -translate-y-full pb-4' : 'bottom-0 translate-y-full pt-4'} w-full max-w-[280px] px-2`}
                    >
                      <div className="text-center">
                        <div className="text-sm font-semibold text-zinc-400 mb-1">{monthYear}</div>
                        <div className="text-sm font-semibold text-gray-100 mb-1 break-words">{exp.company}</div>
                        <div className="text-xs text-gray-300 mb-1 break-words">{exp.title}</div>
                        <button
                          onClick={() => setSelectedIndex(index)}
                          className="text-xs text-white hover:text-gray-300 underline transition-colors duration-200"
                        >
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Popup Modal */}
          {selectedIndex !== null && (
        <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
              onClick={() => setSelectedIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-zinc-900 max-w-3xl w-full rounded-2xl shadow-2xl border border-zinc-800 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shadow-lg hover:bg-zinc-800 transition-colors duration-200 z-10"
                  aria-label="Close"
                >
                  <X size={18} className="text-gray-600" />
                </button>
                <div className="p-4 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 pr-8 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-100">{sortedExperiences[selectedIndex].title}</h3>
                    {sortedExperiences[selectedIndex].type !== 'volunteer' && (
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(sortedExperiences[selectedIndex].type)} whitespace-nowrap`}>
                        {sortedExperiences[selectedIndex].type.charAt(0).toUpperCase() + sortedExperiences[selectedIndex].type.slice(1)}
                      </span>
                    )}
                    </div>
                  <div className="flex items-center text-gray-300 mb-3">
                    <Building2 size={18} className="mr-2 text-primary-600 flex-shrink-0" />
                    <span className="font-semibold break-words">{sortedExperiences[selectedIndex].company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-6 gap-2">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-primary-500 flex-shrink-0" />
                      <span className="mr-6">{sortedExperiences[selectedIndex].location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-primary-500 flex-shrink-0" />
                      <span>{sortedExperiences[selectedIndex].period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{sortedExperiences[selectedIndex].description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sortedExperiences[selectedIndex].technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-zinc-800 text-gray-200 rounded-full text-sm font-medium hover:bg-primary-900/40 hover:text-primary-300 transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32 sm:mt-40"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">Technical Skills</h3>
            <p className="text-base sm:text-lg text-gray-300">Core technologies I use to build reliable, user-first products</p>
          </div>

          <SkillsCarousel />
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

// Skills Carousel Component
function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const skillGroups = [
    { title: 'Languages & Frameworks', items: ['Python', 'Java', 'C', 'C#', 'SQL', 'TypeScript', 'JavaScript', 'Angular', 'React (Next.js)', 'Node.js', 'Django', 'Spring Boot'] },
    { title: 'Backend, APIs & DevOps', items: ['REST & GraphQL APIs', 'Microservices', 'Docker', 'CI/CD', 'Kubernetes (K8s)'] },
    { title: 'Databases & Cloud', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'Couchbase', 'AWS (S3)'] },
    { title: 'AI/ML & Data', items: ['scikit-learn', 'Pandas', 'NumPy', 'SentenceTransformers', 'RapidFuzz', 'Regex', 'Streamlit'] },
    { title: 'Frontend & UI', items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'Material UI', 'Responsive Web'] },
    { title: 'Tools & Practices', items: ['Git/GitHub', 'Jira', 'Figma', 'Agile/Scrum', 'Testing & TDD'] }
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % skillGroups.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + skillGroups.length) % skillGroups.length)
  }

  return (
    <>
      {/* Mobile: Carousel */}
      <div className="block md:hidden relative px-4">
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-in-out`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {skillGroups.map((group, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-[1px] bg-zinc-800 hover:bg-gradient-to-r hover:from-primary-500 hover:via-purple-500 hover:to-pink-500 overflow-hidden transition-all duration-300"
                >
                  <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg h-full min-h-[280px]">
                    <h4 className="font-semibold text-gray-100 mb-4 text-lg">{group.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-800 text-gray-200 rounded-full text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={handlePrev} 
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-full w-10 h-10 shadow-lg hover:bg-zinc-800 active:bg-zinc-700 text-gray-300 flex items-center justify-center text-xl font-bold transition-colors duration-200 z-10 touch-manipulation"
          aria-label="Previous"
        >
          ‹
        </button>
        <button 
          onClick={handleNext} 
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-full w-10 h-10 shadow-lg hover:bg-zinc-800 active:bg-zinc-700 text-gray-300 flex items-center justify-center text-xl font-bold transition-colors duration-200 z-10 touch-manipulation"
          aria-label="Next"
        >
          ›
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {skillGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary-400 w-6' : 'bg-zinc-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-[1px] bg-zinc-800 hover:bg-gradient-to-r hover:from-primary-500 hover:via-purple-500 hover:to-pink-500 overflow-hidden transition-all duration-300"
          >
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <h4 className="font-semibold text-gray-100 mb-4">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 text-gray-200 rounded-full text-sm font-medium hover:bg-primary-900/40 hover:text-primary-300 transition-colors duration-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}
