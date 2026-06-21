import React from "react";

const DestinationCard = ({ title, img, desc, onClick }) => {
  return (
    <div className="premium-card" onClick={onClick}>
      <div className="premium-card-image">
        <img src={img} alt={title} />
      </div>

      <div className="premium-card-content">
        <h3>{title}</h3>
        <p>{desc}</p>

        <button className="premium-card-btn">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;