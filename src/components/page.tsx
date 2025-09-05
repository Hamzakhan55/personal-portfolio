import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const Portfolio: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
      <Header />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="footer-responsive" style={{ 
        padding: '40px 24px', 
        textAlign: 'center', 
        borderTop: '1px solid rgba(0, 191, 255, 0.2)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
      }}>
        <p className="footer-text" style={{ 
          color: '#999999', 
          marginBottom: '16px',
          fontSize: '16px'
        }}>
          © 2025 Hamza. Crafted with passion and dedication.
        </p>
        <p className="footer-subtext" style={{ 
          color: '#00bfff', 
          fontSize: '14px'
        }}>
          Built with React, TypeScript
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;