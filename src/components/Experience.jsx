import React from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {

  const experience = [
    {
      company: "Faith Infotech",
      role: "MERN Stack Developer Intern",
      duration: "2025",
      description:
        "Developed a Doctor Appointment Management System using the MERN stack. Implemented authentication, REST APIs, appointment scheduling, and role-based access.",
      color: "#8B5CF6"
    },
    {
      company: "Besant Technologies",
      role: "Python Django Developer Intern",
      duration: "2025",
      description:
        "Built backend applications using Django, developed REST APIs, optimized application performance, and integrated frontend with backend services.",
      color: "#06B6D4"
    },
    {
      company: "CodSoft",
      role: "Web Development Intern",
      duration: "2024",
      description:
        "Completed a virtual internship focusing on HTML, CSS, JavaScript, and responsive web design.",
      color: "#F59E0B"
    }
  ];

  return (
    <section id="experience">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">
            Experience
          </h2>

          <p className="section-subtitle">
            My internship journey and hands-on industry experience.
          </p>
        </div>

        <div className="experience-timeline">

          {experience.map((exp, index) => (
            <div
              className="experience-card glass-card"
              key={index}
            >

              <div
                className="experience-icon"
                style={{ background: exp.color }}
              >
                <Briefcase size={24} />
              </div>

              <div className="experience-content">

                <h3>{exp.role}</h3>

                <h4>{exp.company}</h4>

                <p>{exp.description}</p>

                <div className="experience-date">
                  <Calendar size={16} />
                  {exp.duration}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}