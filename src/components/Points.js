import React from "react";
import horse from "../img/horse.png";
import horseshoe from "../img/horseshoe.png";
import saddle from "../img/saddle.png";

const Points = ({ points }) => {
  return (
    <div className="columns">
      <div className="column">
        <div className="points-first">
          <img
            src={horse}
            alt="Kaldi"
            style={{ width: "88px", paddingBottom: 25 }}
          />
          <h4 className="has-text-centered has-text-weight-semibold">
            {points.one}
          </h4>
        </div>
      </div>
      <div className="column">
        <div className="points-first">
          <img
            src={horseshoe}
            alt="Kaldi"
            style={{ width: "88px", paddingBottom: 25 }}
          />
          <h4 className="has-text-centered has-text-weight-semibold">
            {points.two}
          </h4>
        </div>
      </div>
      <div className="column">
        <div className="points-first">
          <img
            src={saddle}
            alt="Kaldi"
            style={{ width: "88px", paddingBottom: 25 }}
          />
          <h4 className="has-text-centered has-text-weight-semibold">
            {points.three}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Points;
