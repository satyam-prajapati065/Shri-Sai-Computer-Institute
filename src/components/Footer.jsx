import React from "react";
import { instituteData } from "../data/instituteData.js";
import { Phone, MapPin, Laptop, Heart, ArrowRight } from "lucide-react";

export default function Footer({ onNavigate }) {
  const handleNav = (pageId, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#2563eb",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                <Laptop size={20} />
              </div>
              <h3 style={{ margin: 0 }}>{instituteData.name}</h3>
            </div>
            <p>
              Your trusted regional institute providing career-focused computer
              applications, financial accounting, typing, and digital design
              education with 100% practical lab training.
            </p>
            <div className="footer-tagline-quote">
              "Learn Better. Build Skills. Become Independent."
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleNav("home", e)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNav("about", e)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleNav("courses", e)}>
                  Courses
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleNav("why-us", e)}>
                  Key Features
                </a>
              </li>
              <li>
                <a href="#training" onClick={(e) => handleNav("training", e)}>
                  Training
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNav("contact", e)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Top Courses Links */}
          <div className="footer-col">
            <h4>Popular Courses</h4>
            <ul className="footer-links">
              <li>
                <a href="#courses" onClick={(e) => handleNav("courses", e)}>
                  CCC (NIELIT) - ₹2,500
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleNav("courses", e)}>
                  Tally Prime + GST & ITR - ₹8,000
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleNav("courses", e)}>
                  ADCA (1 Year Diploma) - ₹7,000
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleNav("courses", e)}>
                  DCA (6 Months) - ₹4,500
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleNav("courses", e)}>
                  MS Office - ₹3,000
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleNav("courses", e)}>
                  Hindi & English Typing - ₹500/mo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4>Direct Helpline</h4>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <div>Call / WhatsApp:</div>
                <a
                  href={`tel:${instituteData.phone}`}
                  style={{ color: "#ffffff", fontWeight: "700" }}
                >
                  {instituteData.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <div>
                <div>Main Campus:</div>
                <span>Nayi Sadak, Shahjadpur, Ambedkar Nagar, UP</span>
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <button
                className="btn btn-red btn-sm btn-block"
                onClick={(e) => handleNav("contact", e)}
              >
                Book 2 Days Free Demo <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>© 2026 Shri Sai Computer Institute. All Rights Reserved.</div>
          <div>
            100% Practical Computer Lab • Zero Admission Fee • Zero Certificate
            Fee
          </div>
        </div>
      </div>
    </footer>
  );
}
