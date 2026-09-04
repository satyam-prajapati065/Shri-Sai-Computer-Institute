import React from 'react';
import { 
  ChevronRight, 
  Home, 
  CheckCircle2
} from 'lucide-react';

export default function PageHeader({
  badge,
  badgeIcon: BadgeIcon,
  breadcrumb = 'Page',
  title,
  highlightWord,
  subtitle,
  trustPoints = [
    '100% Practical Lab Training',
    'Zero Admission Fee',
    '2-Day Free Demo Class',
  ],
  onNavigate,
}) {
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <section className="page-header-banner" id="page-header-container">
      {/* Dynamic Background Elements: Glowing accents & grid lines */}
      <div className="header-backdrop-grid" aria-hidden="true" />
      <div className="header-glow-orb header-glow-orb-1" aria-hidden="true" />
      <div className="header-glow-orb header-glow-orb-2" aria-hidden="true" />

      <div className="container">
        {/* Breadcrumb Navigation Bar */}
        <nav className="header-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={handleHomeClick} className="breadcrumb-link breadcrumb-home">
            <Home size={13} />
            <span>Home</span>
          </a>
          <ChevronRight size={13} className="breadcrumb-separator" />
          <span className="breadcrumb-current">{breadcrumb}</span>
        </nav>

        {/* Clean Unified Header Content */}
        <div className="header-content-wrapper">
          {/* Top Pill Badge with Live Pulse Dot */}
          {badge && (
            <div className="header-badge-pill">
              <span className="live-pulse-dot" />
              {BadgeIcon && <BadgeIcon size={14} className="badge-icon-elem" />}
              <span className="badge-text">{badge}</span>
            </div>
          )}

          {/* Main Page Title */}
          <h1 className="header-main-title">
            {title}{' '}
            {highlightWord && (
              <span className="title-gradient-accent">{highlightWord}</span>
            )}
          </h1>

          {/* Subtitle / Description */}
          {subtitle && <p className="header-lead-desc">{subtitle}</p>}

          {/* Trust Badges Strip */}
          {trustPoints && trustPoints.length > 0 && (
            <div className="header-trust-strip">
              {trustPoints.map((point, idx) => (
                <span key={idx} className="trust-item-pill">
                  <CheckCircle2 size={14} className="trust-check-icon" />
                  <span>{point}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Bottom Multi-Hue Glow Line */}
      <div className="header-bottom-accent-line" aria-hidden="true" />
    </section>
  );
}
