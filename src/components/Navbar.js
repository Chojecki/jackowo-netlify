import React from "react";
import { Link } from "gatsby";
import logo from "../img/jackowo-logo_w.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            style={{ backgroundColor: "#2b2523" }}
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end" style={{ width: "100%" }}>
              <Link className="navbar-item" to="/">
                O nas
              </Link>
              <Link className="navbar-item" to="/konie-jackowo">
                Nasze Konie
              </Link>
              <Link className="navbar-item" to="/">
                Blog
              </Link>
              <Link className="navbar-item" to="/">
                Cennik
              </Link>
              <Link className="navbar-item" to="/">
                Kontakt
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              {/* <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
