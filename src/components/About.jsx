import React from 'react';
import { instituteData } from '../data/instituteData.js';
import { CheckCircle2, Award, Phone, Users, ShieldCheck, Monitor } from 'lucide-react';

export default function About() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image with overlay */}
          <div className="about-img-frame">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Practical computer training at Shri Sai Computer Institute"
              className="about-img"
              loading="lazy"
            />
            <div className="about-overlay-tag">
              Empowering Students Since Inception
            </div>
          </div>

          {/* Right Column: Narrative & Key Points */}
          <div className="about-content">
            <span className="section-badge">About Our Institute</span>
            <h2 className="about-content-heading">
              Dedicated to Practical Digital & Accounting Skills
            </h2>

            <p className="about-paragraph">
              <strong>{instituteData.name}</strong> is a computer education and accounting training
              institute dedicated to helping students develop practical and career-oriented digital
              skills.
            </p>

            <p className="about-paragraph">
              We provide comprehensive training in computer applications (DCA, ADCA), accounting software with practical taxation (Tally Prime, GST Return & ITR Filing),
              graphic designing (Photoshop, CorelDRAW), Microsoft Office suite, Hindi & English typing, and essential
              digital tools. <em>(GST Return and ITR भी सीख सकते हैं)</em>.
            </p>

            <p className="about-paragraph">
              Our focus is on practical learning, supportive teaching, and helping students become
              confident, skilled, and job-ready for modern career opportunities.
            </p>

            <ul className="about-features-list">
              <li className="about-feature-item">
                <CheckCircle2 size={18} />
                <span>Zero Admission & Certificate Fee</span>
              </li>
              <li className="about-feature-item">
                <CheckCircle2 size={18} />
                <span>100% Practical Computer Lab</span>
              </li>
              <li className="about-feature-item">
                <CheckCircle2 size={18} />
                <span>Expert Female & Male Trainers</span>
              </li>
              <li className="about-feature-item">
                <CheckCircle2 size={18} />
                <span>CCC Exam & Certificate Guidance</span>
              </li>
            </ul>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={scrollToContact}>
                Contact Our Trainers
              </button>
              <a href={`tel:${instituteData.phone}`} className="btn btn-secondary">
                <Phone size={16} /> Call {instituteData.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
