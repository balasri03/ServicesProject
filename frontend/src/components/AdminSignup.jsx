import React, { useState } from "react";
import axios from "./Axios_config"

const AdminSignup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin/register", formData);
      alert(res.data.msg);
    } catch (err) {
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Admin Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br/>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default AdminSignup;