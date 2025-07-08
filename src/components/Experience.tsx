import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Research Assistant",
      company: "Responsible AI Lab",
      location: "Ghana",
      duration: "Oct 2023 - Nov 2024",
      description: "Led innovative AI research projects and mentored team members in machine learning applications.",
      achievements: [
        "Led a team of 4 to build an audio classification model with Gated-CNN for hearing aid applications",
        "Evaluated projects against the FACETS Framework with scores surpassing 75%",
        "Collaborated to build AI App for translating 4 Ghanaian local languages",
        "Facilitated Robotics training for 30+ teachers from 20+ senior high schools",
        "Mentored 2 new interns and student researchers"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Teaching Assistant",
      company: "KNUST",
      location: "Ghana",
      duration: "Nov 2023 - Oct 2024",
      description: "Supported academic excellence by teaching and mentoring engineering students in multiple technical courses.",
      achievements: [
        "Tutored Computer Application, Project Design, and Digital Signal Processing to 300+ students",
        "Mentored and supervised 9 final year student projects through successful thesis defense",
        "Evaluated and recorded grades for 300+ examination scripts across 2 courses",
        "Coordinated tutorials and lab sessions for 150+ students during MATLAB practical lessons",
        "Managed pre-class setup of audio-visual tools and equipment"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Cybersecurity Intern",
      company: "Virtual Infosec Africa",
      location: "Remote",
      duration: "Oct 2022 - Dec 2022",
      description: "Gained hands-on experience in cybersecurity practices, network administration, and system automation.",
      achievements: [
        "Developed and executed bash scripts to automate system tasks and processes",
        "Implemented Cron jobs to schedule backups and routine maintenance processes",
        "Diagnosed network connectivity issues using ping, traceroute, and netstat",
        "Practiced Bash scripting in virtualized Linux environment using Oracle VM VirtualBox",
        "Configured and simulated network infrastructure in Cisco Packet Tracer"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey spanning research, education, and cybersecurity
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${exp.color} p-8 rounded-2xl border-2 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-xl text-gray-700 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Award size={20} />
                  <span>Key Achievements:</span>
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;