import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-parnassus-cream sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-3xl font-bold text-parnassus-green tracking-tight">
              Parnassus Books
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-800 hover:text-parnassus-green font-medium transition">Books</a>
            <a href="#events" className="text-gray-800 hover:text-parnassus-green font-medium transition">Events</a>
            <a href="#" className="text-gray-800 hover:text-parnassus-green font-medium transition">Staff Picks</a>
            <a href="#" className="text-gray-800 hover:text-parnassus-green font-medium transition">First Editions</a>
            <a href="#" className="text-gray-800 hover:text-parnassus-green font-medium transition">About</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-parnassus-green transition">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-parnassus-green transition relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-parnassus-green text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-parnassus-green focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-parnassus-cream border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">Books</a>
            <a href="#events" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">Events</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">Staff Picks</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">First Editions Club</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">About Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
