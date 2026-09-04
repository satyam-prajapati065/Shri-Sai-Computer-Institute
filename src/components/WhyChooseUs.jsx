import React from 'react';
import { instituteData } from '../data/instituteData.js';
import {
  ShieldCheck,
  Sparkles,
  Clock,
  BookCheck,
  Users,
  Laptop,
  Briefcase,
  Smile,
  Award,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Clock: Clock,
  BookCheck: BookCheck,
  Users: Users,
  Laptop: Laptop,
  Briefcase: Briefcase,
  Smile: Smile,
};

export default function WhyChooseUs({ onDemoClick }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="why-us" className="why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge red-badge">
            <Sparkles size={14} /> Key Features & Benefits
          </span>
          <h2 className="section-title">Why Choose Shri Sai Computer Institute?</h2>
          <p className="section-subtitle">
            We offer student-first learning with zero hidden costs, dedicated computer labs, and
            supportive trainers dedicated to your growth.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="why-grid">
          {instituteData.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div key={index} className="why-card">
                <div className="why-card-icon">
                  <Icon size={22} />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: CCC Course Certificate Available with Circular Badge */}
        <div className="ccc-highlight-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="ccc-badge-circle">
              <strong>CCC</strong>
              <span>Certificate</span>
            </div>
            <div className="ccc-banner-text">
              <h3>CCC Course Certificate Available</h3>
              <p>
                Get complete guidance, syllabus coverage, and practice tests to secure your
                government-recognized CCC computer certification with high grades.
              </p>
            </div>
          </div>
          <button className="btn btn-red" onClick={scrollToContact}>
            Get Certified <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
