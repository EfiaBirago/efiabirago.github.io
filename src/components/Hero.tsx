import React from 'react';
import { ChevronDown, Award, Code, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              Frederica Efia
              <span className="block text-blue-600">Birgao Owusu</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Certified AWS Solutions Architect & Telecommunications Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Specializing in cloud infrastructure, machine learning, and scalable system design
            </p>
          </div>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-8">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200">
              <Cloud className="text-blue-600" size={20} />
              <span className="text-gray-700 font-medium">AWS Certified</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200">
              <Code className="text-purple-600" size={20} />
              <span className="text-gray-700 font-medium">Full Stack</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200">
              <Award className="text-green-600" size={20} />
              <span className="text-gray-700 font-medium">First Class Honors</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Explore My Work</span>
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;