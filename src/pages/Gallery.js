import React from 'react';

const Gallery = () => {
  const imgs = [
    { src: '/images/bella.webp', desc: 'Beautiful scenery of Bella.' },
    { src: '/images/crayon.jpg', desc: 'Shakarpariyan hills of Islamabad.' },
    { src: '/images/fort.webp', desc: 'Historic fort of Pakistan.' },
    { src: '/images/stream.webp', desc: 'Peaceful flowing stream.' },
    { src: '/images/minar.webp', desc: 'Iconic Minar monument.' },
    { src: '/images/lahore.webp', desc: 'Badshahi Mosque of Lahore.' },
    { src: '/images/mohatta.webp', desc: 'Mohatta Palace, a historic landmark in Karachi.' },
    { src: '/images/mazar.jpg', desc: 'The famous Mazar-e-Quaid, resting place of Pakistan’s founder.' }
  ];

  return (
    <div>
      <h1>Gallery</h1>
      <div className="card-grid">
        {imgs.map((p, i) => (
          <div key={i} className="card">
            <img src={p.src} alt={`gallery-${i}`} />
            <p className="description">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
