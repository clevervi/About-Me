
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all duration-700"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      </div>
      
      <div className="p-10">
        <div className="flex gap-3 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-zinc-900 text-zinc-500 font-bold border border-zinc-800">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="font-sync text-xl font-bold mb-4 tracking-tighter uppercase">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 text-xs font-mono leading-relaxed mb-8 h-12 overflow-hidden">
          {project.description}
        </p>
        
        <a 
          href={project.link} 
          className="group/link inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white"
        >
          View_Interface
          <motion.span 
            className="w-8 h-[1px] bg-violet-600"
            whileHover={{ width: 40 }}
          />
        </a>
      </div>
    </motion.div>
  );
};

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-violet-500 font-black mb-6">Database_Query</h2>
            <h3 className="font-sync text-4xl md:text-6xl font-black tracking-tighter">
              COLLECTED_WORKS
            </h3>
          </div>
          <div className="font-mono text-[10px] text-zinc-700 max-w-xs leading-loose uppercase tracking-widest">
            Filtering for high-performance and scalability architectural patterns.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
