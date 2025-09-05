import React, { useState } from 'react';
import SMPImage from '../assets/SMP.png';
import gamehub from '../assets/game-hub.png'
import reactimg from '../assets/react.svg'
import spotifyimg from '../assets/spotify.png'
import simonimg from '../assets/simon.png'
import carrentalimg from '../assets/carRental.png'
import loginimg from '../assets/login.png'
import landingimag from '../assets/simplelanding.png'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/use-scroll-animation';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const truncateText = (text: string, maxLength: number = 200, isMobile: boolean = false) => {
    if (isMobile && text.length > 50) {
      return text.substring(0, 50);
    }
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const projects = [
    {
      id: 1,
      title: 'Smart Expense Tracker',
      Subtitles: '(AI-Powered Finance Manager) ',
      description: 'Revolutionary AI-powered expense tracker leveraging OpenAI s Whisper Large v3 for voice recognition and custom DistilBERT for intelligent categorization, enabling users to simply speak transactions like "I spent 25 dollars on lunch" with 90%+ accuracy in under 3 seconds across 99+ languages including Urdu. The system features cross-platform React/Next.js web and React Native mobile apps with real-time synchronization, ultra-optimized AI pipeline with CUDA acceleration, comprehensive security through JWT authentication and local voice processing, smart budget management with predictive analytics, goal tracking with ML-powered forecasting, and production-ready architecture using FastAPI backend with 2,000+ labeled training dataset. This full-stack solution eliminates manual entry friction through voice-first interface, demonstrating enterprise-level AI implementation that transforms personal finance management by automatically extracting amounts, categories, and descriptions while providing intelligent insights, budget alerts, and seamless cross-device experience.',
      image: SMPImage,
      technologies: ['Next Js', 'React Native', 'Fast API', 'MYSQL', 'AI Models', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hamzakhan55/Smart_Expense_Tracker.git',
      featured: true
    },
    {
      id: 2,
      title: 'Game Hub',
      Subtitles: '(Modern Game Discovery Platform)',
      description: 'GameHub is a modern, professionally-designed game discovery platform built with React and TypeScript. The application features a sophisticated glass morphism design system with gradient backgrounds, backdrop blur effects, and smooth cubic-bezier animations throughout. Users can search and filter games by platform and genre through an intuitive full-page sidebar navigation and custom-styled dropdown components. The responsive layout adapts seamlessly across devices with a mobile-first approach, while infinite scrolling and React Query ensure optimal performance. Built with Chakra UI and integrated with the RAWG Video Games Database API, this project demonstrates expertise in modern web development practices, professional design systems, and creating engaging user experiences with advanced CSS techniques and interactive components.',
      image: gamehub,
      technologies: ['React', 'TypeScript', 'Vite', 'Chakra UI', 'Zustand'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hamzakhan55/game-hub.git',
      featured: false
    },
    {
      id: 3,
      title: '30 React Mini-Projects',
      Subtitles: '(Building Modern Web Experiences with React & TypeScript)',
      description: 'This is my ongoing learning journey with React and TypeScript, where I challenge myself to build one mini project each day to strengthen my frontend development skills. Started as a personal initiative to deepen my understanding of React ecosystem, this collection grows daily as I explore different concepts, patterns, and real-world applications.Each project represents a step forward in mastering React hooks, component architecture, state management, and TypeScript integration. From simple interactive components to more complex applications, these daily coding exercises help me practice problem-solving, learn new libraries, and build muscle memory for modern web development practices.This repository serves as both a learning log and a showcase of my progress, with new projects added regularly as I continue to expand my React and TypeScript expertise through consistent daily practice.',
      image: reactimg,
      technologies: ['React', 'Typescript', 'vite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hamzakhan55/30_Days_30_React_Projects.git',
      featured: false
    },
    {
      id: 4,
      title: 'Spotify Web Player Clone',
      Subtitles: '(Pure HTML & CSS Implementation)',
      description: 'This project showcases a pixel-perfect recreation of Spotify web interface using only HTML and CSS, demonstrating advanced front-end development skills without relying on JavaScript frameworks. The application features a fully responsive design that captures Spotify is signature dark theme and modern aesthetic. The interface includes a comprehensive sidebar with navigation options for Home, Search, and Your Library, complete with interactive hover effects and proper opacity transitions. The main content area displays dynamic music cards organized into sections like "Recently Played," "Trending New Near You," and "Featured Charts," each with custom styling and hover interactions. A standout feature is the bottom music player component that includes album artwork, track information, playback controls with custom-styled icons, and a functional progress bar with webkit slider customizations. The layout utilizes CSS Flexbox for responsive positioning and includes media queries for mobile optimization. The project demonstrates proficiency in CSS Grid layouts, custom styling of form elements, sticky navigation implementation, and creating smooth user interactions through pure CSS. This clone effectively replicates Spotify is complex UI architecture while maintaining clean, semantic HTML structure and organized CSS methodology.',
      image: spotifyimg,
      technologies: ['HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hamzakhan55/Spotify_Clone.git',
      featured: false
    },

    {
      id: 5,
      title: 'Simon Game',
      Subtitles: '(Interactive Memory Challenge)',
      description: 'A modern, responsive implementation of the classic Simon memory game built with vanilla HTML, CSS, and JavaScript. This project showcases advanced front-end development skills through a sleek glassmorphism design featuring gradient backgrounds, backdrop blur effects, and smooth animations. The game challenges players to memorize and repeat increasingly complex sequences of colored buttons, with each level adding one more step to test memory retention.Key technical features include dynamic DOM manipulation for game state management, CSS Grid layout for responsive design, custom animations using keyframes, and event-driven programming for user interactions. The interface incorporates modern design principles with Google Fonts integration, mobile-responsive breakpoints, and intuitive visual feedback through hover effects, button scaling, and flash animations. The game logic implements proper sequence validation, level progression tracking, and error handling with smooth state transitions between game phases.This project demonstrates proficiency in creating engaging user experiences while maintaining clean, semantic code structure and modern web development best practices including accessibility considerations and cross-device compatibility.',
      image: simonimg,
      technologies: ['HTML', 'CSS', 'Javascript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hamzakhan55/Simon_Game.git',
      featured: false
    },
    {
      id: 6,
      title: 'Car Rental Landing Page',
      Subtitles: '(A Modern HTML5 & CSS3 Responsive Web Interface)',
      description: 'This project is a modern, responsive car rental landing page built entirely with HTML5 and CSS3 for the fictional brand "Zenix." The page features a compelling hero section with gradient overlays and animated text that immediately captures user attention with the message "Looking To Maximize Saving On Your Rental Car?" The design showcases my proficiency in front-end development through its clean navigation system with hover effects, interactive brand showcase cards displaying premium automotive brands like BMW, Ferrari, and Audi with availability counts, and a comprehensive car inventory grid with pricing and booking functionality. I implemented smooth CSS keyframe animations throughout the page to enhance user engagement, utilized Flexbox for responsive layouts that work across all devices, and created a cohesive visual identity using a red accent color scheme with strategic typography choices. The project demonstrates my ability to create professional, engaging landing pages from scratch without relying on frameworks, showcasing skills in semantic HTML structure, advanced CSS styling and animations, responsive design principles, and modern UI/UX implementation. The result is a visually appealing, fully functional landing page that effectively communicates the brand value proposition while maintaining clean, maintainable code structure.',
      image: carrentalimg,
      technologies: ['HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hamzakhan55/Car-Rental-Landing-Page.git',
      featured: false
    },
    {
      id: 7,
      title: 'Login Page',
      Subtitles: '(Animated Login Interface with Dynamic Border Effects)',
      description: 'This project showcases a modern, responsive login page featuring an eye-catching animated border system with rotating gradient effects in cyan and pink hues. Built with pure HTML and CSS, the interface demonstrates advanced CSS animations and pseudo-element techniques to create a visually striking dark-themed design. The form includes smooth floating label animations, custom input styling, and a clean minimalist layout that adapts seamlessly across different screen sizes. The rotating border animation creates a dynamic, futuristic aesthetic while maintaining excellent user experience with intuitive form interactions and hover effects. This project highlights proficiency in modern CSS techniques, responsive design principles, and creating engaging user interfaces without relying on JavaScript frameworks.This description emphasizes the technical skills demonstrated (CSS animations, responsive design, modern styling) while highlighting the visual appeal and user experience aspects that make it portfolio-worthy.',
      image: loginimg,
      technologies: ['HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hamzakhan55/Signup-and-Login-Page.git',
      featured: false
    },
    {
      id: 7,
      title: 'Travel Agency Landing Page',
      Subtitles: '(Responsive Web Design Practice)',
      description: 'This project showcases a modern, responsive landing page for "Travel-X," a fictional international travel agency. Built using pure HTML5 and CSS3, the page demonstrates proficiency in front-end web development fundamentals including semantic markup, CSS Grid/Flexbox layouts, and interactive hover effects. The design features a full-screen hero section with an overlay gradient effect on a scenic background image, creating an immersive visual experience. Key technical implementations include a responsive navigation bar with smooth hover animations using CSS transitions, a centered call-to-action section, and a cohesive color scheme utilizing CSS custom properties. The project emphasizes clean code structure, accessibility considerations, and modern web design principles, making it an effective demonstration of core web development skills and attention to visual design details.This description highlights your technical skills while explaining the project purpose and key features for potential employers or clients viewing your portfolio.',
      image: landingimag,
      technologies: ['HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hamzakhan55/landing-Page-Practice.git',
      featured: false
    }
  ];

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, visibleItems: projectsVisible } = useStaggerAnimation(projects.length, 200);

  return (
    <section id="projects" style={{ 
      padding: '80px 24px', 
      backgroundColor: 'rgba(0, 0, 0, 0.8)' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={titleRef} className={`animate-on-scroll ${titleVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            marginTop: '-20px' 
          }}>
            <span style={{ color: 'white' }}>MY </span>
            <span className="neon-text" style={{ color: '#00bfff' }}>PROJECTS</span>
          </h2>
          <p style={{ 
            color: '#999999', 
            fontSize: '18px', 
            maxWidth: '600px', 
            margin: '0 auto'
          }}>
          Showcasing impactful projects that combine innovation, creativity, and modern technologies.          </p>
        </div>

        <div ref={projectsRef} className="projects-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
            <div key={project.id} className={`hover-lift animate-on-scroll-scale ${projectsVisible[index] ? 'visible' : ''}`} style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '16px', 
              overflow: 'hidden',
              border: project.featured ? '2px solid #00bfff' : '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              position: 'relative',
              transitionDelay: `${index * 0.1}s`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 191, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {project.featured && (
                <div style={{ 
                  position: 'absolute', 
                  top: '16px', 
                  right: '16px', 
                  backgroundColor: '#00bfff', 
                  color: 'white', 
                  padding: '4px 12px', 
                  borderRadius: '12px', 
                  fontSize: '12px', 
                  fontWeight: 'bold',
                  zIndex: 10
                }}>
                  FEATURED
                </div>
              )}
              
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  style={{ 
                    width: '100%', 
                    height: '181px', 
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))'
                }}></div>
              </div>

              <div className="project-content" style={{ padding: '24px' }}>
                <h3 className="project-title" style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '2px', 
                  marginTop: '-1px' 
                }}>
                  {project.title}
                </h3>
                <h6 className="project-subtitle" style={{ 
                  fontSize: '16px', 
                  color: 'white', 
                  marginBottom: '2px', 
                  marginTop: '-1px' 
                }}>
                  {project.Subtitles}
                </h6>
                <p className="project-description" style={{ 
                  color: '#cccccc', 
                  marginBottom: '20px', 
                  lineHeight: '1.6',
                  fontSize: '16px'
                }}>
                  <span className="desktop-description">{truncateText(project.description)}</span>
                  <span className="mobile-description">{truncateText(project.description, 200, true)}</span>
                  {project.description.length > 50 && (
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="see-more-btn"
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#00bfff', 
                        cursor: 'pointer', 
                        fontSize: '14px',
                        fontWeight: '500',
                        textDecoration: 'underline',
                        padding: 0,
                        marginLeft: '4px'
                      }}
                    >
                      See more...
                    </button>
                  )}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{ 
                      backgroundColor: 'rgba(0, 191, 255, 0.2)', 
                      color: '#00bfff',
                      padding: '4px 12px', 
                      borderRadius: '12px', 
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a 
                    href={project.id === 1 ? 'https://github.com/Hamzakhan55/Smart_Expense_Tracker.git' : project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', width: '100%' }}
                  >
                    <button className="project-btn" style={{ 
                      width: '100%',
                      backgroundColor: '#00bfff', 
                      color: 'white', 
                      padding: '12px 16px', 
                      borderRadius: '8px', 
                      border: 'none', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0080ff';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#00bfff';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAllProjects && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button 
              className="view-all-btn" 
              onClick={() => setShowAllProjects(true)}
              style={{ 
                backgroundColor: 'transparent', 
                border: '2px solid #00bfff', 
                color: '#00bfff', 
                padding: '16px 32px', 
                borderRadius: '12px', 
                fontSize: '16px', 
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00bfff';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 191, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#00bfff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              View All Projects →
            </button>
          </div>
        )}

        {showAllProjects && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button 
              className="show-less-btn" 
              onClick={() => setShowAllProjects(false)}
              style={{ 
                backgroundColor: 'transparent', 
                border: '2px solid #00bfff', 
                color: '#00bfff', 
                padding: '16px 32px', 
                borderRadius: '12px', 
                fontSize: '16px', 
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00bfff';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 191, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#00bfff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              Show Less ←
            </button>
          </div>
        )}

        {/* Popup Modal */}
        {selectedProject && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }} onClick={() => setSelectedProject(null)}>
            <div className="project-modal" style={{
              backgroundColor: 'rgba(20, 20, 20, 0.95)',
              borderRadius: '16px',
              padding: '30px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              border: '1px solid rgba(0, 191, 255, 0.3)',
              backdropFilter: 'blur(10px)'
            }} onClick={(e) => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', margin: 0 }}>
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#00bfff',
                    fontSize: '24px',
                    cursor: 'pointer',
                    padding: '5px'
                  }}
                >
                  ×
                </button>
              </div>
              <p style={{ color: '#cccccc', lineHeight: '1.6', marginBottom: '20px' }}>
                {selectedProject.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.technologies.map((tech: string, techIndex: number) => (
                  <span key={techIndex} style={{ 
                    backgroundColor: 'rgba(0, 191, 255, 0.2)', 
                    color: '#00bfff',
                    padding: '4px 12px', 
                    borderRadius: '12px', 
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;