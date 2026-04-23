import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";

export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`relative overflow-hidden pt-24 transition-colors duration-300 ${
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

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Let&apos;s Work Together
          </h2>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I’m always open to projects, internships, and collaborations.
          </p>
        </div>

        {/* Top cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaEnvelope />,
              title: "Email",
              value: "isfahanmol993@gmail.com",
              href: "mailto:isfahanmol993@gmail.com",
            },
            {
              icon: <FaGithub />,
              title: "GitHub",
              value: "isfahanmol231207",
              href: "https://github.com/isfahanmol231207",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Location",
              value: "Pakistan",
              href: "#",
            },
            {
              icon: <FaClock />,
              title: "Availability",
              value: "Open to opportunities",
              href: "#",
            },
          ].map((item, i) => (
            <a
              key={item.title}
              href={item.href}
              className={`rounded-2xl p-6 border transition ${
                darkMode
                  ? "bg-[#111214] border-gray-800"
                  : "bg-white border-gray-300"
              }`}
            >
              <div className="text-xl">{item.icon}</div>
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="text-sm mt-1">{item.value}</p>
            </a>
          ))}
        </div>

        {/* Main grid */}
        <div className="mt-14 grid lg:grid-cols-[1.6fr_1fr] gap-8">
          
          {/* Form */}
          <div
            className={`rounded-2xl p-8 border ${
              darkMode
                ? "bg-[#111214] border-gray-800"
                : "bg-white border-gray-300"
            }`}
          >
            <h3 className="text-2xl font-bold">Send Message</h3>

            <form className="mt-6 space-y-4">
              <input
                placeholder="Name"
                className={`w-full p-3 rounded-xl border ${
                  darkMode
                    ? "bg-[#0d0d10] border-gray-700 text-white"
                    : "bg-gray-100 border-gray-300 text-black"
                }`}
              />
              <input
                placeholder="Email"
                className={`w-full p-3 rounded-xl border ${
                  darkMode
                    ? "bg-[#0d0d10] border-gray-700 text-white"
                    : "bg-gray-100 border-gray-300 text-black"
                }`}
              />
              <textarea
                placeholder="Message"
                rows="5"
                className={`w-full p-3 rounded-xl border ${
                  darkMode
                    ? "bg-[#0d0d10] border-gray-700 text-white"
                    : "bg-gray-100 border-gray-300 text-black"
                }`}
              />

              <button
                className={`w-full py-3 rounded-xl ${
                  darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <a
              href="https://github.com/isfahanmol231207"
              className={`block p-5 rounded-xl border ${
                darkMode
                  ? "bg-[#111214] border-gray-800"
                  : "bg-white border-gray-300"
              }`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/isfah-anmol"
              className={`block p-5 rounded-xl border ${
                darkMode
                  ? "bg-[#111214] border-gray-800"
                  : "bg-white border-gray-300"
              }`}
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              className={`block p-5 rounded-xl border ${
                darkMode
                  ? "bg-[#111214] border-gray-800"
                  : "bg-white border-gray-300"
              }`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`mt-20 border-t ${
          darkMode
            ? "border-gray-800 bg-[#0d0d10]"
            : "border-gray-300 bg-white"
        }`}
      >
        <div className="text-center py-6 text-sm">
          © 2026 Isfah Anmol
        </div>
      </footer>
    </section>
  );
}