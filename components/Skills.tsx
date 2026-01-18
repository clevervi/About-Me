
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Main Technologies', 'Other Technologies'];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.03)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-black mb-4">MY SKILLS</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <div key={cat} className="glass p-8 rounded-3xl border-white/5">
              <h4 className="font-heading font-bold text-violet-400 mb-6 text-sm uppercase tracking-widest">{cat}</h4>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold text-gray-200">{skill.name}</span>
                      <span className="text-[10px] text-gray-500 font-black">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
