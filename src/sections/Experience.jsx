import { motion } from "framer-motion";

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "EduSkills",
    duration: "Jan 2026 - Mar 2026",
    points: [
      "Developed a full-stack web application using the MERN stack and REST APIs.",
      "Connected frontend and backend systems with efficient API integration.",
      "Improved database query performance reducing response time by approximately 15%.",
      "Structured backend logic into reusable modules for maintainability.",
      "Implemented validation and error handling for improved reliability.",
    ],
  },

  {
    role: "Data Science & AI Intern",
    company: "Edunet Foundation",
    duration: "Jul 2025 - Aug 2025",
    points: [
      "Successfully completed a national-level AI/ML internship under AICTE–Edunet Foundation.",
      "Built and optimized 3+ machine learning models using Python.",
      "Improved preprocessing efficiency and analytical visualization workflows.",
      "Performed exploratory data analysis on 1,000+ structured data records.",
      "Worked on end-to-end ML pipelines including preprocessing, training, validation, and evaluation.",
    ],
  },

  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code & NSOC",
    duration: "2026 - Present",
    points: [
      "Contributed to open-source repositories through collaborative GitHub workflows.",
      "Built and integrated an AI assistant chat feature into an existing application.",
      "Improved project documentation and onboarding structure for contributors.",
      "Worked with pull requests, issue tracking, and collaborative development practices.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 md:px-16 py-24 text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-20"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-cyan-300/20 pl-10">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-16 relative"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[49px] top-2 w-5 h-5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50"></div>

              {/* Card */}
              <div className="backdrop-blur-md bg-white/10 border border-cyan-300/10 rounded-3xl p-8 shadow-2xl hover:border-cyan-300/30 transition duration-300">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>
                    <h3 className="text-3xl font-semibold text-cyan-300">
                      {exp.role}
                    </h3>

                    <p className="text-xl text-gray-200 mt-2">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-cyan-100 text-lg">
                    {exp.duration}
                  </div>

                </div>

                {/* Points */}
                <ul className="mt-8 space-y-4">

                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-200 text-lg leading-relaxed flex gap-3"
                    >
                      <span className="text-cyan-300">•</span>
                      {point}
                    </li>
                  ))}

                </ul>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;