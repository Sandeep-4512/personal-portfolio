import React, { useEffect, useState } from 'react';
import { FaEye, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../App.css';

const cameoMessages = [
  "🚀 Turning ideas into code, one line at a time.",
  "🌱 Learning something new every day.",
  "💡 Solving real-world problems with tech.",
  "📊 Coffee + Code = Productivity.",
  "💻 Full Stack, Full Passion.",
  "🎯 Focused on growth, not perfection.",
  "🧠 Building logic, debugging life.",
  "🔍 Passionate about clean code and clever solutions."
];

const impressiveCertLines = [
  "📚 Certifications are stepping stones to mastery.",
  "💼 Every certificate reflects a milestone of dedication.",
  "🔥 Learning never stops, and these prove it.",
  "🚀 Powering up skills with every achievement.",
  "🧠 Stacking credentials to solve real-world problems.",
  "📈 Growth backed by certified knowledge.",
  "🎓 Earned through effort, driven by passion.",
  "🔑 Unlocking career doors, one cert at a time."
];

const certifications = [
  {
    title: "Google Cyber Security Professional Certificate V2",
    img: "/certs/google-data.png",
    description: "Issued by Google — covers foundations of cybersecurity and SOC essentials."
  },
  {
    title: "Microsoft Certified - AI Azure Fundamentals",
    img: "/certs/microsoft.png",
    description: "Achieved Microsoft Certification for AI Azure Fundamentals."
  },
  {
    title: "AICTE MERN Stack Internship Certificate",
    img: "/certs/aicte.png",
    description: "Completed 6-week internship on MERN stack technologies with hands-on projects."
  }
];

const funFacts = [
  "💡 I debug more than I code.",
  "🎧 I work best with lo-fi beats playing.",
  "📚 I read books on tech and productivity.",
  "🎮 Gaming taught me problem-solving (and patience).",
  "🛠️ I automate boring stuff daily.",
  "📈 I track my habits like a data scientist.",
  "👨‍💻 My best ideas come at 2 AM.",
  "⚙️ I believe every bug has a reason.",
  "🌍 Open-source excites me!"
];

const Hero = () => {
  const [cameo, setCameo] = useState('');
  const [showCerts, setShowCerts] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [impressiveLine, setImpressiveLine] = useState('');

  useEffect(() => {
    setCameo(cameoMessages[Math.floor(Math.random() * cameoMessages.length)]);
    setImpressiveLine(impressiveCertLines[Math.floor(Math.random() * impressiveCertLines.length)]);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div>
        <h1 className="text-4xl font-bold mb-2">👋 Hello and Welcome!</h1>
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">I'm Sandeep</h2>
        <p className="italic text-lg mb-4">{cameo}</p>
        <p className="mb-4 text-gray-700">
          I'm a passionate software developer and data enthusiast, with hands-on experience in MERN stack, machine learning, and full-stack mobile development. My journey is shaped by curiosity, commitment, and code. I believe in lifelong learning, solving real-world problems, and building things that make a difference. Dive into my projects, explore my internships, and don’t forget to peek at my certifications!
        </p>
      </div>

      {/* Scrolling Fun Facts */}
      <div className="fun-facts-scroller">
        <div className="scrolling-text">
          {[...funFacts, ...funFacts].map((fact, idx) => (
            <span key={idx}>{fact} &nbsp;•&nbsp;</span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-12">
        <h3 className="text-3xl font-extrabold text-blue-700 mb-2">📜 Certifications</h3>
        <p className="text-gray-700 italic mb-4">{impressiveLine}</p>
        <button
          onClick={() => setShowCerts(!showCerts)}
          className="cert-toggle-btn"
        >
          {showCerts ? (
            <>
              <FaChevronUp style={{ marginRight: '6px' }} />
              Hide
            </>
          ) : (
            <>
              <FaChevronDown style={{ marginRight: '6px' }} />
              View
            </>
          )}
        </button>

        {showCerts && (
          <div className="cert-list mt-6 space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-entry">
                <div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-desc">{cert.description}</p>
                </div>
                <button
                  className="cert-btn"
                  onClick={() => setSelectedCert(cert)}
                >
                  <FaEye style={{ marginRight: "6px" }} />
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>
              &times;
            </button>
            <img src={selectedCert.img} alt={selectedCert.title} className="modal-image" />
            <h4 className="text-white mt-2 text-lg font-medium">{selectedCert.title}</h4>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
