import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A productivity app that uses NLP to categorize tasks automatically. Built with a MERN stack and OpenAI API integration.",
      tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
      github: "#",
      live: "#",
      image: "https://via.placeholder.com/600x400" // Replace with project screenshot
    },
    {
      title: "E-Commerce Microservices",
      description: "A scalable backend for an e-commerce platform built using Spring Boot microservices, communicating via Kafka.",
      tags: ["Java", "Spring Boot", "Kafka", "Docker"],
      github: "#",
      live: null, // Example if not live
      image: "https://via.placeholder.com/600x400"
    },
    {
      title: "Real-time Chat Application",
      description: "Full-duplex chat application supporting private messaging and rooms, utilizing Socket.io for real-time communication.",
      tags: ["Socket.io", "Express", "React", "Redis"],
      github: "#",
      live: "#",
      image: "https://via.placeholder.com/600x400"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-surface rounded-xl overflow-hidden border border-slate-800 hover:-translate-y-2 transition-transform duration-300 shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-900 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                    <Github size={16} /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;