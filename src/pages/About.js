import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-intro container">
        <h1>About Pakistan Explorer</h1>
        <p>
          Pakistan Explorer is your ultimate guide to exploring the natural beauty,
          historical landmarks, and cultural wonders of Pakistan. From the majestic
          mountains of the north to the historical streets of Lahore, we bring you
          curated experiences for every traveler.
        </p>
      </section>

      <section className="about-mission container">
        <h2>Our Mission</h2>
        <p>
          To inspire and guide travelers to discover Pakistan safely and
          comfortably while promoting local tourism and culture.
        </p>
      </section>

      <section className="about-highlights container">
        <h2>Popular Destinations</h2>
        <div className="card-grid">
          <div className="card">
            <img src="/images/hunza.webp" alt="Hunza" />
            <h3>Hunza Valley</h3>
            <p>Explore stunning mountains, rivers, and valleys.</p>
          </div>
          <div className="card">
            <img src="/images/islamabad.webp" alt="Islamabad" />
            <h3>Islamabad</h3>
            <p>Discover the modern capital with beautiful architecture.</p>
          </div>
          <div className="card">
            <img src="/images/lahore.webp" alt="Lahore" />
            <h3>Lahore</h3>
            <p>Visit historical monuments and cultural landmarks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
