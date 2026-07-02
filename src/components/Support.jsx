import React from 'react';
import { ShieldCheck, Cpu, HardDrive, Network, HelpCircle, Activity } from 'lucide-react';

export default function Support() {
  const supportSkills = [
    {
      icon: <Cpu size={24} />,
      title: "OS Diagnostics & Administration",
      desc: "Deep knowledge of system operations, config files, permissions, and process management across Windows and Linux environments."
    },
    {
      icon: <Network size={24} />,
      title: "Network Troubleshooting",
      desc: "Diagnosing connectivity issues using protocols like DNS, HTTP, SSH, FTP, and command tools (traceroute, ping, nslookup)."
    },
    {
      icon: <HardDrive size={24} />,
      title: "System Hardware & Software Logs",
      desc: "Analyzing event logs, dump files, and server error outputs to find root causes of failure and prevent downtime."
    },
    {
      icon: <HelpCircle size={24} />,
      title: "Customer Support Excellence",
      desc: "Translating complex tech issues into clear solutions for clients, maintaining SLA compliance and high CSAT metrics."
    }
  ];

  return (
    <section id="support">
      <div className="container">
        <div className="support-wrapper">
          <div className="support-grid">
            <div className="support-content">
              <span className="hero-badge" style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', color: 'var(--accent-secondary)' }}>
                <ShieldCheck size={14} /> Operations & Reliability
              </span>
              <h3>Technical Support Engineering</h3>
              <p>
                A great product requires not just building, but also maintaining high uptime and resolving system failures under pressure. I bridge development and IT operations to solve problems end-to-end.
              </p>
              
              <div className="support-highlights">
                <div className="support-hl-item">
                  <div className="support-hl-icon"><Activity size={16} /></div>
                  <span>Quick Incident Triage & Resolution</span>
                </div>
                <div className="support-hl-item">
                  <div className="support-hl-icon"><Activity size={16} /></div>
                  <span>Root Cause Analysis (RCA)</span>
                </div>
                <div className="support-hl-item">
                  <div className="support-hl-icon"><Activity size={16} /></div>
                  <span>Log Auditing & Performance Optimizations</span>
                </div>
              </div>
            </div>

            <div className="support-cards">
              {supportSkills.map((skill, idx) => (
                <div key={idx} className="support-card">
                  <div className="support-card-icon">{skill.icon}</div>
                  <h4 className="support-card-title">{skill.title}</h4>
                  <p className="support-card-desc">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
