import React, { useState, useEffect } from "react";
import { instituteData } from "../data/instituteData.js";
import {
  Phone,
  Clock,
  Menu,
  X,
  Laptop,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Building2,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

export default function Navbar({ activePage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "courses", label: "Courses" },
    { id: "why-us", label: "Key Features" },
    { id: "training", label: "Training" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (pageId, e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Bar for contact & badge */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-item">
            <Clock size={13} />
            <span>Admissions Open 2026</span>
            <span className="top-badge-highlight">{instituteData.badge}</span>
          </div>
          <div className="top-bar-item">
            <Phone size={13} />
            <span>Call / WhatsApp: </span>
            <a
              href={`tel:${instituteData.phone}`}
              style={{ fontWeight: "700" }}
            >
              {instituteData.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container">
        <div className="nav-main-wrapper">
          {/* Brand Logo */}
          <a
            href="#home"
            className="brand-logo"
            onClick={(e) => handleNavClick("home", e)}
          >
            <div className="brand-icon-box">
              <img src="src\Class Img\Logo.png" alt="" />
            </div>
            <div className="brand-text">
              <span className="brand-title">SHRI SAI</span>
              <span className="brand-subtitle">COMPUTER INSTITUTE</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activePage === item.id ? "active" : ""}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {item.id === "courses" && (
                    <span className="nav-count-badge">10+</span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Action CTAs & Mobile Hamburger */}
          <div className="nav-actions">
            <button
              className="btn btn-red btn-sm"
              onClick={(e) => handleNavClick("contact", e)}
              id="header-demo-cta-btn"
            >
              Book Free Demo
            </button>
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              id="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu open">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mobile-nav-link ${activePage === item.id ? "active" : ""}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={18} color="#94a3b8" />
                </a>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "16px",
            }}
          >
            <button
              className="btn btn-red btn-block"
              onClick={(e) => handleNavClick("contact", e)}
            >
              Book Free Demo Class (2 Days)
            </button>
            <a
              href={`tel:${instituteData.phone}`}
              className="btn btn-secondary btn-block"
              style={{ justifyContent: "center" }}
            >
              <Phone size={16} /> Call {instituteData.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
