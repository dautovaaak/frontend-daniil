import React, { Component } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 год, сессия по веб-программированию. Всех люблю! спасибо за знания!</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;