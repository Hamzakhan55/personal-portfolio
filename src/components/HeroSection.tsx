import React, { useEffect, useState } from 'react';
import HamzaImage from '../assets/hamza..jpg';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="hero-responsive" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      flexDirection: 'row',
      minHeight: '100vh', 
      padding: '75px 24px 40px', 
      position: 'relative',
      textAlign: 'left'
    }}>
      {/* Background gradient */}
      <div className="gradient-bg" style={{ position: 'absolute', inset: 0 }}></div>
      
      {/* Left content */}
      <div className={`hero-content animate-on-scroll-left ${isLoaded ? 'visible' : ''}`} style={{ 
        flex: 1, 
        position: 'relative', 
        zIndex: 10, 
        paddingTop: '20px',
        order: 1,
        width: 'auto',
        transitionDelay: '0.2s'
      }}>
        <h1 className="hero-title" style={{ 
          fontSize: '60px', 
          fontWeight: 'bold', 
          marginBottom: '16px',
          marginTop: '-35px', 
          lineHeight: '1.2'
        }}>
          <span style={{ color: 'white' }}>CODE </span>
          <span className="neon-text" style={{ color: '#00bfff' }}>THE FUTURE</span>
          <br />
          <span style={{ color: 'white' }}>WITH </span>
          <span className="neon-text" style={{ color: '#00bfff' }}>HAMZA</span>
        </h1>
        
        <h2 className="hero-subtitle" style={{ 
          fontSize: '20px', 
          color: '#cccccc', 
          marginBottom: '24px', 
          fontWeight: 300 
        }}>
          FRONTEND DEVELOPER
        </h2>
        
        <p className="hero-description" style={{ 
          color: '#999999', 
          marginBottom: '32px', 
          maxWidth: '400px', 
          lineHeight: '1.6',
          fontSize: '16px',
          margin: '0 0 32px 0'
        }}>
I’m a frontend developer passionate about creating sleek, responsive, and user-friendly web apps. I turn ideas into interactive designs that look great and deliver seamless performance.        </p>
        
        <div className={`hero-buttons animate-on-scroll ${isLoaded ? 'visible' : ''}`} style={{ 
          display: 'flex', 
          gap: '16px',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          transitionDelay: '0.8s'
        }}>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-btn-primary hover-lift hover-glow"
            style={{ 
              backgroundColor: '#00bfff', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              border: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              cursor: 'pointer', 
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              fontSize: '16px',
              width: 'auto',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0080ff';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 191, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#00bfff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>👁</span>
            <span>View Projects</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-btn-secondary hover-lift hover-glow"
            style={{ 
              border: '1px solid #00bfff', 
              color: '#00bfff', 
              backgroundColor: 'transparent', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              cursor: 'pointer', 
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              fontSize: '16px',
              width: 'auto',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 191, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>📧</span>
            <span>Contact Me</span>
          </button>
        </div>
      </div>
      
      {/* Right content - Profile image */}
      <div className={`hero-image animate-on-scroll-right ${isLoaded ? 'visible' : ''}`} style={{ 
        flex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        position: 'relative', 
        zIndex: 10,
        order: 2,
        marginBottom: '0',
        marginTop: '-35px',
        transitionDelay: '0.4s'
      }}>
        <div style={{ position: 'relative' }}>
          {/* Neon circle background */}
          <div className="profile-container" style={{ 
            position: 'relative', 
            width: '400px', 
            height: '400px' 
          }}>
            {/* Blue neon circle background */}
            <div className="neon-bg-1 animate-float" style={{ 
              position: 'absolute', 
              width: '400px', 
              height: '400px', 
              borderRadius: '50%', 
              background: 'radial-gradient(circle, rgba(0, 191, 255, 0.4) 0%, rgba(0, 150, 255, 0.2) 40%, transparent 70%)', 
              filter: 'blur(20px)',
              animationDelay: '0s'
            }}></div>
            <div className="neon-bg-2 animate-float" style={{ 
              position: 'absolute', 
              width: '350px', 
              height: '350px', 
              top: '25px', 
              left: '25px', 
              borderRadius: '50%', 
              background: 'radial-gradient(circle, rgba(0, 191, 255, 0.6) 0%, rgba(0, 100, 255, 0.3) 50%, transparent 80%)', 
              filter: 'blur(10px)',
              animationDelay: '1s'
            }}></div>
            {/* Profile image container */}
            <div className="profile-image-container" style={{ 
              position: 'relative', 
              width: '280px', 
              height: '280px', 
              top: '60px', 
              left: '60px', 
              borderRadius: '50%', 
              backgroundColor: '#1a1a1a', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '80px', 
              border: '2px solid rgba(0, 191, 255, 0.5)', 
              overflow: 'hidden' 
            }}>
              <img src={HamzaImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} onError={(e) => { e.currentTarget.style.display = 'none'; const nextEl = e.currentTarget.nextElementSibling as HTMLElement; if (nextEl) nextEl.style.display = 'flex'; }} />
              <div style={{ width: '100%', height: '100%', display: 'none', alignItems: 'center', justifyContent: 'center', fontSize: '80px', color: '#00bfff' }}>👤</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;