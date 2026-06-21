import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../css/Packages.css";
import destinations from "../data/destinations";

const Packages = () => {
  const { destinationName } = useParams();
  const navigate = useNavigate();

  const destination = destinations[destinationName];

  const handleBookNow = (pkg) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/login");
      return;
    }

    navigate(`/book/${destinationName}/${pkg.name}`);
  };

  if (!destination) {
    return (
      <div className="container">
        <h2>Destination not found!</h2>
      </div>
    );
  }

  return (
    <div className="packages-page">
      <div className="back-link container">
        <Link to="/destinations">
          &larr; Back to Destinations
        </Link>
      </div>

      <section className="destination-info container">
        <h1>{destinationName}</h1>

        <p>{destination.desc}</p>

        <div className="images-grid">
          {destination.images.map((img, i) => (
            <div className="image-item" key={i}>
              <img
                src={img.src}
                alt={`${destinationName}-${i}`}
              />
              <div className="image-desc">
                {img.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="packages container">
        <h2>Available Packages</h2>

        <div className="card-grid">
          {destination.packages.map((pkg, i) => (
            <div key={i} className="card">
              <h3>{pkg.name}</h3>

              <p>
                <strong>Duration:</strong> {pkg.duration}
              </p>

              <p>
                <strong>Price:</strong> {pkg.price}
              </p>

              {pkg.flight && (
                <div className="flight-info">
                  <h4>Flight Details</h4>

                  <p><strong>Airline:</strong> {pkg.flight.airline}</p>
                  <p><strong>Flight No:</strong> {pkg.flight.flightNumber}</p>
                  <p><strong>Departure:</strong> {pkg.flight.departure}</p>
                  <p><strong>Arrival:</strong> {pkg.flight.arrival}</p>
                  <p><strong>Time:</strong> {pkg.flight.time}</p>
                </div>
              )}

              {pkg.hotel && (
                <div className="hotel-info">
                  <h4>Hotel Details</h4>

                  <p><strong>Name:</strong> {pkg.hotel.name}</p>
                  <p><strong>Address:</strong> {pkg.hotel.address}</p>
                  <p><strong>Price/Night:</strong> {pkg.hotel.pricePerNight}</p>
                </div>
              )}

              <button
                className="btn"
                onClick={() => handleBookNow(pkg)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Packages;


