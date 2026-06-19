import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Create a booking
router.post("/", async (req, res) => {
  const { userId, destination, packageName, fullName, email, phone, address } = req.body;

  try {
    const booking = new Booking({
      userId,
      destination,
      packageName,
      fullName,
      email,
      phone,
      address
    });

    await booking.save();
    res.json({ message: "Booking created successfully", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all bookings for a user
router.get("/:userId", async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
