import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Font Awesome & Simple Icons
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaKey,
  FaDocker,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiFirebase,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGooglecloud,
  SiCloudinary,
  SiJsonwebtokens,
  SiMysql,
} from "react-icons/si";

// Skills data
const skills = [
  // Languages
  { name: "Java", level: "95%", icon: <FaJava className="text-orange-500" /> },
  {
    name: "JavaScript",
    level: "90%",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  { name: "MySQL", level: "80%", icon: <SiMysql className="text-blue-700" /> },

  // Frontend
  {
    name: "HTML5",
    level: "98%",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  { name: "CSS3", level: "98%", icon: <FaCss3Alt className="text-blue-500" /> },
  {
    name: "React.js",
    level: "85%",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    name: "Tailwind CSS",
    level: "75%",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
   

  // Backend
  {
    name: "Spring Boot",
    level: "60%",
    icon: <SiSpringboot className="text-green-500" />,
  },
  {
    name: "REST APIs",
    level: "95%",
    icon: <FaServer className="text-teal-500" />,
  },

   
  {
    name: "Cloudinary",
    level: "65%",
    icon: <SiCloudinary className="text-indigo-400" />,
  },

  // Tools
  { name: "Git", level: "95%", icon: <FaGitAlt className="text-red-500" /> },
  {
    name: "Postman",
    level: "95%",
    icon: <SiPostman className="text-orange-400" />,
  },
  {
    name: "Docker",
    level: "40%",
    icon: <FaDocker className="text-blue-400" />,
  },
  {
    name: "GCP",
    level: "30%",
    icon: <SiGooglecloud className="text-blue-400" />,
  },

  // CS Concepts
  {
    name: "Data Structures",
    level: "85%",
    icon: <FaProjectDiagram className="text-pink-500" />,
  },
  { name: "OOPs", level: "95%", icon: <FaCode className="text-green-400" /> },
  {
    name: "DBMS",
    level: "80%",
    icon: <FaDatabase className="text-gray-500" />,
  },
  {
    name: "Computer Networks",
    level: "80%",
    icon: <FaServer className="text-gray-400" />,
  },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="skills"
      className="px-4 py-10 bg-white text-center "
      ref={ref}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
        What I Do
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        I specialize in building scalable web applications, solving real-world
        problems, and creating smooth user experiences using modern
        technologies.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="bg-gray-100 p-5 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {skill.name}
              </h3>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-500 rounded-full transition-all duration-[1500ms]"
                style={{ width: inView ? skill.level : "0%" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
