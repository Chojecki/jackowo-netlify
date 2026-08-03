import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Points from "../components/Points";
import SideFullSection from "../components/SideFullSection";
import { SideToSide } from "../components/SideToSide";
import beata from "../img/beata.jpg";

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

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  main,
  main2,
  points
}) => {
  const heroImage = getImage(image);
  return (
    <div>
      <header className="hero">
        <div className="hero-media">
          {heroImage ? (
            <GatsbyImage image={heroImage} alt="" />
          ) : (
            <img src={image} alt="" />
          )}
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="hero-kicker">Rodzinna stajnia · Warszawa Wawer</p>
          <h1>{title}</h1>
          <div className="rule" />
          <p className="hero-sub">{subheading}</p>
          <div className="hero-cta">
            <Link className="btn btn--gold" to="/konie-jackowo/">
              Nasze konie
            </Link>
            <Link className="btn btn--outline-light" to="/about/">
              Cennik
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          Przewiń
          <span className="hero-scroll-line" />
        </div>
      </header>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="label">O stajni</span>
            <h2>{mainpitch.title}</h2>
            <div className="rule" />
          </div>
          <Points points={points} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SideToSide
            image={mainpitch.image.image.childImageSharp.gatsbyImageData}
            text={mainpitch.description}
            lead="Pierwsza lekcja zawsze na czworoboku"
          />
          <SideToSide
            image={mainpitch.image2.image.childImageSharp.gatsbyImageData}
            text={mainpitch.description2}
            rev
            lead="Zapisy u Pani Beaty Komorowskiej"
          />
        </div>
      </section>

      <SideFullSection rev main={main} />
      <div id="dladzieci">
        <SideFullSection main={main2} />
      </div>

      <section id="kontakt" className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="label">Kontakt</span>
            <h2>Skontaktuj się z nami</h2>
            <div className="rule" />
          </div>
          <div className="contact-grid">
            <div className="contact-photo">
              <img src={beata} alt="Pani Beata Komorowska" />
              <p className="contact-caption">
                Pani Beata Komorowska — właścicielka stajni
              </p>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">
                  <IconPhone />
                </span>
                <div>
                  <div className="contact-label">Telefon</div>
                  <a href="tel:+48668301333">668 301 333</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <IconMail />
                </span>
                <div>
                  <div className="contact-label">E-mail</div>
                  <a href="mailto:stajnia-jackowo@wp.pl">
                    stajnia-jackowo@wp.pl
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <IconPin />
                </span>
                <div>
                  <div className="contact-label">Adres</div>
                  <a
                    href="https://maps.google.com/?q=Mozaikowa+53,+04-900+Warszawa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozaikowa 53, 04-900 Warszawa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  main: PropTypes.object,
  main2: PropTypes.object,
  points: PropTypes.object
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        main={frontmatter.main}
        main2={frontmatter.main2}
        points={frontmatter.points}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        subheading
        points {
          one
          two
          three
        }
        mainpitch {
          title
          description
          description2
          image {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 900
                  quality: 90
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          image2 {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 900
                  quality: 90
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        main {
          heading
          description
          image {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                  quality: 90
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        main2 {
          heading
          description
          image {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                  quality: 90
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
