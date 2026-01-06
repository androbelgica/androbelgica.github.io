import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, PenTool, Bot, ShieldCheck
} from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Dev & Engineering',
      icon: <Code2 className="text-blue-500" />,
      skills: ['VB.NET', 'C#', 'Python', 'React', 'PHP', 'HTML/CSS', 'JavaScript', 'MySQL'],
      color: 'blue'
    },
    {
      title: 'Infrastructure',
      icon: <ShieldCheck className="text-purple-500" />,
      skills: ['Hardware Servicing', 'Networking', 'System Assembly'],
      color: 'purple'
    },
    {
      title: 'Design & Tools',
      icon: <PenTool className="text-indigo-500" />,
      skills: ['Photoshop', 'SketchUp', 'V-Ray', 'MS Office 365', 'Google Workspace'],
      color: 'indigo'
    },
    {
      title: 'AI & Innovation',
      icon: <Bot className="text-amber-500" />,
      skills: ['AI Productivity', 'Workflow Automation', 'Prompt Engineering', 'Research'],
      color: 'amber'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-slate-900"
          >
            Technical Arsenal
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all relative group overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-[40px] opacity-10 transition-opacity group-hover:opacity-30 bg-${cat.color}-500`}></div>

              <div className="mb-6 p-4 rounded-2xl bg-slate-50 inline-block group-hover:bg-white transition-colors">
                {React.cloneElement(cat.icon, { size: 32 })}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6">{cat.title}</h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-600 text-sm font-semibold border border-transparent hover:border-slate-200 hover:bg-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
