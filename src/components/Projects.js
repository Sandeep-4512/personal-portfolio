import React from 'react';
import { FaWallet, FaMobileAlt, FaGithub } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import '../App.css';

const Projects = () => (
  <section id="projects" className="section projects-section">
    <h2>🚀 Projects</h2>

    {/* Personal Finance Manager */}
    <details className="project-card" open>
      <summary><FaWallet /> Personal Finance Manager</summary>
      <p>
        Developed a full-stack web application to help users track and manage their finances with interactive data visualizations.
      </p>
      <p>
        Built using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>, with charts via <strong>Chart.js</strong>.
      </p>
      <p><strong>Tech Stack:</strong> MERN</p>
      <p>
        <BsGlobe /> Website:{' '}
        <a href="https://personal-finance-manager-app-black.vercel.app/" target="_blank" rel="noopener noreferrer">
          personal-finance-manager-app-black.vercel.app
        </a>
      </p>
    </details>

    {/* Job Finder App */}
    <details className="project-card">
      <summary><FaMobileAlt /> Job Finder App</summary>
      <p>
        A mobile-first job portal connecting recruiters and job seekers, built for real-time interaction, job tracking, and resume uploads.
      </p>
      <p>
        Developed using <strong>React Native</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>, integrated with <strong>JWT</strong> and deployed via <strong>Expo</strong> & <strong>Render</strong>.
      </p>
      <p><strong>Tech Stack:</strong> MERN + React Native</p>
      <p>
        <FaGithub /> GitHub:{' '}
        <a href="https://github.com/Sandeep-4512/JobFinder2.git" target="_blank" rel="noopener noreferrer">
          github.com/Sandeep-4512/JobFinder2.git
        </a>
      </p>
    </details>
  </section>
);

export default Projects;
