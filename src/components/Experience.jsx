import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "GUVI (HCL Initiative)",
    duration: "June 2025 – Sep 2025",
    logo: "https://www.guvi.in/assets/CPYoUJqK-guvilogo-hcl.webp", // Replace with your logo if needed
    points: [
      "Developed SecureMyDocs, a secure document vault featuring client-side AES-256 encryption and per-file OTP authentication using React, Spring Boot, and MySQL.",
       "Built a responsive Weather App with real-time data fetching and optimized rendering, improving performance by 30% using React and WeatherAPI." , 
       "Implemented JWT-based authentication and RESTful APIs, and participated in Agile sprints with weekly mentor-led code reviews.",
    ],
    tech: ["React", "Spring Boot", "Tailwind CSS", "Cloudinary", "JWT", "MySQL"],
  },
  {
    role: "Campus Ambassador",
    company: "Internshala",
    duration: "Apr 2025 – May 2025",
    logo: "https://internshala.com/static/images/internshala_og_image.jpg", // Replace if preferred
    points: [
      "Promoted Internshala internships and courses across IIT Patna.",
      "Led peer-focused marketing campaigns and boosted student engagement.",
    ],
    tech: ["Marketing", "Promotion", "Strategy"],
     
  },
  {
    role: "Event Coordinator",
    company: "Anwesha, IIT Patna",
    duration: "Jan 2024 – Feb 2025",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQF8LKSoK-Ie9w/company-logo_200_200/company-logo_200_200/0/1631303873558?e=1756339200&v=beta&t=p0U7XHGr_FlugNLxDawlDuhbL2Nqmq2dD244Y3Eu49o", // Replace with official logo if available
    points: [
      "Managed logistics for IIT Patna’s annual technocultural fest (5,000+ attendees).",
      "Led a team of 50+ volunteers and assisted in drama scriptwriting.",
    ],
    tech: ["Event Management", "Leadership", "Script Writing"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#f8f9fa] py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 text-center mb-10">
          Experience
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="h-20 w-25 object-contain mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 text-sm italic">
                    {exp.company}
                  </p>
                </div>
                <span className="ml-auto text-sm text-gray-500 italic">
                  {exp.duration}
                </span>
              </div>

              <ul className="text-gray-700 mb-4 space-y-2 text-sm">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <FaArrowCircleRight className="text-blue-600 mt-1 mr-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {exp.certificateLink && (
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-3 py-1 text-sm rounded mr-2"
                >
                  Certificate
                </a>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-300 text-sm text-gray-800 px-2 py-1 rounded font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
