import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const SideToSide = ({ image, text, rev, lead }) => {
  const gatsbyImage = getImage(image);

  return (
    <div className={`split${rev ? " split--rev" : ""}`}>
      <div className="split-media">
        {gatsbyImage ? (
          <GatsbyImage image={gatsbyImage} alt="" loading="lazy" />
        ) : (
          <img src={image} alt="" loading="lazy" />
        )}
      </div>
      <div className="split-text">
        {lead && <p className="lead">{lead}</p>}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SideToSide;
