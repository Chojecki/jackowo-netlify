import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import logo from "../img/jackowo-logo_w.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`site-nav${scrolled ? " is-scrolled" : ""}${
          open ? " is-open" : ""
        }`}
        role="navigation"
        aria-label="nawigacja główna"
      >
        <div className="container nav-inner">
          <Link
            to="/"
            className="nav-logo"
            title="Stajnia Jackowo — strona główna"
            onClick={() => setOpen(false)}
          >
            <img src={logo} alt="Stajnia Jackowo — logo" />
            <span className="nav-logo-text">
              Stajnia Jackowo
              <small>Warszawa · Wawer</small>
            </span>
          </Link>

          <ul className="nav-links">
            <li>
              <Link to="/" activeClassName="is-active">
                O nas
              </Link>
            </li>
            <li>
              <Link to="/konie-jackowo/" activeClassName="is-active">
                Nasze Konie
              </Link>
            </li>
            <li>
              <Link to="/about/" activeClassName="is-active">
                Cennik
              </Link>
            </li>
            <li className="nav-cta">
              <a href="/#kontakt">Kontakt</a>
            </li>
          </ul>

          <button
            className="nav-burger"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`nav-overlay${open ? " is-open" : ""}`}
        role="dialog"
        aria-label="menu"
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              O nas
            </Link>
          </li>
          <li>
            <Link to="/konie-jackowo/" onClick={() => setOpen(false)}>
              Nasze Konie
            </Link>
          </li>
          <li>
            <Link to="/about/" onClick={() => setOpen(false)}>
              Cennik
            </Link>
          </li>
          <li className="nav-overlay-cta">
            <a href="/#kontakt" onClick={() => setOpen(false)}>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
