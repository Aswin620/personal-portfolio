import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Cpu } from 'lucide-react';

export default function Hero() {
  const words = ["Full Stack Developer", "Technical Support Engineer", "MCA Graduate"];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullWord.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullWord) {
        // Pause at full word
        timer = setTimeout(() => setIsDeleting(true), 2000);
        return;
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-wrapper">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Terminal size={14} /> Ready to Deploy & Solve Complex Problems
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="name">Aswin Raj</span>
            </h1>
            <div className="hero-subtitle">
              <span className="hero-subtitle-static">I am a</span>
              <span className="hero-subtitle-dynamic">{text}</span>
            </div>
            <p className="hero-description">
              As an MCA graduate, I combine full-stack development skills with strong technical support capabilities. I build robust applications and provide reliable solutions for systems infrastructure.
            </p>

<div className="hero-actions">
  <a
    href="#projects"
    className="btn btn-primary"
    onClick={handleScrollToProjects}
  >
    View Projects <ArrowRight size={18} />
  </a>

  <a
    href="#contact"
    className="btn btn-secondary"
    onClick={handleScrollToContact}
  >
    Contact Me
  </a>

  <a
    href="/resume.pdf"
    download="Aswin_Raj_Resume.pdf"
    className="btn btn-secondary"
  >
    <Download size={18} />
    Download Resume
  </a>
</div>

<div className="hero-highlights">
  <div className="highlight-card">
    <h3>4+</h3>
    <span>Projects</span>
  </div>

  <div className="highlight-card">
    <h3>3</h3>
    <span>Internships</span>
  </div>

  <div className="highlight-card">
    <h3>5+</h3>
    <span>Certifications</span>
  </div>
</div>

<div className="hero-social">
  <a
    href="https://github.com/Aswin620"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-secondary social-btn"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/aswin-raj-72568b302"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-secondary social-btn"
  >
    LinkedIn
  </a>
</div>
          </div>

          <div className="hero-visual">
            <div className="hero-sphere"></div>
            <div className="hero-avatar-wrapper">
              <img 
                src="/profile.jpg" 
                alt="Aswin Raj" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
