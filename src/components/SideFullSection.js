import React from "react";

const SideFullSection = ({ main, rev }) => {
  return (
    <section className="section section--flex">
      <div className="columns">
        {rev && (
          <div className="sidesection column is-6">
            <h3 style={{ color: "white" }} className="is-3">
              {main.heading}
            </h3>
            <p className="is-3">{main.description}</p>
          </div>
        )}
        <div
          className="column is-6"
          style={{
            height: "65vh",
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.5)) ,url(${
              !!main.image.image.childImageSharp
                ? main.image.image.childImageSharp.fluid.src
                : main.image.image
            })`,
            backgroundPosition: `top left`,
          }}
        ></div>
        {!rev && (
          <div className="sidesection column is-6">
            <h3 style={{ color: "white" }} className="is-3">
              {main.heading}
            </h3>
            <p className="is-3">{main.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SideFullSection;
