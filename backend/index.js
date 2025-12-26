import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import bookingRoutes from "./routes/bookings.js";
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());           // Allow frontend requests from different ports
app.use(express.json());    // Parse JSON request bodies

// Routes
app.use("/api/auth", authRoutes);
// booking routes
app.use("/api/booking", bookingRoutes);

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/pakistan_explorer_db") // remove options
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
