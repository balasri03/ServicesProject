
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import Worker from "../models/workerregister.model.js";

// // Worker Login
// const workerlogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const worker = await Worker.findOne({ email });
//     if (!worker) return res.status(400).json({ msg: "No worker found" });

//     const isMatch = await bcrypt.compare(password, worker.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//     const token = jwt.sign({ id: worker._id }, "secretKey", { expiresIn: "1d" });

//     res.json({ msg: "Login successful", token, workerId: worker._id });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Worker Availability
// const setAvailability = async (req, res) => {
//   try {
//     const { workerId, availability } = req.body;

//     const worker = await Worker.findById(workerId);
//     if (!worker) return res.status(404).json({ msg: "Worker not found" });

//     worker.todayAvailability = availability;
//     await worker.save();

//     res.json({ msg: `Worker marked as ${availability} today `});
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export  {workerlogin,setAvailability}


// controllers/worker.controller.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import Worker from "../models/Worker.js";
import Worker from "../models/workerregister.model.js"
export const workerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const worker = await Worker.findOne({ email });
    if (!worker) return res.status(400).json({ msg: "No worker found" });

    const isMatch = await bcrypt.compare(password, worker.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: worker._id }, "secretKey", { expiresIn: "1d" });

    res.json({
      msg: "Login successful",
      token,
      workerId: worker._id,
      todayAvailability: worker.todayAvailability,
      assignedWork: worker.assignedWork,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
