import React from 'react';
import { instituteData } from '../data/instituteData.js';
import { Sparkles, Phone, ArrowRight } from 'lucide-react';

export default function DemoCTA() {
  const scrollToContact = () => {
    window.location.hash = 'contact';
    setTimeout(() => {
      const el = document.getElementById('enquiry-form-box') || document.getElementById('contact');
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <section className="demo-cta-section">
      <div className="container">
        <div className="demo-cta-box">
          <span className="section-badge red-badge">
            <Sparkles size={14} /> Zero Risk Trial
          </span>
          <h2 className="demo-cta-heading">Start Learning Today!</h2>
          <p className="demo-cta-text">
            Experience our teaching style with a <strong>FREE 2 Days Demo Class</strong>. No
            advance payments, no admission fee, and no obligation.
          </p>

          <div className="demo-cta-actions">
            <button className="btn btn-red btn-lg" onClick={scrollToContact}>
              Book Free Demo <ArrowRight size={18} />
            </button>
            <a href={`tel:${instituteData.phone}`} className="btn btn-secondary btn-lg">
              <Phone size={18} /> Call {instituteData.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
