import React from "react";
import { Link } from "gatsby";

import logo from "../img/jackowo-logo_w.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

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
                    display: "flex"
                  }}
                >
                  <Link className="navbar-item" to="/about">
                    Nasze Konie
                  </Link>

                  <Link className="navbar-item" to="/about">
                    Facebook
                  </Link>

                  <Link className="navbar-item" to="/contact/examples">
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
