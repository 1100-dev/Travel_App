import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      console.log("Login response:", response.data);

      if (response.data.token) {
        setLoggedIn(true);
        // ✅ Store _id, username, email, and token
        localStorage.setItem(
          "user",
          JSON.stringify({
            _id: response.data._id,
            username: response.data.username,
            email: response.data.email,
            token: response.data.token,
          })
        );
        alert("Logged in successfully!");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server error, try again later");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{loggedIn ? "Welcome!" : "Login to Pakistan Explorer"}</h2>

        {!loggedIn ? (
          <form onSubmit={handleLogin} className="login-form">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn">Login</button>
            <p className="signup-text">
              Don't have an account?{" "}
              <span onClick={goToSignup} className="signup-link">Sign Up</span>
            </p>
          </form>
        ) : (
          <div className="logout-section">
            <button onClick={handleLogout} className="btn logout-btn">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
