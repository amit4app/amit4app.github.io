import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
        >
          Mobile, Web & Backend Developer with 12+ years of experience delivering 
          scalable, high-performance applications across iOS, Android, and the Web using 
          React Native, Kotlin, Vue/Ionic, JavaScript/TypeScript, and Node.js.
        </motion.p>

        {/* LAYOUT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SECTION — TEXT (mobile: below image | desktop: left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 self-start order-2 md:order-1"
          >

            {/* WHO I AM */}
            <div>
              <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">
                Who I Am
              </h3>

              <p className="text-gray-300 leading-relaxed">
                I specialize in building smooth, scalable and user-focused applications using 
                <span className="text-fuchsia-400 font-medium">
                  {" "}React Native, Kotlin, Android, iOS, and Vue/Ionic{" "}
                </span>
                along with modern JavaScript/TypeScript.
              </p>

              <p className="text-gray-300 leading-relaxed mt-4">
                On the backend, I develop secure and maintainable APIs using
                <span className="text-fuchsia-400 font-medium">
                  {" "}Node.js, Express.js, Firebase, and REST standards.
                </span>
              </p>

              <p className="text-gray-300 leading-relaxed mt-4">
                I handle complete development lifecycles — architecture, feature 
                development, performance optimization, deployments, CI/CD pipelines, 
                and App Store / Play Store publishing.
              </p>
            </div>

            {/* WHY CHOOSE ME */}
            <div>
              <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">
                Why Choose Me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "12+ Years Experience",
                  "Full-Stack Development",
                  "iOS & Android Deployments",
                  "CI/CD Automation",
                  "Clean Architecture",
                  "Performance-Driven",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="p-4 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 text-center"
                  >
                    <p className="text-gray-200 text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EXPERIENCE TIMELINE */}
            <div>
              <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">
                Experience Timeline
              </h3>

              <div className="space-y-4 border-l border-white/20 pl-4">
                <div>
                  <p className="text-fuchsia-400 font-medium">2012 – 2015</p>
                  <p className="text-gray-300">Mobile App Developer</p>
                  <p className="text-gray-400 text-sm">
                    Built consumer applications with focus on UI/UX and API integrations.
                  </p>
                </div>

                <div>
                  <p className="text-fuchsia-400 font-medium">2015 – 2019</p>
                  <p className="text-gray-300">Senior Android Developer</p>
                  <p className="text-gray-400 text-sm">
                    Led feature development and introduced modern Android/Kotlin practices.
                  </p>
                </div>

                <div>
                  <p className="text-fuchsia-400 font-medium">2019 – Present</p>
                  <p className="text-gray-300">Lead Mobile / Full-Stack Developer</p>
                  <p className="text-gray-400 text-sm">
                    Architecting and delivering end-to-end mobile + web solutions 
                    including backend, CI/CD, and production deployments.
                  </p>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { num: "12+", label: "Years Exp" },
                { num: "50+", label: "Projects" },
                { num: "25+", label: "Deployments" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="p-3 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10"
                >
                  <p className="text-2xl font-bold text-fuchsia-400">{stat.num}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* RESUME BUTTON */}
            <a
              href="/assets/resume/AMITABH_SHARMA.pdf"
              download
              className="inline-block px-6 py-3 mt-4 rounded-lg bg-gradient-to-r 
              from-purple-500 to-fuchsia-500 hover:opacity-90 transition font-semibold"
            >
              Download Resume →
            </a>
          </motion.div>

          {/* RIGHT SECTION — PROFILE (mobile: top | desktop: right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center self-start order-1 md:order-2"
          >
            <div
              className="w-60 rounded-xl overflow-hidden shadow-xl 
              bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 p-[3px]"
            >
              <div className="bg-black rounded-xl p-4">
                <img
                  src="/assets/home/amitabh_dp.jpeg"
                  alt="Amitabh Sharma"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
