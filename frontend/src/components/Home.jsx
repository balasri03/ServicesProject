


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "Plumbing", description: "Expert plumbing solutions for leaks, pipes, and installations.", link: "/plumbing" },
  { title: "Cleaning", description: "Professional cleaning services for a spotless home.", link: "/cleaning" },
  { title: "Electrical", description: "Trusted electricians for repairs, wiring, and fittings.", link: "/electrical" },
  { title: "Carpentry", description: "Custom carpentry, furniture repair, and woodwork services.", link: "/carpentry" },
  { title: "Painting", description: "Brighten your home with professional painting services.", link: "/painting" },
];

const bgImages = [
  "/house-cleaning-pictures-xdntho6b8ri7ufnu.jpg",
  "/GettyImages-1147804793.jpg",
  "/02-13-things-plumber.jpg",
];

function Home() {
  const heading = "Step Into a Smarter World of Home Services";
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState(null);
  const [currentBg, setCurrentBg] = useState(0);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showSignUpDropdown, setShowSignUpDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

   const goToSignUp = () => navigate("/signup");
    const goToLogin = () => navigate("/login");
  const goToWorkerLogin = () => navigate("/workerlogin");
  const goToWorkerRegister = () => navigate("/workerregister");
  const goToAdminSignup = () => navigate("/adminsignup");
  const goToAdminLogin = () => navigate("/adminlogin");

  return (
    <div className="min-h-screen text-white overflow-hidden relative bg-gradient-to-b from-black via-neutral-900 to-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-transparent">
        <AnimatePresence>
          {bgImages.map((img, index) =>
            index === currentBg ? (
              <motion.div
                key={img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            ) : null
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/70"></div>

        {/* Top Bar */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-30">
          <h1 className="text-2xl font-bold tracking-wide">SmartServices</h1>
          <div className="flex gap-3 relative">
            {/* Sign Up Dropdown */}
            <div className="relative">
              <button
                className="px-4 py-2 rounded-xl text-white border border-white hover:bg-white/10 transition bg-transparent"
                onClick={() => setShowSignUpDropdown((prev) => !prev)}
              >
                Sign Up
              </button>

              <AnimatePresence>
                {showSignUpDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200 z-50"
                  >
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-xl"
                      onClick={goToWorkerRegister}
                    >
                      Sign Up as Worker
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={goToSignUp}
                    >
                      Sign Up as Customer
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-xl"
                      onClick={goToAdminSignup}
                    >
                      Sign Up as Admin
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Login Dropdown */}
            <div className="relative">
              <button
                className="px-4 py-2 rounded-xl text-white border border-white hover:bg-white/10 transition bg-transparent"
                onClick={() => setShowLoginDropdown((prev) => !prev)}
              >
                Login
              </button>

              <AnimatePresence>
                {showLoginDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200 z-50"
                  >
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-xl"
                      onClick={goToWorkerLogin}
                    >
                      Login as Worker
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={goToLogin}
                    >
                      Login as Customer
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-xl"
                      onClick={goToAdminLogin}
                    >
                      Login as Admin
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book trusted professionals for plumbing, cleaning, electrical work,
            and more. Fast, reliable, and right at your doorstep.
          </p>
          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-bold text-indigo-400 hover:text-indigo-300 transition underline underline-offset-4"
          >
            OUR SERVICES ↓
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative flex justify-center items-center h-[90vh] bg-transparent"
      >
        <div className="flex flex-col items-center w-full">
          {/* Search */}
          <div className="mb-8 w-full flex justify-center">
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[350px] px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            />
          </div>

          {/* Cards */}
          <div className="relative">
            {filteredServices.length === 0 ? (
              <div className="text-gray-400 text-xl">No services found.</div>
            ) : (
              filteredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 100 * index }}
                  animate={{
                    opacity: 1,
                    x: index * 60,
                    z: -index * 150,
                  }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.08,
                    y: -20,
                    zIndex: 20,
                  }}
                  onHoverStart={() => setHovered(index)}
                  onHoverEnd={() => setHovered(null)}
                  className={`group absolute top-0 left-0 w-[300px] h-[480px] rounded-2xl shadow-2xl overflow-hidden
                    bg-white/10 backdrop-blur-lg border border-white/20 cursor-pointer flex items-center justify-center ${
                      hovered === index ? "z-20" : "z-10"
                    }`}
                  style={{ left: `${index * 40}px` }}
                  onClick={() => navigate(service.link)}
                >
                  <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center">
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <button className="mt-4 bg-white text-black px-4 py-2 rounded-xl font-semibold">
                      Learn More
                    </button>
                  </div>
                  {hovered === index && (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: -320 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-[-340px] top-0 w-[320px] h-full bg-gradient-to-br from-indigo-500/80 to-cyan-400/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 text-left flex flex-col justify-center"
                    >
                      <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                        {service.title}
                      </h2>
                      <p className="text-lg text-white mb-2 font-medium drop-shadow-md">
                        {service.description}
                      </p>
                      <div className="mt-4 text-sm text-white/80">
                        Book trusted professionals for {service.title.toLowerCase()} services. Fast, reliable,
                        and right at your doorstep.
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
