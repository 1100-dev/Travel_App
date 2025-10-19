import React from 'react';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="container">
        <h2>Popular Destinations in Pakistan</h2>
        <div className="card-grid">
          <div className="card">
            <img src="/images/hunza.webp" alt="Hunza" />
            <h3>Hunza Valley</h3>
            <p>Explore the majestic mountains and rivers of Hunza.</p>
          </div>
          <div className="card">
            <img src="/images/islamabad.webp" alt="Islamabad" />
            <h3>Islamabad</h3>
            <p>Discover the beautiful capital city with modern architecture.</p>
          </div>
          <div className="card">
            <img src="/images/lahore.webp" alt="Lahore" />
            <h3>Lahore</h3>
            <p>Visit the historical monuments and cultural hub of Pakistan.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
