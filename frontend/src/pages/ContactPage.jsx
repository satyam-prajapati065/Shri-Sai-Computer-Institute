import React, { useState } from "react";
import { instituteData } from "../data/instituteData.js";
import { courses } from "../data/coursesData.js";
import EnquiryForm from "../components/EnquiryForm.jsx";
import PageHeader from "../components/PageHeader.jsx";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Users,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award,
  Send,
  HelpCircle,
} from "lucide-react";

export default function ContactPage({ selectedCourse, onNavigate }) {
  return (
    <div className="page-container page-contact">
      {/* High-End Professional Page Header */}
      <PageHeader
        breadcrumb="Contact"
        badge="Admissions & Helpline 2026"
        badgeIcon={Phone}
        title="Contact Us &"
        highlightWord="Visit Our Institute"
        subtitle="Have questions about course fees, batch timings, or the 2-day free demo class? Speak with our counselors or submit an enquiry on WhatsApp below."
        trustPoints={[
          "Instant WhatsApp Support",
          "Campuses in Ambedkar Nagar",
          "Open Mon-Sat: 9:00 AM – 5:00 PM",
          "Zero Admission Fee Counseling",
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Contact Grid */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Direct Info Cards */}
            <div className="contact-info-col">
              {/* Direct Helpline & WhatsApp Box */}
              <div className="contact-card-box highlight-border">
                <div className="box-tag">Official Helpline</div>
                <h3>
                  <Phone size={22} color="#1e40af" /> Call or WhatsApp
                  Counselors
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#475569",
                    margin: "10px 0 16px",
                  }}
                >
                  Speak directly with Annu Gupta or Sadhna Jaiswal for admission
                  assistance, syllabus clarification, or demo booking:
                </p>
                <a
                  href={`tel:${instituteData.phone}`}
                  className="phone-highlight-btn"
                  title="Call Institute"
                >
                  <Phone size={22} color="#dc2626" />
                  <span>{instituteData.phoneDisplay}</span>
                </a>

                <div
                  className="whatsapp-quick-box"
                  style={{ marginTop: "12px" }}
                >
                  <a
                    href={`https://wa.me/91${instituteData.phone}?text=${encodeURIComponent(
                      "Hello! I would like to inquire about admission and demo classes at Shri Sai Computer Institute.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full"
                    style={{ justifyContent: "center" }}
                  >
                    <MessageSquare size={16} color="#15803d" /> Chat on WhatsApp
                    Directly
                  </a>
                </div>
              </div>

              {/* Institute Locations */}
              <div className="contact-card-box">
                <h3>
                  <MapPin size={22} color="#1e40af" /> Our Campuses & Learning
                  Centers
                </h3>
                <div className="locations-list">
                  {instituteData.locations.map((loc, idx) => (
                    <div
                      key={idx}
                      className={`location-item ${loc.isPrimary ? "primary-loc" : ""}`}
                    >
                      <div className="location-item-header">
                        <span className="location-name">{loc.title}</span>
                        <span className="location-tag">
                          {loc.isPrimary ? "Main Campus" : "Branch Center"}
                        </span>
                      </div>
                      <div className="location-address">
                        <strong>{loc.address}</strong>, {loc.district}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Batch Timings & Working Hours */}
              <div className="contact-card-box">
                <h3>
                  <Clock size={22} color="#1e40af" /> Daily Class Batch Timings
                </h3>
                <div className="batch-timings-list">
                  <div className="batch-row">
                    <span className="batch-time-name">Morning Batches</span>
                    <strong className="batch-time-val">
                      09:00 AM – 11:00 AM
                    </strong>
                  </div>
                  <div className="batch-row">
                    <span className="batch-time-name">Afternoon Batches</span>
                    <strong className="batch-time-val">
                      12:00 PM – 02:00 PM
                    </strong>
                  </div>
                  <div className="batch-row">
                    <span className="batch-time-name">Evening Batches</span>
                    <strong className="batch-time-val">
                      03:00 PM – 05:00 PM
                    </strong>
                  </div>
                  <div className="batch-note">
                    * Separate batches available for school students, college
                    learners & working professionals.
                  </div>
                </div>
              </div>

              {/* Faculty Contact Details */}
              <div className="contact-card-box">
                <h3>
                  <Users size={22} color="#1e40af" /> Faculty Trainers
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {instituteData.trainers.map((trainer, idx) => (
                    <div key={idx} className="trainer-contact-mini">
                      <div className="mini-avatar">{trainer.initials}</div>
                      <div>
                        <strong>{trainer.name}</strong>
                        <div className="mini-sub">{trainer.role}</div>
                        <div className="mini-exp">{trainer.expertise}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Admission & Demo Booking Form */}
            <div className="contact-form-col">
              <div className="form-wrapper-card">
                <div className="form-card-header">
                  <span className="form-badge">Online Admission & Demo</span>
                  <h3 className="form-title">
                    Book 2-Day Free Demo / Online Enquiry
                  </h3>
                  <p className="form-subtitle">
                    Fill out the form below. Our trainers will contact you
                    within 2 business hours with complete batch details.
                  </p>
                </div>
                <EnquiryForm selectedCourse={selectedCourse} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Checklist & Zero Fee Assurance */}
      <section className="admission-checklist-section">
        <div className="container">
          <div className="checklist-box">
            <div className="checklist-left">
              <span className="section-badge">Required For Admission</span>
              <h2>Simple & Fast Admission Process</h2>
              <p>
                To register your seat, you only need basic identity
                verification:
              </p>
              <ul className="checklist-items">
                <li>
                  <CheckCircle2 size={16} color="#15803d" /> 1 Recent Passport
                  Size Photograph
                </li>
                <li>
                  <CheckCircle2 size={16} color="#15803d" /> Copy of Aadhaar
                  Card / ID Proof
                </li>
                <li>
                  <CheckCircle2 size={16} color="#15803d" /> Copy of 10th / 12th
                  / Highest Marksheet (for record)
                </li>
                <li>
                  <CheckCircle2 size={16} color="#15803d" />{" "}
                  <strong>₹0 Admission Fee</strong> (Pay only transparent course
                  fee)
                </li>
              </ul>
            </div>
            <div className="checklist-right">
              <div className="guarantee-badge-box">
                <ShieldCheck size={48} color="#15803d" />
                <h3>Zero Hidden Cost Guarantee</h3>
                <p>
                  No separate certificate fee, no extra exam fees, and 2 days
                  completely free trial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
