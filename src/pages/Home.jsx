import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import TypingText from '../components/TypingText';
import shehan from '../assets/shehan.png';

const Home = () => {
  return (
    <div id="home">
      <div className="min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-28 relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Hero Image Section */}
            <div className="flex justify-center md:justify-start order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-3xl"></div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-600/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-800">
                    <img
                      src={shehan}
                      alt="Shehan Chathuranga"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 order-2">

              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Open to Junior Software Engineer Roles
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
                      "Junior Software Engineer",
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
                Full-Stack Developer skilled in building dynamic web applications and APIs, with hands-on
                experience from a 6-month software engineering internship on a production hotel ERP system.
                Seeking a junior software engineer position to contribute to innovative projects.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/shehan.pdf"
                  download
                  className="group relative px-8 py-4 rounded-lg bg-primary/10 border border-primary/50 text-white font-semibold hover:bg-primary/20 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </a>

                <a
                  href="#contact"
                  className="px-8 py-4 rounded-lg border border-slate-700 bg-slate-800/50 text-white font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex items-center gap-2"
                >
                  Get in Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Connect</span>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/shehanchathu2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-slate-800 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shehan-chathuranga/"
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* Core Strengths */}
      <div className="w-full bg-gradient-to-b from-[#0b1220] via-[#0a0f1d] to-[#080c18]">
        <div className="bg-gradient-to-br from-slate-900/50 via-slate-950/80 to-slate-900/60 border-y border-slate-800/30">
          <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Core Strengths</h2>
              <p className="text-slate-400 text-center max-w-2xl mx-auto mt-2 leading-relaxed">
                I focus on building reliable, scalable, and user-centric software solutions by combining strong backend engineering with modern frontend development and intelligent system integration.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Full-Stack Web Development",
                  desc: "I build complete web applications from backend to frontend using Spring Boot, Node.js, React, and MERN stack, focusing on clean architecture, scalability, and performance.",
                  color: "from-blue-500/20",
                },
                {
                  title: "Backend & API Engineering",
                  desc: "I specialize in designing RESTful APIs, implementing JWT-based authentication, role-based access control, and secure payment integrations such as Stripe and PayHere.",
                  color: "from-cyan-500/20",
                },
                {
                  title: "AI & Intelligent Systems",
                  desc: "I explore the integration of Machine Learning and Computer Vision into web applications, including anomaly detection and AI-powered virtual try-on systems.",
                  color: "from-purple-500/20",
                }
              ].map((strength, i) => (
                <div key={i} className="relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-primary/50 transition-all duration-500 group overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${strength.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{strength.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;