import React, { useCallback, useEffect, useState } from "react";

const Gallery = ({ images }) => {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    dir => {
      setActive(prev => (prev + dir + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = e => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            key={img.thumbnail}
            type="button"
            aria-label={`Powiększ zdjęcie ${i + 1}`}
            onClick={() => setActive(i)}
          >
            <img src={img.thumbnail} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria zdjęć"
          onClick={close}
        >
          <button
            className="gallery-modal-close"
            type="button"
            aria-label="Zamknij galerię"
            onClick={close}
          >
            ✕
          </button>
          <button
            className="gallery-modal-prev"
            type="button"
            aria-label="Poprzednie zdjęcie"
            onClick={e => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ‹
          </button>
          <figure
            className="gallery-modal-figure"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[active].original}
              alt={`Zdjęcie ${active + 1}`}
            />
            <figcaption>
              {active + 1} / {images.length}
            </figcaption>
          </figure>
          <button
            className="gallery-modal-next"
            type="button"
            aria-label="Następne zdjęcie"
            onClick={e => {
              e.stopPropagation();
              step(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
