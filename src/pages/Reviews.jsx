import React, { useState } from "react";
import '../css/Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); // get logged-in user

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewText = e.target.review.value.trim();
    if (reviewText === "") return;

    // Add review with user name
    const newReview = {
      userName: user ? user.name : "Anonymous",
      text: reviewText,
    };

    setReviews([...reviews, newReview]);
    alert("Review submitted!");
    e.target.reset(); // clear form
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
