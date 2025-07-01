import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_bo31bml',    // replace with your EmailJS service ID
      'template_b1a4h1c',   // replace with your EmailJS template ID
      formData,
      'M2z8vn_7km3uPsLEy'     // replace with your EmailJS public key
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus('Failed to send. Please try again later.');
    });
  };

  return (
    <div className="feedback-section">
      <h2>💬 Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <button type="submit">Send Feedback</button>
      </form>
      {status && <p className="feedback-status">{status}</p>}
    </div>
  );
};

export default Feedback;
