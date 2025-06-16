import React from 'react';
import { 
  Laptop, 
  Palette, 
  Calculator, 
  Globe, 
  TrendingUp,
  Edit3,
  PieChart,
  Video
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Microsoft Office Suite",
      icon: Laptop,
      color: "from-blue-400 to-blue-600",
      skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"]
    },
    {
      title: "Design & Media",
      icon: Palette,
      color: "from-purple-400 to-purple-600",
      skills: ["Canva", "CapCut", "Pixellab", "CorelDraw"]
    },
    {
      title: "Financial Skills",
      icon: Calculator,
      color: "from-green-400 to-green-600",
      skills: ["Basic Accounting", "Financial Analysis", "Islamic Banking Principles"]
    },
    {
      title: "Content & Strategy",
      icon: Edit3,
      color: "from-yellow-400 to-yellow-600",
      skills: ["Content Strategy", "Media Editing", "Social Media Management"]
    }
  ];

  const languages = [
    {
      name: "Bahasa Indonesia",
      level: "Fluent",
      percentage: 100,
      flag: "🇮🇩"
    },
    {
      name: "English",
      level: "Intermediate",
      percentage: 75,
      flag: "🇺🇸"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for content creation, financial analysis, and digital innovation
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-br ${category.color} p-4 rounded-2xl mr-4`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-700/30 px-4 py-3 rounded-lg border border-gray-600/30 hover:border-yellow-400/30 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-medium">{skill}</span>
                        <div className="flex items-center">
                          <TrendingUp size={16} className="text-yellow-400 mr-2" />
                          <span className="text-yellow-400 font-semibold">Expert</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 p-4 rounded-2xl mr-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Languages</h3>
            </div>
            
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{lang.flag}</span>
                      <span className="text-gray-300 font-medium">{lang.name}</span>
                    </div>
                    <span className="text-yellow-400 font-semibold">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 p-8 rounded-2xl border border-yellow-400/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-2xl mr-4">
                <PieChart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Core Competencies</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                <Video size={24} className="text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Content</div>
                <div className="text-yellow-400 font-semibold">Creation</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                <Calculator size={24} className="text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Financial</div>
                <div className="text-yellow-400 font-semibold">Analysis</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                <Edit3 size={24} className="text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Strategic</div>
                <div className="text-yellow-400 font-semibold">Planning</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                <TrendingUp size={24} className="text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Business</div>
                <div className="text-yellow-400 font-semibold">Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;