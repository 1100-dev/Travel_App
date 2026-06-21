import React from "react";
import "../css/footer.css";
const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Brand */}
        <div className="footer-column">
          <h2>Pakistan Explorer</h2>

          <p>
            Discover breathtaking destinations, unforgettable
            adventures, and carefully planned tours across Pakistan.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src="/images/facebook.jpg" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src="/images/instagram.jpg" alt="Instagram" />
            </a>

            <a href="mailto:example@email.com">
              <img src="/images/email.jpg" alt="Email" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Popular Tours */}
        <div className="footer-column">
          <h3>Top Destinations</h3>

          <ul>
            <li>Hunza Valley</li>
            <li>Skardu</li>
            <li>Swat Valley</li>
            <li>Lahore</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>📍 Pakistan</p>
          <p>📧 info@pakistanexplorer.com</p>
          <p>📞 +92 300 1234567</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Pakistan Explorer. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;