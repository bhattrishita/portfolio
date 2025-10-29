'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2, X } from 'lucide-react'
import { useState, useMemo } from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Intern (Software Developer)',
      company: 'SNAP Life Sciences',
      location: 'Remote',
      period: 'July 2025 – Present',
      description: 'Spearhead microservices-based APIs with Node.js and Spring Boot, integrating Couchbase authentication and role-based access control to achieve 99.99% authentication success and stronger data security. Pioneer machine learning models in Python to predict drug net pricing, applying cleaning and feature engineering to boost accuracy by 5% and enhance scalability. Build and containerize React and Streamlit dashboards with Docker, ensuring reproducible deployments and faster insights for technical and business teams.',
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
      title: 'Developer Volunteer',
      company: 'Frugal Innovation Hub - Santa Clara University',
      location: 'Santa Clara, CA',
      period: 'September 2024 – Present',
      description: 'Working on projects that help new employees access necessary details about company projects and ongoing initiatives. Built tools using Next.js, MongoDB, and Tailwind CSS to streamline onboarding processes. Developed bug-tracking features with Node.js and MongoDB for efficient project management and team transparency.',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Node.js', 'Project Management', 'Bug Tracking'],
      type: 'volunteer'
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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Sort experiences by year (most recent first)
  const sortedExperiences = useMemo(() => {
    const withYear = experiences.map((e) => {
      const match = e.period.match(/\d{4}/)
      const year = match ? parseInt(match[0], 10) : 0
      return { ...e, __year: year }
    })
    return withYear.sort((a, b) => b.__year - a.__year)
  }, [experiences])

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development and academic pursuits
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative mx-auto max-w-6xl py-16">
          {/* Timeline rail centered */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-secondary-200 via-primary-300 to-secondary-200 rounded-full" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {sortedExperiences.map((exp, index) => {
              const isTop = index % 2 === 0
              const year = exp.period.match(/\d{4}/)?.[0] || ''
              
              return (
                <div key={index} className="relative h-48">
                  {/* Connector line from rail to label */}
                  <div className={`absolute left-1/2 w-0.5 bg-secondary-300 ${isTop ? 'top-0 bottom-1/2' : 'top-1/2 bottom-0'}`} />

                  {/* Timeline dot */}
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full border-4 border-white bg-primary-600 shadow-lg ring-2 ring-primary-200 transition-transform duration-200 hover:scale-110">
                      <span className="pointer-events-none absolute inset-0 rounded-full animate-ping bg-primary-300 opacity-30" />
                    </div>
                  </div>

                  {/* Label above/below */}
                  <div className={`absolute left-1/2 -translate-x-1/2 ${isTop ? 'top-0 -translate-y-full pb-4' : 'bottom-0 translate-y-full pt-4'} text-center max-w-[200px]`}>
                    <div className="text-base font-bold text-primary-600 mb-1">{year}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">{exp.company}</div>
                    <div className="text-xs text-gray-600 line-clamp-2">{exp.title}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Popup Modal */}
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
              onMouseEnter={() => setHoveredIndex(hoveredIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white max-w-3xl w-full mx-4 rounded-2xl shadow-2xl border border-primary-200 max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setHoveredIndex(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white border border-primary-200 flex items-center justify-center shadow-lg hover:bg-primary-50 hover:border-primary-300 transition-colors duration-200 z-10"
                  aria-label="Close"
                >
                  <X size={18} className="text-gray-600" />
                </button>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4 pr-8">
                    <h3 className="text-2xl font-bold text-gray-900">{sortedExperiences[hoveredIndex].title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(sortedExperiences[hoveredIndex].type)} whitespace-nowrap ml-4`}>
                      {sortedExperiences[hoveredIndex].type.charAt(0).toUpperCase() + sortedExperiences[hoveredIndex].type.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Building2 size={18} className="mr-2 text-primary-600" />
                    <span className="font-semibold">{sortedExperiences[hoveredIndex].company}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-6">
                    <MapPin size={16} className="mr-2 text-primary-500" />
                    <span className="mr-6">{sortedExperiences[hoveredIndex].location}</span>
                    <Calendar size={16} className="mr-2 text-primary-500" />
                    <span>{sortedExperiences[hoveredIndex].period}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{sortedExperiences[hoveredIndex].description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sortedExperiences[hoveredIndex].technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200">
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
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h3>
            <p className="text-lg text-gray-600">Core technologies I use to build reliable, user-first products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              { title: 'Languages & Frameworks', items: ['Python', 'Java', 'C', 'C#', 'SQL', 'TypeScript', 'JavaScript', 'Angular', 'React (Next.js)', 'Node.js', 'Django', 'Spring Boot'] },
              { title: 'Backend, APIs & DevOps', items: ['REST & GraphQL APIs', 'Microservices', 'Docker', 'CI/CD', 'Kubernetes (K8s)'] },
              { title: 'Databases & Cloud', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'Couchbase', 'AWS (S3)'] },
              { title: 'AI/ML & Data', items: ['scikit-learn', 'Pandas', 'NumPy', 'SentenceTransformers', 'RapidFuzz', 'Regex', 'Streamlit'] },
              { title: 'Frontend & UI', items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'Material UI', 'Responsive Web'] },
              { title: 'Tools & Practices', items: ['Git/GitHub', 'Jira', 'Figma', 'Agile/Scrum', 'Testing & TDD'] }
            ].map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-4">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
