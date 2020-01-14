import React from "react";

export const SideToSide = ({ image, text, rev }) => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 30, marginTop: 40 }}>
      <div className="columns">
        <div className="columns">
          {!rev && (
            <div className="column is-6">
              <p className="side-text is-size-4">{text}</p>
            </div>
          )}
          <div className="column is-6">
            <img className="side-image" src={image} />
          </div>
          {rev && (
            <div className="column is-6">
              <p className="side-text is-size-4">{text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
