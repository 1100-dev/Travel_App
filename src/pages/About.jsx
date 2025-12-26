import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <main className="about-page">

      {/* INTRODUCTION */}
      <section className="about-intro">
        <div className="container">
          <h1>About Pakistan Explorer</h1>
          <p>
            Pakistan Explorer is your ultimate travel companion for discovering
            the natural beauty, historical landmarks, and cultural heritage of
            Pakistan. From the breathtaking mountains of the north to the vibrant
            streets of Lahore, we curate meaningful experiences for every traveler.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire and guide travelers to explore Pakistan
            safely and confidently while promoting sustainable tourism and
            celebrating local culture.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="about-highlights">
        <div className="container">
          <h2>Popular Destinations</h2>
          <div className="card-grid">
            <div className="card">
              <img src="/images/hunza.webp" alt="Hunza Valley" />
              <h3>Hunza Valley</h3>
              <p>Experience majestic mountains, crystal-clear rivers, and valleys.</p>
            </div>
         <div className="card">
              <img src="/images/lahore.webp" alt="Lahore City" />
              <h3>Lahore</h3>
              <p>Discover historic landmarks and Pakistan’s cultural heart.</p>
            </div>

            <div className="card">
              <img src="/images/Swaat.webp" alt="Swat Valley" />
              <h3>Swat Valley</h3>
              <p>Enjoy lush valleys, rivers, and serene landscapes in northern Pakistan.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
