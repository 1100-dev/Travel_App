import Review from "../models/Review.js";
import User from "../models/User.js";

export const addReview = async (req, res) => {
  try {
    const { userId, text } = req.body;

    const user = await User.findById(userId);
    if (!user)
      return res.json({ success: false, message: "Login required" });

    const review = new Review({
      userId,
      userName: user.name,
      text
    });

    await review.save();
    res.json({ success: true, review });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
