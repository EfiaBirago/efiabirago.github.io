import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic excellence in telecommunications engineering and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm border-2 border-blue-200">
            <div className="flex items-start space-x-6">
              <div className="bg-blue-600 p-3 rounded-xl">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Bachelor of Science in Telecommunication Engineering
                    </h3>
                    <p className="text-xl text-gray-700 font-semibold mb-2">
                      Kwame Nkrumah University of Science and Technology (KNUST)
                    </p>
                    <div className="flex items-center space-x-2 mb-4">
                      <Award className="text-yellow-600" size={20} />
                      <span className="text-lg font-semibold text-gray-900">First Class Honors</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={16} />
                    <span>Sep 2019 - Aug 2023</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <BookOpen size={20} />
                      <span>Relevant Coursework:</span>
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Computer Networking",
                        "Data Communication",
                        "Network Planning",
                        "C Programming",
                        "Wireless Communication",
                        "Mobile and Satellite Communication",
                        "Microwave Engineering"
                      ].map((course, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Final Year Thesis</h4>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>AI-Powered Home Automation System:</strong> Developed an application incorporating an AI model 
                      that predicts electricity consumption. The model was integrated into an Arduino-based home automation 
                      system to intelligently control appliance usage, optimizing energy efficiency and reducing costs.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">
                        Machine Learning
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">
                        Arduino
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">
                        IoT
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">
                        Energy Optimization
                      </span>
                    </div>
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

export default Education;