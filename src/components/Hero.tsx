'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/bhattrishita',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rishita-bhatt/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:rishitabhatt18@gmail.com',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-100 mb-4 sm:mb-6"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Rishita</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
            >
              CSE Master&apos;s Student at{' '}
              <span className="font-semibold text-primary-600">Santa Clara University</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0"
            >
              also a software developer and AI enthusiast. I love building user-centric applications, solving real problems with clean engineering, and exploring how AI can power smarter, scalable solutions. I'm driven by curiosity and enjoy collaborating to turn complex challenges into elegant, impactful solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-200 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon size={24} className="sm:w-7 sm:h-7" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-[24px] sm:rounded-[32px] blur-2xl opacity-20" />
                <div className="relative w-full h-full bg-zinc-900 rounded-[24px] sm:rounded-[32px] p-2 shadow-2xl overflow-hidden">
                  <img src="/profile.png" alt="Rishita Bhatt" className="w-full h-full object-cover rounded-[20px] sm:rounded-[24px]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('experience')}
          className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
        >
          <ChevronDown size={28} className="sm:w-8 sm:h-8 animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
