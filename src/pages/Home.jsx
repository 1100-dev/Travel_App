
import React from "react";
import Slider from "../components/Slider";


const Home = () => {
  const popularDestinations = [
    { title: "Hunza Valley", img: "/images/hunza.webp", desc: "Explore the majestic mountains and rivers of Hunza." },
    { title: "Islamabad", img: "/images/islamabad.webp", desc: "Discover the beautiful capital city with modern architecture." },
    { title: "Lahore", img: "/images/lahore.webp", desc: "Visit the historical monuments and cultural hub of Pakistan." },
    { title: "Swat Valley", img: "/images/Swaat.webp", desc: "Experience lush valleys, rivers, and the Switzerland of Pakistan." }
  ];

  return (
    <div className="home-page">
      {/* Slider */}
      <Slider />

      {/* Popular Destinations */}
      <section className="popular-destinations container">
        <h2>Popular Destinations in Pakistan</h2>
        <div className="card-grid">
          {popularDestinations.map((dest, i) => (
            <div key={i} className="card">
              <img src={dest.img} alt={dest.title} />
              <div className="card-overlay">
                <h3>{dest.title}</h3>
                <p>{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
