import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

export const AboutPageTemplate = ({ title, validFrom, groups, info, image }) => {
  const heroImage = getImage(image);

  return (
    <div>
      <header className="page-hero">
        <div className="hero-media">
          {heroImage ? (
            <GatsbyImage image={heroImage} alt="" />
          ) : (
            image && <img src={image} alt="" />
          )}
        </div>
        <div className="hero-shade" />
        <div className="container page-hero-content">
          <h1>{title}</h1>
          <p className="hero-kicker">Stajnia Jackowo · Warszawa Wawer</p>
        </div>
      </header>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="label">Aktualny cennik</span>
            <h2>{validFrom}</h2>
            <div className="rule" />
          </div>

          <div className="pricing-grid">
            {groups.map(group => (
              <div
                className={`pricing-card${group.featured ? " is-featured" : ""}`}
                key={group.name}
              >
                {group.featured && (
                  <span className="pricing-badge">Najpopularniejsze</span>
                )}
                <h3 className="pricing-name">{group.name}</h3>
                {group.note && <p className="pricing-note">{group.note}</p>}
                <ul className="pricing-items">
                  {group.items.map(item => (
                    <li
                      className="pricing-item"
                      key={`${item.name}-${item.detail}-${item.price}`}
                    >
                      <div className="pricing-item-text">
                        <span className="pricing-item-name">{item.name}</span>
                        {item.detail && (
                          <span className="pricing-item-detail">
                            {item.detail}
                          </span>
                        )}
                      </div>
                      <span className="pricing-item-leader" />
                      <span className="pricing-item-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
                {group.note2 && <p className="pricing-foot">{group.note2}</p>}
              </div>
            ))}
          </div>

          <div className="pricing-info">
            {info.map(block => (
              <div className="pricing-info-block" key={block.heading}>
                <h3>{block.heading}</h3>
                <p>{block.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a className="btn btn--gold" href="/#kontakt">
              Umów jazdę
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  validFrom: PropTypes.string,
  groups: PropTypes.array,
  info: PropTypes.array,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        validFrom={frontmatter.validFrom}
        groups={frontmatter.groups}
        info={frontmatter.info}
        image={frontmatter.image}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        validFrom
        groups {
          name
          note
          featured
          note2
          items {
            name
            detail
            price
          }
        }
        info {
          heading
          text
        }
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
