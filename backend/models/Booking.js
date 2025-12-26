import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  destination: { type: String, required: true },
  packageName: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
