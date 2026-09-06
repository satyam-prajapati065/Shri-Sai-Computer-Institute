import React from 'react';
import Hero from '../components/Hero.jsx';
import { courses } from '../data/coursesData.js';
import { instituteData } from '../data/instituteData.js';
import { 
  Award, 
  Monitor, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Clock, 
  Sparkles,
  Phone,
  BookOpen,
  Laptop,
  Check,
  Star
} from 'lucide-react';
import CourseCard from '../components/CourseCard.jsx';
import DemoCTA from '../components/DemoCTA.jsx';

export default function HomePage({ onNavigate, onSelectCourse }) {
  // Top 6 featured courses
  const featuredCourses = courses.slice(0, 6);

  const handleEnquireCourse = (courseCode) => {
    if (onSelectCourse) onSelectCourse(courseCode);
    if (onNavigate) onNavigate('contact');
  };

  return (
    <div className="page-container page-home">
      {/* Bento Hero Component */}
      <Hero 
        onEnrollClick={() => onNavigate('contact')} 
        onViewCourses={() => onNavigate('courses')}
      />

      {/* Feature Highlights Bento Ribbon */}
      <section className="section-feature-ribbon">
        <div className="container">
          <div className="bento-ribbon-grid">
            <div className="ribbon-card" onClick={() => onNavigate('why-us')}>
              <div className="ribbon-icon"><ShieldCheck size={24} color="#15803d" /></div>
              <div>
                <h4>Zero Admission Fee</h4>
                <p>No registration or certificate fee</p>
              </div>
            </div>

            <div className="ribbon-card" onClick={() => onNavigate('training')}>
              <div className="ribbon-icon"><Laptop size={24} color="#1e40af" /></div>
              <div>
                <h4>100% Practical Lab</h4>
                <p>1 Student = 1 Dedicated PC</p>
              </div>
            </div>

            <div className="ribbon-card" onClick={() => onNavigate('courses')}>
              <div className="ribbon-icon"><Award size={24} color="#b91c1c" /></div>
              <div>
                <h4>CCC & Tally + GST/ITR</h4>
                <p>Govt. recognized & live filing</p>
              </div>
            </div>

            <div className="ribbon-card" onClick={() => onNavigate('contact')}>
              <div className="ribbon-icon"><Clock size={24} color="#f59e0b" /></div>
              <div>
                <h4>2 Days Free Demo</h4>
                <p>Try classes before joining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Showcase */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <BookOpen size={14} /> Top Programs
            </span>
            <h2 className="section-title">Popular Job-Ready Courses & Transparent Fees</h2>
            <p className="section-subtitle">
              Choose from our most enrolled computer diplomas, accounting courses with live GST/ITR, and typing programs.
            </p>
          </div>

          <div className="courses-grid">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnquire={handleEnquireCourse}
              />
            ))}
          </div>

          <div className="home-courses-footer-cta">
            <p>Looking for more specialized diplomas, CorelDRAW, or basic computer courses?</p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => onNavigate('courses')}
              id="view-all-courses-home-btn"
            >
              Explore All 10+ Courses & Fee Chart <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Quick About & Faculty Bento Preview */}
      <section className="home-preview-section">
        <div className="container">
          <div className="home-preview-grid">
            <div className="preview-card-left">
              <span className="section-badge">About Institute</span>
              <h3 className="preview-heading">Shri Sai Computer Institute</h3>
              <p className="preview-text">
                Established with a vision to make high quality, practical computer education affordable and accessible to every student in Ambedkar Nagar and surrounding regions.
              </p>
              <div className="preview-checklist">
                <div className="check-item"><CheckCircle2 size={16} color="#15803d" /> <span>Experienced faculty: Annu Gupta & Sadhna Jaiswal</span></div>
                <div className="check-item"><CheckCircle2 size={16} color="#15803d" /> <span>Separate flexible batches (Morning, Afternoon, Evening)</span></div>
                <div className="check-item"><CheckCircle2 size={16} color="#15803d" /> <span>GST Return and ITR filing live practical training</span></div>
                <div className="check-item"><CheckCircle2 size={16} color="#15803d" /> <span>English & Hindi touch typing speed lab (Kruti Dev / Mangal)</span></div>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                <button className="btn btn-primary" onClick={() => onNavigate('about')}>
                  Read Full Institute Story <ArrowRight size={16} />
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('training')}>
                  Lab Facilities
                </button>
              </div>
            </div>

            <div className="preview-card-right">
              <div className="faculty-spotlight-box">
                <h4 className="faculty-spotlight-title">
                  <Users size={18} color="#1e40af" /> Expert Faculty & Mentors
                </h4>
                <div className="trainers-mini-list">
                  {instituteData.trainers.map((tr, idx) => (
                    <div key={idx} className="trainer-mini-item">
                      <div className="trainer-avatar-circle">{tr.initials}</div>
                      <div>
                        <div className="trainer-name">{tr.name}</div>
                        <div className="trainer-role">{tr.role}</div>
                        <div className="trainer-exp">{tr.expertise}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="batch-status-box">
                  <div className="batch-status-dot"></div>
                  <div>
                    <strong>New Batch Starting This Week!</strong>
                    <p>Limited seats per batch to ensure individual PC allocation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Demo CTA */}
      <DemoCTA />
    </div>
  );
}
