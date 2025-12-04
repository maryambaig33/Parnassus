import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import EventsSection from './components/EventsSection';
import AIRecommender from './components/AIRecommender';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-parnassus-cream flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedSection />
        
        {/* Quote Section */}
        <section className="bg-parnassus-green text-white py-24 text-center px-4">
          <div className="max-w-4xl mx-auto">
             <blockquote className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8">
               "Reading is the inhale, writing is the exhale."
             </blockquote>
             <cite className="text-xl opacity-80 not-italic">— Ann Patchett</cite>
          </div>
        </section>

        <EventsSection />
      </main>
      <Footer />
      <AIRecommender />
    </div>
  );
}

export default App;
