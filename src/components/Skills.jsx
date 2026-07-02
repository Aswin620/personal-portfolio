import React, { useEffect, useState } from 'react';
import { Code2, Globe, Database } from 'lucide-react';

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code2 size={22} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe size={22} />,
      skills: [
        { name: "Django", level: 90 },
        { name: "React.js", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database size={22} />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Git & GitHub", level: 88 },
        { name: "REST APIs", level: 90 },
        { name: "Postman", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Technical Skills
          </h2>

          <p className="section-subtitle">
            Technologies, frameworks, databases, and developer tools I use to
            build modern, secure, and scalable applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="skills-category glass-card"
            >
              <h3 className="skills-category-title">
                {group.icon}
                <span>{group.title}</span>
              </h3>

              <div className="skills-list">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                  >
                    <div className="skill-info">
                      <span className="skill-name">
                        {skill.name}
                      </span>

                      <span className="skill-pct">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="skill-progress-bar">
                      <div
                        className="skill-progress-fill"
                        style={{
                          width: animated
                            ? `${skill.level}%`
                            : "0%"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}