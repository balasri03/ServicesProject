import Electrical from "../models/electrical.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create Electrical Worker
const createElectrical = asyncHandler(async (req, res) => {
  const { name, experience, availabilityTime, contactInfo, serviceArea } = req.body;

  if (!name || !experience || !availabilityTime || !contactInfo || !serviceArea) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const worker = new Electrical({
    name,
    experience,
    availabilityTime,
    contactInfo,
    serviceArea,
  });

  await worker.save();

  res.status(201).json({
    success: true,
    data: worker,
  });
});
export default createElectrical ;