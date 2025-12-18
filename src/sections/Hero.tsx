import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full text-white flex flex-col px-6 overflow-hidden"
    >
      {/* BACKGROUND IMAGE — RIGHT ALIGNED */}
      <div
        className="absolute inset-0 bg-cover bg-[position:80%_center] scale-100 brightness-110"
        style={{
          backgroundImage: `url("/assets/home/home_dp.png")`,
        }}
      ></div>

      {/* LEFT GRADIENT (for readable text) */}
      <div
        className="absolute inset-0 bg-gradient-to-r
          from-black/60
          via-black/30
          to-transparent
        "
      ></div>

      {/* BOTTOM GRADIENT (subtle fade effect) */}
      <div
        className="absolute inset-0 bg-gradient-to-t
          from-black/70
          via-transparent
          to-transparent
        "
      ></div>

      {/* CONTENT — LEFT + mt-auto TO PUSH DOWN */}
      <div className="relative z-10 max-w-3xl space-y-5 mt-auto pb-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 drop-shadow-xl"
        >
          <p className="text-lg text-gray-300">
            Hello <span className="text-fuchsia-400">.</span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I’m <span className="text-fuchsia-400">Amitabh Sharma</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
            Mobile & Web Developer
          </h2>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-fuchsia-500 hover:bg-fuchsia-600 transition font-semibold"
            >
              Got a project?
            </a>

            <a
              href="/assets/resume/AMITABH_SHARMA.pdf"
              download
              className="px-6 py-3 rounded-md border border-gray-300 hover:bg-white hover:text-black transition font-semibold"
            >
              My resume
            </a>
          </div>
        </motion.div>

      </div>

      {/* TECH STACK STRIP */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute bottom-5 w-full flex justify-center z-10"
      >

      </motion.div>
    </section>
  );
}
