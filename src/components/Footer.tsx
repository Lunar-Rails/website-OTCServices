import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="w-[200px] h-[40px]">
              <Logo />
            </div>
            <p className="mt-4 text-gray-600">
              Empowering businesses through innovative digital solutions.
            </p>
            <div className="mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Navigation</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-600 hover:text-black transition-colors">Home</Link>
              <Link to="/services" className="block text-gray-600 hover:text-black transition-colors">Services</Link>
              <Link to="/about" className="block text-gray-600 hover:text-black transition-colors">About</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-black transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Resources</h3>
            <div className="space-y-3">
              <Link to="/faq" className="block text-gray-600 hover:text-black transition-colors">FAQ</Link>
              <Link to="/privacy-policy" className="block text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-600 hover:text-black transition-colors">Terms of Use</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Contact</h3>
            <div className="space-y-3 text-gray-600">
              <p>Email: connect@otc.services</p>
              <p>Dubai, UAE</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} OTC Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;