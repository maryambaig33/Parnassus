import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-parnassus-green text-parnassus-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-white">Parnassus Books</h2>
            <p className="text-parnassus-cream/80 leading-relaxed">
              An independent bookstore in Nashville, Tennessee, co-owned by novelist Ann Patchett and Karen Hayes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-parnassus-gold transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-parnassus-gold transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-parnassus-gold transition"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Visit Us</h3>
            <ul className="space-y-4 text-parnassus-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>3900 Hillsboro Pike, Suite 14<br/>Nashville, TN 37215</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(615) 953-2243</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>orders@parnassusbooks.net</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Explore</h3>
            <ul className="space-y-3 text-parnassus-cream/80">
              <li><a href="#" className="hover:text-parnassus-gold transition">Staff Recommendations</a></li>
              <li><a href="#" className="hover:text-parnassus-gold transition">First Editions Club</a></li>
              <li><a href="#" className="hover:text-parnassus-gold transition">Signed Books</a></li>
              <li><a href="#" className="hover:text-parnassus-gold transition">Parnassus Merchandise</a></li>
              <li><a href="#" className="hover:text-parnassus-gold transition">Gift Cards</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Stay in the Loop</h3>
            <p className="text-parnassus-cream/80 mb-4">Subscribe to our newsletter for event updates and reading recommendations.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-parnassus-gold focus:ring-1 focus:ring-parnassus-gold"
              />
              <button className="bg-parnassus-gold text-parnassus-dark font-bold py-3 px-4 rounded hover:bg-yellow-600 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-parnassus-cream/60">
          <p>&copy; {new Date().getFullYear()} Parnassus Books. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
