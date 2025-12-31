import React from "react";
import shehan1 from '../assets/shehan1.jpeg'

const About = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600  bg-clip-text text-transparent">
              Me
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN - Profile Card (Mobile: Top, Desktop: Left) */}
          <div className="lg:order-1 order-1">
            <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent backdrop-blur-xl p-8 sticky top-28 shadow-2xl shadow-blue-500/10">
              <div className="flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                  <img
                    src={shehan1}
                    alt="Shehan Chathuranga"
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-xl"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  Shehan Chathuranga
                </h3>

                <div className="mt-4 space-y-2">
                  <p className="text-slate-300 font-medium">
                    BSc (Hons) Computer Science
                  </p>
                  <p className="text-slate-400 text-sm">
                    Uva Wellassa University
                  </p>
                  <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Sri Lanka
                  </p>
                </div>

                {/* Stats */}

              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 w-full">
              {/* <StatCard title="University" value="Uva Wellassa University" /> */}
              {/* <StatCard
                title="Degree"
                value="BSc (Hons) in CS"
              /> */}
            </div>

          </div>

          {/* MIDDLE & RIGHT COLUMNS */}
          <div className="lg:col-span-2 lg:order-2 order-2 space-y-8">
            {/* Bio Card */}
            <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 hover:border-white/30 transition-all shadow-xl shadow-purple-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white">My Story</h2>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed text-md">
                <p>
                  Hi! I'm <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Shehan Chathuranga</span>,
                  a passionate computer science student at Uva Wellassa University, Sri Lanka.
                  I thrive on solving complex problems and building elegant software solutions
                  that make a real difference.
                </p>

                <p>
                  My journey in tech is driven by curiosity and a genuine love for learning.
                  From crafting clean user interfaces to architecting robust backend systems,
                  I embrace every challenge as an opportunity to grow and innovate.
                </p>

                <p>
                  With a strong foundation in programming and a commitment to continuous improvement,
                  I'm working towards becoming a skilled software engineer who can contribute
                  meaningfully to cutting-edge projects.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillCard
                // icon="🎯"
                title="Focus Areas"
                items={["Full-stack Development", "RESTful API Design ", "Backend Architecture", "Scalable & Production-Ready Applications"]}
              />
              <SkillCard
                // icon="💪"
                title="Core Strengths"
                items={["Analytical Thinking", "Quick Learner", "Strong Fundamentals", "Team Collaboration"]}
              />
              <SkillCard
                // icon="📚"
                title="Currently Learning"
                items={["Modern Web Frameworks", "Advanced Spring Boot ", "Machine Learning & Computer Vision", "AI-Driven Web Applications  "]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* Reusable Components */
const StatCard = ({ title, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg hover:bg-white/10 transition-all">
    <div className="flex items-start justify-between gap-4">
      
      {/* Left label */}
      <div className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {title}
      </div>

      {/* Right value */}
      <div className="text-slate-300 text-sm text-right leading-snug max-w-[65%]">
        {value}
      </div>

    </div>
  </div>
);



const SkillCard = ({ icon, title, items }) => (
  <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg p-6 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all group">
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-white font-semibold mb-4 text-lg">{title}</h4>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-slate-400 text-sm flex items-start gap-2">
          <span className="text-blue-400 mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);


export default About;