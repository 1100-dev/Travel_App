import React, { useState, useEffect } from 'react';
import "../css/slider.css";
const slides = [
  { title: 'Hunza Valley', subtitle: 'Majestic mountains and rivers', img: '/images/hunzaslider.jpg' },
  { title: 'Islamabad', subtitle: 'Beautiful capital city', img: '/images/islamabadslider.jpg' },
  { title: 'Lahore', subtitle: 'Cultural & historical hub', img: '/images/lahoreslider.jpg' }
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIndex((index + 1) % slides.length), 4000);
    return () => clearTimeout(timer);
  }, [index]);

  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <div>
      <div className="slider">
        <div className="slider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div key={i} className="slide" style={{ backgroundImage: `url(${s.img})` }}>
              <div className="slide-overlay"></div>
              <div className="slide-content container">
                <h2>{s.title}</h2>
                <p>{s.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button onClick={prev}>◀</button>
          <button onClick={next}>▶</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;



