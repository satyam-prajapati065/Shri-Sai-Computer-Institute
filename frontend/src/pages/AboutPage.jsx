import React from 'react';
import { instituteData } from '../data/instituteData.js';
import PageHeader from '../components/PageHeader.jsx';
import { 
  Award, 
  Users, 
  MapPin, 
  ShieldCheck, 
  Monitor, 
  BookOpen, 
  Phone, 
  CheckCircle2, 
  Heart, 
  GraduationCap, 
  Building2, 
  Target, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="page-container page-about">
      {/* High-End Professional Page Header */}
      <PageHeader
        breadcrumb="About Us"
        badge="About Our Institute"
        badgeIcon={GraduationCap}
        title="Shri Sai Computer"
        highlightWord="Institute"
        subtitle="Empowering students, job aspirants, and working professionals across Ambedkar Nagar with 100% practical computer applications, accounting, graphic designing, and digital literacy."
        trustPoints={[
          '100% Practical Lab Training',
          'Zero Admission Fee',
          '2 Campuses (Ambedkar Nagar)',
          'Govt. Recognized Certification',
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Story & Mission Section */}
      <section className="about-main-content">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="section-badge">Our Journey & Mission</span>
              <h2 className="about-section-heading">
                Quality Education with Zero Admission Fee & 100% Practical Training
              </h2>
              <p className="about-lead">
                <strong>{instituteData.name}</strong> was established with a singular mission: to eliminate financial and technical barriers for students seeking practical computer knowledge and accounting careers.
              </p>
              <p className="about-body">
                Unlike traditional institutes that rely solely on blackboard theory or share one computer among multiple learners, Shri Sai Computer Institute ensures <strong>100% hands-on training with 1 student per system</strong>. We prepare our students for competitive government examinations (such as NIELIT CCC), private corporate accounting, taxation compliance (GST & ITR), graphic designing, and rapid typing tests.
              </p>
              <p className="about-body">
                We believe that digital empowerment is a fundamental right. That is why we proudly maintain our <strong>No Admission Fee</strong> and <strong>No Certificate Fee</strong> policy across all programs.
              </p>

              <div className="about-stats-strip">
                <div className="stat-box">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Practical Courses</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Hands-on Lab</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Regional Centers</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">2 Days</span>
                  <span className="stat-label">Free Demo Classes</span>
                </div>
              </div>
            </div>

            <div className="about-story-media">
              <div className="media-bento-card">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Students learning at Shri Sai Computer Institute"
                  className="media-img"
                  loading="lazy"
                />
                <div className="media-caption">
                  <div className="caption-badge">Active Batches 2026</div>
                  <h4>Interactive Computer Lab Environment</h4>
                  <p>Dedicated workstations equipped with the latest software and high-speed internet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Bento */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Core Pillars</span>
            <h2 className="section-title">Our Guiding Values</h2>
            <p className="section-subtitle">What makes learning at Shri Sai Computer Institute genuinely unique.</p>
          </div>

          <div className="values-bento-grid">
            <div className="value-card">
              <div className="value-icon"><Target size={24} color="#1e40af" /></div>
              <h3>Practical Competency First</h3>
              <p>Every single lecture is paired with mandatory lab practice. Students learn by doing — building real spreadsheets, typing balance sheets, and filing mock returns.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><ShieldCheck size={24} color="#15803d" /></div>
              <h3>Transparent & Fair Fees</h3>
              <p>Zero hidden charges. No admission fee, no exam fee markups, and no separate certificate fees. Full transparency for students and parents.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><GraduationCap size={24} color="#b91c1c" /></div>
              <h3>Government & Job Readiness</h3>
              <p>We align our syllabi with NIELIT CCC exam requirements, state typing test benchmarks (Kruti Dev / Mangal), and corporate accounting needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Profiles Section */}
      <section className="faculty-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Users size={14} /> Our Faculty
            </span>
            <h2 className="section-title">Meet Our Dedicated Trainers</h2>
            <p className="section-subtitle">
              Learn from experienced instructors who provide personalized step-by-step guidance in a supportive, student-friendly atmosphere.
            </p>
          </div>

          <div className="faculty-grid">
            {instituteData.trainers.map((trainer, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-card-header">
                  <div className="faculty-avatar-large">
                    {trainer.initials}
                  </div>
                  <div>
                    <h3 className="faculty-name">{trainer.name}</h3>
                    <span className="faculty-role-badge">{trainer.role}</span>
                  </div>
                </div>
                <div className="faculty-body">
                  <p className="faculty-expertise-title">Areas of Specialization:</p>
                  <p className="faculty-expertise-text">{trainer.expertise}</p>
                  <div className="faculty-features">
                    <span className="faculty-tag"><CheckCircle2 size={13} /> Practical Demonstrations</span>
                    <span className="faculty-tag"><CheckCircle2 size={13} /> Doubt Clearing</span>
                    <span className="faculty-tag"><CheckCircle2 size={13} /> Friendly Mentorship</span>
                  </div>
                </div>
                <div className="faculty-footer">
                  <button 
                    className="btn btn-secondary btn-sm w-full"
                    onClick={() => onNavigate('contact')}
                  >
                    Request Batch with {trainer.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus & Center Locations */}
      <section className="centers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Building2 size={14} /> Our Centers
            </span>
            <h2 className="section-title">Visit Our Institute Campuses</h2>
            <p className="section-subtitle">
              Accessible learning facilities across Ambedkar Nagar.
            </p>
          </div>

          <div className="centers-grid">
            {instituteData.locations.map((loc, idx) => (
              <div key={idx} className={`center-card ${loc.isPrimary ? 'primary-center' : ''}`}>
                <div className="center-card-badge">
                  {loc.isPrimary ? 'Main Campus' : 'Branch Center'}
                </div>
                <div className="center-icon-holder">
                  <MapPin size={24} color={loc.isPrimary ? '#dc2626' : '#1e40af'} />
                </div>
                <h3 className="center-title">{loc.title}</h3>
                <p className="center-address">
                  <strong>{loc.address}</strong>
                  <br />
                  {loc.district}
                </p>
                <div className="center-features">
                  <span>✓ 100% Practical Computer Lab</span>
                  <span>✓ Power Backup</span>
                  <span>✓ High-speed Internet</span>
                </div>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => onNavigate('contact')}
                >
                  Get Directions & Contact
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-bottom-cta">
        <div className="container">
          <div className="about-cta-box">
            <div className="cta-left">
              <h2>Ready to Start Your Learning Journey?</h2>
              <p>Attend 2 days of free demo classes with our trainers before taking admission.</p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-red btn-lg" onClick={() => onNavigate('contact')}>
                Book Free Demo Class <ArrowRight size={18} />
              </button>
              <button className="btn btn-white btn-lg" onClick={() => onNavigate('courses')}>
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
