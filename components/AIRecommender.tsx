import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, BookOpen, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { getBookRecommendations } from '../services/geminiService';
import BookCard from './BookCard';

const AIRecommender: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm the Parnassus digital bookseller. Tell me what you're in the mood for, or mention a book you loved recently, and I'll find your next great read."
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    const result = await getBookRecommendations(userMsg.text);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: result.text,
      recommendedBooks: result.books
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-parnassus-green text-white p-4 rounded-full shadow-2xl hover:bg-green-900 transition-all duration-300 group flex items-center gap-2 pr-6"
      >
        <div className="bg-white/10 p-2 rounded-full">
           <Sparkles className="w-6 h-6" />
        </div>
        <span className="font-medium">Ask a Bookseller</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 w-full sm:w-[450px] sm:bottom-6 sm:right-6 sm:rounded-2xl bg-white shadow-2xl border border-gray-200 flex flex-col max-h-[85vh] h-[600px] overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
      
      {/* Header */}
      <div className="bg-parnassus-green p-4 flex justify-between items-center text-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg">
             <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg leading-none">Parnassus Bot</h3>
            <p className="text-xs text-white/70 mt-1">Powered by Gemini</p>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50/50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] ${msg.role === 'user' ? 'ml-auto' : ''}`}>
              <div 
                className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-parnassus-green text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              
              {/* Render Recommended Books within the chat stream */}
              {msg.recommendedBooks && msg.recommendedBooks.length > 0 && (
                <div className="mt-4 space-y-3">
                  {msg.recommendedBooks.map((book) => (
                    <div key={book.id} className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex gap-3 hover:shadow-md transition">
                      <img src={book.coverUrl} alt={book.title} className="w-16 h-24 object-cover rounded shadow-sm flex-shrink-0" />
                      <div className="flex flex-col justify-center min-w-0">
                        <h4 className="font-bold text-gray-900 font-serif line-clamp-1">{book.title}</h4>
                        <p className="text-xs text-gray-600 mb-1">{book.author}</p>
                        <p className="text-xs text-gray-500 line-clamp-2 leading-snug">{book.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start w-full">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-parnassus-green" />
                    <span className="text-xs text-gray-500 font-medium">Checking the shelves...</span>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 shrink-0">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="I'm looking for a mystery set in Italy..."
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-full pl-5 pr-12 py-3 focus:ring-2 focus:ring-parnassus-green/20 focus:border-parnassus-green outline-none transition"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={!query.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-parnassus-green text-white p-2 rounded-full hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-2">
          AI can make mistakes. Please check book availability with store.
        </p>
      </form>
    </div>
  );
};

export default AIRecommender;
