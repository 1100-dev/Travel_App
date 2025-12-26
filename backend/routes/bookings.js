import express from "express";
import { bookPackage } from "../controllers/bookingController.js";

const router = express.Router();

// POST /api/book → create a booking
router.post("/", bookPackage);



export default router;
