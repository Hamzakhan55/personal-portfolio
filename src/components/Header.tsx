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
    <header className={`header-responsive animate-slide-in-down ${isLoaded ? 'visible' : ''}`} style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '24px', 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0, 191, 255, 0.2)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(-100%)'
    }}>
      <div className="logo-responsive" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        <span style={{ color: 'white' }}>HAMZA</span>
        <span className="neon-text" style={{ color: '#00bfff' }}>.DEV</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="nav-desktop" style={{ 
        display: 'flex', 
        gap: '32px' 
      }}>
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="hover-glow"
            style={{ 
              color: activeSection === item.id ? '#00bfff' : 'white', 
              textDecoration: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: activeSection === item.id ? '600' : '400',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              position: 'relative',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
              transitionDelay: `${0.1 + index * 0.1}s`
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.color = '#00bfff';
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.color = 'white';
              }
            }}
          >
            {item.label}
            {activeSection === item.id && (
              <div style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                right: 0,
                height: '2px',
                backgroundColor: '#00bfff',
                borderRadius: '1px'
              }} />
            )}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '30px',
          height: '30px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0
        }}
      >
        <div style={{
          width: '25px',
          height: '3px',
          backgroundColor: '#00bfff',
          margin: '3px 0',
          transition: 'all 0.3s ease',
          transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
        }} />
        <div style={{
          width: '25px',
          height: '3px',
          backgroundColor: '#00bfff',
          margin: '3px 0',
          transition: 'all 0.3s ease',
          opacity: isMobileMenuOpen ? 0 : 1
        }} />
        <div style={{
          width: '25px',
          height: '3px',
          backgroundColor: '#00bfff',
          margin: '3px 0',
          transition: 'all 0.3s ease',
          transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
        }} />
      </button>
    </header>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px'
      }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              color: activeSection === item.id ? '#00bfff' : 'white',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              fontWeight: activeSection === item.id ? '600' : '400',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
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