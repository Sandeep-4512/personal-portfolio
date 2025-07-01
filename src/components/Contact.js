import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    title: 'Feedback from Portfolio',
    time: new Date().toLocaleString(),
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      time: new Date().toLocaleString(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_bo31bml',     // e.g., 'service_123xyz'
        'template_b1a4h1c',    // e.g., 'template_abc456'
        formData,
        'M2z8vn_7km3uPsLEy'      // e.g., 'user_789qwerty'
      )
      .then(() => {
        setStatus('✅ Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          title: 'Feedback from Portfolio',
          time: new Date().toLocaleString(),
        });
      })
      .catch(() => {
        setStatus('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>📬 Contact Me</h2>

      <address>
        <p>
          📧 Email:{' '}
          <a href="mailto:sandeepkumarpeddareddy@gmail.com">
            sandeepkumarpeddareddy@gmail.com
          </a>
        </p>

        <p>
          🔗 LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/sandeepkumarpeddareddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sandeep Kumar Peddareddy
          </a>
        </p>

        <p>
          💻 GitHub:{' '}
          <a
            href="https://github.com/Sandeep-4512"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sandeep-4512
          </a>
        </p>
      </address>

      <h3 style={{ marginTop: '2rem' }}>📝 Leave a Message</h3>
       <p>If you have any questions or just want to say hi, feel free to send me a message!</p>
      <form onSubmit={handleSubmit} className="feedback-form">
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
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {status && <p className="feedback-status">{status}</p>}
    </section>
  );
}

export default Contact;
