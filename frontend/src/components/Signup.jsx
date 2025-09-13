import axios from "./Axios_config.js";
import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
function SignUp() {
  // --- State for showing/hiding passwords ---
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // --- State to store form data ---
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
  });

  // --- Handler to update state when user types ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- Handler for form submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Only send required fields to backend
    const { fullName, email, password, mobileNumber } = formData;
    try {
      const response = await axios.post("/api/v1/signup", {
        fullName,
        email,
        password,
        mobileNumber,
      });
      // Handle success (show message, redirect, etc.)
      alert("Signup successful!");
    } catch (error) {
      // Handle error (show message)
      alert(
        "Signup failed: " + (error.response?.data?.message || error.message)
      );
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center sm:justify-end relative"
      style={{
        backgroundImage: `url("./signup.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 z-10 mx-4 sm:mr-20 my-10"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900 drop-shadow-xl">
          Sign Up
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-white">Full Name</label>
            <input
              type="text"
              name="fullName" // Added name attribute
              value={formData.fullName} // Controlled component
              onChange={handleChange} // Added onChange handler
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-300"
              required
            />
          </div>
          {/* Mobile Number */}
          <div>
            <label className="block text-sm mb-2 text-white">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-300"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2 text-white">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password" // Added name attribute
                value={formData.password} // Controlled component
                onChange={handleChange} // Added onChange handler
                placeholder="Enter your password"
                className="w-full px-4 py-2 pr-10 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-300"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-300 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-500 py-3 rounded-xl font-semibold text-white shadow-lg hover:bg-indigo-400 transition"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-200">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-400 hover:text-indigo-300">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default SignUp;
