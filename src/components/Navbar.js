// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.jpg";

// const Navbar = () => {
//   return (
//     <header className="navbar">
//       <div className="container">
//         {/* BRAND */}
//         <div className="brand">
//           <img src={logo} alt="Pakistan Explorer Logo" className="logo" />
//           <span>Pakistan Explorer</span>
//         </div>

//         {/* NAV LINKS */}
//         <nav className="nav-links">
//           <NavLink end to="/">Home</NavLink>
//           <NavLink to="/destinations">Destinations</NavLink>
//           <NavLink to="/services">Services</NavLink>
//           <NavLink to="/gallery">Gallery</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/contact">Contact</NavLink>

//           {/* AUTH LINKS */}
//           <NavLink to="/login">Login</NavLink>
//           <NavLink to="/signup">Signup</NavLink>
//           <NavLink to="/logout">Logout</NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="brand">
          <img src={logo} alt="Pakistan Explorer Logo" className="logo" />
          <span>Pakistan Explorer</span>
        </div>

        <nav className="nav-links">
          <NavLink end to="/">Home</NavLink>
          <NavLink to="/destinations">Destinations</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>

          {/* LOGIN ONLY */}
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
