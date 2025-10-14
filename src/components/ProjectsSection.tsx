import React, { useState } from 'react';
import SMPImage from '../assets/SMP.png';
import gamehub from '../assets/game-hub.png'
import reactimg from '../assets/react.svg'
import spotifyimg from '../assets/spotify.png'
import simonimg from '../assets/simon.png'
import carrentalimg from '../assets/carRental.png'
import loginimg from '../assets/login.png'
import landingimag from '../assets/simplelanding.png'
import Bytebattle from '../assets/Bytebattle.jpg';
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
      title: 'Byte Battle Quiz App',
      Subtitles: '(Real time Quiz competition Platform)',
      description: 'Built a quiz application with real-time buzzer system using React/TypeScript, Node.js, and Socket.IO. Integrated AI question generation via Flask and T5 model for automated MCQ creation. Features live scoreboard, JWT authentication, and admin dashboard for comprehensive quiz management.',
      image: Bytebattle,
      technologies: ['React Js', 'Typescript', 'Node Js', 'Socket.IO', 'Python','Flask','MySQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hamzakhan55/',
      featured: true
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-black/20 via-slate-950/20 to-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={titleRef} className={`text-center mb-20 animate-on-scroll ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">My </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover my latest work showcasing innovation, creativity, and technical excellence
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
            <div key={project.id} className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:border-blue-400/50 animate-on-scroll-scale ${
              project.featured ? 'ring-2 ring-blue-400/30 shadow-2xl shadow-blue-500/20' : ''
            } ${projectsVisible[index] ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
              {project.featured && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg z-10">
                  ✨ FEATURED
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    {project.Subtitles}
                  </p>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {truncateText(project.description, 150)}
                  {project.description.length > 150 && (
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-blue-400 hover:text-blue-300 font-medium ml-2 transition-colors duration-200"
                    >
                      Read more →
                    </button>
                  )}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-slate-800/50 text-slate-400 text-xs rounded-full border border-slate-700">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.id === 1 ? 'https://github.com/Hamzakhan55/Smart_Expense_Tracker.git' : project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </a>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-3 border border-white/20 hover:border-white/40 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>View</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAllProjects && (
          <div className="text-center mt-12 md:mt-5">
            <button 
              onClick={() => setShowAllProjects(true)}
              className="bg-transparent border-2 border-blue-400/60 text-blue-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white hover:border-blue-300 px-8 py-4 md:px-4 md:py-2 md:text-xs rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-400/30"
            >
              View All Projects →
            </button>
          </div>
        )}

        {showAllProjects && (
          <div className="text-center mt-12 md:mt-5">
            <button 
              onClick={() => setShowAllProjects(false)}
              className="bg-transparent border-2 border-blue-400/60 text-blue-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white hover:border-blue-300 px-8 py-4 md:px-4 md:py-2 md:text-xs rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-400/30"
            >
              Show Less ←
            </button>
          </div>
        )}

        {/* Popup Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5" onClick={() => setSelectedProject(null)}>
            <div className="bg-gradient-to-br from-slate-800/95 to-blue-950/30 rounded-2xl p-8 md:p-4 max-w-2xl md:max-w-[90vw] w-full max-h-[80vh] overflow-y-auto border border-blue-400/40 backdrop-blur-xl shadow-2xl shadow-blue-500/20" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-2xl font-bold text-slate-100 m-0">
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="bg-none border-none text-blue-400 text-2xl cursor-pointer p-1 hover:text-blue-300 transition-colors duration-200"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-300/90 leading-relaxed mb-5">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech: string, techIndex: number) => (
                  <span key={techIndex} className="bg-gradient-to-r from-blue-600/25 to-blue-500/15 text-blue-300 px-3 py-1 rounded-xl text-xs font-medium border border-blue-400/30">
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