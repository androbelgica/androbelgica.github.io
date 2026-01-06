import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tighter mb-6">
              ANDRO<span className="text-primary-500">BELGICA</span>
            </h2>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Technical Specialist dedicated to solving complex hardware issues and building robust software solutions. Always open to discussing new projects and technical challenges.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Mail size={20} />, href: "mailto:androbelgica85@gmail.com" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Github size={20} />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 hover:bg-primary-600 hover:border-primary-500 transition-all text-slate-400 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-400 group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-primary-600/10 group-hover:text-primary-400 transition-all">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-medium">androbelgica85@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-primary-600/10 group-hover:text-primary-400 transition-all">
                  <Phone size={16} />
                </div>
                <span className="text-sm font-medium">+639772774819</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end md:justify-start">
            <button 
              onClick={scrollToTop}
              className="group p-4 rounded-2xl bg-primary-600 text-white hover:bg-primary-700 transition-all shadow-xl shadow-primary-950 flex items-center space-x-2 font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Andro A. Belgica. Built with React & Tailwind.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
