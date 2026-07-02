import React from "react";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure AI Foundations",
      issuer: "Oracle",
      year: "2025"
    },
    {
      title: "MERN Stack Certification",
      issuer: "Faith Infotech",
      year: "2025"
    },
    {
      title: "Full stack Development",
      issuer: "Besant Technologies",
      year: "2025"
    }
  ];

  return (
    <section id="certifications">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">
            Certifications
          </h2>

          <p className="section-subtitle">
            Professional certifications that strengthen my knowledge in software
            development and cloud technologies.
          </p>
        </div>

        <div className="certifications-grid">

          {certifications.map((cert,index)=>(
            <div key={index} className="cert-card glass-card">

              <Award size={42} className="cert-icon"/>

              <h3>{cert.title}</h3>

              <p>{cert.issuer}</p>

              <span>{cert.year}</span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}