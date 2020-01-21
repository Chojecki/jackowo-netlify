import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <p className="has-text-weight-bold" style={{ marginTop: 10 }}>
            {item.text}
          </p>
          <a href={item.url} target="_blank">
            {item.url && `Rodowód: ${item.url}`}
          </a>
          <p style={{ marginTop: 10 }}>{item.opis}</p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
