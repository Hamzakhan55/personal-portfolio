import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import BackgroundAnimation from './BackgroundAnimation';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
        <footer className="py-10 px-6 md:py-8 md:px-4 text-center border-t border-blue-400/30 bg-gradient-to-t from-slate-900 to-black/80">
          <p className="text-slate-300/80 mb-4 text-base md:text-sm">
            © 2025 Hamza. Crafted with passion and dedication.
          </p>
          <p className="text-blue-400 text-sm md:text-xs drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
            Built with React, TypeScript
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;