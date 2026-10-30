import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-slate-900">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Simple Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Shehan Chathuranga.🤫</p>
      </footer>
    </div>
  );
}

export default App;