import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Tech Support Staff',
      company: 'Belgica Law Office',
      location: 'Parañaque, Manila',
      period: '2022 – Present',
      description: [
        'Manages and troubleshoots hardware and software problems for desktops, laptops, and printers.',
        'Develops and maintains desktop applications used in daily office transactions.',
      ],
    },
    {
      title: 'Legislative Tech Support Staff',
      company: 'City Government of Parañaque',
      location: 'Parañaque City',
      period: '2013 – 2022',
      description: [
        'Maintains computers and peripherals for hardware and software issues.',
        'Creates layouts and templates for logos, shirts, mugs, stickers, and large-format designs.',
        'Develops and maintains desktop applications.',
        'Handles database management.',
      ],
    },
    {
      title: 'Technical Support / Data Encoder',
      company: 'Antipuesto Realty and Dev’t Corp.',
      location: 'Manila',
      period: '2008 – 2013',
      description: [
        'Handled computer troubleshooting and maintenance.',
        'Maintained databases and network systems.',
        'Encoded various business documents.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 mb-4"
          >
            Professional Journey
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              <div className="absolute left-[-16px] md:left-[-40px] top-0 bottom-0 w-1 bg-slate-100 group-last:bg-transparent"></div>
              <div className="absolute left-[-23.5px] md:left-[-47.5px] top-2 w-5 h-5 rounded-full bg-white border-4 border-primary-500 shadow-md z-10"></div>
              
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] transition-all hover:bg-white hover:shadow-2xl hover:shadow-primary-100 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="flex items-center text-sm font-semibold text-slate-500">
                        <Briefcase size={16} className="mr-1.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center text-sm font-semibold text-slate-500">
                        <MapPin size={16} className="mr-1.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm self-start">
                    <Calendar size={16} className="mr-2 text-primary-500" />
                    <span className="text-sm font-bold text-slate-700 whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600 leading-relaxed">
                      <CheckCircle2 size={18} className="mr-3 text-primary-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
