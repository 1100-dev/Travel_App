import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// AUTH
export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);

// BOOKINGS
export const bookPackage = (data) => API.post("/book", data);

// REVIEWS
// export const addReview = (data) => API.post("/reviews", data);
// export const getReviews = () => API.get("/reviews");

// PACKAGES
// export const getPackages = () => API.get("/packages");

// export default API;
