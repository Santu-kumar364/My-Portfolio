import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "XzalChat",
    description:
      "XzalChat - A real-time messaging app built with React & Firebase. Features user authentication, chat functionality, media sharing, and responsive design for all devices.",
    tech: ["React", "Firebase", "Tailwind CSS", "Cloudinary"],
    codeLink: "https://github.com/Santu-kumar364/XzalChat",
  },
  {
    title: "Google Homepage Clone",
    description:
      "A React.js replica with pixel-perfect accuracy, responsive design, and optimized performance. Assignment submission for RMgX Technologies frontend challenge.",
    tech: ["React.js", "CSS", "Material UI"],
    codeLink: "https://github.com/Santu-kumar364/google-homepage-clone",
  },
  {
    title: "Xzal",
    description:
      "A high-performance social media application with React.js frontend and Spring Boot backend, designed for seamless user interactions and efficient data management.",
    tech: ["Spring Boot", "React.js", "MySQL", "Material UI", "TailwindCSS", "Formik", "Cloudinary", "Postman"],
    codeLink: "https://github.com/Santu-kumar364/Xzal",
  },
  {
    title: "Flipkart Cloner - E-commerce Website",
    description:
      "A Flipkart-inspired e-commerce website built with HTML, CSS, and JavaScript. Features include responsive design, product search, image slider.",
    tech: ["HTML", "CSS"],
    codeLink: "https://github.com/Santu-kumar364/flipkart_Cloner",
  },
  {
    title: "Weather App",
    description:
      "A simple weather application built with React and a weather API that allows users to check real-time weather conditions for any city worldwide.",
    tech: ["React.js", "CSS", "Weather API"],
    codeLink: "https://github.com/Santu-kumar364/weather-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
          Projects
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Here are some of the real-world applications I’ve built, covering
          everything from full-stack web development to real-time communication
          and backend optimization.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-gray-800 hover:underline"
                  >
                    <FaGithub className="mr-1" />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
