// import { motion } from "framer-motion";
// import { SparklesIcon, WrenchScrewdriverIcon, LightBulbIcon, HomeModernIcon } from "@heroicons/react/24/solid";

// const services = [
//   { name: "Plumbing", icon: WrenchScrewdriverIcon, image: "https://source.unsplash.com/400x300/?plumbing" },
//   { name: "Cleaning", icon: SparklesIcon, image: "https://source.unsplash.com/400x300/?cleaning" },
//   { name: "Electrical", icon: LightBulbIcon, image: "https://source.unsplash.com/400x300/?electrical" },
//   { name: "Carpentry", icon: HomeModernIcon, image: "https://source.unsplash.com/400x300/?carpentry" },
//   { name: "Painting", icon: HomeModernIcon, image: "https://source.unsplash.com/400x300/?painting" },
// ];

// // Animation variants for word-by-word falling effect
// const wordAnimation = {
//   hidden: { opacity: 0, y: -50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3, // Delay each word by 0.3 seconds
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const containerAnimation = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.3, // Stagger each word
//       delayChildren: 0, // Start immediately
//       repeat: Infinity,
//       repeatDelay: 1, // Wait 2 seconds after the sentence completes
//     },
//   },
// };

// function App() {
//   const heading = "Step Into a Smarter World of Home Services";

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      
//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-8 py-4">
//         <h1 className="text-2xl font-bold tracking-wide">SmartServices</h1>
//         <button className="bg-indigo-600 px-4 py-2 rounded-xl hover:bg-indigo-500 transition">
//           Sign In
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <section className="text-center px-6 py-20">
//         <motion.div
//           className="inline-block"
//           variants={containerAnimation}
//           initial="hidden"
//           animate="visible"
//         >
//           {heading.split(" ").map((word, index) => (
//             <motion.span
//               key={index}
//               className="inline-block mr-2 text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
//               custom={index}
//               variants={wordAnimation}
//             >
//               {word}
//             </motion.span>
//           ))}
//         </motion.div>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5, duration: 1 }}
//           className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
//         >
//           Book trusted professionals for plumbing, cleaning, electrical work,
//           and more. Fast, reliable, and right at your doorstep.
//         </motion.p>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-indigo-500 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg"
//         >
//           Get Started
//         </motion.button>
//       </section>

//       {/* Services Reel */}
//       <section className="relative py-16 overflow-hidden">
//         <motion.div
//           className="flex gap-6 animate-marquee"
//           initial={{ x: 0 }}
//           animate={{ x: [-0, -1000] }}
//           transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         >
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition"
//               style={{
//                 backgroundImage: `url(${service.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="p-4 bg-gray-900/70 h-full flex flex-col justify-end">
//                 <service.icon className="h-8 w-8 text-indigo-400 mb-2" />
//                 <h3 className="text-xl font-semibold">{service.name}</h3>
//                 <p className="text-gray-400 text-sm mt-1">
//                   Reliable, affordable, and on-demand.
//                 </p>
//               </div>
//             </div>
//           ))}
//           {/* Duplicate for continuous reel */}
//           {services.map((service, idx) => (
//             <div
//               key={"dup-" + idx}
//               className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition"
//               style={{
//                 backgroundImage: `url(${service.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="p-4 bg-gray-900/70 h-full flex flex-col justify-end">
//                 <service.icon className="h-8 w-8 text-indigo-400 mb-2" />
//                 <h3 className="text-xl font-semibold">{service.name}</h3>
//                 <p className="text-gray-400 text-sm mt-1">
//                   Reliable, affordable, and on-demand.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 text-gray-500 border-t border-gray-700">
//         © {new Date().getFullYear()} SmartServices. All rights reserved.
//       </footer>

//       {/* Tailwind Custom Animation */}
//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(0%); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-marquee {
//             display: flex;
//             gap: 1.5rem;
//             animation: marquee 20s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default App;



import { motion } from "framer-motion";

const services = [
  { 
    title: "Plumbing", 
    description: "Expert plumbing solutions for leaks, pipes, and installations.",
    link: "/plumbing"
  },
  { 
    title: "Cleaning", 
    description: "Professional cleaning services for a spotless home.",
    link: "/cleaning"
  },
  { 
    title: "Electrical", 
    description: "Trusted electricians for repairs, wiring, and fittings.",
    link: "/electrical"
  },
  { 
    title: "Carpentry", 
    description: "Custom carpentry, furniture repair, and woodwork services.",
    link: "/carpentry"
  },
  { 
    title: "Painting", 
    description: "Brighten your home with professional painting services.",
    link: "/painting"
  },
];

// Word animations for heading
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
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

function App() {
  const heading = "Step Into a Smarter World of Home Services";

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold tracking-wide">SmartServices</h1>
        <button className="bg-indigo-600 px-4 py-2 rounded-xl hover:bg-indigo-500 transition">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 py-20">
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-500 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg"
        >
          Get Started
        </motion.button>

        {/* OUR SERVICES scroll link */}
        <div
          onClick={scrollToServices}
          className="mt-10 cursor-pointer text-xl font-bold text-indigo-400 hover:text-indigo-300 transition"
        >
          OUR SERVICES ↓
        </div>
      </section>

      {/* Services Glass Cards */}
      <section
        id="services"
        className="relative flex justify-center items-center h-[90vh]"
        style={{ perspective: "2000px" }}
      >
        <div className="relative">
          {services.map((service, index) => (
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
                x: -120, // move left
                scale: 1.1,
                transition: { duration: 0.4 },
              }}
              className={`group absolute top-0 left-0 w-[300px] h-[480px] rounded-2xl shadow-2xl overflow-hidden
                          bg-white/10 backdrop-blur-lg border border-white/20 cursor-pointer`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
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
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;
