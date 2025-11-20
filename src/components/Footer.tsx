'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
    <footer className="text-white" style={{ backgroundColor: 'rgb(17 17 17)' }}>
      <div className="container-custom px-4 sm:px-6">
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100">Rishita Bhatt</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Software Developer and CSE Master&apos;s student passionate about creating innovative web applications and solving complex problems.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">Get In Touch</h4>
              <div className="space-y-1.5 sm:space-y-2">
                <p className="text-sm sm:text-base text-gray-300">Santa Clara, CA</p>
                <p className="text-sm sm:text-base text-gray-300 break-words">rishitabhatt18@gmail.com</p>
                <div className="flex space-x-3 sm:space-x-4 pt-1 sm:pt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      aria-label={link.name}
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar removed as requested */}
      </div>
    </footer>
  )
}

export default Footer
