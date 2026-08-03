import React from "react";
import horse from "../img/horse.png";
import horseshoe from "../img/horseshoe.png";
import saddle from "../img/saddle.png";

const Points = ({ points }) => {
  const items = [
    { icon: horse, alt: "Koń", text: points.one },
    { icon: horseshoe, alt: "Podkowa", text: points.two },
    { icon: saddle, alt: "Siodło", text: points.three }
  ];

  return (
    <div className="points-row">
      {items.map(({ icon, alt, text }) => (
        <div className="point" key={alt}>
          <div className="point-icon">
            <img src={icon} alt={alt} />
          </div>
          <h3>{text}</h3>
        </div>
      ))}
    </div>
  );
};

export default Points;
