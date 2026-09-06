import React from "react";
import {
  Monitor,
  GraduationCap,
  Award,
  Calculator,
  Image as ImageIcon,
  BookOpen,
  FileSpreadsheet,
  Palette,
  CreditCard,
  Keyboard,
  ArrowRight,
  CheckCircle2,
  Tag,
} from "lucide-react";

const iconMap = {
  Monitor: Monitor,
  GraduationCap: GraduationCap,
  Award: Award,
  Calculator: Calculator,
  Image: ImageIcon,
  BookOpen: BookOpen,
  FileSpreadsheet: FileSpreadsheet,
  Palette: Palette,
  CreditCard: CreditCard,
  Keyboard: Keyboard,
};

export default function CourseCard({ course, onEnquire }) {
  const IconComponent = iconMap[course.icon] || Monitor;

  return (
    <div className="course-card" id={`course-${course.id}`}>
      <div>
        <div className="course-card-top">
          <div
            className="course-icon-holder"
            style={{ color: course.accentColor }}
          >
            <IconComponent size={22} />
          </div>
          <div className="course-meta-tags">
            <span className="course-duration-badge">{course.duration}</span>
          </div>
        </div>

        <h3 className="course-code-title">{course.code}</h3>
        <div className="course-full-name">{course.name}</div>

        {/* Pricing Bento Pill */}
        {course.fee && (
          <div className="course-fee-container">
            <div className="course-fee-price">
              <span className="fee-amount">{course.fee}</span>
              <span className="fee-period">
                / {course.feePeriod || "Course"}
              </span>
            </div>
            <span className="course-fee-tag">No Hidden Fee</span>
          </div>
        )}

        <p className="course-desc">{course.description}</p>

        {course.highlights && (
          <ul className="course-highlights-list">
            {course.highlights.map((item, idx) => (
              <li key={idx} className="course-highlight-item">
                <CheckCircle2 size={13} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="course-card-footer">
        <button
          className="btn btn-secondary btn-block"
          onClick={() => onEnquire(course.code)}
          id={`enquire-btn-${course.id}`}
        >
          Enquire Now ({course.fee || "Free Demo"}) <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
