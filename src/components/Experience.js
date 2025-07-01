import React from 'react';
import { FaBrain, FaCode, FaMobileAlt } from 'react-icons/fa';
import '../App.css';

const Experience = () => (
  <section id="experience" className="section experience-section">
    <h2>🧠 Internships & Experience</h2>
    <div className="timeline">

      {/* AICTE IBM (Latest) */}
      <div className="timeline-item">
        <div className="timeline-icon"><FaBrain /></div>
        <div className="timeline-content">
          <h3>AI/ML Intern — AICTE / IBM SkillsBuild</h3>
          <span className="timeline-date">Jun – Jul 2025</span>
          <p>
            Built a <strong>salary prediction model</strong> using regression with Python & Scikit-learn. Gained hands-on experience with ML pipelines and performance tuning.
          </p>
        </div>
      </div>

      {/* EY GDS */}
      <div className="timeline-item">
        <div className="timeline-icon"><FaCode /></div>
        <div className="timeline-content">
          <h3>Full Stack Intern — EY GDS / Edunet</h3>
          <span className="timeline-date">Feb – Mar 2025</span>
          <p>
            Built the <strong>Personal Finance Manager</strong> web app using the MERN stack. Implemented user auth, expense tracking, and data visualizations using Chart.js.
          </p>
        </div>
      </div>

      {/* Brain O Vision (Oldest) */}
      <div className="timeline-item">
        <div className="timeline-icon"><FaMobileAlt /></div>
        <div className="timeline-content">
          <h3>Mobile App Developer — Brain O Vision</h3>
          <span className="timeline-date">Dec 2024 – Apr 2025</span>
          <p>
            Developed and deployed the Job Finder App using <strong>React Native</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. 
            Built role-based login, resume upload, job tracking, and chat features with real-time updates and JWT authentication.
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default Experience;
