import React, { useState } from "react";
import { instituteData } from "../data/instituteData.js";
import PageHeader from "../components/PageHeader.jsx";
import {
  ShieldCheck,
  Sparkles,
  Clock,
  BookCheck,
  Users,
  Laptop,
  Briefcase,
  Smile,
  CheckCircle2,
  XCircle,
  Award,
  ArrowRight,
  Phone,
  Check,
  HelpCircle,
  Zap,
  TrendingUp,
} from "lucide-react";

const iconMap = {
  ShieldCheck,
  Sparkles,
  Clock,
  BookCheck,
  Users,
  Laptop,
  Briefcase,
  Smile,
};

export default function WhyUsPage({ onNavigate }) {
  const [selectedGoal, setSelectedGoal] = useState("job");

  const getRecommendedCourse = () => {
    switch (selectedGoal) {
      case "govt":
        return {
          title: "CCC (Course on Computer Concepts) + Hindi/English Typing",
          fee: "₹2,500 + ₹500/mo",
          desc: "Essential for UPSSSC, VDO, Lekhpal, High Court Clerk, and all state/central government jobs.",
        };
      case "accounting":
        return {
          title: "Tally Prime + GST Return & ITR Filing",
          fee: "₹8,000 (Complete Practical)",
          desc: "Perfect for business accounting, billing jobs, CA office assistants, and tax return consultants.",
        };
      case "design":
        return {
          title: "Photoshop + CorelDRAW Graphic Design Bundle",
          fee: "₹4,000 each",
          desc: "Ideal for creative photo editing, flex/banner designing, social media marketing, and studio jobs.",
        };
      case "comprehensive":
        return {
          title: "ADCA (Advanced Diploma in Computer Applications) 1 Year",
          fee: "₹7,000 (Full 1-Year Diploma)",
          desc: "The ultimate all-in-one computer diploma covering DCA, Tally, Graphic Design, and Office Management.",
        };
      default:
        return {
          title: "DCA (Diploma in Computer Applications) or MS Office",
          fee: "₹4,500 / ₹3,000",
          desc: "Solid foundation in computer operations, MS Word, Advanced Excel formulas, and PowerPoint.",
        };
    }
  };

  const recommendation = getRecommendedCourse();

  return (
    <div className="page-container page-why-us">
      {/* High-End Professional Page Header */}
      <PageHeader
        breadcrumb="Key Features"
        badge="The Shri Sai Advantage"
        badgeIcon={ShieldCheck}
        title="Why Study at"
        highlightWord="Shri Sai Computer Institute?"
        subtitle="We stand apart through our 100% practical lab methodology, transparent zero-fee policies, supportive lady faculty, and real-world career orientation."
        trustPoints={[
          "1 Student : 1 PC Guaranteed",
          "Zero Hidden Fees",
          "Supportive Expert Mentors",
          "Exam & Govt Job Alignment",
        ]}
        onNavigate={onNavigate}
      />

      {/* 8 Core Pillars Bento Grid */}
      <section className="why-us-grid-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">
              <Sparkles size={14} /> 8 Distinct Pillars
            </span>
            <h2 className="section-title">
              Everything You Need for Digital & Career Success
            </h2>
            <p className="section-subtitle">
              Carefully designed learning advantages that prioritize your
              practical skills, budget, and confidence.
            </p>
          </div>

          <div className="why-us-bento-grid">
            {instituteData.whyChooseUs.map((item, index) => {
              const IconComp = iconMap[item.icon] || ShieldCheck;
              return (
                <div key={index} className="why-bento-card">
                  <div className="why-bento-icon-box">
                    <IconComp size={26} />
                  </div>
                  <h3 className="why-bento-title">{item.title}</h3>
                  <p className="why-bento-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CCC Govt Certificate Spotlight Banner */}
      <section className="ccc-spotlight-section">
        <div className="container">
          <div className="ccc-spotlight-card">
            <div className="ccc-left-content">
              <span className="ccc-mini-tag">
                Special Govt. Accreditation Assistance
              </span>
              <h2>Course on Computer Concepts (CCC) Certificate Available</h2>
              <p>
                Preparing for Government Exams (UPSSSC, Lekhpal, VDO, Police,
                Railway, High Court)? The NIELIT CCC certificate is a mandatory
                qualification. At Shri Sai Computer Institute, we provide
                complete online exam preparation, previous year question banks,
                mock tests, and certification guidance.
              </p>
              <div className="ccc-highlights-row">
                <span className="ccc-badge">
                  <Award size={15} /> NIELIT CCC Syllabus
                </span>
                <span className="ccc-badge">
                  <Check size={15} /> Daily Computer Lab Practice
                </span>
                <span className="ccc-badge">
                  <Zap size={15} /> Transparent Fee: ₹2,500
                </span>
              </div>
            </div>
            <div className="ccc-right-action">
              <button
                className="btn btn-red btn-lg"
                onClick={() => onNavigate("contact")}
              >
                Enroll for CCC Batch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Comparison Matrix: Other Institutes vs Shri Sai */}
      <section className="comparison-table-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Honest Comparison</span>
            <h2 className="section-title">
              How Shri Sai Compares to Other Centers
            </h2>
            <p className="section-subtitle">
              See why students and parents consistently choose Shri Sai Computer
              Institute.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Institute Feature / Guarantee</th>
                  <th className="highlight-col">Shri Sai Computer Institute</th>
                  <th className="muted-col">Ordinary Coaching Centers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Admission & Registration Fee</strong>
                  </td>
                  <td className="highlight-col">
                    <span className="tag-green">₹0 (ZERO Admission Fee)</span>
                  </td>
                  <td className="muted-col">
                    <span className="tag-red">₹500 - ₹1,500 Extra</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Certificate Issuance Charge</strong>
                  </td>
                  <td className="highlight-col">
                    <span className="tag-green">₹0 (Included with course)</span>
                  </td>
                  <td className="muted-col">
                    <span className="tag-red">₹500 - ₹1,000 Surprise Fee</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Free Trial / Demo Class</strong>
                  </td>
                  <td className="highlight-col">
                    <span className="tag-green">2 Days Full Free Demo</span>
                  </td>
                  <td className="muted-col">
                    <span className="tag-red">Rarely Provided</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Computer Allocation in Lab</strong>
                  </td>
                  <td className="highlight-col">
                    <strong>1 Student = 1 Dedicated PC</strong>
                  </td>
                  <td className="muted-col">2-3 Students sharing 1 monitor</td>
                </tr>
                <tr>
                  <td>
                    <strong>Accounting with Live GST Return & ITR</strong>
                  </td>
                  <td className="highlight-col">
                    <span className="tag-green">
                      Live Portal Tax Filing Included
                    </span>
                  </td>
                  <td className="muted-col">
                    Basic textbook journal entries only
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Typing Facility (Hindi + English)</strong>
                  </td>
                  <td className="highlight-col">
                    Daily speed drills (Kruti Dev & Mangal)
                  </td>
                  <td className="muted-col">Limited typing software support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Course Matcher Widget */}
      <section className="course-matcher-section">
        <div className="container">
          <div className="matcher-box">
            <div className="matcher-header">
              <span className="section-badge">Interactive Advisor</span>
              <h2>Not Sure Which Course to Pick? Find Your Best Match</h2>
              <p>
                Select your primary goal to see the most beneficial course for
                your career:
              </p>
            </div>

            <div className="matcher-buttons-row">
              <button
                className={`matcher-btn ${selectedGoal === "job" ? "active" : ""}`}
                onClick={() => setSelectedGoal("job")}
              >
                💼 General Office Job
              </button>
              <button
                className={`matcher-btn ${selectedGoal === "govt" ? "active" : ""}`}
                onClick={() => setSelectedGoal("govt")}
              >
                🏛️ Govt. Exam (CCC / Typing)
              </button>
              <button
                className={`matcher-btn ${selectedGoal === "accounting" ? "active" : ""}`}
                onClick={() => setSelectedGoal("accounting")}
              >
                📊 Accounting, GST & ITR
              </button>
              <button
                className={`matcher-btn ${selectedGoal === "design" ? "active" : ""}`}
                onClick={() => setSelectedGoal("design")}
              >
                🎨 Graphic Design (Photoshop)
              </button>
              <button
                className={`matcher-btn ${selectedGoal === "comprehensive" ? "active" : ""}`}
                onClick={() => setSelectedGoal("comprehensive")}
              >
                ⭐ 1-Year All-Rounder (ADCA)
              </button>
            </div>

            <div className="recommendation-result-box">
              <div className="rec-left">
                <span className="rec-badge">Recommended For You</span>
                <h3 className="rec-title">{recommendation.title}</h3>
                <p className="rec-desc">{recommendation.desc}</p>
                <div className="rec-fee-tag">
                  Course Fee: <strong>{recommendation.fee}</strong>
                </div>
              </div>
              <div className="rec-right">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => onNavigate("contact")}
                >
                  Book 2-Day Free Demo For This Course <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="why-bottom-cta">
        <div className="container">
          <div className="why-cta-inner">
            <h2>Experience the Difference in Person</h2>
            <p>
              Visit our nearest campus in Ambedkar Nagar or , meet our faculty,
              and test our lab systems.
            </p>
            <div className="cta-actions">
              <button
                className="btn btn-red btn-lg"
                onClick={() => onNavigate("contact")}
              >
                Contact Us for Admissions
              </button>
              <a
                href={`tel:${instituteData.phone}`}
                className="btn btn-white btn-lg"
              >
                <Phone size={18} /> Call {instituteData.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
