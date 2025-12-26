import express from "express";
import {
  getPackages,
  getPackagesByDestination,
  createPackage
} from "../controllers/packageController.js";

const router = express.Router();

router.get("/", getPackages);
router.get("/:destination", getPackagesByDestination);
router.post("/", createPackage); // admin use

export default router;
