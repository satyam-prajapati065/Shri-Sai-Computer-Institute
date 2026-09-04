import React from 'react';
import { instituteData } from '../data/instituteData.js';
import EnquiryForm from './EnquiryForm.jsx';
import { Phone, MapPin, MessageSquare, Users, Sparkles, Mail } from 'lucide-react';

export default function Contact({ selectedCourse }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <MessageSquare size={14} /> Get in Touch
          </span>
          <h2 className="section-title">Contact Us & Visit Our Centers</h2>
          <p className="section-subtitle">
            Have questions regarding courses, class timings, or certificate eligibility? Contact us
            today or visit our nearest center.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            {/* Phone & Direct Call Card */}
            <div className="contact-card-box">
              <h3>
                <Phone size={20} color="#1e40af" /> Direct Helpline & WhatsApp
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '14px' }}>
                Speak directly with our counselors to schedule your free demo class:
              </p>
              <a
                href={`tel:${instituteData.phone}`}
                className="phone-highlight-btn"
                title="Call Institute"
              >
                <Phone size={22} color="#dc2626" />
                <span>{instituteData.phoneDisplay}</span>
              </a>
            </div>

            {/* Institute Locations */}
            <div className="contact-card-box">
              <h3>
                <MapPin size={20} color="#1e40af" /> Our Campus & Branch Locations
              </h3>
              <div className="locations-list">
                {instituteData.locations.map((loc, idx) => (
                  <div key={idx} className="location-item">
                    <div className="location-item-header">
                      <span className="location-name">{loc.title}</span>
                      <span className="location-tag">
                        {loc.isPrimary ? 'Main Campus' : 'Branch Center'}
                      </span>
                    </div>
                    <div className="location-address">
                      <strong>{loc.address}</strong>, {loc.district}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trainers Contact Details */}
            <div className="contact-card-box">
              <h3>
                <Users size={20} color="#1e40af" /> Faculty & Course Trainers
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {instituteData.trainers.map((trainer, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>
                        {trainer.name}
                      </strong>
                      <div style={{ fontSize: '0.78rem', color: '#dc2626' }}>
                        {trainer.role}
                      </div>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      Trainer
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="contact-form-col">
            <EnquiryForm selectedCourse={selectedCourse} />
          </div>
        </div>
      </div>
    </section>
  );
}
