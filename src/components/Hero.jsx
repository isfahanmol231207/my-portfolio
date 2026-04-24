import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-[#0a0a0b] text-white"
          : "bg-[#f5f5f5] text-[#111827]"
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_20%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_20%)]"
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p
              className={`inline-block px-4 py-2 rounded-full border text-sm mb-6 ${
                darkMode
                  ? "border-gray-700 bg-white/5 text-gray-300"
                  : "border-gray-300 bg-gray-200 text-gray-700"
              }`}
            >
              Portfolio • Developer • Problem Solver
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              Hey, I&apos;m{" "}
              <span
                className={`bg-clip-text text-transparent ${
                  darkMode
                    ? "bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500"
                    : "bg-gradient-to-r from-gray-700 to-gray-900"
                }`}
              >
                Isfah Anmol
              </span>
            </h1>

            <p
              className={`mt-6 text-lg md:text-xl leading-8 max-w-2xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Aspiring software developer passionate about building modern,
              user-friendly web experiences and solving real-world problems.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className={`px-7 py-3.5 rounded-2xl font-semibold transition ${
                  darkMode
                    ? "bg-gradient-to-r from-gray-200 to-gray-400 text-black"
                    : "bg-[#111827] text-white"
                }`}
              >
                Let&apos;s Talk
              </a>

              <a
                href="https://www.linkedin.com/in/isfah-anmol"
                target="_blank"
                rel="noreferrer"
                className={`px-7 py-3.5 rounded-2xl border ${
                  darkMode
                    ? "border-gray-600 bg-white/5 text-gray-100"
                    : "border-gray-300 bg-white text-gray-800"
                }`}
              >
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                download
                className={`px-7 py-3.5 rounded-2xl border ${
                  darkMode
                    ? "border-gray-600 bg-white/5 text-gray-100"
                    : "border-gray-300 bg-white text-gray-800"
                }`}
              >
                Resume
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-10 flex gap-4 justify-center lg:justify-start">

              {/* GitHub */}
              <a
                href="https://github.com/isfahanmol231207"
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition hover:scale-110 ${
                  darkMode
                    ? "border-gray-700 bg-white/5 text-gray-200 hover:bg-white hover:text-black"
                    : "border-gray-300 bg-white text-gray-800 hover:bg-black hover:text-white"
                }`}
              >
                <FaGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/isfah-anmol"
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition hover:scale-110 ${
                  darkMode
                    ? "border-gray-700 bg-white/5 text-gray-200 hover:bg-white hover:text-black"
                    : "border-gray-300 bg-white text-gray-800 hover:bg-black hover:text-white"
                }`}
              >
                <FaLinkedin size={20} />
              </a>

              {/* Email */}
              <a
                href="#contact"
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition hover:scale-110 ${
                  darkMode
                    ? "border-gray-700 bg-white/5 text-gray-200 hover:bg-white hover:text-black"
                    : "border-gray-300 bg-white text-gray-800 hover:bg-black hover:text-white"
                }`}
              >
                <HiOutlineMail size={20} />
              </a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className={`absolute -inset-4 blur-2xl rounded-[2rem] ${
                  darkMode
                    ? "bg-gradient-to-tr from-gray-700/20 to-white/10"
                    : "bg-gradient-to-tr from-gray-300/40 to-gray-200/20"
                }`}
              />

              <div
                className={`relative backdrop-blur-xl rounded-[2rem] p-4 shadow-2xl ${
                  darkMode
                    ? "bg-white/5 border border-gray-700"
                    : "bg-white border border-gray-300"
                }`}
              >
                <img
                  src={profile}
                  alt="profile"
                  className="w-[320px] h-[420px] object-cover rounded-[1.5rem]"
                />

                <div className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl bg-[#111214]/90 border border-gray-700 text-gray-100">
                  Frontend Developer
                </div>

                <div className="absolute -top-5 -right-5 px-4 py-3 rounded-2xl bg-[#111214]/90 border border-gray-700 text-gray-200">
                  Available
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}