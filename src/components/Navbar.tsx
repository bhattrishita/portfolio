'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ]

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('about')}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            >
              RB
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-200 hover:text-primary-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <a
              href="/Rishita_Bhatt_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-primary-300 focus:outline-none focus:text-primary-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-md border-t border-zinc-800">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-200 hover:text-primary-300 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/Rishita_Bhatt_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mx-3 mt-4 rounded-md bg-zinc-900 border border-zinc-700 text-gray-200 hover:bg-zinc-800 transition-colors py-2"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
