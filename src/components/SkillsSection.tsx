import React from 'react';
import ReactLogo from '../assets/React_Logo.png';
import JavascriptLogo from '../assets/Javascript_logo.webp';
import TypescriptLogo from '../assets/Typescript.svg.png';
import TailwindLogo from '../assets/Tailwindcss.png';
import NextjsLogo from '../assets/nextjs.png';
import PythonLogo from '../assets/Python.webp';
import FlutterLogo from '../assets/flutter.svg';
import MySQLLogo from '../assets/mysql.png';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/use-scroll-animation';

const SkillsSection: React.FC = () =>{
  const expertiseSkills = [
    { name: 'React JS', icon: ReactLogo },
    { name: 'Next JS', icon: NextjsLogo },
    { name: 'JavaScript', icon: JavascriptLogo },
    { name: 'Python', icon: PythonLogo },
    { name: 'Flutter', icon: FlutterLogo },
    { name: 'MySQL', icon: MySQLLogo },
    { name: 'TypeScript', icon: TypescriptLogo },
    { name: 'Tailwind CSS', icon: TailwindLogo }
  ];

  const additionalSkills = [
    'AI Models Training', 'Whisper-large-v3', 'Distilbert-base-uncased', 'REST APIs', 'Zustand', 'C++', 'Git', 'FastAPI', 'Bootstrap'
  ];

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, visibleItems: skillsVisible } = useStaggerAnimation(expertiseSkills.length, 150);
  const { ref: badgesRef, visibleItems: badgesVisible } = useStaggerAnimation(additionalSkills.length, 100);

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-slate-950/20 to-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={titleRef} className={`text-center mb-20 animate-on-scroll ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">My </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technologies and best practices
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Core Expertise</span>
          </h3>
          <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {expertiseSkills.map((skill, index) => (
              <div key={skill.name} className={`group relative animate-on-scroll-scale ${skillsVisible[index] ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-blue-400/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`} 
                        className="w-10 h-10 object-contain filter brightness-110 contrast-110 group-hover:drop-shadow-lg group-hover:scale-110 transition-all duration-300" 
                      />
                    </div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Additional Skills</span>
          </h3>
          <div ref={badgesRef} className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <span key={skill} className={`px-6 py-3 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 cursor-default animate-on-scroll ${badgesVisible[index] ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.05}s` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;