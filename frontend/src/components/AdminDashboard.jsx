import React, { useEffect, useState } from "react";
import axios from "./Axios_config.js";

function AdminDashboard() {
  const [serviceRequests, setServiceRequests] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch service requests
        const reqRes = await axios.get("/api/admin/service-requests");
        setServiceRequests(reqRes.data.data);

        // Fetch available workers
        const workerRes = await axios.get("/api/admin/worker-availability/today");
        setWorkers(workerRes.data.data);

        // Fetch assignments
        const assignRes = await axios.get("/api/admin/assignments");
        setAssignments(assignRes.data.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err.response?.data || err.message);
      }
    };

    fetchData();
  }, []);

  const handleAssign = async () => {
    if (!selectedRequest || !selectedWorker) return;

    try {
      await axios.post("/api/admin/assignments/assign", {
        customerId: selectedRequest.customerId,
        workerId: selectedWorker._id,
        serviceRequestId: selectedRequest._id,
      });

      setMessage("Work assigned successfully!");

      // Refresh assignments after assigning
      const res = await axios.get("/api/admin/assignments");
      setAssignments(res.data.data);
    } catch (err) {
      console.error("Error assigning work:", err.response?.data || err.message);
      setMessage("Error assigning work.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service Requests */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-indigo-600">Service Requests</h2>
          <ul>
            {serviceRequests.map((req) => (
              <li
                key={req._id}
                className={`p-3 mb-2 rounded-lg cursor-pointer border ${
                  selectedRequest?._id === req._id
                    ? "bg-indigo-100 border-indigo-400"
                    : "bg-gray-50"
                }`}
                onClick={() => setSelectedRequest(req)}
              >
                <div className="font-bold">{req.serviceType}</div>
                <div className="text-sm text-gray-600">{req.details?.address}</div>
                <div className="text-xs text-gray-400">Customer: {req.customerId?.fullName}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Available Workers */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-indigo-600">Available Workers</h2>
          <ul>
            {workers.map((worker) => (
              <li
                key={worker._id}
                className={`p-3 mb-2 rounded-lg cursor-pointer border ${
                  selectedWorker?._id === worker._id
                    ? "bg-indigo-100 border-indigo-400"
                    : "bg-gray-50"
                }`}
                onClick={() => setSelectedWorker(worker)}
              >
                <div className="font-bold">{worker.name}</div>
                <div className="text-sm text-gray-600">{worker.email}</div>
                <div className="text-xs text-gray-400">Contact: {worker.contactNumber}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Assign Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleAssign}
          disabled={!selectedRequest || !selectedWorker}
          className={`px-6 py-2 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition ${
            (!selectedRequest || !selectedWorker) && "opacity-50 cursor-not-allowed"
          }`}
        >
          Assign Work
        </button>
      </div>

      {message && <div className="text-center text-green-600 mt-4">{message}</div>}

      {/* Assignments List */}
      <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">Assignments</h2>
        <ul>
  {assignments.map((assign) => (
    <li key={assign._id} className="p-3 mb-2 rounded-lg border bg-gray-50">
      <div className="font-bold">Service: {assign.serviceType}</div>
      <div className="text-sm">Worker: {assign.workerName}</div>
      <div className="text-sm">Customer: {assign.customerName}</div>
      <div className="text-xs text-gray-500">Status: {assign.status}</div>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
