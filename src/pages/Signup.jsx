import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      });

      console.log("Signup response:", response.data);

      alert(response.data.message);
      if (response.data.message === "User created successfully") {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Server error, try again later");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn">Sign Up</button>
          <p className="login-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} className="login-link">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
