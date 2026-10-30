import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Inivac (Pvt) Ltd',
    role: 'Software Engineer Intern',
    period: 'Apr 2026 – Oct 2026',
    duration: '6 months',
    points: [
      'Contributed to Grand Pearl ERP, a production hotel and resort system used daily by staff to manage bookings, restaurant orders, events, inventory, and reports.',
      'Built and enhanced features in React and TypeScript, including multi-room bookings, invoices, payments, discounts, and paginated, filterable views.',
      'Worked with Supabase (PostgreSQL) for data, authentication, and role-based access with Row Level Security, including approval workflows for sensitive operations.',
      'Tested, debugged, and fixed issues reported from live usage, collaborating with the team using Git and code reviews in an Agile environment.',
    ],
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Git', 'Agile'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="pt-28 pb-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-slate-400 text-lg">Where I've applied my skills in a real-world setting</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/60 via-purple-500/40 to-transparent"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-8 w-8 h-8 rounded-full bg-slate-900 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Briefcase size={16} />
                </div>

                {/* Card */}
                <div className="group rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 hover:border-blue-400/50 transition-all duration-300 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="mt-1 text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent w-fit">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <span className="px-4 py-2 bg-slate-900/80 text-slate-300 rounded-full text-xs font-medium border border-slate-700/50 w-fit">
                        {exp.period}
                      </span>
                      <span className="text-slate-500 text-xs">{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 bg-slate-900/80 text-slate-300 rounded-lg text-xs font-medium border border-slate-700/50 hover:border-blue-400/50 hover:text-white transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;