import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1JQX2lx7p9jQ5oYGT_5kq8NxsrgaD9xH5";

  return (
    <header className="rounded-bl-[100px] bg-gradient-to-r from-purple-500 via-pink-400 to-pink-600 text-white shadow-lg">
      {/* Top Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <a
          href="#home"
          className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide"
        >
          Santu Kumar
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-lg">
          <li>
            <a href="#home" className="hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 transition">
              About
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

        {/* Desktop Resume Button */}
        <a
          href={resumeLink}
          download
          className="hidden md:inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-500 shadow-md hover:scale-105 hover:shadow-pink-800 transition duration-300"
        >
          Download Resume
        </a>

        {/* Hamburger Icon - Mobile Only */}
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <ul className="mt-2 bg-gradient-to-r from-purple-500 via-pink-400 to-pink-600 rounded-xl mx-6 p-4 shadow-md space-y-3 text-left">
            <li>
              <a href="#about" className="block hover:text-gray-300 transition">
                About
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
                className="block w-full text-left rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-500 shadow hover:scale-105 transition duration-300"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}

      <section className="text-center px-6 py-2 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
          A Passionate Software Developer
        </h1>

        <div className="flex flex-wrap justify-center gap-6 py-6">
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-pink-500 font-medium shadow-md hover:scale-105 transition duration-300"
          >
            Hire Me
          </a>

          <a
            href="https://drive.google.com/file/d/1JQX2lx7p9jQ5oYGT_5kq8NxsrgaD9xH5/view?usp=sharing"
            target="_blank"
            className="rounded-full bg-pink-600 px-4 py-2 text-white font-medium shadow-md hover:scale-105 transition duration-300"
          >
            Resume
          </a>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
