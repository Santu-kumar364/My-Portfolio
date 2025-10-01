import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "SecureMyDocs",
    description: [
      "Developed SecureMyDocs, a secure document vault featuring client-side AES-256 encryption and per-file OTP authentication using React, Spring Boot, and MySQL.",
       "Built a responsive Weather App with real-time data fetching and optimized rendering, improving performance by 30% using React and WeatherAPI." , 
       "Implemented JWT-based authentication and RESTful APIs, and participated in Agile sprints with weekly mentor-led code reviews.",
    ],
    tech: ["React", "Spring Boot", "Tailwind CSS", "Cloudinary", "JWT", "MySQL"],
    codeLink: "https://github.com/Santu-kumar364/secureMyDocs",
  },
  
  {
    title: "Xzal - Social Media App",
    description: [
      "Built a full-stack social media app using Spring Boot and React.js with real-time reels and posts.",
      "Designed 25+ REST APIs, improving data throughput by 30%.",
      "Used JWT + RBAC for authentication and secured sensitive user data.",
      "Reduced storage costs by 35% via Cloudinary CDN integration.",
    ],
    tech: [
      "Spring Boot",
      "React.js",
      "MySQL",
      "TailwindCSS",
      "JWT",
      "Formik",
      "Cloudinary",
    ],
    codeLink: "https://github.com/Santu-kumar364/Xzal",
  },
  {
    title: "Weather App",
    description: [
      "Built a responsive weather app using WeatherAPI and React.",
      "Optimized API handling and improved rendering speed by 30%.",
    ],
    tech: ["React.js", "Weather API", "HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/Santu-kumar364/weather-app",
    liveLink: "https://weather-app-iota-one-36.vercel.app/",
  },
  {
    title: "Google Homepage Clone",
    description: [
      "Replicated the Google homepage using React.js with pixel-perfect accuracy.",
      "Submitted as part of RMgX Technologies frontend challenge.",
    ],
    tech: ["React.js", "CSS", "Material UI"],
    codeLink: "https://github.com/Santu-kumar364/google-homepage-clone",
    liveLink: "https://google-homepage-clone.onrender.com/"
  },
  {
    title: "XzalChat - Real-time Chat App",
    description: [
      "Developed a real-time chat app using Firebase Firestore for instant updates and device syncing.",
      "Implemented secure Firebase Authentication, reducing unauthorized access by 100%.",
      "Integrated Cloudinary for media sharing, boosting user engagement by 25%.",
    ],
    tech: ["React", "Firebase", "Tailwind CSS", "Cloudinary", "Context API"],
    codeLink: "https://github.com/Santu-kumar364/XzalChat",
  },
  {
    title: "Flipkart Cloner - E-commerce Website",
    description: [
      "A responsive e-commerce clone of Flipkart built using HTML, CSS, and JavaScript. Key features include:",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/Santu-kumar364/flipkart_Cloner",
    liveLink: "https://flipkart-cloner-six.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-4 py-16 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
          Projects
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Here are some of the real-world applications I’ve built — ranging from
          scalable full-stack systems to real-time chat and frontend clones.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-left"
            >
              {/* Optional Preview Image */}
              {/* <img
                src={`https://source.unsplash.com/600x300/?technology,project,${index}`}
                alt={`${project.title} preview`}
                className="w-full h-40 object-cover rounded-md mb-4"
              /> */}

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>

              <ul className="list-disc list-inside text-gray-600 mb-4 text-sm space-y-1">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

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
                    className="flex items-center text-sm font-semibold text-gray-800 hover:text-pink-600"
                  >
                    <FaGithub className="mr-1" />
                    Code
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-gray-800 hover:text-pink-600"
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    Live
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
