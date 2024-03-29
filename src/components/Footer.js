import { Link } from "gatsby";
import React from "react";
import logo from "../img/jackowo-logo_w.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-12">
                <section
                  className="menu"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Link className="navbar-item" to="/konie-jackowo">
                    Nasze Konie
                  </Link>

                  <a
                    className="navbar-item"
                    href="https://www.facebook.com/Stajnia-Jackowo-1611633439072644/"
                  >
                    Facebook
                  </a>

                  <Link className="navbar-item" to="/">
                    Cennik
                  </Link>

                  <a
                    className="navbar-item"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admin
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
