import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";
import Points from "../components/Points";
import SideFullSection from "../components/SideFullSection";
import { SideToSide } from "../components/SideToSide";
import beata from "../img/beata.jpg";

export const IndexPageTemplate = ({
  image,
  title,
  main,
  subheading,
  mainpitch,
  main2,
  points,
  pointOne,
  pointTwo,
  pointThree,
}) => (
  <div className="content">
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.5)) ,url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        className="jumb-title"
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {subheading}
        </h3>
      </div>
      <div className="jumbotron-pointsgroup">
        <Link to="/about">
          <div className="jumbotron-points">
            <p>{pointOne}</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="jumbotron-points">
            <p>{pointTwo}</p>
          </div>
        </Link>
        <Link to="#dladzieci">
          <div className="jumbotron-points">
            <p>{pointThree}</p>
          </div>
        </Link>
      </div>
    </div>
    <section className="section">
      <div className="column is-10 is-offset-1" style={{ paddingBottom: 65 }}>
        <div className="content">
          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold has-text-centered is-size-2">
                {mainpitch.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Points points={points} />
    </section>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="content">
              <div className="columns">
                <div className="column is-12">
                  <SideToSide
                    image={mainpitch.image.image.childImageSharp.fluid.src}
                    text={mainpitch.description}
                  />
                  <SideToSide
                    image={mainpitch.image2.image.childImageSharp.fluid.src}
                    text={mainpitch.description2}
                    rev
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SideFullSection rev main={main} />
    <div id="dladzieci">
      <SideFullSection main={main2} />
    </div>

    <section id="contact" className="section" style={{ padding: 65 }}>
      <div className="columns">
        <div className="column has-text-centered is-12">
          <img src={beata} />
        </div>
      </div>
      <div className="column is-10 is-offset-1">
        <div className="content">
          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold has-text-centered is-size-2">
                Skontaktuj się z nami
              </h3>
              <h3 className="has-text-weight-semibold has-text-centered is-size-2">
                668 301 333
              </h3>
              <h3 className="has-text-weight-semibold has-text-centered is-size-2">
                stajnia-jackowo@wp.pl
              </h3>
              <h3 className="has-text-weight-semibold has-text-centered is-size-2">
                Mozaikowa 53, 04-900 Warszawa
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        pointOne={frontmatter.pointOne}
        pointTwo={frontmatter.pointTwo}
        pointThree={frontmatter.pointThree}
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
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        points {
          one
          two
          three
        }
        pointOne
        pointTwo
        pointThree
        mainpitch {
          title
          description
          description2
          image {
            image {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            image {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
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
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
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
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
