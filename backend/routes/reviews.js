import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// GET /api/reviews - list all reviews (latest first)
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// POST /api/reviews - create a new review
router.post("/", async (req, res) => {
  try {
    const { userId, userName, text, serviceType, serviceId } = req.body;

    if (!userName || !text) {
      return res.status(400).json({ error: "userName and text are required" });
    }

    const review = new Review({ userId, userName, text, serviceType, serviceId });
    await review.save();

    res.json({ message: "Review submitted successfully", review });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit review" });
  }
});

export default router;
