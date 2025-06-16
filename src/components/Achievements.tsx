import React from 'react';
import { Trophy, Medal, Award, Calendar, MapPin } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Microblog Instagram Competition",
      award: "Winner",
      year: "2024",
      level: "National",
      description: "First place winner in national Instagram microblog competition, showcasing excellence in social media content creation and digital storytelling.",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Innovation for Village Empowerment",
      award: "Honorable Mention",
      year: "2023",
      level: "National",
      description: "Recognized for innovative solutions in village development and community empowerment, demonstrating commitment to social impact and rural development.",
      icon: Award,
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition for excellence in content creation and social innovation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`bg-gradient-to-br ${achievement.color} p-4 rounded-2xl flex-shrink-0`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-4 flex-wrap mb-3">
                      <span className={`px-4 py-2 rounded-full font-semibold bg-gradient-to-r ${achievement.color} text-white`}>
                        {achievement.award}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Medal size={16} className="mr-2" />
                        <span className="font-medium">{achievement.level} Level</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300 bg-gray-700/30 px-3 py-1 rounded-lg w-fit">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">{achievement.year}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {achievement.description}
                </p>
                
                <div className="flex items-center pt-4 border-t border-gray-700/50 mt-auto">
                  <MapPin size={16} className="text-gray-400 mr-2" />
                  <span className="text-gray-400">Indonesia</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">2</div>
                <div className="text-gray-300">National Awards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">2024</div>
                <div className="text-gray-300">Latest Recognition</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-300">National Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;