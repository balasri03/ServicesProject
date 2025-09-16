import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "./Axios_config.js";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v2/login", formData);
      console.log("Login response:", response.data);

      setMessage("Login successful!");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);

      setTimeout(() => navigate("/"), 1000); // ✅ redirect after 1s
    } catch (err) {
      setError(err.response?.data?.message || "Login failed, please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center sm:justify-end relative"
      style={{
        backgroundImage: "url(/login.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 z-10 mx-4 sm:mr-20"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-400">
          Sign In
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-2 text-white">Mobile</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter mobile number"
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              autoComplete="current-password"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30"
            />
          </div>

          {error && <p className="text-red-400 text-center">{error}</p>}
          {message && <p className="text-green-400 text-center">{message}</p>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-500 py-3 rounded-xl font-semibold text-white shadow-lg hover:bg-indigo-400 transition"
          >
            Login
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-200">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:text-indigo-300">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
