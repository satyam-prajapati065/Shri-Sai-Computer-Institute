import React from 'react';
import { instituteData } from '../data/instituteData.js';
import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const encodedMsg = encodeURIComponent(instituteData.whatsappMessage);
  const whatsappUrl = `https://wa.me/91${instituteData.whatsappNumber}?text=${encodedMsg}`;

  return (
    <aside className="floating-actions-container" aria-label="Quick contact buttons">
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${instituteData.phone}`}
        className="floating-btn floating-phone"
        data-tooltip={`Call ${instituteData.phone}`}
        aria-label="Direct Phone Call"
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp Chat Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        data-tooltip="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </aside>
  );
}
