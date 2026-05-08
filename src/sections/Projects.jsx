import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Irrigation System",

    description:
      "AI-powered irrigation optimization system using predictive analytics and environmental monitoring.",

    image: "/assets/projects/smart-irrigation.png",

    tech: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
    ],

    github:
      "https://github.com/Chandrika987/Smart_Irrigation",

    live: "https://smartirrigation-vkwxvp488mdduptgmjrhbt.streamlit.app/",

    highlight: "15–25% estimated water optimization",
  },

  {
    title: "Fake News Detector",

    description:
      "Machine learning system for identifying misinformation using NLP preprocessing and classification pipelines.",

    image: "/assets/projects/fake-news.png",

    tech: [
      "Python",
      "NLP",
      "Scikit-learn",
      "Pandas",
    ],

    github:
      "https://github.com/Chandrika987/Fake-News-Detector",

    live: "",

    highlight: "80%+ classification accuracy",
  },

  {
    title: "ConsentLens",

    description:
      "Privacy-focused web platform with authentication, API integration, and intelligent text analysis workflows.",

    image: "/assets/projects/consentlens.png",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],

    github: "",

    live: "",

    highlight: "Secure full-stack architecture",
  },

  {
  title: "Campus Navigator",

  description:
    "Frontend-based campus navigation application using interactive maps and route visualization for easier campus exploration.",

  image: "/assets/projects/campus-navigator.png",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Leaflet.js",
    "OpenStreetMap",
  ],

  github: "https://github.com/Chandrika987/campus-navigator",

  live: "https://campus-navigator-deploy.vercel.app/",

  highlight: "Interactive map-based navigation system",
},
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen px-6 md:px-16 py-32 text-white"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-20"
        >
          Projects
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -8,
              }}

              className="
                group
                flex
                flex-col
                h-full
                backdrop-blur-md
                bg-white/10
                border
                border-cyan-300/10
                rounded-3xl
                overflow-hidden
                shadow-2xl
                hover:border-cyan-300/30
                transition
                duration-300
              "
            >

              {/* Project Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">

                {/* Title */}
                <h2 className="text-2xl font-semibold text-cyan-300">
                  {project.title}
                </h2>

                {/* Highlight */}
                <p className="mt-3 text-cyan-100">
                  {project.highlight}
                </p>

                {/* Description */}
                <p className="mt-5 text-gray-200 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((item, i) => (
                    <div
                      key={i}
                      className="
                        px-4
                        py-2
                        rounded-2xl
                        bg-cyan-400/10
                        border
                        border-cyan-300/20
                        text-cyan-100
                        text-sm
                      "
                    >
                      {item}
                    </div>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto pt-10">

                  {/* GitHub Button */}
                  {project.github ? (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-6
                        py-3
                        rounded-2xl
                        bg-cyan-400/20
                        border
                        border-cyan-300
                        hover:bg-cyan-300/30
                        transition
                      "
                    >
                      GitHub
                    </a>

                  ) : (

                    <button
                      className="
                        px-6
                        py-3
                        rounded-2xl
                        bg-cyan-400/10
                        border
                        border-cyan-300/20
                        opacity-50
                        cursor-not-allowed
                      "
                    >
                      GitHub
                    </button>

                  )}

                  {/* Live Demo Button */}
                  {project.live ? (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-6
                        py-3
                        rounded-2xl
                        border
                        border-white/20
                        hover:bg-white/10
                        transition
                      "
                    >
                      Live Demo
                    </a>

                  ) : (

                    <button
                      className="
                        px-6
                        py-3
                        rounded-2xl
                        border
                        border-white/10
                        opacity-50
                        cursor-not-allowed
                      "
                    >
                      Live Demo
                    </button>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;