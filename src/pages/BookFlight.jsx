import React, { useState, useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";
import "../css/BookingCommon.css";

const BookFlight = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [flights] = useState([
    {
      flightNumber: "PK-201",
      airline: "Pakistan Airlines",
      from: "Islamabad",
      to: "Hunza",
      departure: "08:00 AM",
      arrival: "11:00 AM",
      price: "PKR 8,000",
    },
    {
      flightNumber: "PK-305",
      airline: "Air Blue",
      from: "Lahore",
      to: "Islamabad",
      departure: "10:00 AM",
      arrival: "11:30 AM",
      price: "PKR 5,000",
    },
  ]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const handleBookFlight = (flight) => {
    if (!user) {
      navigate("/login");
      return;
    }
    // Navigate to booking form page, passing flight info
    navigate(`/book-flight/${flight.flightNumber}`, { state: { flight } });
  };

  if (!user) return null;

  return (
    <div className="flights-page">
      <div className="back-link container">
        <Link to="/services">&larr; Back to Services</Link>
      </div>
      <h1>Available Flights</h1>
      <div className="flights-grid">
        {flights.map((flight, i) => (
          <div key={i} className="flight-card">
            <h3>{flight.airline} ({flight.flightNumber})</h3>
            <p>{flight.from} → {flight.to}</p>
            <p>Departure: {flight.departure}</p>
            <p>Arrival: {flight.arrival}</p>
            <p>Price: {flight.price}</p>
            <button className="btn" onClick={() => handleBookFlight(flight)}>
              Book Flight
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookFlight;
