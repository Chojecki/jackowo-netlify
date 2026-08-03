import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SideFullSection = ({ main, rev }) => {
  const image = getImage(main?.image?.image);

  return (
    <section className={`band${rev ? " band--rev" : ""}`}>
      <div className="band-media">
        {image ? (
          <GatsbyImage image={image} alt="" loading="lazy" />
        ) : (
          <img
            src={main?.image?.image}
            alt=""
            loading="lazy"
          />
        )}
      </div>
      <div className="band-body">
        <div className="band-inner">
          <span className="label">{rev ? "Dla dorosłych" : "Dla dzieci"}</span>
          <h2>{main.heading}</h2>
          <p>{main.description}</p>
        </div>
      </div>
    </section>
  );
};

export default SideFullSection;
