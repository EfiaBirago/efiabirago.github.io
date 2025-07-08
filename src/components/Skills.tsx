import React from 'react';
import { Cloud, Code, Database, Network, Cpu, Monitor } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Technologies",
      icon: <Cloud className="text-blue-600" size={24} />,
      skills: ["AWS (EC2, S3, IAM, VPC)", "Terraform", "Linux Administration", "Git"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Programming",
      icon: <Code className="text-green-600" size={24} />,
      skills: ["Python", "MATLAB", "C Programming", "Bash Scripting"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="text-purple-600" size={24} />,
      skills: ["Deep Learning", "Supervised Learning", "Audio Classification", "Gated-CNN"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Networking",
      icon: <Network className="text-orange-600" size={24} />,
      skills: ["Cisco Packet Tracer", "Routing & Switching", "Network Simulation", "VLAN Configuration"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "DevOps & Containers",
      icon: <Database className="text-red-600" size={24} />,
      skills: ["Docker", "Kubernetes", "Minikube", "Docker Compose"],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Design & Simulation",
      icon: <Monitor className="text-indigo-600" size={24} />,
      skills: ["HFSS", "ADS", "Microwave Design", "RF Engineering"],
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning cloud infrastructure, programming, and advanced engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} p-6 rounded-2xl border-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center space-x-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "AWS Certified Solutions Architect-Associate",
              "AWS Cloud Practitioner Essentials",
              "Google IT Support Specialist",
              "DeepLearning.AI Advanced Algorithms",
              "Product Management for AI & Data",
              "AWS Certified Solutions Architect (Azubi Africa)"
            ].map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;