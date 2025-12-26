import React from "react";
import { useNavigate , Link} from "react-router-dom";
import "../css/BookingsCommon.css";

const BookTour = () => {
  const navigate = useNavigate();

  const tours = [
    {
      id: 1,
      name: "Hunza Valley Guided Tour",
      duration: "3 Days / 2 Nights",
      guide: "Local expert",
      price: "PKR 15,000",
    },
    {
      id: 2,
      name: "Islamabad City Walking Tour",
      duration: "1 Day",
      guide: "Certified guide",
      price: "PKR 6,000",
    },
  ];

  const handleBookTour = (tour) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return navigate("/login");
    navigate(`/book/tour/${tour.id}`);
  };

  return (
    <div className="tours-page">
      <div className="back-link container">
        <Link to="/services">&larr; Back to Services</Link>
      </div>
      <h1>Available Guided Tours</h1>
      <div className="tours-grid">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <h3>{tour.name}</h3>
            <p><strong>Duration:</strong> {tour.duration}</p>
            <p><strong>Guide:</strong> {tour.guide}</p>
            <p><strong>Price:</strong> {tour.price}</p>
            <button className="btn" onClick={() => handleBookTour(tour)}>
              Book Tour
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTour;
