import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/BookingsCommon.css";

const CustomPackage = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      name: "Luxury Hunza Custom Package",
      description: "Fully customized stay, transport, and activities in Hunza.",
      duration: "3-5 Days",
      price: "PKR 50,000+",
    },
    {
      id: 2,
      name: "Family Islamabad Custom Package",
      description: "Tailored family-friendly trip to Islamabad with activities and hotels.",
      duration: "2-4 Days",
      price: "PKR 35,000+",
    },
  ];

  const handleBookCustom = (pkg) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return navigate("/login");
    navigate(`/book/custom/${pkg.id}`);
  };

  return (
    <div className="custom-packages-page">
      <div className="back-link container">
        <Link to="/services">&larr; Back to Services</Link>
      </div>
      <h1>Available Custom Packages</h1>
      <div className="custom-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="custom-card">
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p><strong>Duration:</strong> {pkg.duration}</p>
            <p><strong>Price:</strong> {pkg.price}</p>
            <button className="btn" onClick={() => handleBookCustom(pkg)}>
              Book Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPackage;
