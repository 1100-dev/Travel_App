import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left">
          © {new Date().getFullYear()} Pakistan Explorer. All rights reserved.
        </div>
        <div className="right">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/instagram.jpg" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/facebook.jpg" alt="Facebook" />
          </a>
          <a href="mailto:example@email.com">
            <img src="/images/email.jpg" alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
