
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import axios from "../Axios_config";

// const CleaningForm = () => {
//   const [data, setData] = useState({
//     address: "",
//     availabilityTime: "",
//     wagesWanttoPay: "",
//     contactInfo: "",
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/v3/form", data);
//       alert("Cleaning worker details submitted and saved!");
//       setData({
//         address: "",
//         availabilityTime: "",
//         wagesWanttoPay: "",
//         contactInfo: "",
//       });
//     } catch (error) {
//       alert(
//         "Error submitting form: " +
//           (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center sm:justify-center relative"
//       style={{
//         background: "linear-gradient(to right, #000, #000/20)", // 🔵 Background gradient
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 p-8 z-10 mx-4 sm:mr-20"
//       >
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
//           Cleaning Worker Form
//         </h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm mb-2 text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter your address"
//               value={data.address}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm mb-2 text-gray-700">
//               Availability Time
//             </label>
//             <input
//               type="text"
//               name="availabilityTime"
//               placeholder="Enter your available time"
//               value={data.availabilityTime}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm mb-2 text-gray-700">
//               Wages Want to Pay (₹)
//             </label>
//             <input
//               type="number"
//               name="wagesWanttoPay"
//               placeholder="Enter daily wage"
//               value={data.wagesWanttoPay}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm mb-2 text-gray-700">
//               Contact Info
//             </label>
//             <input
//               type="text"
//               name="contactInfo"
//               placeholder="Enter your contact info"
//               value={data.contactInfo}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
//               required
//             />
//           </div>

//           {/* Submit */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-blue-600 py-3 rounded-xl font-semibold text-white shadow-lg hover:bg-green-500 transition"
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default CleaningForm;



import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "../Axios_config.js";

const CleaningForm = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    availabilityTime: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v3/form", data);
      alert("Cleaning worker details submitted and saved!");
      setData({
        name: "",
        address: "",
        availabilityTime: "",
        contactInfo: "",
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
      className="min-h-screen flex items-center justify-center sm:justify-center relative"
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
          Cleaning Worker Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={data.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={data.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Availability Time
            </label>
            <input
              type="text"
              name="availabilityTime"
              placeholder="Enter your available time"
              value={data.availabilityTime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Contact Info
            </label>
            <input
              type="text"
              name="contactInfo"
              placeholder="Enter your contact info"
              value={data.contactInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 py-3 rounded-xl font-semibold text-white shadow-lg hover:bg-green-500 transition"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default CleaningForm;