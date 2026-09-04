import React from "react";
import { instituteData } from "../data/instituteData.js";
import {
  Sparkles,
  ArrowRight,
  Award,
  CheckCircle2,
  ShieldCheck,
  Laptop,
  Users,
  Check,
  Phone,
  BookOpen,
} from "lucide-react";

export default function Hero({ onEnrollClick, onViewCourses }) {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToCourses = () => {
    const el = document.getElementById("courses");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-bento-section">
      <div className="container">
        {/* Bento Grid Layout Container */}
        <div className="hero-bento-grid">
          {/* Main Hero Card (Large Bento Tile) */}
          <div className="bento-tile bento-hero-main">
            <div className="bento-hero-content">
              <span className="bento-pill bento-pill-blue">
                <Sparkles size={13} /> 2 Days FREE DEMO Class
              </span>

              <h1 className="bento-hero-title">
                Learn Computer Skills.
                <br />
                <span className="text-blue-accent">Build a Better Future.</span>
              </h1>

              <p className="bento-hero-desc">
                Join <strong>{instituteData.name}</strong> for 100% practical
                computer & accounting training. Master DCA, ADCA, Tally Prime
                with <strong>GST Return & ITR filing</strong>, Photoshop, and
                Hindi/English Typing at transparent, affordable fees.
              </p>

              {/* Course Badges Quick Pill Strip (Course Names Only) */}
              <div className="hero-fee-chips">
                <span className="fee-chip">CCC (NIELIT)</span>
                <span className="fee-chip">Tally Prime + GST & ITR</span>
                <span className="fee-chip">ADCA (1 Year)</span>
                <span className="fee-chip">DCA (6 Months)</span>
                <span className="fee-chip">Photoshop & CorelDraw</span>
                <span className="fee-chip">MS Office Automation</span>
                <span className="fee-chip highlight-chip">
                  Hindi & English Typing
                </span>
              </div>

              <div className="bento-hero-actions">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={onEnrollClick}
                  id="hero-enroll-btn"
                >
                  Enroll Today <ArrowRight size={18} />
                </button>
                <button
                  className="btn btn-secondary btn-lg"
                  onClick={onViewCourses}
                  id="hero-curriculum-btn"
                >
                  <BookOpen size={17} /> View All Fees & Courses
                </button>
              </div>

              {/* Bottom Trust Row inside Hero Tile */}
              <div className="bento-hero-trust-row">
                <div className="bento-trust-item">
                  <CheckCircle2 size={16} className="text-green-accent" />
                  <span>100% Practical Lab</span>
                </div>
                <div className="bento-trust-item">
                  <CheckCircle2 size={16} className="text-green-accent" />
                  <span>No Admission Fee</span>
                </div>
                <div className="bento-trust-item">
                  <Award size={16} className="text-blue-accent" />
                  <span>Govt. Certificate Prep</span>
                </div>
              </div>
            </div>

            {/* Decorative Background Accent Graphic */}
            <div className="bento-hero-watermark" aria-hidden="true">
              <div className="watermark-circle-outer">
                <div className="watermark-circle-inner">
                  <Laptop size={110} className="watermark-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Emerald Feature Bento Card */}
          <div className="bento-tile bento-emerald-card">
            <div className="bento-emerald-top">
              <div className="bento-emerald-header">
                <span className="bento-emerald-tag">Key Highlights</span>
                <h3>Why Choose Us?</h3>
              </div>
              <ul className="bento-emerald-list">
                <li>
                  <span className="bento-check-circle">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>No Admission & Certificate Fee</span>
                </li>
                <li>
                  <span className="bento-check-circle">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>100% Practical Computer Lab</span>
                </li>
                <li>
                  <span className="bento-check-circle">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>Experienced & Supportive Trainers</span>
                </li>
                <li>
                  <span className="bento-check-circle">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>Separate Batches for Beginners</span>
                </li>
              </ul>
            </div>

            <div className="bento-emerald-bottom-pill">
              <div>
                <p className="bento-mini-label">Special Feature</p>
                <p className="bento-mini-value">CCC Certificate Available</p>
              </div>
              <div className="bento-mini-icon-circle">
                <Award size={18} />
              </div>
            </div>
          </div>

          {/* Social Proof & Student Community Bento Strip */}
          <div className="bento-tile bento-proof-strip">
            <div className="bento-avatar-stack">
              <div className="bento-avatar avatar-1">SK</div>
              <div className="bento-avatar avatar-2">AG</div>
              <div className="bento-avatar avatar-3">SJ</div>
              <div className="bento-avatar avatar-4">+</div>
            </div>
            <div className="bento-proof-text">
              <strong>Join 500+ students</strong> building successful digital
              and accounting careers in Ambedkar Nagar.
            </div>
            <a
              href={`tel:${instituteData.phone}`}
              className="bento-call-chip"
              title="Call Institute"
            >
              <Phone size={15} />
              <span>{instituteData.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
