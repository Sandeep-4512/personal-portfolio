import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project-card">
      <h3>
      <i className="fas fa-wallet"></i>Personal Finance Manager</h3>
      <p>
        Developed a financial tracking application, enabling users to manage expenses, set budgets, and analyze spending trends.
      </p>
      <p>
        Built using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>, integrating data visualization with <strong>Chart.js</strong>.
      </p>
      <p>Tech Stack <strong>MERN</strong></p>
      <p>
        Project website:{' '}
        <a href="https://personal-finance-manager-app-black.vercel.app/" target="_blank" rel="noopener noreferrer">
          https://personal-finance-manager-app-black.vercel.app/
        </a>
      </p>
    </div>
  </section>
);

export default Projects;
