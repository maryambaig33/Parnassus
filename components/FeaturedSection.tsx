import React from 'react';
import { FEATURED_BOOKS } from '../constants';
import BookCard from './BookCard';
import { ArrowRight } from 'lucide-react';

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-20 bg-parnassus-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-parnassus-green mb-3">This Week's Favorites</h2>
            <p className="text-gray-600">Curated selections from our expert booksellers.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-parnassus-green font-medium hover:text-green-800 transition group">
            View All Books <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_BOOKS.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-parnassus-green font-medium hover:text-green-800 transition">
            View All Books <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
