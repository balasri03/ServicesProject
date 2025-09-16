// import { useEffect, useState } from "react";
// import axios from "./Axios_config.js";

// function WorkerDashboard() {
//   const workerId = localStorage.getItem("workerId");
//   const [isAvailable, setIsAvailable] = useState(null);
//   const [assignedWork, setAssignedWork] = useState(null);
//   const [message, setMessage] = useState("");

//   // ✅ Fetch worker status on mount
//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const res = await axios.get(`/api/workers/status/${workerId}`);
//         // Convert backend string to boolean
//         setIsAvailable(res.data.todayAvailability === "Available");
//         setAssignedWork(res.data.assignedWork);
//       } catch (err) {
//         console.error("Error fetching status:", err.response?.data || err.message);
//         setMessage("Error fetching status");
//       }
//     };
//     fetchStatus();
//   }, [workerId]);

//   // ✅ Update availability
//   const updateAvailability = async (availability) => {
//     try {
//       const value = availability ? "Available" : "Unavailable"; // convert boolean to backend string
//       const res = await axios.post("/api/workers/availability", {
//         workerId,
//         availability: value,
//       });

//       // Map backend response to boolean
//       setIsAvailable(res.data.todayAvailability === "Available");
//       setAssignedWork(res.data.assignedWork);
//       setMessage("Availability updated!");
//     } catch (err) {
//       console.error("Error updating availability:", err.response?.data || err.message);
//       setMessage("Error updating availability");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <h2 className="text-2xl font-bold mb-6">Worker Dashboard</h2>

//       <div className="flex gap-4 mb-4">
//         <button
//           className={`px-6 py-2 rounded bg-green-500 text-white ${
//             isAvailable === true ? "opacity-70" : ""
//           }`}
//           onClick={() => updateAvailability(true)}
//         >
//           Available
//         </button>
//         <button
//           className={`px-6 py-2 rounded bg-red-500 text-white ${
//             isAvailable === false ? "opacity-70" : ""
//           }`}
//           onClick={() => updateAvailability(false)}
//         >
//           Not Available
//         </button>
//       </div>

//       {message && <p className="text-blue-600 font-medium">{message}</p>}

//       <div className="mt-6 bg-white shadow-md rounded-lg p-4 w-80 text-center">
//         <h3 className="font-semibold text-lg">Your Work Status</h3>
//         <p className="mt-2">
//           Availability:{" "}
//           <span className={isAvailable ? "text-green-600" : "text-red-600"}>
//             {isAvailable ? "Available" : "Not Available"}
//           </span>
//         </p>
//         <p className="mt-2">
//           Assigned Work:{" "}
//           {assignedWork ? (
//             <span className="text-indigo-600">{assignedWork}</span>
//           ) : (
//             "No work assigned yet"
//           )}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default WorkerDashboard;




import { useEffect, useState } from "react";
import axios from "./Axios_config.js";

function WorkerDashboard() {
  const workerId = localStorage.getItem("workerId");
  const [isAvailable, setIsAvailable] = useState(null);
  const [assignedWork, setAssignedWork] = useState(null);
  const [message, setMessage] = useState("");

  // ✅ Fetch worker status on mount
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get(`/api/workers/status/${workerId}`);
        // Convert backend string to boolean
        setIsAvailable(res.data.todayAvailability === "Available");
        setAssignedWork(res.data.assignedWork);
      } catch (err) {
        console.error("Error fetching status:", err.response?.data || err.message);
        setMessage("Error fetching status");
      }
    };
    fetchStatus();
  }, [workerId]);

  // ✅ Update availability
  const updateAvailability = async (availability) => {
    try {
      // Convert boolean to backend string
      const value = availability ? "Available" : "Unavailable";

      const res = await axios.post("/api/workers/availability", {
        workerId,
        availability: value,
      });

      // Map backend response to boolean
      setIsAvailable(res.data.todayAvailability === "Available");
      setAssignedWork(res.data.assignedWork);
      setMessage("Availability updated!");
    } catch (err) {
      console.error("Error updating availability:", err.response?.data || err.message);
      setMessage("Error updating availability");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Worker Dashboard</h2>

      <div className="flex gap-4 mb-4">
        <button
          className={`px-6 py-2 rounded bg-green-500 text-white ${
            isAvailable === true ? "opacity-70" : ""
          }`}
          onClick={() => updateAvailability(true)}
        >
          Available
        </button>
        <button
          className={`px-6 py-2 rounded bg-red-500 text-white ${
            isAvailable === false ? "opacity-70" : ""
          }`}
          onClick={() => updateAvailability(false)}
        >
          Not Available
        </button>
      </div>

      {message && <p className="text-blue-600 font-medium">{message}</p>}

      <div className="mt-6 bg-white shadow-md rounded-lg p-4 w-80 text-center">
        <h3 className="font-semibold text-lg">Your Work Status</h3>
        <p className="mt-2">
          Availability:{" "}
          <span className={isAvailable ? "text-green-600" : "text-red-600"}>
            {isAvailable ? "Available" : "Not Available"}
          </span>
        </p>
        <p className="mt-2">
  Assigned Work:{" "}
  {assignedWork ? (
    <span className="text-indigo-600">
      {assignedWork.name} - {assignedWork.contactInfo}
    </span>
  ) : (
    "No work assigned yet"
  )}
</p>

      </div>
    </div>
  );
}

export default WorkerDashboard;
