import React from 'react';
import { Instagram, MessageCircle, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23d4af37%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                <img 
                  src="https://res.cloudinary.com/dcil8l2im/image/upload/v1749993878/DSC07111_1_luown4.jpg"
                  alt="Ahmad Syifaul Umam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          <span className="text-white">Ahmad</span>{' '}
          <span className="text-yellow-400">Syifaul Umam</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 animate-slide-up animation-delay-200">
          Creative Content Creator & Finance Enthusiast
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-400">
          Passionate in media, finance, and social impact.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12 animate-slide-up animation-delay-600">
          <a
            href="https://www.instagram.com/faul.um"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
          >
            <Instagram size={24} className="text-white" />
          </a>
          <a
            href="https://wa.me/6281217851128"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
          >
            <MessageCircle size={24} className="text-white" />
          </a>
          <a
            href="mailto:syifaulumam234@gmail.com"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
          >
            <Mail size={24} className="text-white" />
          </a>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;