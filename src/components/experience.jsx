import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const timelineData = [
  {
    type: "education",
    title: "BS Artificial Intelligence",
    organization: "Air University, Islamabad",
    location: "Pakistan",
    date: "2023 - Present",
    tag: "Education",
    points: [
      "Studying software engineering with focus on programming, web development, and problem solving.",
      "Built academic and personal projects to strengthen practical development skills.",
      "Continuously improving frontend, Python, and mobile app knowledge.",
    ],
    skills: ["C++", "JavaScript", "Python", "Flutter"],
  },
  {
    type: "work",
    title: "Frontend Internship / Training",
    organization: "Developers Hub Corporation",
    location: "Pakistan",
    date: "June 2024",
    tag: "Work",
    points: [
      "Worked on responsive user interfaces and reusable frontend components.",
      "Improved understanding of HTML, CSS, JavaScript, and UI design principles.",
      "Collaborated on project structure, debugging, and implementation tasks.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    type: "project",
    title: "Project Development Journey",
    organization: "Personal Projects",
    location: "Remote",
    date: "2022 - Present",
    tag: "Projects",
    points: [
      "Built a Netflix-inspired frontend project and an e-commerce style website.",
      "Worked on Python-based forecasting and classification projects.",
      "Created portfolio and mobile app concepts to improve real-world development skills.",
    ],
    skills: ["Python", "Flask", "Flutter", "Tailwind CSS"],
  },
];

export default function Experience({ darkMode }) {
  return (
    <section
      id="experience"
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
            ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%)]"
            : "bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_30%)]"
        }`}
      />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Experience & Education
          </h2>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A timeline of my learning and development journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          
          {/* line */}
          <div
            className={`hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full ${
              darkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          />

          <div className="space-y-14">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className={`flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  
                  {/* CARD */}
                  <div className="w-full md:w-[46%]">
                    <div
                      className={`rounded-[1.8rem] p-7 shadow-xl border transition ${
                        darkMode
                          ? "bg-[#111214] border-gray-800"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      <h3 className="text-xl font-bold">{item.title}</h3>

                      <p
                        className={`mt-1 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.organization}
                      </p>

                      <div
                        className={`mt-3 text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.location} • {item.date}
                      </div>

                      <ul className="mt-4 space-y-2 text-sm">
                        {item.points.map((point) => (
                          <li key={point}>• {point}</li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-xs rounded-full ${
                              darkMode
                                ? "bg-white/5 border border-gray-700"
                                : "bg-gray-200"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}