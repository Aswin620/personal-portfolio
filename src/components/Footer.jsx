import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            &copy; {currentYear} Aswin Raj. All rights reserved. Made for portfolio reference.
          </div>
          <div className="footer-socials">
            <a 
              href="https://linkedin.com/in/aswinraj-mca" 
              className="footer-social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com" 
              className="footer-social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
