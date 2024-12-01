'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MediCare</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="#doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <Button>Book Appointment</Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="#doctors" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Doctors</Link>
            <Link href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</Link>
            <div className="px-3 py-2">
              <Button className="w-full">Book Appointment</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}