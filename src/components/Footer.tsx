import React from 'react';
import { Heart, Code, Cloud } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Cloud className="text-blue-400" size={24} />
            <span className="text-xl font-bold">Frederica Efia Birgao Owusu</span>
          </div>
          <p className="text-gray-400 mb-6">
            AWS Solutions Architect • Telecommunications Engineer • AI Researcher
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-400" size={16} />
            <span>and</span>
            <Code className="text-blue-400" size={16} />
            <span>in Ghana</span>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-gray-500 text-sm">
            <p>&copy; 2024 Frederica Efia Birgao Owusu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;