import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-slate-300">
              I'm currently looking for **internship opportunities** for Summer 2025. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <span>your.email@university.edu</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4 bg-surface p-6 rounded-xl border border-slate-800">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
              <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
              <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
              <textarea id="message" rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Hello..."></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-slate-900 font-bold py-3 rounded-lg hover:bg-blue-400 transition-colors flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;