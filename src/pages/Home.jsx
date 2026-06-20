
import React, { useEffect } from "react";
import Slider from "../components/Slider";
import "../css/Home.css";


const Home = () => {
  useEffect(() => {
  const items = document.querySelectorAll(
    ".experience-item, .trust-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  items.forEach((item) => observer.observe(item));

  return () => observer.disconnect();
}, []);
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

<section className="travel-search-section">
  <div className="travel-search-glass">
    <h2>Find Your Next Adventure</h2>
    <p>Explore Pakistan's most breathtaking destinations</p>

    <div className="search-fields">
      <div className="search-item">
        <label>Destination</label>
        <input type="text" placeholder="Where do you want to go?" />
      </div>

      <div className="search-item">
        <label>Duration</label>
        <select>
          <option>Any Duration</option>
          <option>1-3 Days</option>
          <option>4-7 Days</option>
          <option>1+ Week</option>
        </select>
      </div>

      <button className="explore-btn">
        Explore Tours
      </button>
    </div>
  </div>
</section>

<section className="experience-section">

  {/* 1 - Adventure */}
  <div className="experience-item">
    <div className="exp-image">
      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80" />
    </div>
    <div className="exp-text">
      <h2>Adventure</h2>
      <p>
        Experience the thrill of Pakistan’s most dramatic landscapes. From towering peaks to deep valleys,
        adventure travel here is filled with trekking routes, mountain climbs, jeep safaris, and breathtaking
        natural challenges that push your limits while rewarding you with unmatched views.
      </p>
    </div>
  </div>

  {/* 2 - Camping */}
  <div className="experience-item reverse">
    <div className="exp-image">
      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80" />
    </div>
    <div className="exp-text">
      <h2>Camping</h2>
      <p>
        Sleep under open skies surrounded by mountains, rivers, and forests. Camping experiences in Pakistan
        offer peaceful nights, bonfire gatherings, stargazing, and a deep connection with nature far away
        from city noise and stress.
      </p>
    </div>
  </div>

  {/* 3 - Lakes */}
  <div className="experience-item">
    <div className="exp-image">
      <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80" />
    </div>
    <div className="exp-text">
      <h2>Lakes</h2>
      <p>
        Discover crystal-clear alpine lakes surrounded by snow-covered mountains and lush green valleys.
        These serene water bodies offer boating, photography, and peaceful escapes into untouched natural beauty.
      </p>
    </div>
  </div>

  {/* 4 - Heritage */}
  <div className="experience-item reverse">
    <div className="exp-image">
      <img src="https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=1400&q=80" />
    </div>
    <div className="exp-text">
      <h2>Heritage</h2>
      <p>
        Walk through centuries of history with Pakistan’s rich cultural heritage. Explore Mughal architecture,
        ancient forts, historical mosques, and archaeological sites that tell stories of civilizations,
        traditions, and artistic excellence.
      </p>
    </div>
  </div>

  {/* 5 - Photography */}
  <div className="experience-item">
    <div className="exp-image">
      <img src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1400&q=80" />
    </div>
    <div className="exp-text">
      <h2>Photography</h2>
      <p>
        Capture Pakistan’s natural beauty through your lens. From golden sunsets and mountain silhouettes
        to vibrant street life and scenic valleys, every frame tells a story worth remembering forever.
      </p>
    </div>
  </div>

  {/* 6 - City Tours */}
  <div className="experience-item reverse">
    <div className="exp-image">
      <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80" />
    </div>
    <div className="exp-text">
      <h2>City Tours</h2>
      <p>
        Explore the energy of Pakistan’s modern cities. Enjoy vibrant food streets, historical landmarks,
        cultural hubs, shopping districts, and the unique blend of tradition and modern urban life.
      </p>
    </div>
  </div>

</section>

   

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
      
      {/* <div className="trust-card">
  <div className="trust-icon">🧭</div>
  <h3>Trusted Guides</h3>
  <p>Experienced local experts for safe journeys.</p>
</div>

<div className="trust-card">
  <div className="trust-icon">💰</div>
  <h3>Best Planning</h3>
  <p>Well-organized travel packages for comfort.</p>
</div>

<div className="trust-card">
  <div className="trust-icon">🛡️</div>
  <h3>Affordable Trips</h3>
  <p>Premium experiences at reasonable prices.</p>
</div>

<div className="trust-card">
  <div className="trust-icon">📞</div>
  <h3>24/7 Support</h3>
  <p>We’re always available during your journey.</p>
</div> */}
<section className="trust-section">
  <div className="trust-header">
    <h2>Why Choose Us</h2>
    <p>We make travel simple, safe, and unforgettable</p>
  </div>

  <div className="trust-grid">

    <div className="trust-card">
      <div className="trust-icon">🧭</div>
      <h3>Trusted Guides</h3>
      <p>Experienced local experts for safe journeys.</p>
    </div>

    <div className="trust-card">
      <div className="trust-icon">💰</div>
      <h3>Best Planning</h3>
      <p>Well-organized travel packages for comfort.</p>
    </div>

    <div className="trust-card">
      <div className="trust-icon">🛡️</div>
      <h3>Affordable Trips</h3>
      <p>Premium experiences at reasonable prices.</p>
    </div>

    <div className="trust-card">
      <div className="trust-icon">📞</div>
      <h3>24/7 Support</h3>
      <p>We’re always available during your journey.</p>
    </div>

  </div>
</section>
    </div>
  );
};

export default Home;


