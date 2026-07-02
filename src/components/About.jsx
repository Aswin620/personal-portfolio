import React from 'react';
import { Calendar, Award, GraduationCap } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Professional Post Graduate Degree",
      date: "Graduated",
      cgpa: "7.46 CGPA",
      description: "Focused on advanced web technologies, database administration, software engineering principles, system analysis, and machine learning methods. Completed key projects involving predictive modeling and django web frameworks."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Undergraduate Degree",
      date: "Graduated",
      cgpa: "5.80 CGPA",
      description: "Laid strong foundations in programming languages, object-oriented concepts, web design, computer networks, and database management systems."
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About & Education</h2>
          <p className="section-subtitle">
            My educational journey has equipped me with both theoretical depth and practical expertise in software engineering and system architecture.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 700 }}>
              Bridging Development and System Support
            </h3>
            <p className="about-info-text">
              I am a passionate software engineer who thrives at the intersection of building applications and maintaining operational excellence. My background as an MCA graduate has given me the skills to write clean, efficient, and scalable modern web applications. At the same time, my training as a Technical Support Engineer equips me with a strong analytical mindset to diagnose systems infrastructure, analyze server/application logs, and resolve hosting, API, or database issues swiftly.
            </p>
            <p className="about-info-text" style={{ marginTop: '-1rem' }}>
              I believe in building applications that not only look visually stunning and provide a seamless user experience, but are also robustly engineered, highly performant, and easy to maintain. I am constantly learning new technologies and exploring methodologies to optimize code performance and ensure high system uptime.
            </p>
            <div className="about-details">
              <div className="about-detail-item">
                <div className="about-detail-label">Location</div>
                <div className="about-detail-value">India</div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-label">Availability</div>
                <div className="about-detail-value">Immediate Joiner</div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-label">Primary Role</div>
                <div className="about-detail-value">Full Stack Developer</div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-label">Secondary Role</div>
                <div className="about-detail-value">Support Engineer</div>
              </div>
            </div>
          </div>

          <div className="about-timeline">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={26} style={{ color: 'var(--accent-primary)' }} /> Academic Timeline
            </h3>
            
            <div className="timeline">
              {education.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <h4 className="timeline-title">{item.degree}</h4>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <div className="timeline-institution">{item.institution}</div>
                  <p className="timeline-description">{item.description}</p>
                  <div className="timeline-cgpa">
                    <Award size={16} /> {item.cgpa}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
