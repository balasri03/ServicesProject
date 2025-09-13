import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CleaningForm from "./components/forms/CleaningForm";
import WorkerRegister from "./components/WorkerRegister";
import WorkerLogin from "./components/WorkerLogin";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cleaning" element={<CleaningForm />} />
        <Route path="/workerregister" element={<WorkerRegister />} />
         <Route path="/workerlogin" element={<WorkerLogin />} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
           <Route path="/adminsignup" element={<AdminSignup />} />

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
