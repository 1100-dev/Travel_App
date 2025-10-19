import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert('Message sent!');
    e.target.reset(); 
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input name="name" required />

        <label>Email</label>
        <input name="email" type="email" required />

        <label>Message</label>
        <textarea name="msg" rows={6} required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
