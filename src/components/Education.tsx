import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Universitas Alma Ata",
      degree: "Islamic Banking",
      period: "2022 – Present",
      gpa: "3.90/4.00",
      status: "Current",
      description: "Focused on Islamic financial principles, banking operations, and financial management with excellence in academic performance."
    },
    {
      institution: "MA Salafiyah Kajen",
      degree: "Social Education",
      period: "2019 – 2022",
      status: "Graduate",
      description: "Developed strong foundation in social sciences and educational methodologies with emphasis on community engagement."
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building a strong academic foundation in finance and social sciences
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 h-full"
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                  <GraduationCap className="text-yellow-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                  <p className="text-yellow-400 text-lg font-semibold">{edu.degree}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex items-center text-gray-300">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
                {edu.gpa && (
                  <div className="flex items-center text-yellow-400 font-semibold">
                    <Award size={16} className="mr-2" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 flex-1">{edu.description}</p>
              
              <div className="mt-auto">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  edu.status === 'Current' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;