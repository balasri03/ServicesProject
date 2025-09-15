import React, { useState } from "react";
import axios from "./Axios_config.js";

const WorkerRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    availableTime: "",
    works: [],
  });

  const availableWorks = ["Plumber", "Electrician", "Cleaner", "Painter", "Carpenter"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWorksChange = (e) => {
    const options = e.target.options;
    const selectedWorks = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedWorks.push(options[i].value);
      }
    }
    setFormData({ ...formData, works: selectedWorks });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/workersregister", formData);
      alert(res.data.msg);
      setFormData({
        name: "",
        email: "",
        password: "",
        contactNumber: "",
        availableTime: "",
        works: [],
      });
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Worker Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            name="availableTime"
            placeholder="Available Time (e.g. 9am - 5pm)"
            value={formData.availableTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Works (Ctrl + Click for multiple)
            </label>
            <select
              multiple
              value={formData.works}
              onChange={handleWorksChange}
              className="w-full border rounded-lg p-2 h-28 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {availableWorks.map((work, index) => (
                <option key={index} value={work}>
                  {work}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkerRegister;
