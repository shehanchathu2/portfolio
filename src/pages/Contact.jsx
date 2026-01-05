import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="min-h-screen pt-28 pb-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-slate-400 text-lg">Let's connect and create something amazing together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Intro Card */}
            <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 shadow-xl shadow-blue-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-white">Let's Talk</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm currently looking for <span className="text-white font-semibold">internship opportunities</span>. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-400 text-sm">Available for opportunities</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <ContactItem 
                icon={<Mail size={20} />}
                label="Email"
                value="shehanwanigarathna@gmail.com"
                href="mailto:shehanwanigarathna@gmail.com"
              />
              <ContactItem 
                icon={<Phone size={20} />}
                label="Phone"
                value="+94 787395790"
                href="tel:+94787395790"
              />
              <ContactItem 
                icon={<MapPin size={20} />}
                label="Location"
                value="Beliatta, Hambanthota"
              />
            </div>

            {/* Social Links */}
            <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 shadow-xl shadow-blue-500/5">
              <h3 className="text-white font-semibold mb-4 text-lg">Connect With Me</h3>
              <div className="flex gap-4">
                <SocialButton 
                  icon={<Github size={20} />}
                  href="https://github.com/shehanchathu2"
                  label="GitHub"
                />
                <SocialButton 
                  icon={<Linkedin size={20} />}
                  href="https://linkedin.com/in/yourprofile"
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 shadow-xl shadow-blue-500/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all backdrop-blur-sm" 
                  placeholder="Your Name" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all backdrop-blur-sm" 
                  placeholder="example@email.com" 
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all backdrop-blur-sm" 
                  placeholder="Internship Opportunity" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all backdrop-blur-sm resize-none" 
                  placeholder="Hello! I'd love to connect with you..."
                ></textarea>
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, href }) => (
  <div className="group rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-6 hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10">
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-slate-400 text-xs mb-1">{label}</p>
        {href ? (
          <a href={href} className="text-white font-medium hover:text-blue-400 transition-colors block truncate">
            {value}
          </a>
        ) : (
          <p className="text-white font-medium truncate">{value}</p>
        )}
      </div>
    </div>
  </div>
);

const SocialButton = ({ icon, href, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-slate-800/50 transition-all hover:scale-105"
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </a>
);

export default Contact;