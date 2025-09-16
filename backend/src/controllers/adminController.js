import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

// // Admin Signup
export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ msg: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();

    res.json({ msg: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin Login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: "No admin found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, "adminSecretKey", { expiresIn: "1d" });

    res.json({ msg: "Admin login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


import Form from "../models/form.models.js"
import WorkerAvailability from "../models/WorkerAvailability.model.js"


// ✅ Get all customer service requests
export const getAllRequests = async (req, res) => {
  try {
    const requests = await Form.find();
    res.json({ data: requests });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get all workers available today
export const getAvailableWorkers = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // start of today

    const workers = await WorkerAvailability.find({
      todayAvailability: "Available",
      date: { $gte: today },
    }).populate("workerId", "name email contactInfo"); // populate worker info

    const formatted = workers.map((w) => ({
      _id: w.workerId._id,
      name: w.workerId.name,
      email: w.workerId.email,
      contactInfo: w.workerId.contactInfo,
    }));

    res.json({ data: formatted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Assign work to a worker for a specific customer request
export const assignWork = async (req, res) => {
  try {
    const { customerId, workerId, serviceRequestId } = req.body;

    // Update WorkerAvailability
    const workerToday = await WorkerAvailability.findOne({ workerId, date: { $gte: new Date().setHours(0,0,0,0) } });
    if (!workerToday) return res.status(404).json({ msg: "Worker not found for today" });

    workerToday.assignedWork = serviceRequestId; // store service request id
    await workerToday.save();

    // Optionally update Form status
    await Form.findByIdAndUpdate(serviceRequestId, { assignedWorker: workerId });

    res.json({ msg: "Work assigned successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get all assignments (workers assigned to customer requests)
// export const getAssignments = async (req, res) => {
//   try {
//     const assignments = await WorkerAvailability.find({
//       assignedWork: { $ne: null },
//       date: { $gte: new Date().setHours(0, 0, 0, 0) },
//     })
//       .populate("workerId", "name email contactInfo")
//       .populate("assignedWork"); // populate customer request

//     const formatted = assignments.map((a) => ({
//       _id: a._id,
//       worker: a.workerId,
//       serviceRequest: a.assignedWork,
//     }));
//     res.json({ data: formatted });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };





export const getAssignments = async (req, res) => {
  try {
    const assignments = await WorkerAvailability.find({
      assignedWork: { $ne: null },
      date: { $gte: new Date().setHours(0, 0, 0, 0) },
    })
      .populate("workerId", "name email contactInfo")
      .populate("assignedWork"); // populate full form document

    const formatted = assignments.map((a) => ({
      _id: a._id,
      workerName: a.workerId.name,
      workerEmail: a.workerId.email,
      customerName: a.assignedWork?.name || "N/A",        // <-- use `name` from Form
      serviceType: a.assignedWork?.availabilityTime || "N/A", // <-- maybe map this to service type
      status: "Assigned", // you can add a status field if needed
    }));

    res.json({ data: formatted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
