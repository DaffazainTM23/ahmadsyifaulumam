import React from 'react';
import { Users, Crown, Award, Camera, Briefcase, Heart, Star } from 'lucide-react';

const Organizations = () => {
  const organizations = [
    {
      name: "IPNU Ranting",
      position: "Ketua (Chairman)",
      type: "Leadership",
      icon: Crown,
      description: "Leading youth organization focused on Islamic values and community development"
    },
    {
      name: "IPNU PAC",
      position: "Wakil Sekretaris (Vice Secretary)",
      type: "Executive",
      icon: Users,
      description: "Supporting organizational coordination and administrative excellence"
    },
    {
      name: "HIMA Perbankan Syariah",
      position: "Head of Media and Info",
      type: "Media",
      icon: Camera,
      description: "Managing media strategy and information dissemination for Islamic Banking student association"
    },
    {
      name: "MCA Ambassador",
      position: "Ambassador",
      type: "Representation",
      icon: Star,
      description: "Representing brand values and engaging with community stakeholders"
    },
    {
      name: "Relawan LMI",
      position: "Head of Documentation",
      type: "Volunteer",
      icon: Camera,
      description: "Leading documentation efforts for community service initiatives"
    },
    {
      name: "KMPP",
      position: "Entrepreneurship Staff",
      type: "Business",
      icon: Briefcase,
      description: "Supporting entrepreneurship development and business mentorship programs"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Executive':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Media':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Representation':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Volunteer':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Business':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="organizations" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Organization <span className="text-yellow-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Active leadership and participation in various organizations and community initiatives
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org, index) => {
            const IconComponent = org.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-yellow-400/20 p-3 rounded-xl group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <IconComponent className="text-yellow-400" size={24} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(org.type)}`}>
                    {org.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{org.name}</h3>
                <h4 className="text-yellow-400 font-semibold mb-3">{org.position}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{org.description}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Active Role</span>
                    <div className="flex items-center text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-medium">Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="text-yellow-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold">Community Impact</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Through diverse organizational roles, I've developed strong leadership skills, 
              community engagement expertise, and a deep commitment to social impact. These 
              experiences have shaped my ability to collaborate effectively, drive initiatives, 
              and create meaningful change in various contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;