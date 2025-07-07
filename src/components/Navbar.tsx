import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5">
          <Link to="/" className="flex-shrink-0">
            <div className="w-[200px] sm:w-[320px] h-auto">
              <Logo />
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6 lg:space-x-12">
              {!isHome && (
                <Link 
                  to="/" 
                  className="text-black text-base lg:text-lg font-normal hover:opacity-80 transition-opacity"
                >
                  Home
                </Link>
              )}
              <Link 
                to="/services" 
                className="text-black text-base lg:text-lg font-normal hover:opacity-80 transition-opacity"
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-black text-base lg:text-lg font-normal hover:opacity-80 transition-opacity"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-black text-base lg:text-lg font-normal hover:opacity-80 transition-opacity"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-black p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-2 bg-white border-t border-gray-100">
            {!isHome && (
              <Link 
                to="/" 
                className="block px-3 py-4 text-base font-medium text-black hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            )}
            <Link 
              to="/services" 
              className="block px-3 py-4 text-base font-medium text-black hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-4 text-base font-medium text-black hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-4 text-base font-medium text-black hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;