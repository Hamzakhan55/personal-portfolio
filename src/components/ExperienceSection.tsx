import React from 'react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const ExperienceSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(200);
  return (
    <section id="experience" className="py-20 px-6 relative md:py-16 md:px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-900/60 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className={`animate-on-scroll text-center mb-16 ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4 -mt-6">
            <span className="text-slate-100">MY </span>
            <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">EXPERIENCE</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <div ref={cardRef} className={`bg-gradient-to-br from-slate-800/40 to-blue-950/20 p-10 md:p-6 rounded-2xl border border-blue-400/30 backdrop-blur-md max-w-2xl w-full transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-300/50 animate-on-scroll-scale ${cardVisible ? 'visible' : ''}`}>
            <div className="flex items-center mb-5 md:flex-col md:items-start md:text-center">
              <div>
                <h3 className="text-2xl md:text-xl font-bold text-slate-100 mb-1 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/20 border border-blue-400/40 rounded-lg flex items-center justify-center text-lg shadow-lg shadow-blue-500/20">
                    💻
                  </div>
                  Full Stack Developer
                </h3>
                <p className="text-blue-400 text-base md:text-sm font-medium">
                  2 Years of Experience
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-blue-400 text-lg font-semibold mb-3 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'JavaScript', 'Python', 'Flutter', 'MySQL', 'Node.js', 'TypeScript'].map((tech) => (
                  <span key={tech} className="bg-gradient-to-r from-blue-600/25 to-blue-500/15 text-blue-300 px-3 py-1.5 md:px-2 md:py-1 rounded-full text-sm md:text-xs border border-blue-400/40">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-blue-400 text-lg font-semibold mb-3 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                Key Achievements
              </h4>
              <ul className="text-slate-300/90 leading-relaxed pl-5 md:pl-4 text-base md:text-sm">
                <li className="mb-2">
                  Built full-stack web and mobile apps using React.js, Next.js, Flutter, Node.js, and FastAPI.                </li>
                <li className="mb-2">
                  Experienced with MySQL, API development, and AI model integration (Whisper, DistilBERT).                </li>
                <li className="mb-2">
                  Skilled in TypeScript, Python, and responsive UI design using Tailwind CSS and Chakra UI.                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;