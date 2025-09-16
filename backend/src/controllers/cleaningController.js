import CleaningModel from "../models/cleaning.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create Cleaning Worker
const createCleaning = asyncHandler(async (req, res) => {
  const { name, address, availabilityTime, contactInfo } = req.body;

  if (!name || !address || !availabilityTime || !contactInfo) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const worker = new CleaningModel({
    name,
    address,
    availabilityTime,
    contactInfo,
  });

  await worker.save(); 

  res.status(201).json({
    success: true,
    data: worker,
  });
});

export default { createCleaning };
