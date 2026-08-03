import { Link } from "gatsby";
import React from "react";
import logo from "../img/jackowo-logo_w.png";

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Stajnia Jackowo — logo" />
          <p>
            „Nie sztuką jest kochać konie, sztuką jest sprawić by konie
            pokochały Ciebie."
          </p>
        </div>

        <div>
          <h4>Nawigacja</h4>
          <ul>
            <li>
              <Link to="/">O nas</Link>
            </li>
            <li>
              <Link to="/konie-jackowo/">Nasze Konie</Link>
            </li>
            <li>
              <Link to="/about/">Cennik</Link>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Stajnia-Jackowo-1611633439072644/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Kontakt</h4>
          <ul className="footer-contact">
            <li>
              <IconPhone />
              <a href="tel:+48668301333">668 301 333</a>
            </li>
            <li>
              <IconMail />
              <a href="mailto:stajnia-jackowo@wp.pl">stajnia-jackowo@wp.pl</a>
            </li>
            <li>
              <IconPin />
              <span>Mozaikowa 53, 04-900 Warszawa</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Stajnia Jackowo</span>
        <span>
          <a
            href="/admin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Panel administracyjny
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
