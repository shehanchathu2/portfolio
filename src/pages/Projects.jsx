import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import wavemirissa from '../assets/p1.png'
import movio from '../assets/p2.png'
import lomoora from '../assets/p3.png'
import bokify from '../assets/p4.png'
import research from '../assets/research.jpeg'

const Projects = () => {
  const projects = [
    {
      title: "Multivariate Anomaly Detection For Wildfire Detection",
      description: "Ongoing research is using LSTM and Vision Transformers for early wildfire detection and stage classification.",
      tags:["Machine Learning", "LSTM", "Vision Transformer", "Python"],
      github: "#",
      live: "#",
      image: research
    },
    {
      title: "Handmade Jewellery Try-On & Customization Platform (Wave Mirissa)",
      description: "Full-stack e-commerce platform featuring secure auth, PayHere integration, order management, and AI-powered virtual try-on with personalized recommendations.",
      tags: ["React", "Spring Boot", "PostgreSQL", "PayHere", "Tailwind CSS"],
      github: "https://github.com/shehanchathu2/WaveMirissa-frontend.git",
      live: null,
      image: wavemirissa
    },
    {
      title: "Hotel Management System | Full-Stack Web Application (Bokify)",
      description: "MERN-based hotel management system featuring hotel browsing, availability checks, secure bookings, user dashboards, and an owner dashboard for managing rooms, bookings, and analytics.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/shehanchathu2/Bokify.git",
      live: "https://bokify-ecru.vercel.app/",
      image:bokify
    },
    {
      title: "E-Commerce Platform | Full-Stack Web Application (Loomora)",
      description: "MERN e-commerce platform with JWT auth, Stripe payments, cart/order tools, tracking, and an admin dashboard for product CRUD and analytics.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/shehanchathu2/Loomora_E-commerce.git",
      live: "https://loomora-f1.vercel.app/",
      image: lomoora
    },
    {
      title: "Movio - Movie Discovery Website",
      description: "A Disney-like movie discovery platform where users can browse, search, and explore movies with details, ratings, and trailers. Features include responsive UI, movie filtering, and dynamic search functionality.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN", "TMDB API"],
      github: "https://github.com/shehanchathu2/Movio-nextjs.git",
      live: "https://movio-nextjs.vercel.app/",
      image: movio
    }
  ];

  return (
    <section className="min-h-screen pt-28 pb-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-slate-400 text-lg">Showcasing my work in full-stack development and machine learning</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-4 py-2 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    {index === 0 ? "Research" : "Full-Stack"}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1.5 bg-slate-900/80 text-slate-300 rounded-lg text-xs font-medium border border-slate-700/50 hover:border-blue-400/50 hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group/link"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover/link:border-blue-400/50 group-hover/link:bg-slate-800 transition-all">
                      <Github size={16} />
                    </div>
                    <span className="font-medium">Source Code</span>
                  </a>
                  
                  {project.live && (
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group/link"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center group-hover/link:bg-blue-500/30 transition-all">
                        <ExternalLink size={16} />
                      </div>
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;