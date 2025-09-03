'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/', label: 'Beranda' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/tentang', label: 'Tentang' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <Image 
              src="/logoindah.png" 
              alt="Indah Express Logo" 
              width={140} 
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-sm text-gray-500 font-medium">Makassar</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium text-base relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/kontak" 
              className="orange-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-base"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-1 border-t border-gray-100">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="px-4 pt-4">
              <Link 
                href="/kontak" 
                className="block w-full text-center orange-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}