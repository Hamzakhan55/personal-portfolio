import React from 'react';
import ReactLogo from '../assets/React_Logo.png';
import JavascriptLogo from '../assets/Javascript_logo.webp';
import TypescriptLogo from '../assets/Typescript.svg.png';
import TailwindLogo from '../assets/Tailwindcss.png';
import NextjsLogo from '../assets/nextjs.png';
import MySQLLogo from '../assets/mysql.png';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/use-scroll-animation';

const SkillsSection: React.FC = () =>{
  const expertiseSkills = [
    { name: 'React JS', icon: ReactLogo },
    { name: 'Next JS', icon: NextjsLogo },
    { name: 'JavaScript', icon: JavascriptLogo },
    { name: 'TypeScript', icon: TypescriptLogo },
    { name: 'Tailwind CSS', icon: TailwindLogo },
    { name: 'MySQL', icon: MySQLLogo },
  ];

  const additionalSkills = [
    'AI Models Training', 'Whisper-large-v3', 'Distilbert-base-uncased', 'REST APIs', 'Zustand', 'C++', 'Git','Python', 'FastAPI',
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
          <div ref={skillsRef} className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-7xl mx-auto">
            {expertiseSkills.map((skill, index) => (
              <div key={skill.name} className={`group relative animate-on-scroll-scale ${skillsVisible[index] ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="relative p-5 w-36 lg:w-32 xl:w-36 h-36 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-black/60 backdrop-blur-2xl border-2 border-slate-600/40 rounded-3xl hover:border-gradient-to-r hover:from-blue-400/80 hover:to-purple-400/80 transition-all duration-700 hover:scale-110 hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)] group overflow-hidden">
                  {/* Animated background layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/8 to-purple-400/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-3">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500/30 via-purple-500/25 to-cyan-500/20 rounded-2xl border-2 border-blue-400/50 group-hover:border-blue-300/80 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500 backdrop-blur-sm">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`} 
                        className="w-9 h-9 object-contain filter brightness-125 contrast-125 group-hover:brightness-150 group-hover:contrast-150 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-500" 
                      />
                    </div>
                    <h4 className="font-bold text-sm text-slate-100 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-500 leading-tight whitespace-nowrap tracking-wide">
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