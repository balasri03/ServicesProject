import Carpentry from "../models/carpentry.js"

// ✅ Register Carpentry Worker
 const carpentryController = async (req, res) => {
  try {
    const { name, experience, availabilityTime, contactInfo, serviceArea } = req.body;

    // Basic validation
    if (!name || !experience || !availabilityTime || !contactInfo || !serviceArea) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newWorker = new Carpentry({
      name,
      experience,
      availabilityTime,
      contactInfo,
      serviceArea,
    });

    await newWorker.save();

    res.status(201).json({ message: "Carpentry worker registered successfully", worker: newWorker });
  } catch (error) {
    res.status(500).json({ message: "Error registering carpentry worker", error: error.message });
  }
};

export default carpentryController;