import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Alma Ata University Admission",
      position: "Staff Content Creator",
      type: "Part-time",
      description: "Creating engaging content for university admission campaigns, managing social media presence, and developing marketing materials to attract prospective students."
    },
    {
      company: "Malibu Café",
      position: "Freelance Content Creator",
      type: "Freelance",
      description: "Developed creative content strategies for café marketing, produced visual content for social media platforms, and increased brand engagement through innovative storytelling."
    },
    {
      company: "Rahma Bordir",
      position: "Production Operator",
      type: "Part-time",
      description: "Managed production operations for embroidery services, ensured quality control, and optimized workflow processes to improve efficiency and customer satisfaction."
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-yellow-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey across content creation, marketing, and operations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400/20 p-3 rounded-full mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                  <Briefcase className="text-yellow-400" size={20} />
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    exp.type === 'Freelance' 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {exp.type}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
              <h4 className="text-yellow-400 font-semibold mb-4">{exp.company}</h4>
              
              <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin size={14} className="mr-1" />
                  <span>Yogyakarta</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;