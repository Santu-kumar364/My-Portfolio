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
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaDocker,
  FaCode,
  FaProjectDiagram,
  FaPython,
  FaPhp,
  FaAws,
  FaLock,
  FaCalculator,
  FaDesktop,
  FaNetworkWired,
  FaSitemap, // Using FaSitemap for System Design
  FaCogs, // Alternative for System Design
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostman,
  SiTailwindcss,
  SiJavascript,
  SiGooglecloud,
  SiCloudinary,
  SiJsonwebtokens,
  SiMysql,
  SiMui,
  SiPostgresql,
  SiDrupal,
  SiRedux,
} from "react-icons/si";

// Skills data - Updated with all skills from resume
const skills = [
  // Languages
  { name: "Java", level: "95%", icon: <FaJava className="text-orange-500" /> },
  {
    name: "JavaScript",
    level: "90%",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    name: "CSS3",
    level: "98%",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "Drupal",
    level: "60%",
    icon: <SiDrupal className="text-blue-600" />,
  },
  {
    name: "Spring Boot",
    level: "80%",
    icon: <SiSpringboot className="text-green-500" />,
  },
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
  {
    name: "Python",
    level: "70%",
    icon: <FaPython className="text-blue-400" />,
  },

  { name: "PHP", level: "65%", icon: <FaPhp className="text-indigo-400" /> },

  // Frontend
  {
    name: "HTML5",
    level: "98%",
    icon: <FaHtml5 className="text-orange-500" />,
  },

  {
    name: "Material-UI",
    level: "70%",
    icon: <SiMui className="text-blue-600" />,
  },

  {
    name: "REST APIs",
    level: "95%",
    icon: <FaServer className="text-teal-500" />,
  },

  // Databases
  {
    name: "MySQL",
    level: "80%",
    icon: <SiMysql className="text-blue-700" />,
  },
  {
    name: "PostgreSQL",
    level: "70%",
    icon: <SiPostgresql className="text-blue-800" />,
  },
  {
    name: "DBMS",
    level: "85%",
    icon: <FaDatabase className="text-gray-500" />,
  },

  // Cloud & Services
  {
    name: "AWS",
    level: "75%",
    icon: <FaAws className="text-orange-500" />,
  },
  {
    name: "Cloudinary",
    level: "75%",
    icon: <SiCloudinary className="text-indigo-400" />,
  },
  {
    name: "GCP",
    level: "40%",
    icon: <SiGooglecloud className="text-blue-400" />,
  },
  {
    name: "Docker",
    level: "50%",
    icon: <FaDocker className="text-blue-400" />,
  },

  // CMS

  // Tools
  {
    name: "Git",
    level: "95%",
    icon: <FaGitAlt className="text-red-500" />,
  },
  {
    name: "Postman",
    level: "95%",
    icon: <SiPostman className="text-orange-400" />,
  },

  // Authentication & Security
  {
    name: "JWT",
    level: "85%",
    icon: <SiJsonwebtokens className="text-pink-500" />,
  },

  // CS Concepts
  {
    name: "Data Structures",
    level: "90%",
    icon: <FaProjectDiagram className="text-pink-500" />,
  },

  {
    name: "OOPs",
    level: "95%",
    icon: <FaCode className="text-green-400" />,
  },
  {
    name: "System Design",
    level: "75%",
    icon: <FaSitemap className="text-teal-600" />, // Changed from FaDiagramProject to FaSitemap
  },
  {
    name: "Computer Networks",
    level: "80%",
    icon: <FaNetworkWired className="text-gray-400" />,
  },
  {
    name: "Operating Systems",
    level: "75%",
    icon: <FaDesktop className="text-gray-500" />,
  },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="px-4 py-10 bg-white text-center " ref={ref}>
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
