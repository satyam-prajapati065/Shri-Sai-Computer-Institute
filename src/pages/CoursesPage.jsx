import React, { useState, useMemo } from 'react';
import { courses } from '../data/coursesData.js';
import PageHeader from '../components/PageHeader.jsx';
import { 
  BookOpen, 
  Search, 
  Filter, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Clock, 
  Laptop, 
  Calculator, 
  FileSpreadsheet, 
  CreditCard, 
  HelpCircle,
  Sparkles,
  Tag,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import CourseCard from '../components/CourseCard.jsx';

export default function CoursesPage({ onNavigate, onSelectCourse }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Diploma',
    'Advanced Diploma',
    'Accounting',
    'Designing',
    'Typing Skill',
    'Office Automation',
    'Certification',
    'Foundation',
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (course.highlights && course.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleEnquire = (courseCode) => {
    if (onSelectCourse) onSelectCourse(courseCode);
    if (onNavigate) onNavigate('contact');
  };

  return (
    <div className="page-container page-courses">
      {/* High-End Professional Page Header */}
      <PageHeader
        breadcrumb="Courses"
        badge="Academic Catalog 2026"
        badgeIcon={BookOpen}
        title="Computer Courses, Diplomas &"
        highlightWord="Transparent Fees"
        subtitle="Explore our full range of 100% practical, job-oriented computer training programs. Zero admission fee, zero certificate fee, with 2 days free demo."
        trustPoints={[
          'Zero Admission Fee',
          'Zero Certificate Fee',
          '2 Days Free Demo Class',
          'Govt. Job CCC & Live GST Practice',
        ]}
        onNavigate={onNavigate}
      />

      {/* Special Highlights Banner */}
      <section className="courses-feature-banner">
        <div className="container">
          <div className="special-tax-pill-box">
            <div className="pill-left">
              <span className="special-tag-glow">Special Accounting Module</span>
              <h3>Tally Prime + GST Return & ITR Filing Training</h3>
              <p>Accounting seekhne ke saath-saath <strong>GST Return (GSTR-1, 3B)</strong> aur <strong>Income Tax Return (ITR)</strong> portal par live file karna bhi seekh sakte hain!</p>
            </div>
            <div className="pill-right">
              <div className="tax-fee-badge">Course Fee: ₹8,000</div>
              <button 
                className="btn btn-red btn-sm"
                onClick={() => handleEnquire('Tally Prime + GST & ITR')}
              >
                Enquire for GST & ITR Batch <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Controls */}
      <section className="courses-filter-section">
        <div className="container">
          <div className="filter-controls-wrapper">
            {/* Search Input */}
            <div className="course-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search courses (e.g. Tally, ADCA, CCC, Typing, Photoshop)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="course-search-input"
                id="course-search-input"
              />
              {searchQuery && (
                <button
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="category-pills-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="results-count-text">
            Showing <strong>{filteredCourses.length}</strong> of {courses.length} courses
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="courses-grid-section">
        <div className="container">
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnquire={handleEnquire}
                />
              ))}
            </div>
          ) : (
            <div className="no-courses-found">
              <BookOpen size={48} color="#94a3b8" />
              <h3>No courses matched "{searchQuery}"</h3>
              <p>Try searching for another keyword or select a different category.</p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Complete Course Fee & Duration Comparison Table */}
      <section className="fee-table-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">
              <CreditCard size={14} /> Fee Chart
            </span>
            <h2 className="section-title">Transparent Course & Fee Comparison</h2>
            <p className="section-subtitle">
              No hidden admission charges, no hidden exam fees, and no separate certificate cost.
            </p>
          </div>

          <div className="fee-table-responsive-wrapper">
            <table className="fee-comparison-table">
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Full Name</th>
                  <th>Duration</th>
                  <th>Course Fee</th>
                  <th>Key Skills / Highlights</th>
                  <th>Admission Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <span className="table-code-badge">{c.code}</span>
                    </td>
                    <td>
                      <strong className="table-course-name">{c.name}</strong>
                      <span className="table-category-sub">{c.category}</span>
                    </td>
                    <td>
                      <span className="table-duration"><Clock size={13} /> {c.duration}</span>
                    </td>
                    <td>
                      <div className="table-fee-cell">
                        <span className="table-fee-val">{c.fee}</span>
                        <span className="table-fee-per">/ {c.feePeriod}</span>
                      </div>
                    </td>
                    <td>
                      <ul className="table-skills-list">
                        {c.highlights.slice(0, 2).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEnquire(c.code)}
                      >
                        Enquire
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Course FAQ Section */}
      <section className="course-faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">
              <HelpCircle size={14} /> Common Questions
            </span>
            <h2 className="section-title">Frequently Asked Questions on Courses</h2>
          </div>

          <div className="faq-accordion-grid">
            <div className="faq-card">
              <h4>Is there any admission or registration fee?</h4>
              <p>No! At Shri Sai Computer Institute, we charge <strong>ZERO admission fees</strong> and <strong>ZERO certificate fees</strong>. You only pay the clear course fee mentioned in our fee chart.</p>
            </div>

            <div className="faq-card">
              <h4>Can I really learn GST Return and ITR filing with Tally?</h4>
              <p>Yes! In our Tally Prime & Taxation course, we provide hands-on live portal training for GSTR-1, GSTR-3B, E-Way bills, and Income Tax Return (ITR) filing along with complete business bookkeeping.</p>
            </div>

            <div className="faq-card">
              <h4>How does the 2 Days Free Demo Class work?</h4>
              <p>You can attend 2 full days of real classes and lab sessions completely free of charge. Test our computers, interact with our trainers (Annu Gupta & Sadhna Jaiswal), and join only when you are 100% satisfied.</p>
            </div>

            <div className="faq-card">
              <h4>Will each student get an individual computer?</h4>
              <p>Yes, absolutely! We strictly practice <strong>1 Student = 1 PC</strong>. You will never have to share a system with other students during your assigned batch time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="courses-bottom-cta">
        <div className="container">
          <div className="courses-cta-box">
            <h2>Ready to Choose Your Course?</h2>
            <p>Speak with our academic counselors today or book your 2-day free demo seat.</p>
            <div className="cta-actions">
              <button className="btn btn-red btn-lg" onClick={() => onNavigate('contact')}>
                Book Free Demo Class Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
