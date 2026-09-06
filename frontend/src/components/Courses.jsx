import React, { useState } from 'react';
import { courses } from '../data/coursesData.js';
import CourseCard from './CourseCard.jsx';
import { BookOpen } from 'lucide-react';

export default function Courses({ onSelectCourse }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Diplomas', 'Accounting', 'Designing', 'Office & Typing'];

  const filteredCourses = courses.filter((c) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Diplomas') return c.category.includes('Diploma') || c.category === 'Certification';
    if (activeCategory === 'Accounting') return c.category.includes('Accounting');
    if (activeCategory === 'Designing') return c.category.includes('Designing');
    if (activeCategory === 'Office & Typing') return c.category.includes('Office') || c.category.includes('Typing') || c.category === 'Foundation';
    return true;
  });

  const handleEnquireCourse = (courseName) => {
    if (onSelectCourse) {
      onSelectCourse(courseName);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const yOffset = -70;
      const y = contactEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <BookOpen size={14} /> Career & Practical Programs
          </span>
          <h2 className="section-title">Our Certified Computer Courses</h2>
          <p className="section-subtitle">
            Explore industry-focused computer applications, professional accounting, graphic
            design, and bilingual typing programs taught by experienced trainers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="courses-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnquire={handleEnquireCourse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
