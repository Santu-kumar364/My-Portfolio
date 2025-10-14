import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../assets/bgImg.jpg";
import innerLogo from "../assets/innerLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "Java Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
  ];

  const resumeLink = "https://drive.google.com/uc?export=download&id=1Zr9eYMua0VfhPMB6FK9L3Dq7dPoi9gnB";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(roles[roleIndex].slice(0, charIndex + 1));
      if (charIndex === roles[roleIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 2000);
      } else {
        setCharIndex((prev) => prev + 1);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <header
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed w-full py-4 transition-all duration-300 z-50 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img src={innerLogo} alt="Portfolio" className="h-12 lg:h-16" />
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            {["Home", "Skills", "Experience", "Projects", "Certificates", "Contact"].map((item, index) => (
              <motion.li key={item} custom={index} variants={textVariants}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-pink-400 ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href={resumeLink}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:inline-block px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 ${
              scrolled 
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" 
                : "bg-white text-pink-600"
            }`}
          >
            Download CV
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "bg-gray-100" : "bg-white/20"
            }`}
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className="absolute left-0 top-1 w-6 h-0.5 bg-current rounded"
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="absolute left-0 top-3 w-6 h-0.5 bg-current rounded"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="absolute left-0 top-5 w-6 h-0.5 bg-current rounded"
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-md z-40 md:hidden"
          >
            <div className="p-8 mt-20 space-y-6">
              {["Home", "Skills", "Experience", "Projects", "Certificates", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ x: 10 }}
                  className="block text-gray-800 text-lg font-medium hover:text-pink-600 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href={resumeLink}
                download
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Santu Kumar
          </motion.h1>
          
          <motion.div
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <p className="text-2xl sm:text-3xl text-white/90 font-light">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </p>
          </motion.div>

          <motion.div
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-pink-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all"
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;