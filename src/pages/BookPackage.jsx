import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/BookPackage.css";

const BookPackage = () => {
  const { destinationName, packageName } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (user) {
      setDetails({
        fullName: user.username, // ✅ use username instead of user.name
        email: user.email,
        phone: "",
        address: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/book",
      {
        userId: user._id,
        destination: destinationName,
        packageName,
        ...details,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("RESPONSE:", res.data);
    alert("Booking success");

    // ✅ Clear the form after success
    setDetails({
      fullName: "",
      email: "",
      phone: "",
      address: "",
    });

    // ✅ Redirect to home page
    navigate("/");
  } catch (err) {
    console.error("AXIOS ERROR:", err);
    alert("Booking failed");
  }
};


  if (!user) return null;

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

        <button type="submit" className="btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookPackage;
