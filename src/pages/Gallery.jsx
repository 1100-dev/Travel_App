import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../css/Gallery.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: "/images/bella.webp", desc: "Beautiful scenery of Bella." },
    { src: "/images/crayon.jpg", desc: "Shakarpariyan hills of Islamabad." },
    { src: "/images/fort.webp", desc: "Historic fort of Pakistan." },
    { src: "/images/stream.webp", desc: "Peaceful flowing stream." },
    { src: "/images/minar.webp", desc: "Iconic Minar monument." },
    { src: "/images/lahore.webp", desc: "Badshahi Mosque of Lahore." },
    { src: "/images/mohatta.webp", desc: "Mohatta Palace, a historic landmark in Karachi." },
    { src: "/images/mazar.jpg", desc: "The famous Mazar-e-Quaid, resting place of Pakistan’s founder." }
  ];

  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-card" onClick={() => { setIndex(i); setOpen(true); }}>
            <img src={img.src} alt={img.desc} />
            <p className="description">{img.desc}</p>
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={images.map(img => ({ src: img.src }))}
        />
      )}
    </div>
  );
};

export default Gallery;
