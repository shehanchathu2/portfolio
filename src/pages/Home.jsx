import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import TypingText from '../components/TypingText';
import shehan from '../assets/shehan.png';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 lg:py-24 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Hero Image Section - Now on left */}
          <div className="flex justify-center md:justify-start order-1">
            <div className="relative">
              {/* Floating accent elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-3xl"></div>

              {/* Main image container */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-600/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-800">
                  <img
                    src={shehan}
                    alt="Shehan Chathuranga"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Overlay accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Now on right */}
          <div className="space-y-8 order-2">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Available for Internship
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Shehan
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-blue-600">
                  Chathuranga
                </span>
              </h1>

              <div className="h-8 flex gap-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-600/50 border text-white border-slate-800 backdrop-blur-lg">
                  <span className="text-xs font-medium text-slate-400  tracking-wider">
                    Role
                  </span>
                </div>
                <TypingText
                  texts={[
                    "Aspiring Software Engineer",
                    "Full Stack Developer",
                    "Back-End Developer",
                  ]}
                  className="text-xl md:text-xl font-bold text-white"
                />
              </div>
            </div>

            {/* Education info */}
            <div className="flex items-center gap-3 text-slate-400">
              <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent"></div>
              <p className="text-sm font-medium">
                BSc (Hons) Computer Science · Uva Wellassa University
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-slate-400 leading-relaxed max-w-lg">
              Aspiring Full-Stack Engineer skilled in building dynamic web applications and APIs.
              Seeking a software engineering internship to apply skills and contribute to innovative projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/projects"
                className="group relative px-8 py-4 rounded-lg bg-primary/10 border border-primary/50 text-white font-semibold hover:bg-primary/20 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg border border-slate-700 bg-slate-800/50 text-white font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={18} />
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-xs text-slate-500 uppercase tracking-wider">Connect</span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-slate-800 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-slate-800 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;