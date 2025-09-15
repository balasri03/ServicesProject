import React, { useState } from "react";
import axios from "./Axios_config";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin/login", formData);
      alert(res.data.msg);
      localStorage.setItem("adminToken", res.data.token);
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;