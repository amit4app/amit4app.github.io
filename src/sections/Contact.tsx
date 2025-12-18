import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-gray-300">Feel free to reach out for jobs, collaborations, or quick questions.</p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl shadow-xl"
        >
          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-10 text-center">

            {/* Address */}
            <div>
              <div className="text-4xl flex justify-center mb-4 text-fuchsia-400">
                <FiMapPin />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">Gurugram, Haryana, India</p>
            </div>

            {/* Phone */}
            <div>
              <div className="text-4xl flex justify-center mb-4 text-green-400">
                <FiPhone />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">
                <a href="tel:+918287163139" className="hover:text-white">+91-8287163139</a>
              </p>
            </div>

            {/* Email */}
            <div>
              <div className="text-4xl flex justify-center mb-4 text-blue-400">
                <FiMail />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">
                <a href="mailto:amit4app@gmail.com" className="hover:text-white">amit4app@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.2947!2d77.0907!3d28.4928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjjCsDI5JzM0LjEiTiA3N8KwMDUnMjcuMSJF!5e0!3m2!1sen!2sin!4v1711799076941"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-3xl mt-10">
            <a
              href="https://linkedin.com/in/amitabh-sharma-6b56a1120"
              target="_blank"
              className="text-blue-400 hover:text-white transition"
            >
              <FiLinkedin />
            </a>

            <a
              href="https://github.com/amit4app"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
            >
              <FiGithub />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
