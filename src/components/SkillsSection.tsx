import React from 'react';
import ReactLogo from '../assets/React_Logo.png';
import JavascriptLogo from '../assets/Javascript_logo.webp';
import TypescriptLogo from '../assets/Typescript.svg.png';
import TailwindLogo from '../assets/Tailwindcss.png';
import NextjsLogo from '../assets/nextjs.png';
import PythonLogo from '../assets/Python.webp';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/use-scroll-animation';

const SkillsSection: React.FC = () =>{
  const expertiseSkills = [
    { name: 'React', icon: ReactLogo },
    { name: 'Javascript', icon: JavascriptLogo },
    { name: 'Typescript', icon: TypescriptLogo },
    { name: 'Tailwind CSS', icon: TailwindLogo },
    { name: 'Next.js', icon: NextjsLogo },
    { name: 'Python', icon: PythonLogo }
  ];

  const additionalSkills = [
    'React Native','MySQL','Node Js','Zustand', 'Express.js', 
    'Git/GitHub', 'REST APIs', 'FastAPI','Bootstrap', 'AI Models'
  ];

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, visibleItems: skillsVisible } = useStaggerAnimation(expertiseSkills.length, 150);
  const { ref: badgesRef, visibleItems: badgesVisible } = useStaggerAnimation(additionalSkills.length, 100);

  return (
    <section id="skills" style={{ 
      padding: '80px 24px', 
      position: 'relative' 
    }}>
      <div className="gradient-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div ref={titleRef} className={`animate-on-scroll ${titleVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            marginTop: '-25px'
          }}>
            <span style={{ color: 'white' }}>MY </span>
            <span className="neon-text" style={{ color: '#00bfff' }}>SKILLS</span>
          </h2>
          <p style={{ 
            color: '#999999', 
            fontSize: '18px', 
            maxWidth: '600px', 
            margin: '0 auto'
          }}>
Building modern, user-focused applications with clean code, scalable architecture, and the latest web technologies.          </p>
        </div>

        {/* Expertise Section */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '40px', 
            color: '#00bfff', 
            textAlign: 'center' 
          }}>
            Core Expertise
          </h3>
          <div ref={skillsRef} className="skills-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(6, 1fr)', 
            gap: '20px' 
          }}>
            {expertiseSkills.map((skill, index) => (
              <div key={skill.name} className={`skill-card hover-lift hover-glow animate-on-scroll-scale ${skillsVisible[index] ? 'visible' : ''}`} style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                padding: '24px', 
                borderRadius: '12px', 
                border: '1px solid rgba(0, 191, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: `${index * 0.1}s`
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <img src={skill.icon} alt={`${skill.name} logo`} className="skill-icon" style={{ 
                    width: skill.name === 'Next.js' ? '45px' : skill.name === 'Python' ? '45px' : '40px', 
                    height: skill.name === 'Next.js' ? '45px' : skill.name === 'Python' ? '45px' : '40px', 
                    marginBottom: '12px', 
                    objectFit: 'contain', 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' 
                  }} />
                  <h4 className="skill-name" style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: 'white' 
                  }}>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Section */}
        <div>
          <h3 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '40px', 
            color: '#00bfff', 
            textAlign: 'center' 
          }}>
            Additional Skills
          </h3>
          <div ref={badgesRef} className="additional-skills" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '16px', 
            justifyContent: 'center'
          }}>
            {additionalSkills.map((skill, index) => (
              <div key={skill} className={`skill-badge hover-scale animate-on-scroll ${badgesVisible[index] ? 'visible' : ''}`} style={{ 
                backgroundColor: 'rgba(0, 191, 255, 0.1)', 
                color: '#00bfff',
                padding: '12px 20px', 
                borderRadius: '25px', 
                border: '1px solid rgba(0, 191, 255, 0.3)',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'pointer',
                transitionDelay: `${index * 0.05}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 191, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 191, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 191, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;