import React from 'react';
import { Building2, Users, TrendingUp, Target } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            MBKM <span className="text-yellow-400">Internship</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional development through Indonesia's MBKM program
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400/20 p-4 rounded-2xl mr-4">
                  <Building2 className="text-yellow-400" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">BTPN Syariah</h3>
                  <p className="text-yellow-400 text-xl font-semibold">Facilitator</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Participated in the prestigious MBKM (Merdeka Belajar Kampus Merdeka) program 
                  at BTPN Syariah, focusing on financial coaching and strategic development in 
                  Islamic banking sector.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Gained hands-on experience in financial product development, customer relationship 
                  management, and Islamic banking principles while contributing to various strategic 
                  initiatives.
                </p>
              </div>
              
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
                <Target size={16} className="mr-2" />
                <span className="font-medium">Financial Coaching & Strategy</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/30">
                <div className="flex items-center mb-4">
                  <Users className="text-yellow-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold">Key Responsibilities</h4>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Financial coaching and mentorship
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Strategic planning and analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Islamic banking product development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Customer engagement strategies
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 p-6 rounded-2xl border border-yellow-400/20">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-yellow-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold">Skills Developed</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-300">Financial</div>
                    <div className="text-yellow-400 font-semibold">Analysis</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-300">Strategic</div>
                    <div className="text-yellow-400 font-semibold">Planning</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-300">Islamic</div>
                    <div className="text-yellow-400 font-semibold">Banking</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-300">Team</div>
                    <div className="text-yellow-400 font-semibold">Leadership</div>
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

export default Internship;