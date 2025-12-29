import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript (ES6+)", "C++", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Spring Boot", "TensorFlow"]
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
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-surface p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-slate-900 text-slate-300 rounded-full text-sm font-medium border border-slate-700 hover:border-primary hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;