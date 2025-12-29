import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-slate-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Simple Footer */}
        <footer className="py-6 text-center text-slate-500 text-sm border-t border-slate-800">
          <p>© {new Date().getFullYear()} Shehan Chathuranga.🤫</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;