"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-12">
              <Image
                src="/images/logo.png"
                alt="Digital & AI Academy"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#353c6b] hover:text-[#7abbed] transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="text-[#353c6b] hover:text-[#7abbed] transition-colors">
              Services
            </Link>
            <Link href="/a-propos" className="text-[#353c6b] hover:text-[#7abbed] transition-colors">
              À Propos
            </Link>
            <Link href="/contact" className="text-[#353c6b] hover:text-[#7abbed] transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact"
              className="bg-[#7abbed] text-white px-6 py-2 rounded-full hover:bg-[#99325a] transition-colors"
            >
              Devis Gratuit
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#353c6b]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-[#353c6b] hover:text-[#7abbed] transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/services" 
                className="text-[#353c6b] hover:text-[#7abbed] transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/a-propos" 
                className="text-[#353c6b] hover:text-[#7abbed] transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link 
                href="/contact" 
                className="text-[#353c6b] hover:text-[#7abbed] transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/contact"
                className="bg-[#7abbed] text-white px-6 py-2 mx-4 rounded-full hover:bg-[#99325a] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Devis Gratuit
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}