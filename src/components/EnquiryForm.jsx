import React, { useState, useEffect } from 'react';
import { instituteData } from '../data/instituteData.js';
import { courses } from '../data/coursesData.js';
import { MessageSquare, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function EnquiryForm({ selectedCourse }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'General Enquiry',
    message: '',
  });

  const [status, setStatus] = useState({
    success: false,
    whatsappUrl: '',
    error: '',
  });

  // Sync selectedCourse from props (when user clicks "Enquire Now" on course cards)
  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({
        ...prev,
        course: selectedCourse,
      }));
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear alerts on edit
    if (status.error || status.success) {
      setStatus({ success: false, whatsappUrl: '', error: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) {
      setStatus({
        success: false,
        whatsappUrl: '',
        error: 'कृपया अपना नाम दर्ज करें (Please enter your name).',
      });
      return;
    }

    const cleanPhone = formData.phone.trim().replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setStatus({
        success: false,
        whatsappUrl: '',
        error: 'कृपया मान्य 10 अंकों का मोबाइल नंबर दर्ज करें (Please enter valid 10-digit number).',
      });
      return;
    }

    // Format professional WhatsApp Enquiry message
    const messageLines = [
      `*New Admission Enquiry - Shri Sai Computer Institute*`,
      `---------------------------------------`,
      `👤 *Student Name:* ${formData.name.trim()}`,
      `📞 *Phone / WhatsApp:* ${formData.phone.trim()}`,
      `📚 *Interested Course:* ${formData.course || 'General Enquiry'}`,
    ];

    if (formData.message.trim()) {
      messageLines.push(`💬 *Query / Message:* ${formData.message.trim()}`);
    }

    messageLines.push(`---------------------------------------`);
    messageLines.push(`Hello! I want admission & 2-day free demo class details.`);

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const targetWhatsapp = instituteData.whatsappNumber || '9560654195';
    const whatsappUrl = `https://wa.me/91${targetWhatsapp}?text=${encodedText}`;

    // Update status to show confirmation
    setStatus({
      success: true,
      whatsappUrl: whatsappUrl,
      error: '',
    });

    // Directly redirect to WhatsApp
    try {
      const opened = window.open(whatsappUrl, '_blank');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="enquiry-form-card" id="enquiry-form-box">
      <div className="enquiry-form-header">
        <span className="section-badge red-badge" style={{ marginBottom: '8px' }}>
          Direct WhatsApp Enquiry
        </span>
        <h3>Send an Admission Enquiry</h3>
        <p>
          Form submit karte hi aap direct WhatsApp par redirect ho jayenge, jahan se aap instant message bhej sakte hain.
        </p>
      </div>

      {status.success && (
        <div className="form-alert success" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={20} style={{ color: '#15803d', flexShrink: 0 }} />
            <strong style={{ color: '#15803d' }}>WhatsApp Par Redirect Kiya Ja Raha Hai...</strong>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#166534', margin: 0 }}>
            WhatsApp khulte hi bas "Send" button daba kar apna message bhej dein.
          </p>
          {status.whatsappUrl && (
            <a
              href={status.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{
                backgroundColor: '#22c55e',
                color: '#ffffff',
                marginTop: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
              }}
            >
              <MessageSquare size={16} /> Agar WhatsApp na khule to yahan click karein <ArrowRight size={14} />
            </a>
          )}
        </div>
      )}

      {status.error && (
        <div className="form-alert error">
          <AlertCircle size={20} style={{ flexShrink: 0 }} />
          <span>{status.error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="enquiry-name">
            Full Name (नाम) <span className="required">*</span>
          </label>
          <input
            type="text"
            id="enquiry-name"
            name="name"
            className="form-input"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="enquiry-phone">
            Phone / WhatsApp Number (मोबाइल नंबर) <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="enquiry-phone"
            name="phone"
            className="form-input"
            placeholder="e.g. 9560654195"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="enquiry-course">
            Select Interested Course (कोर्स चुनें)
          </label>
          <select
            id="enquiry-course"
            name="course"
            className="form-select"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="General Enquiry">-- Select Course (or General Enquiry) --</option>
            <option value="2 Days Free Demo Class">2 Days FREE Demo Class (Special)</option>
            {courses.map((course) => (
              <option key={course.id} value={`${course.code} - ${course.name}`}>
                {course.code} - {course.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="enquiry-message">
            Message / Query (संदेश / सवाल - Optional)
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            className="form-textarea"
            placeholder="Aap kis timing me class lena chahte hain ya koi sawal ho to likhein..."
            value={formData.message}
            onChange={handleChange}
            rows={3}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-red btn-block btn-lg"
          id="submit-enquiry-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            backgroundColor: '#16a34a',
            borderColor: '#15803d',
            boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)',
          }}
        >
          <MessageSquare size={18} /> Send Enquiry on WhatsApp
        </button>
        <p
          style={{
            fontSize: '0.78rem',
            color: '#64748b',
            textAlign: 'center',
            marginTop: '8px',
            marginBottom: 0,
          }}
        >
          ⚡ Form submit karte hi WhatsApp khul jayega, bas send daba dein.
        </p>
      </form>
    </div>
  );
}
