import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Services.css";

const Services = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("flight");

  const services = [
    {
      id: "flight",
      title: "Flight Booking",
      icon: "✈️",
      desc: "Search and compare flights with live prices, routes, and timings.",
      highlights: [
        "Live airline prices",
        "Multiple route options",
        "Instant booking"
      ],
      route: "/services/flight/book"
    },
    {
      id: "hotel",
      title: "Hotel Booking",
      icon: "🏨",
      desc: "Find verified hotels from budget stays to luxury resorts.",
      highlights: [
        "Verified hotels",
        "Best price guarantee",
        "Location filters"
      ],
      route: "/services/hotel/book"
    },
    {
      id: "tours",
      title: "Guided Tours",
      icon: "🧭",
      desc: "Explore destinations with expert local guides.",
      highlights: [
        "Local experts",
        "Custom routes",
        "Group & private tours"
      ],
      route: "/services/tours"
    },
    {
      id: "packages",
      title: "Custom Packages",
      icon: "🎒",
      desc: "Build your own personalized travel experience.",
      highlights: [
        "Fully customizable",
        "Flexible pricing",
        "Multi-city trips"
      ],
      route: "/services/packages"
    }
  ];

  const current = services.find((s) => s.id === active);

  return (
    <div className="services-dashboard">

      {/* LEFT MENU */}
      <div className="services-sidebar">

        <h2>Services</h2>
        <p className="sub">Choose what you need</p>

        {services.map((s) => (
          <div
            key={s.id}
            className={`service-tab ${active === s.id ? "active" : ""}`}
            onClick={() => setActive(s.id)}
          >
            <span className="icon">{s.icon}</span>
            <span>{s.title}</span>
          </div>
        ))}

      </div>

      {/* RIGHT PANEL */}
      <div className="services-content">

        <div className="service-card">

          <div className="service-header">
            <span className="big-icon">{current.icon}</span>
            <h1>{current.title}</h1>
          </div>

          <p className="desc">{current.desc}</p>

          <div className="highlights">
            {current.highlights.map((h, i) => (
              <div key={i} className="highlight-item">
                ✓ {h}
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate(current.route)}
            className="primary-btn"
          >
            Continue →
          </button>

        </div>

      </div>

    </div>
  );
};

export default Services;