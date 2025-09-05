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
    <section id="contact" style={{ 
      padding: '80px 24px', 
      position: 'relative' 
    }}>
      {showSuccess && (
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
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'rgba(0, 191, 255, 0.1)',
            border: '2px solid #00bfff',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0, 191, 255, 0.3)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <h3 style={{ color: '#00bfff', fontSize: '24px', marginBottom: '12px' }}>Message Sent!</h3>
            <p style={{ color: 'white', fontSize: '16px' }}>Thank you for your message! I'll get back to you soon.</p>
          </div>
        </div>
      )}
      <div className="gradient-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div ref={titleRef} className={`animate-on-scroll ${titleVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            marginTop: '-25px' 
          }}>
            <span style={{ color: 'white' }}>LET'S </span>
            <span className="neon-text" style={{ color: '#00bfff' }}>WORK TOGETHER</span>
          </h2>
          <p style={{ 
            color: '#999999', 
            fontSize: '18px', 
            maxWidth: '600px', 
            margin: '0 auto'
          }}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="contact-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px', 
          alignItems: 'start' 
        }}>
          {/* Contact Information */}
          <div className={`animate-on-scroll-left ${titleVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              marginBottom: '30px', 
              color: '#00bfff' 
            }}>
              Get In Touch
            </h3>
            <p style={{ 
              color: '#cccccc', 
              marginBottom: '40px', 
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div ref={contactInfoRef} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px', 
              marginBottom: '40px' 
            }}>
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} target="_blank" rel="noopener noreferrer" className={`hover-glow animate-on-scroll-left ${contactInfoVisible[index] ? 'visible' : ''}`} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '16px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 191, 255, 0.2)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transitionDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 191, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <span style={{ fontSize: '24px', marginRight: '16px' }}>{info.icon}</span>
                  <div>
                    <div style={{ color: '#00bfff', fontSize: '14px', fontWeight: '500' }}>{info.title}</div>
                    <div style={{ color: 'white', fontSize: '16px' }}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>


          </div>

          {/* Contact Form */}
          <div ref={formRef} className={`contact-form hover-glow animate-on-scroll-right ${formVisible ? 'visible' : ''}`} style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            padding: '40px', 
            borderRadius: '16px',
            border: '1px solid rgba(0, 191, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            transitionDelay: '0.4s'
          }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              marginBottom: '30px', 
              color: 'white' 
            }}>
              Contact Me
            </h3>
            
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mzzakgaq" method="POST" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px' 
            }}>
              <div className="form-row" style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '16px' 
              }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(0, 191, 255, 0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00bfff';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(0, 191, 255, 0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00bfff';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={{
                  padding: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(0, 191, 255, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#00bfff';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                style={{
                  padding: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(0, 191, 255, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#00bfff';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              
              <button
                type="submit"
                className="hover-lift hover-glow"
                style={{
                  padding: '16px 32px',
                  backgroundColor: '#00bfff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
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