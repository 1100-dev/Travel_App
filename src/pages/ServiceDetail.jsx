import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const services = {
    flight: {
      title: "Flight Booking",
      details:
        "We provide domestic and international flight booking with best fare comparison.",
      action: "Book Flight",
    },
    hotel: {
      title: "Hotel Booking",
      details:
        "Choose from budget hotels to luxury resorts across Pakistan.",
      action: "Book Hotel",
    },
    tour: {
      title: "Guided Tours",
      details:
        "Enjoy guided tours with experienced local professionals.",
      action: "View Tours",
    },
    custom: {
      title: "Custom Packages",
      details:
        "Tell us your requirements and we will create a custom travel plan.",
      action: "Create Package",
    },
  };

  const service = services[serviceId];
  if (!service) return <h2>Service not found</h2>;

  const handleAction = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate(`/services/${serviceId}/book`);
  };

  return (
    <div className="service-detail container">
      <h1>{service.title}</h1>
      <p>{service.details}</p>
      <button className="btn" onClick={handleAction}>
        {service.action}
      </button>
    </div>
  );
};

export default ServiceDetail;
