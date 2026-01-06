import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Mail, ChevronRight } from 'lucide-react';
import me from '../assets/me.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f8fafc]">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 80, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-50"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-primary-100"
            >
              <Zap size={16} />
              <span>Available for New Opportunities</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Solutions <span className="text-gradient">Beyond</span> <br />
              Hardware.
            </h1>

            <div className="font-mono text-base sm:text-lg text-slate-600 max-w-xl mb-10 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:bg-white hover:shadow-md transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-blue-400 select-none">&lt;p&gt;</span>
              <div className="pl-4 py-2">
                I'm <span className="font-bold text-slate-900 italic">Andro</span>, a Technical Support Specialist with a passion for computer programming, web development and complex system troubleshooting. Turning technical challenges into seamless user experiences.
              </div>
              <span className="text-blue-400 select-none">&lt;/p&gt;</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#experience"
                className="group px-8 py-4 bg-primary-600 text-blue rounded-2xl font-bold flex items-center space-x-2 shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all"
              >
                <span>Work Experience</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold flex items-center space-x-3 hover:bg-slate-50 transition-all shadow-sm"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="relative z-10 w-full max-w-lg mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 group">
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={me}
                  alt="Andro Belgica"
                  className="w-full h-auto object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Terminal size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Problem</p>
                  <p className="font-bold text-slate-900">Solver</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-6 bottom-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <Cpu size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Hardware</p>
                  <p className="font-bold text-slate-900">Specialist</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative card shadow/glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary-500/20 blur-[100px] rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
