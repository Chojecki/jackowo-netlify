import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HorseModal = ({ item, onClose }) => {
  const image = getImage(item.fullImage);
  const title = (item.text || "").split("\n")[0];

  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="horse-modal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <button
        type="button"
        className="horse-modal-close"
        aria-label="Zamknij"
        onClick={onClose}
      >
        ✕
      </button>
      <figure className="horse-modal-figure" onClick={e => e.stopPropagation()}>
        {image ? (
          <GatsbyImage image={image} alt={title} />
        ) : (
          <img src={item.fullImage || item.image} alt={title} />
        )}
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
};

const HorseCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const image = getImage(item.image);
  const title = (item.text || "").split("\n")[0];

  return (
    <>
      <article
        className="horse-card"
        onClick={() => setOpen(true)}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Pokaż zdjęcie konia: ${title}`}
      >
        <div className="horse-media">
          {image ? (
            <GatsbyImage image={image} alt={item.text} loading="lazy" />
          ) : (
            <img src={item.image} alt={item.text} loading="lazy" />
          )}
          <span className="horse-zoom">Zobacz zdjęcie</span>
        </div>
        <div className="horse-body">
          <h3 className="horse-name">{item.text}</h3>
          {item.opis && <p className="horse-desc">{item.opis}</p>}
          {item.url && (
            <a
              className="horse-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
            >
              Rodowód
            </a>
          )}
        </div>
      </article>
      {open && <HorseModal item={item} onClose={() => setOpen(false)} />}
    </>
  );
};

const FeatureGrid = ({ gridItems }) => (
  <div className="horse-grid">
    {gridItems.map(item => (
      <HorseCard item={item} key={item.text} />
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
