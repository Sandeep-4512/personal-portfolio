import React, { useEffect, useState } from 'react';

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

const Hero = () => {
  const [cameo, setCameo] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cameoMessages.length);
    setCameo(cameoMessages[randomIndex]);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <h1>👋 Hello and Welcome!</h1>
      <h2>I'm Sandeep</h2>
      <p className="cameo-message">{cameo}</p>
    </section>
  );
};

export default Hero;
