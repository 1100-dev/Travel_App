import React, { useState, useEffect } from "react";
import { useParams, useNavigate, } from "react-router-dom";
import axios from "axios";
import "../css/BookPackage.css";

const BookPackage = () => {
  const { destinationName, packageName } = useParams();
  const navigate = useNavigate();

  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const [details, setDetails] = useState({
    fullName: user ? user.name : "",
    email: user ? user.email : "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return; // extra safety

    try {
      const response = await axios.post("http://localhost:5000/api/book", {
        userId: user._id,
        destination: destinationName,
        packageName: packageName, // updated to match backend
        ...details,
      });

      if (response.data.success) {
        alert("Booking successful!");
        navigate("/"); // redirect home
      } else {
        alert(response.data.message || "Booking failed. Try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Booking failed. Try again later.");
    }
  };

  if (!user) return null; // render nothing until redirect

  return (
    <div className="booking-page container">
      
      <h2>Booking: {packageName}</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={details.fullName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={details.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={details.phone}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <textarea
          name="address"
          value={details.address}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookPackage;
