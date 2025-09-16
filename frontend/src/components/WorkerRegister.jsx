import { useState } from "react";
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
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const availableWorks = [
    "Plumber",
    "Electrician",
    "Cleaner",
    "Painter",
    "Carpenter",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
    setError("");
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
    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("api/workersregister", formData); // ✅ check backend route
      setMessage(res.data.msg || "Registration successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        contactNumber: "",
        availableTime: "",
        works: [],
      });
    } catch (err) {
      setError(err.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6">
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
            autoComplete="username"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
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
            disabled={loading}
            className={`w-full font-semibold py-2 rounded-lg shadow-md transition text-white ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {message && (
            <div className="text-green-600 text-center font-medium mt-2">
              {message}
            </div>
          )}
          {error && (
            <div className="text-red-600 text-center font-medium mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default WorkerRegister;
