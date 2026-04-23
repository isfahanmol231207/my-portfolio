import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaTools,
  FaLaptopCode,
  FaBrain,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlutter,
  SiJupyter,
  SiCplusplus,
} from "react-icons/si";

const filters = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
  { id: "tools", label: "Tools" },
  { id: "soft", label: "Soft Skills" },
];

const skills = [
  { name: "C++", category: "languages", icon: <SiCplusplus size={34} /> },
  { name: "HTML", category: "frontend", icon: <FaHtml5 size={34} /> },
  { name: "CSS", category: "frontend", icon: <FaCss3Alt size={34} /> },
  { name: "JavaScript", category: "languages", icon: <FaJs size={34} /> },
  { name: "React", category: "frontend", icon: <FaReact size={34} /> },
  { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss size={34} /> },
  { name: "Python", category: "languages", icon: <FaPython size={34} /> },
  { name: "Flutter", category: "mobile", icon: <SiFlutter size={34} /> },
  { name: "Jupyter", category: "tools", icon: <SiJupyter size={34} /> },
  { name: "Git/GitHub", category: "tools", icon: <FaGitAlt size={34} /> },
  { name: "Figma", category: "tools", icon: <FaFigma size={34} /> },
  { name: "Problem Solving", category: "soft", icon: <FaBrain size={34} /> },
  { name: "Teamwork", category: "soft", icon: <FaLaptopCode size={34} /> },
  { name: "Adaptability", category: "soft", icon: <FaTools size={34} /> },
  { name: "Clean Code", category: "soft", icon: <FaCode size={34} /> },
];

export default function Skills({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section
      id="skills"
      className={`relative overflow-hidden py-24 px-6 md:px-10 lg:px-16 transition-colors duration-300 ${
        darkMode
          ? "bg-[#09090b] text-white"
          : "bg-[#f5f5f5] text-[#111827]"
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_30%)]"
            : "bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_30%)]"
        }`}
      />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Skills
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Skills & Expertise
          </h2>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A mix of technical, development, and problem-solving skills.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
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

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-[1.8rem] p-6 flex flex-col items-center text-center transition ${
                darkMode
                  ? "bg-[#111214] border border-gray-800 hover:border-gray-600"
                  : "bg-white border border-gray-300 hover:border-gray-500"
              }`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl ${
                  darkMode
                    ? "bg-white/5 text-gray-100"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {skill.icon}
              </div>

              <h3 className="mt-4 font-semibold">{skill.name}</h3>

              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}