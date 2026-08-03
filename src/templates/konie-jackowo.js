import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Gallery from "../components/Gallery";

import a1 from "../../static/img/gallery/a1.jpg";
import b1 from "../../static/img/gallery/b1.jpg";
import b2 from "../../static/img/gallery/b2.jpg";
import c1 from "../../static/img/gallery/c1.jpg";
import cc1 from "../../static/img/gallery/cc1.jpg";
import d1 from "../../static/img/gallery/d1.jpg";
import k1 from "../../static/img/gallery/k1.jpg";
import s1 from "../../static/img/gallery/s1.jpg";

const galleryImages = [
  { original: a1, thumbnail: a1 },
  { original: b1, thumbnail: b1 },
  { original: b2, thumbnail: b2 },
  { original: c1, thumbnail: c1 },
  { original: cc1, thumbnail: cc1 },
  { original: d1, thumbnail: d1 },
  { original: k1, thumbnail: k1 },
  { original: s1, thumbnail: s1 }
];

export const ProductPageTemplate = ({ image, title, heading, intro }) => {
  const heroImage = getImage(image);

  return (
    <div>
      <header className="page-hero">
        <div className="hero-media">
          {heroImage ? (
            <GatsbyImage image={heroImage} alt="" />
          ) : (
            <img src={image} alt="" />
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
            <span className="label">Nasi podopieczni</span>
            <h2>{heading}</h2>
            <div className="rule" />
          </div>
          <Features gridItems={intro.blurbs} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="label">Galeria</span>
            <h2>Nasza stajnia w obiektywie</h2>
            <div className="rule" />
          </div>
          <Gallery images={galleryImages} />
        </div>
      </section>
    </div>
  );
};

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        heading
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  aspectRatio: 1.6
                  quality: 90
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            fullImage: image {
              childImageSharp {
                gatsbyImageData(
                  width: 1600
                  quality: 92
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            text
            url
            opis
          }
        }
      }
    }
  }
`;
