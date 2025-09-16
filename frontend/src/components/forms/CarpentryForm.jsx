import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "../Axios_config.js";

const CarpentryForm = () => {
  const [data, setData] = useState({
    name: "",
    experience: "",
    availabilityTime: "",
    contactInfo: "",
    serviceArea: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/customer/carpentry", data);
      alert("Carpentry worker details submitted and saved!");
      setData({
        name: "",
        experience: "",
        availabilityTime: "",
        contactInfo: "",
        serviceArea: "",
      });
    } catch (error) {
      alert(
        "Error submitting form: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: "linear-gradient(to right, #000, #000/20)",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 p-8 z-10 mx-4 sm:mr-20"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Carpentry Worker Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={data.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Experience (in years)
            </label>
            <input
              type="number"
              name="experience"
              placeholder="e.g. 5"
              value={data.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Availability Time
            </label>
            <input
              type="text"
              name="availabilityTime"
              placeholder="e.g. 10AM - 7PM"
              value={data.availabilityTime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              required
            />
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Contact Info
            </label>
            <input
              type="text"
              name="contactInfo"
              placeholder="Enter phone/email"
              value={data.contactInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              required
            />
          </div>

          {/* Service Area */}
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Service Area
            </label>
            <input
              type="text"
              name="serviceArea"
              placeholder="Enter your service location"
              value={data.serviceArea}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-700 py-3 rounded-xl font-semibold text-white shadow-lg 
            hover:bg-blue-800 transition"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default CarpentryForm;
