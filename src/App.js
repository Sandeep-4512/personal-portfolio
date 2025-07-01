import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="app-container">
      <header>
        <nav>
          <h1 className="logo">
            <img
              src="/profile.jpg"
              alt="Sandeep"
              className="profile-pic"
              onClick={toggleProfile}
            />
            Sandeep Kumar Peddareddy
          </h1>
          <ul>
            <li><button onClick={() => setActiveSection('hero')}><i className="fas fa-home"></i> Home</button></li>
            <li><button onClick={() => setActiveSection('about')}><i className="fas fa-user"></i> About</button></li>
            <li><button onClick={() => setActiveSection('projects')}><i className="fas fa-laptop-code"></i> Projects</button></li>
            <li><button onClick={() => setActiveSection('experience')}><i className="fas fa-briefcase"></i> Experience</button></li>
            <li><button onClick={() => setActiveSection('contact')}><i className="fas fa-envelope"></i> Contact</button></li>
          </ul>
        </nav>
      </header>

      <main>
        {activeSection === 'hero' && <Hero />}
        {activeSection === 'about' && <About />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <footer>
        <p>&copy; 2025 Sandeep. All rights reserved.</p>
      </footer>

      {/* Fullscreen Profile View */}
      {isProfileOpen && (
        <div className="profile-fullscreen-overlay" onClick={toggleProfile}>
          <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-profile" onClick={toggleProfile}>&times;</button>
            <img
              src="/profile.jpg"
              alt="Sandeep Full"
              className="profile-full-image"
            />
            <p className="profile-name">Sandeep Kumar Peddareddy</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
