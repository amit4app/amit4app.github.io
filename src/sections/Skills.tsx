import { motion } from "framer-motion";
import { SiReact, SiKotlin, SiAndroid, SiIonic, SiTypescript, SiFirebase, SiNodedotjs, SiGit } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React Native", icon: <SiReact className="text-blue-400" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-purple-400" /> },
    { name: "Android", icon: <SiAndroid className="text-green-400" /> },
    { name: "Ionic + Vue", icon: <SiIonic className="text-blue-300" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Git + CI/CD", icon: <SiGit className="text-red-400" /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-300 mb-12"
        >
          Technologies I work with to craft modern, scalable applications.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
                         shadow hover:shadow-fuchsia-500/30 hover:scale-105 transition cursor-pointer text-center"
            >
              <div className="text-4xl mb-3 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
