import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Frederica Owusu</h1>
            <p className="text-sm text-blue-600">AWS Solutions Architect</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-blue-600 transition-colors">Education</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/EfiaBirago" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/fredericaefiabiragoowusu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:serwaaowusu55@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('education')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              <div className="flex space-x-4 px-3 py-2">
                <a href="https://github.com/EfiaBirago" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/fredericaefiabiragoowusu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:serwaaowusu55@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;