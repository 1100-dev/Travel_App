import React, { useState, useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";
import axios from "axios";
import "../css/BookingCommon.css";

const BookHotel = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [hotels, setHotels] = useState([
    {
      name: "Hunza Grand Hotel",
      location: "Hunza Valley",
      rating: "4.5",
      price: "PKR 7,000/night",
      image: "/images/grand hotel.jpg",
    },
    {
      name: "Islamabad Luxury Inn",
      location: "Islamabad",
      rating: "4.2",
      price: "PKR 9,500/night",
      image: "/images/luxury lnn.jpeg",
    },
    {
      name: "Ramada Lahore",
      location: "Lahore",
      rating: "4.3",
      price: "PKR 6,500/night",
      image: "/images/ramada lahore.jpeg",
    },
    {
      name: "Swat View Hotel",
      location: "Swat",
      rating: "4.6",
      price: "PKR 8,500/night",
      image: "/images/Swat view.webp",
    },
    {
      name: "Jasmine Inn Islamabad",
      location: "Islamabad",
      rating: "4.5",
      price: "PKR 3,500/night",
      image: "/images/jasmine inn.webp",
      
    },
    {
      name: "Hotel Tulip Inn",
      location: "Lahore",
      rating: "4.6",
      price: "PKR 3000/night",
      image: "/images/tulip inn.webp",
    },
  ]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const handleBookHotel = async (hotel) => {
    if (!user) return;
    try {
      const response = await axios.post("http://localhost:5000/api/book", {
        userId: user._id,
        destination: hotel.location,
        packageName: `Hotel ${hotel.name}`,
        fullName: user.name,
        email: user.email,
        phone: "", // optional
        address: "", // optional
      });

      if (response.data.success) {
        alert("Hotel booked successfully!");
        navigate("/"); // go home or to confirmation
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
    <div className="hotels-page">
      <div className="back-link container">
        <Link to="/services">&larr; Back to Services</Link>
      </div>
      <h1>Available Hotels</h1>
      <div className="hotels-grid">
        {hotels.map((hotel, i) => (
          <div key={i} className="hotel-card">
            {hotel.image && (
              <img
                src={hotel.image}
                alt={hotel.name}
                className="hotel-image"
              />
            )}
            <h3>{hotel.name}</h3>
            <p>Location: {hotel.location}</p>
            <p>Rating: {hotel.rating} ⭐</p>
            <p>Price: {hotel.price}</p>
            <button className="btn" onClick={() => handleBookHotel(hotel)}>
              Book Hotel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookHotel;
