import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reviewSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: false }, // optional link to user
    userName: { type: String, required: true },
    text: { type: String, required: true },
    serviceType: {
      type: String,
      enum: ["hotel", "flight", "tour", "package"],
      required: false,
    }, // optional: link review to a service type
    serviceId: { type: Schema.Types.ObjectId, required: false }, // optional: link to specific service
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false } // removes __v field
);

const Review = model("Review", reviewSchema);

export default Review;
