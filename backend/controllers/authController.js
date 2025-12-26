import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_jwt_secret_key"; // replace with env variable in production

// Signup
export const signup = async (req, res) => {
  try {
    console.log("Signup endpoint hit");
    const { username, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    console.log("User created:", newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    console.log("Login endpoint hit");
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    console.log("User logged in:", user.email);
    res.json({ token, username: user.username });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
