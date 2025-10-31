'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react'

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rishitabhatt18@gmail.com',
      href: 'mailto:rishitabhatt18@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Santa Clara, CA',
      href: '#'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    }
  ]

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
      name: 'Resume',
      icon: FileText,
      href: '/Rishita_Bhatt_Resume.pdf',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
            Let’s Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I’m open to roles, collaborations, and interesting problems. Reach me directly via email or connect on LinkedIn.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
            {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-[1px] bg-zinc-800 hover:bg-gradient-to-r hover:from-primary-500 hover:via-purple-500 hover:to-pink-500 overflow-hidden transition-all duration-300 group"
                >
                  <div className="flex items-center p-4 bg-zinc-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-200">
                      <info.icon size={24} className="text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-100">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
          <div className="text-center">
            <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                  target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  className="w-12 h-12 rounded-lg p-[1px] bg-zinc-800 hover:bg-gradient-to-r hover:from-primary-500 hover:via-purple-500 hover:to-pink-500 overflow-hidden transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 text-gray-200 group-hover:text-primary-400">
                      <link.icon size={24} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
