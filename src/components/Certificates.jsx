import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Software Engineer",
    issuer: "Hackerrank",
    date: "2025",
    link: "https://www.hackerrank.com/certificates/adfeeded7890",
  },
  {
    title: "Nestlé Leaders League - Genesis",
    issuer: "Nestlé",
    date: "2025",
    link: "https://unstop.com/certificate-preview/b204fc42-b544-44ce-bc9d-41b5293d5d60",
  },
  {
    title: "AlgoQuiz - DSA MCQ Faceoff",
    issuer: "Unstop",
    date: "2025",
    link: "https://unstop.com/certificate-preview/27f0cb4d-368a-43c5-8ac1-088c7421303d",
  },
  {
    title: "Naukri Campus Young Turks",
    issuer: "Naukri Campus",
    date: "2024",
    link: "https://www.naukri.com/campus/certificates/young_turks_round_1_participation/v0/6708011c5abe131f423e8261?utm_source=certificate&utm_medium=copy&utm_campaign=6708011c5abe131f423e8261",
  },
  {
    title: "Bizquezt # 19 Challenge",
    issuer: "Naukri Campus",
    date: "2024",
    link: "https://www.naukri.com/campus/certificates/participation/v0/67fe09db6c1aa41e163b4e5d?utm_source=certificate&utm_medium=copy&utm_campaign=67fe09db6c1aa41e163b4e5d",
  },
  {
    title: "Fundamentals of HTML ",
    issuer: "Coding Ninjas",
    date: "2025",
    link: "https://files.codingninjas.in/certi_image697404423774480186c95d8f39e7c98d483c4e.jpg",
  },
  {
    title: "Fundamentals of CSS ",
    issuer: "Coding Ninjas",
    date: "2025",
    link: "https://www.naukri.com/code360/guided-paths/fundamentals-of-css",
  },
  {
    title: "SQL (Advanced) ",
    issuer: "HackerRank",
    date: "2025",
    link: "https://www.hackerrank.com/certificates/2c1370607baa",
  },
  {
    title: "JAVA",
    issuer: "HackerRank",
    date: "2024",
    link: "https://www.hackerrank.com/certificates/23bd12774ed4",
  },
  {
    title: "React",
    issuer: "HackerRank",
    date: "2025",
    link: "https://www.hackerrank.com/certificates/6ee2d7f1ed05",
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "2025",
    link: "https://www.hackerrank.com/certificates/fc1e432053b6",
  },
  {
    title: "Samsung Galaxy AI Treasure Hunt",
    issuer: "Unstop",
    date: "2025",
    link: "https://unstop.com/certificate-preview/23200d84-e32f-49c6-bd17-6a355e2b2a15",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 px-6 bg-gray-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
          Certifications
        </h2>
        <p className="text-gray-700 mb-10 text-lg">
          Recognitions and certifications that validate my skills and learning journey.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
              <p className="text-sm text-gray-600">
                {cert.issuer} • {cert.date}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pink-600 font-medium inline-flex items-center mt-2 hover:underline"
                >
                  View Certificate <FaExternalLinkAlt className="ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
