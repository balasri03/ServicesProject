import Painting from "../models/painting.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create Painting Worker
const PaintingController = asyncHandler(async (req, res) => {
  const {
    name,
    address,
    availabilityTime,
    contactInfo,
    experience,
    serviceType,
  } = req.body;

  if (!name || !address || !availabilityTime || !contactInfo) {
    return res.status(400).json({
      success: false,
      message:
        "Name, Address, Availability Time, and Contact Info are required",
    });
  }

  const worker = new Painting({
    name,
    address,
    availabilityTime,
    contactInfo,
    experience,
    serviceType,
  });

  await worker.save();

  res.status(201).json({
    success: true,
    data: worker,
  });
});

export default PaintingController;
