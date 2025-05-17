import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "An end-to-end eCommerce solution featuring product listing, cart management, user login, and order history. Integrated with Razorpay/PayPal for seamless and secure online transactions.",
      image: "https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Django", "Bootstrap", "MySQL", "Ajax"],

    },
    {
      id: 2,
      title: "AI Website Reviewer",
      description: "A voice-enabled tool that analyzes websites and provides feedback on design, performance, and SEO. Combines Django backend with Voiceflow AI for natural conversation and Tailwind for a modern layout.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Django", "Voiceflow", "JavaScript", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "A real-time chat platform that supports instant messaging using WebSockets. Includes user authentication, private/public chats, and a clean, responsive UI built with Material UI.",
      //image: "https://images.pexels.com/photos/93372/pexels-photo-93372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      image: "https://images.pexels.com/photos/6458056/pexels-photo-6458056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "React.js","TypeScript", "Django Channels", "Django Rest Framework", "Material UI"],
    },
    {
      id: 4,
      title: "AI-Powered Resume Application",
      description: "A dynamic resume builder that leverages AI to suggest personalized content based on job roles. Allows users to generate, preview, and download professional resumes with ease.",
      image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Django", "AI"],
      
    },
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className={`w-20 h-1.5 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of my recent projects that showcase my technical skills and approach to problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white border border-gray-100'
              }`}
            >
              <div 
                className="h-60 overflow-hidden relative group"
                onClick={() => setActiveProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}>
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-semibold">View Details</h3>
                      <div className="flex gap-3">
                        {project.demoLink && (
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {project.codeLink && (
                          <a 
                            href={project.codeLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-2 py-1 text-xs rounded-full ${
                        darkMode 
                          ? 'bg-gray-600 text-blue-300' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setActiveProject(null)}>
            <div 
              className={`max-w-4xl w-full rounded-lg shadow-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                  <div className="flex gap-3">
                    {activeProject.demoLink && (
                      <a 
                        href={activeProject.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-white p-2 rounded ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} hover:opacity-90`}
                      >
                        <ExternalLink size={18} /> <span className="ml-1">Live Demo</span>
                      </a>
                    )}
                    {activeProject.codeLink && (
                      <a 
                        href={activeProject.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-2 rounded ${
                          darkMode 
                            ? 'bg-gray-700 text-white' 
                            : 'bg-gray-100 text-gray-800'
                        } hover:opacity-90`}
                      >
                        <Github size={18} className="inline" /> <span className="ml-1">View Code</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{activeProject.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeProject.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full ${
                        darkMode 
                          ? 'bg-gray-700 text-blue-300' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  className={`mt-8 px-4 py-2 rounded ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* <div className="text-center mt-16">
          <a 
            href="#" 
            className={`inline-block px-6 py-3 rounded-md ${
              darkMode 
                ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            } transition-colors`}
          >
            View More Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;