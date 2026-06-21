// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/Destinations.css";

// const Destinations = () => {
//   const navigate = useNavigate();

//   const destinations = [
//     { title: "Hunza", img: "/images/hunza.webp", desc: "Breathtaking mountains and rivers." },
//     { title: "Islamabad", img: "/images/islamabad.webp", desc: "Modern capital with greenery and landmarks." },
//     { title: "Lahore", img: "/images/lahore.webp", desc: "Rich cultural and historical sites." },
//     { title: "Swat", img: "/images/Swaat.webp", desc: "Lush valleys and Switzerland-like scenery." }
//   ];

//   return (
//     <div className="destinations-page container">
//       <h1>Destinations</h1>
//       <div className="card-grid">
//         {destinations.map((dest, i) => (
//           <div key={i} className="card">
//             <img src={dest.img} alt={dest.title} />
//             <div className="card-overlay">
//               <h3>{dest.title}</h3>
//               <p>{dest.desc}</p>
//               <button
//                 className="btn"
//                 onClick={() => navigate(`/packages/${dest.title}`)}
//               >
//                 View Packages
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Destinations;

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
    <div className="destinations-page">

      {/* HERO */}
      <section className="destinations-hero">
        <div className="hero-content">
          <span>DISCOVER PAKISTAN</span>

          <h1>Explore Incredible Destinations</h1>

          <p>
            Discover breathtaking valleys, majestic mountains,
            vibrant cities and unforgettable travel experiences
            across Pakistan.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="destination-stats">
        <div className="stat-box">
          <h2>20+</h2>
          <p>Destinations</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Travelers</p>
        </div>

        <div className="stat-box">
          <h2>15+</h2>
          <p>Tour Packages</p>
        </div>

        <div className="stat-box">
          <h2>4.9</h2>
          <p>Customer Rating</p>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section className="destination-header">
        <span>TOP LOCATIONS</span>
        <h2>Popular Destinations</h2>
        <p>Handpicked locations loved by travelers from all over Pakistan.</p>
      </section>

      {/* CARDS WRAPPER (UNCHANGED LOGIC) */}
      <section className="destinations-cards-wrapper">
        <div className="container">
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
      </section>

      {/* CTA */}
      <section className="destination-cta">
        <h2>Ready For Your Next Adventure?</h2>

        <p>
          Explore customized travel packages designed for every traveler.
        </p>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default Destinations;