import { useState } from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/image.png";
import {
  FaGithub,
  FaLaptopCode,
  FaChartLine,
  FaCode,
  FaMobileAlt,
  FaUserCircle,
  FaHeartbeat,
} from "react-icons/fa";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "python", label: "Python / AI" },
  { id: "mobile", label: "Mobile Apps" },
];

const projects = [
  {
    title: "Portfolio Website",
    category: "frontend",
    type: "Personal Portfolio",
    description:
      "Modern portfolio showcasing skills and projects with clean UI.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/isfahanmol231207",
    image: portfolioImg,
    icon: <FaUserCircle />,
  },
  {
    title: "MyFlix (Netflix Clone)",
    category: "frontend",
    type: "Frontend App",
    description: "Netflix-style UI clone with engaging interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/isfahanmol231207/MyFlex",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    icon: <FaLaptopCode />,
  },
  {
    title: "E-commerce Website",
    category: "frontend",
    type: "Web App",
    description: "Shopping platform with authentication and payments.",
    tech: ["HTML", "CSS", "Java"],
    github: "https://github.com/isfahanmol231207/PriceOi",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    icon: <FaCode />,
  },
  {
    title: "Player Stats Forecasting",
    category: "python",
    type: "AI / ML",
    description: "Predicts player stats using ARIMA model.",
    tech: ["Python", "Flask", "ARIMA"],
    github: "https://github.com/isfahanmol231207/CricketForecastApp",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    icon: <FaChartLine />,
  },
  {
    title: "Skin Disease Classifier",
    category: "python",
    type: "Computer Vision",
    description: "Classifies skin diseases using ML.",
    tech: ["Python"],
    github: "https://github.com/isfahanmol231207",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    icon: <FaChartLine />,
  },
  {
    title: "Weather App",
    category: "mobile",
    type: "Mobile App",
    description: "Real-time weather app built in Flutter.",
    tech: ["Flutter"],
    github: "https://github.com/isfahanmol231207",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    icon: <FaMobileAlt />,
  },
  {
    title: "BMI Calculator",
    category: "mobile",
    type: "Utility App",
    description: "Simple BMI calculator mobile app.",
    tech: ["Flutter"],
    github: "https://github.com/isfahanmol231207",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370",
    icon: <FaHeartbeat />,
  },
];

export default function Projects({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-24 px-6 md:px-10 lg:px-16 transition-colors duration-300 ${
        darkMode
          ? "bg-[#0a0a0b] text-white"
          : "bg-[#f5f5f5] text-[#111827]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Projects
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            My Work
          </h2>
        </div>

        {/* FILTER BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition ${
                activeFilter === filter.id
                  ? darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : darkMode
                  ? "bg-white/5 border border-gray-700 text-gray-200"
                  : "bg-white border border-gray-300 text-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-[1.8rem] overflow-hidden border transition ${
                darkMode
                  ? "bg-[#111214] border-gray-800 hover:border-gray-600"
                  : "bg-white border-gray-300 hover:border-gray-500"
              }`}
            >
              <img
                src={project.image}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p
                  className={`mt-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-3 py-1 rounded-full ${
                        darkMode
                          ? "bg-white/5 border border-gray-700"
                          : "bg-gray-200"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className={`mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl ${
                    darkMode
                      ? "bg-white/5 border border-gray-700"
                      : "bg-gray-200"
                  }`}
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}