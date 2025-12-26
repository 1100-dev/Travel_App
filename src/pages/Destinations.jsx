import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Destinations.css";

const Destinations = () => {
  const navigate = useNavigate();

  const destinations = [
    { title: "Hunza", img: "/images/hunza.webp", desc: "Breathtaking mountains and rivers." },
    { title: "Islamabad", img: "/images/islamabad.webp", desc: "Modern capital with greenery and landmarks." },
    { title: "Lahore", img: "/images/lahore.webp", desc: "Rich cultural and historical sites." },
    { title: "Swat", img: "/images/Swaat.webp", desc: "Lush valleys and Switzerland-like scenery." }
  ];

  return (
    <div className="destinations-page container">
      <h1>Destinations</h1>
      <div className="card-grid">
        {destinations.map((dest, i) => (
          <div key={i} className="card">
            <img src={dest.img} alt={dest.title} />
            <div className="card-overlay">
              <h3>{dest.title}</h3>
              <p>{dest.desc}</p>
              <button
                className="btn"
                onClick={() => navigate(`/packages/${dest.title}`)}
              >
                View Packages
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
