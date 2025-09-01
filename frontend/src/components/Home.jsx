import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const wordAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function Home() {
  const heading = "Step Into a Smarter World of Home Services";
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState(null);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative bg-gradient-to-b from-black via-neutral-900 to-black">

      {/* Hero Section with optional Background Slideshow */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-transparent">
        {/* Background slideshow images */}
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Top Heading Bar */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-30">
          <h1 className="text-2xl font-bold tracking-wide">SmartServices</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-xl text-white border border-white hover:bg-white/10 transition bg-transparent">
              Sign In
            </button>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-20">
          <motion.div
            className="inline-block"
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
          >
            {heading.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
                custom={index}
                variants={wordAnimation}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Book trusted professionals for plumbing, cleaning, electrical work,
            and more. Fast, reliable, and right at your doorstep.
          </motion.p>
          <button
            onClick={scrollToServices}
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
        style={{ perspective: "2000px" }}
      >
        {/* Animated Description Panel */}
        <AnimatePresence>
          {hovered !== null && filteredServices[hovered] && (
            <motion.div
              key={filteredServices[hovered].title}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] h-[220px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 flex flex-col justify-center z-20"
            >
              <h2 className="text-3xl font-bold mb-2 text-indigo-300">
                {filteredServices[hovered].title}
              </h2>
              <p className="text-lg text-gray-200">{filteredServices[hovered].description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex flex-col items-center w-full">
          {/* Search Bar */}
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
                  initial={{ opacity: 0, rotateY: -30, x: 100 * index }}
                  animate={{
                    opacity: 1,
                    rotateY: -40 + index * 10,
                    x: index * 60,
                    z: -index * 150,
                  }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  whileHover={{
                    x: -120,
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  className={`group absolute top-0 left-0 w-[300px] h-[480px] rounded-2xl shadow-2xl overflow-hidden
                    bg-white/10 backdrop-blur-lg border border-white/20 cursor-pointer flex items-center justify-center`}
                  style={{ transformStyle: "preserve-3d" }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Card Content Centered */}
                  <div className="flex flex-col items-center justify-center h-full w-full p-6 bg-gradient-to-t from-black/50 via-black/20 to-transparent text-center">
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="text-sm text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full shadow-lg transition-all flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Home;