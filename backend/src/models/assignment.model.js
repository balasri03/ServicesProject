import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
  serviceRequestId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequest", required: true },
  workerId: { type: mongoose.Schema.Types.ObjectId, ref: "Worker", required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  status: { type: String, enum: ["Assigned", "Completed"], default: "Assigned" }
}, { timestamps: true });

export default mongoose.model("Assignment", AssignmentSchema);
