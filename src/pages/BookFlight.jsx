import React, { useState, useEffect } from "react";
import { useNavigate , Link} from "react-router-dom";
import axios from "axios";
import "../css/BookingCommon.css";

const BookFlight = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [flights, setFlights] = useState([
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

  const handleBookFlight = async (flight) => {
    if (!user) return;
    try {
      const response = await axios.post("http://localhost:5000/api/book", {
        userId: user._id,
        destination: flight.to,
        packageName: `Flight ${flight.flightNumber}`,
        fullName: user.name,
        email: user.email,
        phone: "", // can be added as input if needed
        address: "", // optional
      });

      if (response.data.success) {
        alert("Flight booked successfully!");
        navigate("/"); // go home or to a confirmation page
      } else {
        alert(response.data.message || "Booking failed");
      }
    } catch (error) {
      console.error(error);
      alert("Booking failed. Try again later.");
    }
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
