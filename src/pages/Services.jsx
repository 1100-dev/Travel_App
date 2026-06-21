// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/Services.css";

// const Services = () => {
//   const navigate = useNavigate();

//   const services = [
//     {
//       id: "flight",
//       name: "Flight Booking",
//       desc: "Find the best flight deals and itineraries.",
//       color: "#f44336",
//       route: "/services/flight/book"
//     },
//     {
//       id: "hotel",
//       name: "Hotel Booking",
//       desc: "Curated hotels from budget to luxury.",
//       color: "#2196f3",
//       route: "/services/hotel/book"
//     },
//     {
//       id: "tours",
//       name: "Guided Tours",
//       desc: "Local guides and curated experiences.",
//       color: "#ff9800",
//       route: "/services/tours" // optional detail page
//     },
//     {
//       id: "packages",
//       name: "Custom Packages",
//       desc: "Tailor-made holiday plans.",
//       color: "#4caf50",
//       route: "/services/packages" // optional detail page
//     }
//   ];

//   const handleNavigate = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="services-section">
//       <h1 className="section-title">Our Services</h1>
//       <div className="services-grid">
//         {services.map((s) => (
//           <div key={s.id} className="service-card">
//             <div className="service-icon" style={{ backgroundColor: s.color }}>
//               {s.name.charAt(0)}
//             </div>
//             <h3>{s.name}</h3>
//             <p>{s.desc}</p>
//             <button className="btn" onClick={() => handleNavigate(s.route)}>
//               {s.name.includes("Booking") ? "Book Now" : "View Details"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Services.css";

const Services = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const services = [
    {
      id: "flight",
      name: "Flight Booking",
      desc: "Compare airlines and book cheapest flights instantly.",
      icon: "✈️",
      type: "booking",
      popular: true,
      route: "/services/flight/book"
    },
    {
      id: "hotel",
      name: "Hotel Booking",
      desc: "Find verified hotels with best price guarantee.",
      icon: "🏨",
      type: "booking",
      popular: false,
      route: "/services/hotel/book"
    },
    {
      id: "tours",
      name: "Guided Tours",
      desc: "Explore Pakistan with expert local guides.",
      icon: "🧭",
      type: "experience",
      popular: true,
      route: "/services/tours"
    },
    {
      id: "packages",
      name: "Custom Packages",
      desc: "Build your own personalized travel plan.",
      icon: "🎒",
      type: "custom",
      popular: false,
      route: "/services/packages"
    }
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "booking", label: "Bookings" },
    { key: "experience", label: "Experiences" },
    { key: "custom", label: "Custom" }
  ];

  const filtered = services.filter((s) => {
    const matchFilter = activeFilter === "all" || s.type === activeFilter;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="services-page">

      {/* HEADER */}
      <div className="services-hero">
        <h1>Smart Travel Services</h1>
        <p>Everything you need to plan, book and explore Pakistan.</p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="services-toolbar">

        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-tabs">
          {filters.map((f) => (
            <button
              key={f.key}
              className={activeFilter === f.key ? "active" : ""}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

      </div>

      {/* GRID */}
      <div className="services-grid">

        {filtered.map((s) => (
          <div
            key={s.id}
            className="service-card"
            onClick={() => navigate(s.route)}
          >

            {/* badge */}
            {s.popular && <span className="badge">Popular</span>}

            <div className="icon">{s.icon}</div>

            <h3>{s.name}</h3>

            <p>{s.desc}</p>

            <button className="service-btn">
              Explore →
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Services;