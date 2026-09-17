import React, { useState } from "react";
import { instituteData } from "../data/instituteData.js";
import PageHeader from "../components/PageHeader.jsx";
import {
  Laptop,
  MonitorCheck,
  UserCheck,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  Keyboard,
  Calculator,
  Image,
  FileSpreadsheet,
  Clock,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Users,
  Award,
} from "lucide-react";

export default function TrainingPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("accounting");

  const classroomImages = [
    {
      url: "/ClassImg/Lab.jpeg",
      title: "Individual Computer Lab Training",
      caption:
        "Students practicing real software workflows with individual system allocation.",
    },
    {
      url: "ClassImg/lab1.jpeg",
      title: "Supportive Mentorship & Guidance",
      caption:
        "Dedicated faculty Annu Gupta & Sadhna Jaiswal providing step-by-step guidance.",
    },
    {
      url: "ClassImg/lab2.jpeg",
      title: "Accounting & Tally Prime Lab",
      caption:
        "Hands-on practice on ledger creation, voucher entries, GST billing, and taxation.",
    },
    {
      url: "ClassImg/lab6.jpeg",
      title: "Typing Speed Building Lab",
      caption:
        "Daily Hindi & English typing drills using standardized examination typing software.",
    },
    {
      url: "ClassImg/lab7.jpeg",
      title: "Typing Speed Building Lab",
      caption:
        "Daily Hindi & English typing drills using standardized examination typing software.",
    },
    {
      url: "ClassImg/lab5.jpeg",
      title: "Typing Speed Building Lab",
      caption:
        "Daily Hindi & English typing drills using standardized examination typing software.",
    },
  ];

  return (
    <div className="page-container page-training">
      {/* High-End Professional Page Header */}
      <PageHeader
        breadcrumb="Training"
        badge="Practical Lab Experience"
        badgeIcon={Laptop}
        title="100% Hands-On"
        highlightWord="Computer & Accounting Training"
        subtitle="At Shri Sai Computer Institute, we believe real confidence comes from hands-on keyboard and mouse practice on dedicated individual workstations."
        trustPoints={[
          "Dedicated PC Every Day",
          "Tally Prime + GST Return Live Filing",
          "Hindi (Kruti/Mangal) & English Typing",
          "Photoshop & CorelDraw Graphic Tools",
        ]}
        onNavigate={onNavigate}
      />

      {/* 4 Pillars of Training Bento Grid */}
      <section className="training-pillars-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">
              <Laptop size={14} /> Methodology
            </span>
            <h2 className="section-title">
              Our 4-Step Practical Learning Model
            </h2>
            <p className="section-subtitle">
              How we transform beginners into confident, skilled, and certified
              computer professionals.
            </p>
          </div>

          <div className="pillars-bento-grid">
            {instituteData.trainingPillars.map((pillar, idx) => (
              <div key={idx} className="pillar-bento-card">
                <div className="pillar-number">{pillar.num}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="pillar-highlight">
                  <CheckCircle2 size={14} color="#15803d" /> Verified Lab
                  Workflow
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Hands-on Tracks Interactive Switcher */}
      <section className="specialized-tracks-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Live Practical Modules</span>
            <h2 className="section-title">Specialized Practical Focus Areas</h2>
            <p className="section-subtitle">
              Explore how we teach accounting, typing, graphic design, and
              office automation in our labs.
            </p>
          </div>

          <div className="tracks-tabs-row">
            <button
              className={`track-tab-btn ${activeTab === "accounting" ? "active" : ""}`}
              onClick={() => setActiveTab("accounting")}
            >
              <Calculator size={18} /> Tally, GST Return & ITR
            </button>
            <button
              className={`track-tab-btn ${activeTab === "typing" ? "active" : ""}`}
              onClick={() => setActiveTab("typing")}
            >
              <Keyboard size={18} /> Hindi & English Typing Lab
            </button>
            <button
              className={`track-tab-btn ${activeTab === "design" ? "active" : ""}`}
              onClick={() => setActiveTab("design")}
            >
              <Image size={18} /> Photoshop & Graphic Design
            </button>
            <button
              className={`track-tab-btn ${activeTab === "office" ? "active" : ""}`}
              onClick={() => setActiveTab("office")}
            >
              <FileSpreadsheet size={18} /> MS Office & Excel Mastery
            </button>
          </div>

          <div className="track-display-card">
            {activeTab === "accounting" && (
              <div className="track-content-grid">
                <div className="track-text">
                  <span className="track-badge">Accounting & Tax Portal</span>
                  <h3>Live Tally Prime, GST Return & ITR Filing Training</h3>
                  <p>
                    Accounting is more than just memorizing debits and credits.
                    At Shri Sai, students practice real business voucher
                    entries, bank reconciliations, inventory management, E-Way
                    bills, and live portal filing for{" "}
                    <strong>GST Returns (GSTR-1, GSTR-3B)</strong> and{" "}
                    <strong>Income Tax Returns (ITR)</strong>.
                  </p>
                  <ul className="track-bullets">
                    <li>
                      ✓ Creating ledgers, purchase/sales vouchers, and GST
                      invoices in Tally Prime.
                    </li>
                    <li>
                      ✓ Live portal GST Return filing simulation (GSTR-1 sales,
                      GSTR-3B summary).
                    </li>
                    <li>
                      ✓ Income Tax Return (ITR-1 / ITR-2) computation and
                      e-filing overview.
                    </li>
                    <li>
                      ✓ Generating real Profit & Loss accounts, balance sheets,
                      and audit reports.
                    </li>
                  </ul>
                  <div className="track-fee-pill">
                    Complete Practical Course Fee: <strong>₹8,000</strong>
                  </div>
                </div>
                <div className="track-media">
                  <img
                    src="https://i0.wp.com/brighttech.in/wp-content/uploads/2025/05/Top-10-TallyPrime-Shortcuts-to-Boost-Your-Efficiency.jpeg?fit=768%2C768&ssl=1"
                    alt="Accounting training at Shri Sai Institute"
                    className="track-img"
                  />
                </div>
              </div>
            )}

            {activeTab === "typing" && (
              <div className="track-content-grid">
                <div className="track-text">
                  <span className="track-badge">Speed & Accuracy Drills</span>
                  <h3>Professional Hindi & English Touch Typing</h3>
                  <p>
                    Typing speed is critical for government examinations (High
                    Court Clerk, ARO, SSC CHSL, Railway, UP Police) and private
                    data entry roles. We provide structured daily drills on both
                    English and Hindi keyboard layouts (Kruti Dev 010 and Mangal
                    Remington/Inscript).
                  </p>
                  <ul className="track-bullets">
                    <li>
                      ✓ Correct 10-finger placement drills for blind touch
                      typing.
                    </li>
                    <li>
                      ✓ Real-time speed (WPM) and accuracy (%) tracking
                      software.
                    </li>
                    <li>
                      ✓ Hindi font options: Kruti Dev 010 & Mangal (Inscript /
                      Remington).
                    </li>
                    <li>
                      ✓ Exam-style typing test simulations with backspace
                      controls.
                    </li>
                  </ul>
                  <div className="track-fee-pill">
                    Monthly Typing Subscription: <strong>₹500 / Month</strong>
                  </div>
                </div>
                <div className="track-media">
                  <img
                    src="https://sscstudy.com/wp-content/uploads/2022/08/image-3.png"
                    alt="Typing speed training"
                    className="track-img"
                  />
                </div>
              </div>
            )}

            {activeTab === "design" && (
              <div className="track-content-grid">
                <div className="track-text">
                  <span className="track-badge">Creative Graphic Suite</span>
                  <h3>Photoshop & CorelDRAW Visual Arts Training</h3>
                  <p>
                    Master commercial image manipulation, flex banner design,
                    visiting cards, social media creatives, and print-ready
                    files using industry-standard Adobe Photoshop and CorelDRAW.
                  </p>
                  <ul className="track-bullets">
                    <li>
                      ✓ Layer masks, pen tool selection, background removal &
                      color correction.
                    </li>
                    <li>
                      ✓ Passport size photo printing and photo studio editing
                      tricks.
                    </li>
                    <li>
                      ✓ Commercial flex banner, pamphlet, and invitation card
                      designing.
                    </li>
                    <li>
                      ✓ Vector illustrations, branding logos, and CMYK print
                      setup.
                    </li>
                  </ul>
                  <div className="track-fee-pill">
                    Photoshop: <strong>₹4,000</strong> | CorelDRAW:{" "}
                    <strong>₹4,000</strong>
                  </div>
                </div>
                <div className="track-media">
                  <img
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80"
                    alt="Graphic design training"
                    className="track-img"
                  />
                </div>
              </div>
            )}

            {activeTab === "office" && (
              <div className="track-content-grid">
                <div className="track-text">
                  <span className="track-badge">Office Productivity</span>
                  <h3>Advanced MS Excel, Word & PowerPoint Suite</h3>
                  <p>
                    Become indispensable in any modern office by mastering
                    advanced spreadsheet formulas, lookup functions, pivot
                    tables, official letter typing, mail merge, and impactful
                    slide decks.
                  </p>
                  <ul className="track-bullets">
                    <li>
                      ✓ Advanced Excel formulas: IF, VLOOKUP, XLOOKUP,
                      INDEX/MATCH, COUNTIF.
                    </li>
                    <li>
                      ✓ Pivot tables, dynamic charts, and financial summary
                      dashboards.
                    </li>
                    <li>
                      ✓ MS Word table formatting, headers/footers, and Mail
                      Merge for bulk letters.
                    </li>
                    <li>
                      ✓ Professional PowerPoint presentation animations and
                      slide transitions.
                    </li>
                  </ul>
                  <div className="track-fee-pill">
                    MS Office Complete Course Fee: <strong>₹3,000</strong>
                  </div>
                </div>
                <div className="track-media">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDb2e1BlwgubVg2FEMu50-TBVN8fQNAJeomvnVa-x3d3gMC25sHP_41E&s=10"
                    alt="MS Office and Excel training"
                    className="track-img"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lab Facilities & Infrastructure Bento */}
      <section className="lab-infra-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Infrastructure</span>
            <h2 className="section-title">Our Modern Lab Facilities</h2>
            <p className="section-subtitle">
              Comfortable, high-tech, and disciplined learning environment.
            </p>
          </div>

          <div className="infra-grid">
            <div className="infra-card">
              <div className="infra-icon">
                <Laptop size={24} color="#1e40af" />
              </div>
              <h4>Individual High-Speed Systems</h4>
              <p>
                Every student receives their own dedicated PC during batch hours
                with no sharing.
              </p>
            </div>

            <div className="infra-card">
              <div className="infra-icon">
                <Zap size={24} color="#f59e0b" />
              </div>
              <h4>100% Power Backup</h4>
              <p>
                Inverter and generator support ensure uninterrupted lab sessions
                during power outages.
              </p>
            </div>

            <div className="infra-card">
              <div className="infra-icon">
                <Keyboard size={24} color="#15803d" />
              </div>
              <h4>Full Typing Test Suite</h4>
              <p>
                Pre-installed software for Kruti Dev, Mangal, and English
                touch-typing speed drills.
              </p>
            </div>

            <div className="infra-card">
              <div className="infra-icon">
                <Clock size={24} color="#b91c1c" />
              </div>
              <h4>Flexible Batch Timings</h4>
              <p>
                Morning, afternoon, and evening batches from 9:00 AM to 5:00 PM
                to fit your routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Gallery */}
      <section className="classroom-gallery-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Student Life</span>
            <h2 className="section-title">Inside Our Training Classrooms</h2>
            <p className="section-subtitle">
              Glimpses of daily practical learning and dedicated mentorship.
            </p>
          </div>

          <div className="gallery-grid">
            {classroomImages.map((img, idx) => (
              <div key={idx} className="gallery-card">
                <img
                  src={img.url}
                  alt={img.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-card-caption">
                  <h4>{img.title}</h4>
                  <p>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="training-bottom-cta">
        <div className="container">
          <div className="training-cta-inner">
            <h2>Experience Our Lab in Person</h2>
            <p>
              Book your 2-day free demo class and sit in on an actual live lab
              session with our instructors.
            </p>
            <div className="cta-actions">
              <button
                className="btn btn-red btn-lg"
                onClick={() => onNavigate("contact")}
              >
                Book Free Demo Session <ArrowRight size={18} />
              </button>
              <button
                className="btn btn-white btn-lg"
                onClick={() => onNavigate("courses")}
              >
                Check All Course Fees
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
