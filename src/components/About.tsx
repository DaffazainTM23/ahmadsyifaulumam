import React from 'react';
import { MapPin, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                A highly motivated student in Islamic Banking at Universitas Alma Ata, with strong 
                organizational and financial skills, eager to grow professionally in financial 
                management and media content creation.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <MapPin className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300 text-lg">
                Bantul, Yogyakarta, Indonesia
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 p-8 rounded-2xl border border-yellow-400/20">
              <div className="flex items-center mb-4">
                <Heart className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">Passion & Vision</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm passionate about creating meaningful content that bridges the gap between 
                  financial literacy and social impact. My goal is to empower communities through 
                  innovative media and responsible financial practices.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">3.90</div>
                    <div className="text-sm text-gray-400">Current GPA</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">7+</div>
                    <div className="text-sm text-gray-400">Organizations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;