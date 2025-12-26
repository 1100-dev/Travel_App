import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  title: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String },
  includes: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Package", packageSchema);
