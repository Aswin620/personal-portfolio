import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

emailjs.init("l6E95Ri5sEXZXx9ez");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus({ type: '', message: '' });

  try {
    await emailjs.send(
      "service_ytrerqa",
      "template_lx6wzi8",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "l6E95Ri5sEXZXx9ez"
    );

    setStatus({
      type: "success",
      message: "Thank you! Your message has been sent successfully."
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

  } catch (error) {
    console.error(error);

    setStatus({
      type: "error",
      message: "Failed to send message. Please try again."
    });

  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project idea, a support challenge, or a position you want to fill? Send me a message!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Let's Connect
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
              I'm open to full-time opportunities, freelance projects, or just discussing technical queries.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon"><Mail size={20} /></div>
                <div>
                  <div className="contact-info-title">Email</div>
<a href="mailto:rajaswin4562@gmail.com" className="contact-info-value">
  aswinkannan4562@gmail.com
</a>                </div>
              </div>
              <div className="contact-info-item">
  <div className="contact-info-icon">
    <Phone size={20} />
  </div>
  <div>
    <div className="contact-info-title">Phone</div>
    <a href="tel:+918606362965" className="contact-info-value">
      +91 8606362965
    </a>
  </div>
</div>

              <div className="contact-info-item">
                <div className="contact-info-icon"><Linkedin size={20} /></div>
                <div>
                  <div className="contact-info-title">LinkedIn</div>
                  <a href="https://linkedin.com/in/aswin-raj-72568b302/" className="contact-info-value" target="_blank" rel="noopener noreferrer">linkedin.com/in/aswin-raj-72568b302/</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon"><MapPin size={20} /></div>
                <div>
                  <div className="contact-info-title">Location</div>
                  <span className="contact-info-value">India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Proposal / Job Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading} 
                className="btn btn-primary"
                style={{ width: 'fit-content', cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? (
                  <>Sending... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
