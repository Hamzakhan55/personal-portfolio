import React, { useState } from 'react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/use-scroll-animation';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mzzakgaq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`
        })
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } catch {
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hamzakhan127109@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=hamzakhan127109@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+92 3114927770',
      link: 'tel:+923114927770'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'GitHub',
      link: 'https://github.com/Hamzakhan55'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'LinkedIn',
      link: 'https://www.linkedin.com/in/hamza-khan-5387732a7'
    }
  ];

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contactInfoRef, visibleItems: contactInfoVisible } = useStaggerAnimation(contactInfo.length, 150);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(300);

  return (
    <section id="contact" className="py-20 px-6 relative md:py-16 md:px-4">
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 border-2 border-blue-400/60 rounded-2xl p-10 text-center backdrop-blur-md shadow-2xl shadow-blue-500/40">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-blue-400 text-2xl mb-3 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">Message Sent!</h3>
            <p className="text-slate-100 text-base">Thank you for your message! I'll get back to you soon.</p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-blue-950/10 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.06),transparent_70%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className={`animate-on-scroll text-center mb-16 ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 -mt-6">
            <span className="text-slate-100">LET'S </span>
            <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">WORK TOGETHER</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Get In Touch - Left Side */}
          <div className={`animate-on-scroll-left ${titleVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-3xl md:text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</span>
            </h3>
            <p className="text-gray-300 mb-10 leading-relaxed text-base">
              I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div ref={contactInfoRef} className="flex flex-col gap-5 mb-10">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} target="_blank" rel="noopener noreferrer" className={`flex items-center p-4 md:p-3 bg-gradient-to-r from-slate-800/30 to-blue-950/20 rounded-xl border border-blue-400/30 no-underline text-inherit transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-blue-500/10 hover:translate-x-2 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-400/20 animate-on-scroll-left ${contactInfoVisible[index] ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <span className="text-2xl md:text-xl mr-4 md:mr-3">{info.icon}</span>
                  <div>
                    <div className="text-blue-400 text-sm font-medium md:text-xs">{info.title}</div>
                    <div className="text-slate-100 text-base md:text-sm">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Me - Right Side */}
          <div ref={formRef} className={`bg-gradient-to-br from-slate-800/40 to-blue-950/20 p-10 md:p-6 rounded-2xl border border-blue-400/30 backdrop-blur-md transition-all duration-300 ease-out hover:shadow-xl hover:shadow-blue-500/25 hover:border-blue-300/50 animate-on-scroll-right ${formVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Me</span>
            </h3>
            
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mzzakgaq" method="POST" className="flex flex-col gap-5">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="p-4 md:p-3 bg-slate-800/30 border border-blue-400/40 rounded-lg text-slate-100 text-base md:text-sm outline-none transition-all duration-300 ease-in-out focus:border-blue-400 focus:shadow-lg focus:shadow-blue-400/30 focus:bg-slate-700/40"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="p-4 md:p-3 bg-slate-800/30 border border-blue-400/40 rounded-lg text-slate-100 text-base md:text-sm outline-none transition-all duration-300 ease-in-out focus:border-blue-400 focus:shadow-lg focus:shadow-blue-400/30 focus:bg-slate-700/40"
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="p-4 md:p-3 bg-slate-800/30 border border-blue-400/40 rounded-lg text-slate-100 text-base md:text-sm outline-none transition-all duration-300 ease-in-out focus:border-blue-400 focus:shadow-lg focus:shadow-blue-400/30 focus:bg-slate-700/40"
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="p-4 md:p-3 bg-slate-800/30 border border-blue-400/40 rounded-lg text-slate-100 text-base md:text-sm outline-none resize-y font-inherit transition-all duration-300 ease-in-out focus:border-blue-400 focus:shadow-lg focus:shadow-blue-400/30 focus:bg-slate-700/40"
              />
              
              <button
                type="submit"
                className="p-4 px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40"
              >
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;