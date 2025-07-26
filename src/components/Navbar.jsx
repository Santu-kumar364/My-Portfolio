import React, { useState, useEffect } from "react";
import bgImg from "../assets/bgImg.jpg";
import innerLogo from "../assets/innerLogo.png";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "Java Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Engineer",
    "Competitive Programmer",
    "Student",
  ];

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1BcWLhLWIZ-eT6hMf1nn912OFXM4jS6XS";

  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(roles[roleIndex].slice(0, charIndex + 1));
      if (charIndex === roles[roleIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 2000); // Wait before switching role
      } else {
        setCharIndex((prev) => prev + 1);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <header
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white "
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto py-4 flex justify-between items-center relative z-10">
        <a href="#home" >
          <img
            src={innerLogo}  
            alt="Portfolio"
            className=" sm:h-30 lg:h-40"
          />
        </a>
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-lg">
          <li>
            <a href="#home" className="hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-300 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href={resumeLink}
          download
          className="hidden md:inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-500 shadow-md hover:scale-105 hover:shadow-pink-800 transition duration-300"
        >
          Download Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-4 hover:scale-125 transition-all"
          title="Menu"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden -mt-15">
          <ul className=" rounded-xl mx-6 p-4 space-y-3 text-left  backdrop-blur">
            <li>
              <a
                href="#skills"
                className="block hover:text-gray-300 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block hover:text-gray-300 transition"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:text-gray-300 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-gray-300 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href={resumeLink}
                download
                className="block hover:text-gray-300 transition"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center px-6 py-2 max-w-4xl mx-auto pt-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          I am Santu Kumar
        </h1>
        <p className="mt-4 text-2xl sm:text-3xl text-white font-medium">
          {displayText}
          <span className="blinking-cursor">|</span>
        </p>

        <div className="flex flex-wrap justify-center gap-6 py-6">
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-pink-500 font-medium shadow-md hover:scale-105 transition duration-300"
          >
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1BcWLhLWIZ-eT6hMf1nn912OFXM4jS6XS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pink-600 px-4 py-2 text-white font-medium shadow-md hover:scale-105 transition duration-300"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Cursor Animation */}
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 24px;
          color: white;
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
