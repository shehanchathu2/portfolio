import React from 'react';
import { Terminal, BookOpen, Database, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">About Me</h2>
        
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-lg">
            I am a final-year **Computer Science** student specializing in Software Engineering. 
            My journey began with simple automation scripts and has evolved into building complex, scalable web architectures.
          </p>
          <p>
            Currently, I am actively seeking **Software Engineering Internships**. I thrive in environments that challenge 
            my problem-solving skills and allow me to work with modern technologies. My academic focus includes 
            Advanced Algorithms, Distributed Systems, and Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Card 1 */}
          <div className="p-6 bg-surface rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
            <Terminal className="text-primary h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Full-Stack Development</h3>
            <p className="text-secondary">Experienced in building end-to-end applications using the MERN stack (MongoDB, Express, React, Node.js).</p>
          </div>
          
          {/* Card 2 */}
          <div className="p-6 bg-surface rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
            <Brain className="text-primary h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h3>
            <p className="text-secondary">Passionate about integrating AI models into web apps. Experience with Python, TensorFlow, and basic NLP projects.</p>
          </div>

           {/* Card 3 */}
           <div className="p-6 bg-surface rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
            <Database className="text-primary h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Backend Engineering</h3>
            <p className="text-secondary">Strong understanding of RESTful APIs, database management (SQL & NoSQL), and authentication protocols.</p>
          </div>

           {/* Card 4 */}
           <div className="p-6 bg-surface rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
            <BookOpen className="text-primary h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
            <p className="text-secondary">Consistently upskilling via LeetCode for DSA and keeping up with the latest tech trends in Cloud Computing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;