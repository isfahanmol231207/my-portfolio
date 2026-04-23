import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const navItems = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-xl ${
        darkMode
          ? "border-gray-800 bg-[#0a0a0b]/80"
          : "border-gray-300 bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
          Isfah <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Dev</span>
        </h1>

        <ul className={`hidden md:flex items-center gap-8 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={darkMode ? "hover:text-white transition" : "hover:text-black transition"}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden md:inline-block px-5 py-2.5 rounded-xl font-medium hover:scale-105 transition ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Get In Touch
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-11 h-11 rounded-xl flex items-center justify-center border transition ${
              darkMode
                ? "bg-white/5 border-gray-700 text-gray-200 hover:bg-white/10"
                : "bg-black/5 border-gray-300 text-gray-800 hover:bg-black/10"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}