import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      const scrollY = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollY >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled ? 'bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl' : 'bg-transparent'
    } ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">HAMZA</span>
          <span className="text-blue-400">.DEV</span>
        </div>
      
        <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === item.id 
                ? 'text-blue-400 bg-blue-400/10 shadow-lg shadow-blue-400/20' 
                : 'text-white/80 hover:text-white hover:bg-white/10'
            } ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
            }`}
            style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
          >
            {item.label}

          </button>
        ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'
            }`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'mb-1'
            }`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`} />
          </div>
        </button>
      </div>
    </header>

    {isMobileMenuOpen && (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-40 flex flex-col justify-center items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-8 py-4 rounded-2xl text-xl font-medium transition-all duration-300 ${
              activeSection === item.id 
                ? 'text-blue-400 bg-blue-400/20 shadow-xl shadow-blue-400/30' 
                : 'text-white hover:text-blue-400 hover:bg-white/10'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    )}
    </>
  );
};

export default Header;