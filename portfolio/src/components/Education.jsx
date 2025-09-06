import { education } from "../data/constants";
import { motion } from "framer-motion";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="education"
      className="bg-transparent text-white py-10 px-2 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        >
          My Academic Journey
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          A glimpse into the academic journey that shaped my technical expertise and fueled a passion for continuous learning.
        </motion.p>

        {/* Timeline */}
        <motion.div
          className="relative mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Gradient line */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-1 h-full bg-primary-color rounded-full shadow-[0_0_12px_rgba(201,32,133,0.9)]"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={`flex items-center w-full my-8 flex-row-reverse md:flex-row ${
                index % 2 !== 0 && "md:flex-row-reverse"
              }`}
              variants={itemVariants}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2 p-4">
                <div className="glass p-6 rounded-2xl border border-gray-700 shadow-lg relative overflow-hidden">
                  <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-primary-color">
                    {edu.degree}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-gray-200 mt-1">
                    {edu.school}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {edu.date}
                  </p>
                  <p className="hidden md:block text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
                    {edu.desc}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2">
                    <span className="font-medium text-white">Grade:</span> {edu.grade}
                  </p>
                </div>
              </div>

              {/* Circle Glow */}
              <div className="relative z-10 w-10 h-10 flex-shrink-0 rounded-full
                bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]
                flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gray-950"></div>
              </div>

              <div className="hidden md:block w-1/2 p-4"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;