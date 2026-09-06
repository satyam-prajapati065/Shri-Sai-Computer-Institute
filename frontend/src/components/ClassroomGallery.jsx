import React from 'react';
import { instituteData } from '../data/instituteData.js';
import { Users, Monitor, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ClassroomGallery() {
  const galleryItems = [
    {
      title: 'Students Working on Computers',
      desc: 'Individual desktop stations equipped with all required software for dedicated hands-on practice.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Modern Computer Lab Classroom',
      desc: 'Air-cooled, well-lit, and quiet lab environment tailored for focused digital education.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Interactive Student Learning',
      desc: 'Collaborative doubt clearing, group exercises, and supportive peer motivation.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <section className="classroom-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Users size={14} /> Student Life & Labs
          </span>
          <h2 className="section-title">Learn in a Supportive Environment</h2>
          <p className="section-subtitle">
            Our classrooms are designed to provide practical computer training in a comfortable and
            friendly learning environment.
          </p>
        </div>

        {/* 3 Gallery Cards */}
        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
              <div className="gallery-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Trainer Faculty Card Box */}
        <div className="trainers-section-box">
          <div className="trainers-header">
            <div>
              <span className="section-badge red-badge" style={{ marginBottom: '6px' }}>
                <Sparkles size={12} /> Expert Faculty
              </span>
              <h3>Meet Our Dedicated Trainers</h3>
            </div>
            <span style={{ fontSize: '0.9rem', color: '#475569' }}>
              Personalized guidance for every learner
            </span>
          </div>

          <div className="trainers-grid">
            {instituteData.trainers.map((trainer, idx) => (
              <div key={idx} className="trainer-card">
                <div className="trainer-avatar">{trainer.initials}</div>
                <div className="trainer-details">
                  <h4>{trainer.name}</h4>
                  <span className="trainer-role-badge">{trainer.role}</span>
                  <p>{trainer.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
