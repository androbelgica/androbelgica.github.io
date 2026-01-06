import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Database, Terminal, Globe, Map } from 'lucide-react';

import interactiveMap1 from '../assets/feature_project_images/interactive_map/1.png';
import interactiveMap2 from '../assets/feature_project_images/interactive_map/2.png';
import interactiveMap3 from '../assets/feature_project_images/interactive_map/3.png';
import interactiveMap4 from '../assets/feature_project_images/interactive_map/4.png';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Law Office Website',
      category: 'Web Application',
      description: 'A comprehensive law firm management platform featuring case tracking, personnel records, and automated legal documentation.',
      tech: ['React JS', 'Tailwind CSS', 'PostgreSQL', 'SQL', 'HTML'],
      icon: <Globe className="text-blue-500" />,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
      link: 'https://belgicalawph.netlify.app/',
    },
    {
      title: 'Subdivision Interactive Map',
      category: 'Interactive Map',
      description: 'A dynamic interactive map system for subdivision layout management and lot visualization.',
      tech: ['React JS', 'TypeScript', 'Tailwind CSS', 'SQLite'],
      icon: <Map className="text-purple-500" />,
      images: [interactiveMap1, interactiveMap2, interactiveMap3, interactiveMap4],
      githubLink: 'https://github.com/androbelgica/Subdivision_Interactive-Map',
      hideCaseStudy: true,
    },
    {
      title: 'Design Hub & Templates',
      category: 'Graphic Design',
      description: 'A comprehensive collection of large-format designs and branding templates for official city merchandise and logos.',
      tech: ['Photoshop', 'CorelDraw', 'Asset Management'],
      icon: <Code className="text-indigo-500" />,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
      githubLink: '#',
    },
    {
      title: 'Hardware Diagnostic Toolkit',
      category: 'Automation',
      description: 'Custom Python scripts designed to automate hardware health checks and network monitoring across office infrastructure.',
      tech: ['Python', 'Network API', 'Automation'],
      icon: <Terminal className="text-amber-500" />,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold text-slate-900"
            >
              Recent Projects
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-md"
          >
            A showcase of various applications and design systems I've developed throughout my career.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all hover:bg-white hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                {project.images ? (
                  <ImageSlider images={project.images} />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-8 flex items-center space-x-2 text-white">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    {project.icon}
                  </div>
                  <span className="text-sm font-bold tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-500 border border-slate-100 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-6">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-primary-600 transition-colors"
                    >
                      <Globe size={18} />
                      <span>Live Website</span>
                    </a>
                  ) : !project.hideCaseStudy ? (
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-primary-600 transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink size={18} />
                      <span>Case Study</span>
                    </a>
                  ) : null}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-primary-600 transition-colors"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
