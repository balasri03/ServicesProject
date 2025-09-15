import  FormModel  from "../models/form.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const getFormHistory = asyncHandler(async (req, res) => {
  const { customerId } = req.params;
  const forms = await FormModel.find({ customerId }).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: forms });
});