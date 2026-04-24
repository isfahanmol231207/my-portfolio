import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLightbulb, FaChartLine } from "react-icons/fa";

const highlights = [
  {
    icon: <FaCode size={22} />,
    title: "Clean Frontend Work",
    text: "I enjoy building responsive and visually appealing interfaces with a strong focus on readability and structure.",
  },
  {
    icon: <FaLaptopCode size={22} />,
    title: "Practical Projects",
    text: "I learn best by creating real projects, experimenting with features, and improving them step by step.",
  },
  {
    icon: <FaChartLine size={22} />,
    title: "Data Interest",
    text: "I also explore predictive and analytical projects using Python, notebooks, and forecasting ideas.",
  },
  {
    icon: <FaLightbulb size={22} />,
    title: "Growth Mindset",
    text: "I’m always improving my skills, learning new tools, and turning ideas into better digital experiences.",
  },
];

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`relative py-24 px-6 md:px-10 lg:px-16 transition-colors duration-300 ${
        darkMode
          ? "bg-[#0a0a0b] text-white"
          : "bg-[#f5f5f5] text-[#111827]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            About
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            About{" "}
            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Me
            </span>
          </h2>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg leading-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I’m Isfah Anmol, an aspiring developer who enjoys creating modern web
            interfaces and working on hands-on technical projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
          
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`h-full rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col border ${
              darkMode
                ? "border-gray-800 bg-[#111214]"
                : "border-gray-300 bg-white"
            }`}
          >
            <h3
              className={`text-3xl font-bold ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Who I Am
            </h3>

            <p
              className={`mt-6 leading-8 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
               I build modern digital experiences across web and mobile platforms,
  focusing on clean design, performance, and usability. My work combines
  strong frontend development with practical implementation of real-world ideas.
            </p>

            <p
              className={`mt-5 leading-8 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
             Alongside application development, I explore AI and data-driven projects,
  including forecasting and predictive models. My GitHub showcases a mix of
  frontend applications, clones, and intelligent systems, reflecting my
  commitment to continuous learning and problem-solving.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Creative", "Consistent", "Curious", "Improving"].map((item) => (
                <div
                  key={item}
                  className={`rounded-2xl px-4 py-5 text-center font-medium border ${
                    darkMode
                      ? "border-gray-700 bg-white/5 text-gray-200"
                      : "border-gray-300 bg-gray-100 text-gray-800"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <a
                href="#contact"
                className={`px-7 py-3.5 rounded-2xl font-semibold ${
                  darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={`h-full rounded-[1.7rem] p-7 flex flex-col border transition ${
                  darkMode
                    ? "border-gray-800 bg-[#111214] hover:border-gray-600"
                    : "border-gray-300 bg-white hover:border-gray-500"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    darkMode
                      ? "bg-white/5 text-gray-200"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {item.icon}
                </div>

                <h4
                  className={`mt-5 text-xl font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h4>

                <p
                  className={`mt-4 leading-7 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}