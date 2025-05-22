import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <>
      <header>
        <nav>
          <h1 className="logo">
            <img
              src="/profile.jpg"
              alt="Sandeep"
              className={`profile-pic ${isZoomed ? 'zoomed' : ''}`}
              onClick={toggleZoom}
            />
            Sandeep Kumar Peddareddy
          </h1>
          <ul>
            <li><a href="#hero"><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#about"><i className="fas fa-user"></i> About</a></li>
            <li><a href="#projects"><i className="fas fa-laptop-code"></i> Projects</a></li>
            <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </nav>
      </header>

      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer>
        <p>&copy; 2025 Sandeep. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
