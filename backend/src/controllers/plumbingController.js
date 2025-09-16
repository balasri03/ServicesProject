import Plumbing from "../models/plumbing.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// ➤ Create Plumbing Worker
 const plumbingController= asyncHandler(async (req, res) => {
  const { name, address, availabilityTime, contactInfo, specialization, experience, emergencyService } = req.body;

  if (!name || !address || !availabilityTime || !contactInfo) {
    return res.status(400).json({
      success: false,
      message: "Name, Address, Availability Time and Contact Info are required",
    });
  }

  const worker = new Plumbing({
    name,
    address,
    availabilityTime,
    contactInfo,
    specialization,
    experience,
    emergencyService,
  });

  await worker.save();

  res.status(201).json({
    success: true,
    message: "Plumbing worker added successfully",
    data: worker,
  });
});


export default plumbingController;
