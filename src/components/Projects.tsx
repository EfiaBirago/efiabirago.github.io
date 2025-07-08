import React from 'react';
import { Shield, Container, Globe, Diameter as Kubernetes, ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Secure VPC Architecture Design",
      description: "Designed a secure VPC with 6+ AWS services, including public/private subnets, Internet Gateway, ALB, ASG and Route Tables. The EC2 instances in an auto scaling group were deployed behind an Application Load Balancer in 2 availability zones for fault tolerance.",
      icon: <Shield className="text-blue-600" size={32} />,
      technologies: ["AWS VPC", "EC2", "ALB", "ASG", "Route Tables", "Multi-AZ"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Dockerized Web Application Deployment",
      description: "Containerized a Python-based web app with Docker and hosted with AWS Amplify. Incorporated Docker Compose to orchestrate multi-container environments with version-controlled infrastructure.",
      icon: <Container className="text-green-600" size={32} />,
      technologies: ["Docker", "Docker Compose", "AWS Amplify", "Python", "CI/CD"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Static Website Hosting via AWS",
      description: "Served a static HTML/CSS site on Amazon S3 with public read access and enabled website hosting features. Repeated deployment using AWS Amplify for seamless continuous deployment.",
      icon: <Globe className="text-purple-600" size={32} />,
      technologies: ["AWS S3", "AWS Amplify", "HTML/CSS", "Static Hosting"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Kubernetes Application Deployment",
      description: "Launched a lightweight web application on a local Kubernetes cluster using Minikube and kubectl, simulating a production-grade deployment pipeline with container orchestration.",
      icon: <Kubernetes className="text-orange-600" size={32} />,
      technologies: ["Kubernetes", "Minikube", "kubectl", "Container Orchestration"],
      color: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cloud infrastructure and application deployment projects showcasing scalable, secure solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.color} p-8 rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-start space-x-4 mb-6">
                {project.icon}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Projects */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research & AI Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Audio Classification Model</h4>
              <p className="text-gray-700 mb-4">
                Led a team of 4 to build an audio classification model with Gated-CNN that can classify speech from noisy backgrounds with applications in hearing aids.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">Gated-CNN</span>
                <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">Audio Processing</span>
                <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">Team Leadership</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-3">AI Language Translation App</h4>
              <p className="text-gray-700 mb-4">
                Collaborated to build an AI App with language translation models that translates 4 Ghanaian local languages to facilitate reporting of Intimate Partner Violence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">NLP</span>
                <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">Translation</span>
                <span className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">Social Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;