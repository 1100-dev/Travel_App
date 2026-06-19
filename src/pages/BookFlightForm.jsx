import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/BookingCommon.css";

const BookFlightForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;
  const user = JSON.parse(localStorage.getItem("user"));

  const [details, setDetails] = useState({
    fullName: user?.username || "",
    email: user?.email || "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/book", {
        userId: user._id,
        destination: flight.to,
        packageName: `Flight ${flight.flightNumber}`,
        ...details,
      });

      if (res.data.message === "Booking created successfully") {
        alert("Flight booked successfully!");
        navigate("/"); // redirect after booking
      } else {
        alert(res.data.message || "Booking failed");
      }
    } catch (err) {
      console.error(err);
      alert("Booking failed. Try again later.");
    }
  };

  if (!flight) return <h2>No flight selected</h2>;

  return (
    <div className="booking-page container">
      <h2>Booking: {flight.airline} ({flight.flightNumber})</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Full Name</label>
        <input type="text" name="fullName" value={details.fullName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={details.email} onChange={handleChange} required />

        <label>Phone</label>
        <input type="text" name="phone" value={details.phone} onChange={handleChange} required />

        <label>Address</label>
        <textarea name="address" value={details.address} onChange={handleChange} required />

        <button type="submit" className="btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookFlightForm;
