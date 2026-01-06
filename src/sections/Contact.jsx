import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" />,
      label: 'Email Address',
      value: 'androbelgica85@gmail.com',
      href: 'mailto:androbelgica85@gmail.com',
      color: 'blue'
    },
    {
      icon: <Phone className="text-purple-500" />,
      label: 'Mobile Number',
      value: '+63 977 277 4819',
      href: 'tel:+639772774819',
      color: 'purple'
    },
    {
      icon: <Facebook className="text-indigo-500" />,
      label: 'Facebook Account',
      value: 'Andro Belgica',
      href: 'https://facebook.com/andro.belgica.7', // placeholder, user can update
      color: 'indigo'
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2"
          >
            Get In Touch
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-slate-900"
          >
            Let's Start a Conversation
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] text-center group transition-all hover:shadow-2xl hover:bg-white"
            >
              <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-${info.color}-50 transition-colors`}>
                {React.cloneElement(info.icon, { size: 32 })}
              </div>
              <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">{info.label}</h3>
              <p className="text-xl font-bold text-slate-900 break-all">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Optional: Simple Contact Form or just a CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 glass p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-white/80 to-slate-50/50 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Interested in collaboration?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Whether you have a hardware issue that needs solving, a custom software project in mind, or just want to connect, I'm always ready to help.
          </p>
          <a 
            href="mailto:androbelgica85@gmail.com" 
            className="inline-flex items-center space-x-3 px-10 py-5 bg-primary-600 text-white rounded-2xl font-bold shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all transform hover:scale-105"
          >
            <Send size={20} />
            <span>Send a Direct Message</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
