import Package from "../models/Package.js";

export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getPackagesByDestination = async (req, res) => {
  try {
    const packages = await Package.find({
      destination: req.params.destination
    });
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createPackage = async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.json({ success: true, message: "Package added" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
