import React from 'react';
import { Book } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';

interface BookCardProps {
  book: Book;
  compact?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ book, compact = false }) => {
  return (
    <div className={`group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${compact ? 'text-sm' : ''}`}>
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {book.isStaffPick && (
          <span className="absolute top-2 left-2 bg-parnassus-gold text-parnassus-dark text-xs font-bold px-2 py-1 rounded">
            Staff Pick
          </span>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="p-3 bg-white rounded-full text-parnassus-green hover:bg-parnassus-green hover:text-white transition shadow-lg" aria-label="Add to cart">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white rounded-full text-red-500 hover:bg-red-500 hover:text-white transition shadow-lg" aria-label="Add to wishlist">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{book.category}</span>
        </div>
        <h3 className={`font-serif font-bold text-gray-900 mb-1 leading-tight group-hover:text-parnassus-green transition-colors ${compact ? 'text-lg' : 'text-xl'}`}>
          {book.title}
        </h3>
        <p className="text-gray-600 font-medium mb-3 italic">{book.author}</p>
        
        {!compact && (
          <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow font-light leading-relaxed">
            {book.description}
          </p>
        )}
        
        <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
          <span className="text-lg font-bold text-parnassus-green">${book.price.toFixed(2)}</span>
          <button className="text-sm font-semibold text-gray-900 underline decoration-parnassus-gold decoration-2 underline-offset-4 hover:text-parnassus-green transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
