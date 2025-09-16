// // import Worker from "../models/Worker"

// // const workeravailability = async(req,res)=>{
// //      const { workerId, isAvailable } = req.body;
// //   try {
// //     const worker = await Worker.findByIdAndUpdate(
// //       workerId,
// //       { isAvailable },
// //       { new: true }
// //     );
// //     console.log(worker)
// //     if (!worker) return res.status(404).json({ msg: "Worker not found" });

// //     res.json({ msg: "Availability updated", worker });
// //   } catch (err) {
// //     res.status(500).json({ msg: "Error updating availability" });
// //   }
    
// // }



// // export const setAvailability = async (req, res) => {
// //   try {
// //     const { workerId, availability } = req.body; // "Available" or "Unavailable"

// //     const worker = await Worker.findById(workerId);
// //     if (!worker) return res.status(404).json({ msg: "Worker not found" });

// //     worker.todayAvailability = availability;
// //     await worker.save();

// //     res.json({
// //       msg: `Worker marked as ${availability} today`,
// //       todayAvailability: worker.todayAvailability,
// //       assignedWork: worker.assignedWork,
// //     });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };


// // import Worker from "../models/Worker.js";
// import Worker from "../models/workerregister.model.js"
// // Worker sets availability for today
// export const setAvailability = async (req, res) => {
//   try {
//     const { workerId, availability } = req.body; // availability = "Available" or "Unavailable"

//     const worker = await Worker.findById(workerId);
//     if (!worker) return res.status(404).json({ msg: "Worker not found" });

//     worker.todayAvailability = availability;
//     await worker.save();

//     res.json({
//       msg: `Availability set to ${availability}`,
//       todayAvailability: worker.todayAvailability,
//       assignedWork: worker.assignedWork,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Worker fetches current status (availability + assigned work)
// export const getStatus = async (req, res) => {
//   try {
//     const { workerId } = req.params;

//     const worker = await Worker.findById(workerId);
//     if (!worker) return res.status(404).json({ msg: "Worker not found" });

//     res.json({
//       todayAvailability: worker.todayAvailability,
//       assignedWork: worker.assignedWork,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



import WorkerAvailability from "../models/WorkerAvailability.model.js";

// Set or update today's availability
export const setAvailability = async (req, res) => {
  try {
    const { workerId, availability } = req.body;

    // Check if there is an entry for today
    let todayEntry = await WorkerAvailability.findOne({
      workerId,
      date: {
        $gte: new Date().setHours(0, 0, 0, 0),
        $lte: new Date().setHours(23, 59, 59, 999),
      },
    });

    if (!todayEntry) {
      // create new entry
      todayEntry = new WorkerAvailability({
        workerId,
        todayAvailability: availability,
      });
    } else {
      // update existing
      todayEntry.todayAvailability = availability;
    }

    await todayEntry.save();

    res.json({
      msg: `Availability set to ${availability}`,
      todayAvailability: todayEntry.todayAvailability,
      assignedWork: todayEntry.assignedWork,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get worker's status
// export const getStatus = async (req, res) => {
//   try {
//     const { workerId } = req.params;

//     const todayEntry = await WorkerAvailability.findOne({
//       workerId,
//       date: {
//         $gte: new Date().setHours(0, 0, 0, 0),
//         $lte: new Date().setHours(23, 59, 59, 999),
//       },
//     });

//     if (!todayEntry) return res.status(404).json({ msg: "No availability found for today" });

//     res.json({
//       todayAvailability: todayEntry.todayAvailability,
//       assignedWork: todayEntry.assignedWork,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// Get worker's status
export const getStatus = async (req, res) => {
  try {
    const { workerId } = req.params;

    const todayEntry = await WorkerAvailability.findOne({
      workerId,
      date: {
        $gte: new Date().setHours(0, 0, 0, 0),
        $lte: new Date().setHours(23, 59, 59, 999),
      },
    }).populate("assignedWork", "name contactInfo address"); 
    // 👆 only select needed fields

    if (!todayEntry) {
      return res.status(404).json({ msg: "No availability found for today" });
    }

    res.json({
      todayAvailability: todayEntry.todayAvailability,
      assignedWork: todayEntry.assignedWork, // now includes customer details
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
