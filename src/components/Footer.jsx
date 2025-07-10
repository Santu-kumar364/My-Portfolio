import React from "react";
import {
  SiGithub, // ✅ from 'react-icons/si'
} from "react-icons/si";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
import leetcode from "../assets/leetcode.png";
import hackerRank from "../assets/hackerrank.svg";
import codingNinjas from "../assets/codingNinjas.svg";
import gmail from "../assets/gmail.png";

const iconSize = "w-30 h-30";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-400 to-pink-500 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center ">
        <div className="flex gap-6 items-center">
          <a
            href="https://www.linkedin.com/in/santu-kumar-72239231b/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="hover:scale-110 transition text-2xl "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Santu-kumar364"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="bg-black rounded-2xl hover:scale-110 transition text-2xl "
          >
            <SiGithub />
          </a>

          <a
            href="https://leetcode.com/santukumar7619"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
            className="hover:scale-110 transition w-5 h-6 "
          >
            <img src={leetcode} alt="LeetCode" />
          </a>

          <a
            href="https://www.hackerrank.com/santukumar7619"
            target="_blank"
            rel="noopener noreferrer"
            title="HackerRank"
            className="hover:scale-110 transition"
          >
            <img
              src={hackerRank}
              alt="HackerRank"
              className={`${iconSize} object-contain`}
            />
          </a>

          <a
            href="https://www.naukri.com/code360/profile/5e2c8886-59a2-4393-943b-773290a29342"
            target="_blank"
            rel="noopener noreferrer"
            title="Coding Ninjas"
            className="hover:scale-110 transition"
          >
            <img
              src={codingNinjas}
              alt="Coding Ninjas"
              className={`${iconSize} object-contain`}
            />
          </a>

          <a
            href="mailto:santukumar7619@gmail.com"
            title="Gmail"
            className="hover:scale-110 transition w-20 h-7"
          >
            <img src={gmail} alt="Gmail" />
          </a>
        </div>

        <p className="text-sm text-white flex items-center gap-1">
          <FaRegCopyright className="text-base" />
          {new Date().getFullYear()} Santu Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
