import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/Services.css";

const Services = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("flight");

  const services = [
    {
      id: "flight",
      title: "Flight Booking",
      desc: "Compare and book flights instantly with live pricing.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      route: "/services/flight/book"
    },
    {
      id: "hotel",
      title: "Hotel Booking",
      desc: "Discover stays from budget to luxury hotels.",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      route: "/services/hotel/book"
    },
    {
      id: "tours",
      title: "Guided Tours",
      desc: "Explore destinations with expert guides.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      route: "/services/tours"
    },
    {
      id: "packages",
      title: "Custom Packages",
      desc: "Design your perfect travel experience.",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      route: "/services/packages"
    }
  ];

  const current = services.find((s) => s.id === active);

  return (
    <div className="services-cinematic">

      {/* LEFT NAV */}
      <div className="services-nav">
        {services.map((s) => (
          <div
            key={s.id}
            className={`nav-item ${active === s.id ? "active" : ""}`}
            onClick={() => setActive(s.id)}
          >
            {s.title}
          </div>
        ))}
      </div>

      {/* RIGHT VISUAL */}
      <div className="services-visual">

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="visual-slide"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >

            <img src={current.image} alt="" />

            <div className="overlay" />

            <div className="content">
              <h1>{current.title}</h1>
              <p>{current.desc}</p>

              <button onClick={() => navigate(current.route)}>
                Explore Service
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

    </div>
  );
};

export default Services;