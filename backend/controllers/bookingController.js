import Booking from "../models/Booking.js";

export const bookPackage = async (req, res) => {
  console.log("Booking request body:", req.body); // <--- Add this to debug
  try {
    const { userId, destination, packageName, fullName, email, phone, address } = req.body;

    if (!userId || !destination || !packageName) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newBooking = new Booking({ userId, destination, packageName, fullName, email, phone, address });
    await newBooking.save();

    console.log("Booking saved:", newBooking);
    res.json({ success: true, message: "Booking successful", booking: newBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
