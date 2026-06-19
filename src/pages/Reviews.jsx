import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  // Fetch reviews on mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/reviews");
        setReviews(res.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewText = e.target.review.value.trim();
    if (reviewText === "") return;

    const newReview = {
      userName: user ? user.username : "Anonymous", // use username
      text: reviewText,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/reviews", newReview);
      setReviews([res.data.review, ...reviews]); // prepend new review
      alert("Review submitted!");
      e.target.reset();
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review");
    }
  };

  return (
    <div className="reviews">
      <h1>User Reviews</h1>
      <br />
      <form onSubmit={handleSubmit} className="reviews-form">
        <label>Your Review</label>
        <textarea 
          name="review" 
          rows={6} 
          required 
          placeholder="Write your review..." 
        />
        <button type="submit">Submit Review</button>
      </form>

      <br />

      <section className="reviews-list">
        <h2>All Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to submit!</p>
        ) : (
          <ul>
            {reviews.map((rev, index) => (
              <li key={index} className="review-card">
                <strong>{rev.userName}:</strong> {rev.text}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Reviews;
