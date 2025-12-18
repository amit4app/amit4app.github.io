import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-gray-300">Here are some of my mobile app projects.</p>
        </motion.div>

        {/* === CAB BOOKING === */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-fuchsia-400 mb-4">Cab Booking App</h3>
          <p className="text-gray-300 mb-6">
            A seamless cab booking application with real-time tracking, fare estimation,
            multiple payment options, and ride history. Designed for ease of use and efficiency
            for both passengers and drivers.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/assets/projects/cab-booking/cab_booking_app.png"
              alt="Cab Booking App"
              className="rounded-lg shadow-lg max-w-full"
            />
          </motion.div>
        </div>

        {/* === OTT ENTERTAINMENT APP === */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-fuchsia-400 mb-4">OTT Entertainment App</h3>
          <p className="text-gray-300 mb-6">
            A feature-rich OTT streaming app offering movies, live TV channels, personalized
            recommendations, and an intuitive interface for a premium viewing experience.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/assets/projects/ott_app/ottapp.png"
              alt="OTT App"
              className="rounded-lg shadow-lg max-w-full"
            />
          </motion.div>
        </div>

        {/* === BAKER APP === */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-fuchsia-400 mb-4">Baker App</h3>
          <p className="text-gray-300 mb-6">
            An e-commerce bakery app for ordering fresh cakes, pastries, and baked goods.
            Users can customize cakes, schedule deliveries, and make secure payments.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/assets/projects/baker_app/bakerapp.png"
              alt="Baker App"
              className="rounded-lg shadow-lg max-w-full"
            />
          </motion.div>
        </div>

        {/* === DOCTOR APP === */}
<div className="mb-16">
  <h3 className="text-3xl font-semibold text-fuchsia-400 mb-4">
    Doctor Appointment App
  </h3>

  <p className="text-gray-300 mb-6">
    A healthcare app connecting patients with doctors for online consultations,
    appointment scheduling, medical history tracking, and prescription management.
  </p>

  <div className="bg-indigo-300 rounded-xl flex flex-col md:flex-row justify-center gap-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <img
        src="/assets/projects/doctor_app/doctor_app.png"
        alt="Doctor App"
        className="rounded-lg shadow-lg max-w-full"
      />
    </motion.div>
  </div>
</div>

      </div>
    </section>
  );
}
