import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-parnassus-green text-parnassus-cream overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
         <img 
            src="https://images.unsplash.com/photo-1507842217153-e14242ee9203?auto=format&fit=crop&q=80&w=2000" 
            alt="Library background" 
            className="w-full h-full object-cover"
         />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
            An Independent Bookstore for Independent People
          </h1>
          <p className="text-lg md:text-xl text-parnassus-cream/90 max-w-lg leading-relaxed font-light">
            Nashville's literary landmark. Co-founded by Ann Patchett. We believe there is a perfect book for everyone—let us help you find yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <button className="bg-parnassus-gold text-parnassus-dark px-8 py-4 rounded-full font-medium hover:bg-yellow-600 transition flex items-center justify-center gap-2">
               Shop New Releases <ArrowRight className="w-4 h-4" />
             </button>
             <button className="border border-parnassus-cream text-parnassus-cream px-8 py-4 rounded-full font-medium hover:bg-parnassus-cream hover:text-parnassus-green transition">
               Join First Editions Club
             </button>
          </div>
        </div>
        
        {/* Visual Decoration */}
        <div className="hidden md:block md:w-1/2 relative mt-12 md:mt-0">
            <div className="grid grid-cols-2 gap-4 transform rotate-3 scale-90 opacity-90">
                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400" className="rounded-lg shadow-2xl mt-12" alt="Book cover" />
                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400" className="rounded-lg shadow-2xl" alt="Book cover" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
