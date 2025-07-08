import React from 'react';
import { MapPin, Languages, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate cloud architect and engineer with a strong foundation in telecommunications and AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                I am a <strong>Certified AWS Solutions Architect</strong> with a First Class Honors degree in Telecommunications Engineering from KNUST. My expertise spans across cloud infrastructure, machine learning, and scalable system design.
              </p>
              <p className="text-lg leading-relaxed">
                With experience in research, teaching, and cybersecurity, I have led teams to build innovative AI solutions, including audio classification models and language translation applications for social impact.
              </p>
              <p className="text-lg leading-relaxed">
                My technical journey includes designing secure VPC architectures, containerizing applications with Docker, and deploying Kubernetes clusters. I'm passionate about leveraging cloud technologies to solve complex problems and drive digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-700">Accra, Ghana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Languages className="text-purple-600" size={20} />
                <span className="text-gray-700">English, Basic German</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Publications</h3>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Techno-neocolonialism: an emerging risk in the artificial intelligence revolution
              </h4>
              <p className="text-gray-600 mb-4">
                A research paper exploring the societal implications of AI technology and its potential risks in developing nations.
              </p>
              <a 
                href="https://doi.org/10.25965/trahs.6382" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Read Publication</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;