import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "GoldenInsights - Gold Price Prediction",
      category: "Machine Learning",
      description:
        "Machine learning web application that predicts future gold prices using historical market data. Built with Python, Django, and MySQL with data preprocessing, model training, and interactive prediction features.",
      tech: ["Python", "Django", "Machine Learning", "MySQL", "HTML", "CSS"],
      image: "/priceimg.jpg",
      github: "#",
      live: "#"
    },
    {
      title: "EventEase",
      category: "Full Stack Web Application",
      description:
        "AI-powered event management and booking platform with secure authentication, payment tracking, event booking, admin dashboard, and responsive user interface.",
      tech: ["Python", "Django", "MySQL", "JavaScript", "Bootstrap"],
      image: "/eventimg33.jpg",
      github: "#",
      live: "#"
    },
    {
      title: "ImmunizeReminder",
      category: "Healthcare Web Application",
      description:
        "Vaccination reminder system that helps parents track vaccine schedules, manage child profiles, and receive timely notifications for upcoming vaccinations.",
      tech: ["Python", "Django", "SQLite", "HTML", "CSS"],
      image: "/vaccineimg33.jpg",
      github: "#",
      live: "#"
    },
    {
      title: "HouseFinder",
      category: "Rental Platform",
      description:
        "House rental platform where users can search, filter, and inquire about rental properties with a clean interface and efficient property management.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      image: "/houseimg33.jpg",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">
            A selection of applications demonstrating my capabilities in
            Machine Learning, Full Stack Development, and Web Application
            Development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass-card">

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />

                <div className="project-tag">
                  {project.category}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}