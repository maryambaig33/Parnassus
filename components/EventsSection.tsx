import React from 'react';
import { UPCOMING_EVENTS } from '../constants';
import { Calendar, Clock, Ticket } from 'lucide-react';

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-parnassus-gold font-bold tracking-widest uppercase text-sm mb-2 block">Community</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Upcoming Author Events</h2>
          <p className="text-gray-600 text-lg font-light">
            We host hundreds of authors a year. Join us for readings, signings, and conversations.
          </p>
        </div>

        <div className="space-y-6">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.id} className="group flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="md:w-1/3 relative overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-center min-w-[60px] shadow-sm">
                  <span className="block text-xs font-bold text-gray-500 uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                  <span className="block text-2xl font-serif font-bold text-parnassus-green">{new Date(event.date).getDate()}</span>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.time}</span>
                  {event.ticketRequired && (
                    <span className="flex items-center gap-1 text-parnassus-gold font-medium"><Ticket className="w-4 h-4" /> Ticket Required</span>
                  )}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-parnassus-green transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <div>
                  <button className="bg-parnassus-green text-white px-6 py-3 rounded-full font-medium hover:bg-green-800 transition shadow-sm">
                    {event.ticketRequired ? 'Get Tickets' : 'RSVP Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="text-gray-900 font-medium border-b-2 border-parnassus-gold hover:text-parnassus-green transition pb-1">See Full Calendar</button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
