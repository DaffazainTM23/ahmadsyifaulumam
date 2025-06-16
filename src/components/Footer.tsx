import React from 'react';
import { Heart, Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Ahmad <span className="text-yellow-400">Syifaul Umam</span>
            </h3>
            <p className="text-gray-400">
              Creative Content Creator & Finance Enthusiast
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/faul.um"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
            >
              <Instagram size={20} className="text-white" />
            </a>
            <a
              href="https://wa.me/6281217851128"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
            >
              <MessageCircle size={20} className="text-white" />
            </a>
            <a
              href="mailto:syifaulumam234@gmail.com"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
            >
              <Mail size={20} className="text-white" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Bantul, Yogyakarta, Indonesia
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Available for collaboration
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart size={16} className="text-red-500 mx-2" /> by Ahmad Syifaul Umam
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;