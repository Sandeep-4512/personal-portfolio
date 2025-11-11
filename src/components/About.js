import React from 'react';
import '../App.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm Sandeep, an enthusiastic and results-driven Computer Science student with hands-on experience in full stack web and mobile development (MERN stack), data analytics, and machine learning. I’ve built and deployed scalable applications that solve real-world problems during my internships and academic projects. I'm passionate about contributing technical expertise, adaptability, and a strong problem-solving mindset to innovative and dynamic tech teams.
          </p>

          <h3>💼 Skills</h3>

          {/* Always Visible: Programming Languages */}
          <div>
            <h4>💻 Programming Languages</h4>
            <p>Python, Java, SQL</p>
          </div>

          {/* Collapsible Sections */}
          <details>
            <summary>📚 <strong>Frameworks & Libraries</strong></summary>
            <p>NumPy, Pandas</p>
          </details>

          <details>
            <summary>🛠️ <strong>Tools</strong></summary>
            <p>SQL Server,Jupyter Notebook, Excel, Power BI</p>
          </details>

          <details>
            <summary>🗄️ <strong>Databases</strong></summary>
            <p>MySQL, MSSQL</p>
          </details>

          <details>
            <summary>🧰 <strong>Developer Tools</strong></summary>
            <p>Git/GitHub,SSMS, Google Colab, VS Code, Anaconda</p>
          </details>

          <details>
            <summary>📖 <strong>Academic Coursework</strong></summary>
            <p>Data Science, Operating Systems (Windows, Unix/Linux)</p>
          </details>
        </div>
      </div>
    </section>
  );
}

export default About;
