import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Services.css";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "flight",
      name: "Flight Booking",
      desc: "Find the best flight deals and itineraries.",
      color: "#f44336",
      route: "/services/flight/book"
    },
    {
      id: "hotel",
      name: "Hotel Booking",
      desc: "Curated hotels from budget to luxury.",
      color: "#2196f3",
      route: "/services/hotel/book"
    },
    {
      id: "tours",
      name: "Guided Tours",
      desc: "Local guides and curated experiences.",
      color: "#ff9800",
      route: "/services/tours" // optional detail page
    },
    {
      id: "packages",
      name: "Custom Packages",
      desc: "Tailor-made holiday plans.",
      color: "#4caf50",
      route: "/services/packages" // optional detail page
    }
  ];

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="services-section">
      <h1 className="section-title">Our Services</h1>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.id} className="service-card">
            <div className="service-icon" style={{ backgroundColor: s.color }}>
              {s.name.charAt(0)}
            </div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <button className="btn" onClick={() => handleNavigate(s.route)}>
              {s.name.includes("Booking") ? "Book Now" : "View Details"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
