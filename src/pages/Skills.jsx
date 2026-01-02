import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript (ES6+)", "PHP", "SQL", ]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js","Next.js", "Express.js", "Tailwind CSS", "Spring Boot", ]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "Docker", "AWS (Basic)", "Postman", "Linux", "VS Code"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    }
  ];

  return (
    <section className="min-h-screen pt-28 pb-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-slate-400 text-lg">My technology stack and expertise</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            return (
              <div 
                key={idx} 
                className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/10"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-5 py-2.5 bg-slate-900/80 text-slate-300 rounded-xl text-sm font-medium border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/80 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-200 cursor-default backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer Badge */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="text-slate-500 text-sm font-medium">
                    {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            number="4"
            label="Skill Categories"
            description="Organized expertise"
          />
          <StatCard 
            number="20+"
            label="Technologies"
            description="Tools & frameworks"
          />
          <StatCard 
            number="∞"
            label="Learning Journey"
            description="Always expanding"
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, description }) => (
  <div className="relative group rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl shadow-blue-500/5 hover:shadow-blue-500/10 text-center">
    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <div className="text-white font-semibold text-lg mb-1">
      {label}
    </div>
    <div className="text-slate-400 text-sm">
      {description}
    </div>
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:blur-xl transition-all"></div>
  </div>
);

export default Skills;