import React, { useState } from "react";
import axios from "./Axios_config.js";
import { useNavigate } from "react-router-dom";

const WorkerLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/workerslogin", formData);
      alert(res.data.msg);
      localStorage.setItem("workerId", res.data.workerId);
      localStorage.setItem("token", res.data.token);
      navigate("/availability");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Worker Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default WorkerLogin;