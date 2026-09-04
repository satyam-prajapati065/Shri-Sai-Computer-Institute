import React from 'react';
import { instituteData } from '../data/instituteData.js';
import { MonitorCheck, UserCheck, TrendingUp, HeartHandshake, Award } from 'lucide-react';

const iconMap = {
  MonitorCheck: MonitorCheck,
  UserCheck: UserCheck,
  TrendingUp: TrendingUp,
  HeartHandshake: HeartHandshake,
};

export default function TrainingSection() {
  return (
    <section id="learning" className="training-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge green-badge">
            <Award size={14} /> Methodology
          </span>
          <h2 className="section-title">Practical Learning for Real-World Skills</h2>
          <p className="section-subtitle">
            Our instructional approach combines conceptual clarity with daily hands-on practice,
            ensuring every student builds genuine workplace confidence.
          </p>
        </div>

        <div className="training-pillars-grid">
          {instituteData.trainingPillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || MonitorCheck;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-top-row">
                  <div className="pillar-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="pillar-num">{pillar.num}</span>
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
