import React, { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      <div className="contact-wrapper">

        {/* LEFT INFO PANEL */}
        <div className="contact-info">
          <h1>Let’s Plan Your Journey</h1>
          <p>
            Share your travel idea and we’ll help you turn it into a
            perfectly planned experience across Pakistan’s most beautiful destinations.
          </p>

          <div className="contact-details">
            <p>📍 Pakistan Travel Office</p>
            <p>📧 info@pakistanexplorer.com</p>
            <p>📞 +92 300 1234567</p>
          </div>

          <div className="socials">
            <span>Follow us:</span>
            <div>
              <i>📘</i>
              <i>📸</i>
              <i>✉️</i>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-card">

          <h2>Contact Us</h2>
          <p>We’ll respond within 24 hours</p>

          <form onSubmit={handleSubmit}>

            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;