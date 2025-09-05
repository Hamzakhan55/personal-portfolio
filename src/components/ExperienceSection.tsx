import React from 'react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const ExperienceSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(200);
  return (
    <section id="experience" style={{ 
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
            <span className="neon-text" style={{ color: '#00bfff' }}>EXPERIENCE</span>
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div ref={cardRef} className={`experience-card hover-lift hover-glow animate-on-scroll-scale ${cardVisible ? 'visible' : ''}`} style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            padding: '40px', 
            borderRadius: '16px', 
            border: '1px solid rgba(0, 191, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            maxWidth: '600px',
            width: '100%',
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
            <div className="experience-header" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '20px',
              flexDirection: 'row',
              textAlign: 'left'
            }}>
              <div className="experience-icon" style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: 'rgba(0, 191, 255, 0.2)', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                marginBottom: '0'
              }}>
                <span style={{ fontSize: '24px' }}>💻</span>
              </div>
              <div>
                <h3 className="experience-title" style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '4px' 
                }}>
                  Frontend Developer
                </h3>
                <p className="experience-subtitle" style={{ 
                  color: '#00bfff', 
                  fontSize: '16px', 
                  fontWeight: '500' 
                }}>
                  Self-Taught Experience • 2 Years
                </p>
              </div>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                color: '#00bfff', 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '12px' 
              }}>
                Technologies & Frameworks
              </h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px' 
              }}>
                {['React.js', 'Next.js', 'TypeScript', 'JavaScript','Tailwind css', 'Python', 'AI Models Training'].map((tech) => (
                  <span key={tech} className="tech-badge" style={{
                    backgroundColor: 'rgba(0, 191, 255, 0.1)',
                    color: '#00bfff',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    border: '1px solid rgba(0, 191, 255, 0.3)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ 
                color: '#00bfff', 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '12px' 
              }}>
                Key Achievements
              </h4>
              <ul className="achievement-list" style={{ 
                color: '#cccccc', 
                lineHeight: '1.6', 
                paddingLeft: '20px',
                fontSize: '16px'
              }}>
                <li style={{ marginBottom: '8px' }}>
                  Developed multiple responsive and scalable web applications using React.js and Next.js, enhancing user experience across devices.                </li>
                <li style={{ marginBottom: '8px' }}>
                  Implemented type-safe solutions with TypeScript, improving code quality, maintainability, and reducing bugs.                </li>
                <li style={{ marginBottom: '8px' }}>
                  Designed and optimized modern, user-friendly interfaces with a strong focus on performance, accessibility, and usability.                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;