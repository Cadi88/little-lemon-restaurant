import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer-logo.png';
import menuImg from '../assets/menu.webp';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={footerLogo} alt="Little Lemon"></img>

      <section className="contact">
        <h3 className="footer-header">Navigation</h3>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href={menuImg} target="_blank" rel="noreferrer">
            Menu
          </a>
          <Link to="/reservations">Reservations</Link>
          <Link to="/order">Order</Link>
          <Link to="/login">Login</Link>
        </div>
      </section>

      <section className="contact">
        <h3 className="footer-header">Contact</h3>
        <div className="footer-links">
          <div>2395 Maldove Way,</div>
          <div>Chicago Illinois</div>

          <div>(629)-243-6827</div>

          <a
            href="mailto: info@littlelemon.com"
            target="_blank"
            rel="noreferrer"
          >
            info@littlelemon.com
          </a>
        </div>
      </section>

      <section className="connect">
        <h3 className="footer-header">Connect</h3>
        <div className="footer-links">
          <a
            href="https://www.facebook.com/thelittlelemonshop/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/littlelemonmoon/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
