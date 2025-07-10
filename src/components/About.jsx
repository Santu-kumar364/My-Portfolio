import React from "react";
import { FaUserCircle } from "react-icons/fa";
import myPhoto from "../assets/myPhoto.png";


const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-purple-50 to-pink-50 py-16 px-6 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            src={myPhoto}
            alt="Santu Kumar"
            className="w-40 h-40 rounded-full shadow-md"
          />
          {/* <FaUserCircle  className="text-pink-400 text-[150px] drop-shadow-md" /> */}
        </div>

        {/* Summary */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
            I'm Santu Kumar, a Computer Engineering student at IIT Patna and a
            passionate full-stack developer with strong expertise in Java,
            Spring Boot, React, Firebase, and MySQL. I've built scalable
            applications like Xzal (a secure social media platform) and XzalChat
            (a real-time chat app). With a Grand Master rank on Coding Ninjas
            and a top 2% finish in Naukri Campus Bizquezt, I enjoy solving
            real-world problems and am actively seeking opportunities to grow as
            a backend or full-stack engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
