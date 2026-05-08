import { motion } from "framer-motion";

const skillCategories = [

  {
    title: "Programming Languages",

    skills: [

      {
        name: "Python",
        logo: "https://cdn.simpleicons.org/python",
      },

      {
        name: "Java",
        logo: "https://cdn.simpleicons.org/coffeescript",
      },

      {
        name: "JavaScript",
        logo: "https://cdn.simpleicons.org/javascript",
      },

    ],
  },

  {
    title: "Web Development",

    skills: [

      {
        name: "React.js",
        logo: "https://cdn.simpleicons.org/react",
      },

      {
        name: "HTML5",
        logo: "https://cdn.simpleicons.org/html5",
      },

      {
        name: "CSS3",
        logo: "https://cdn.simpleicons.org/css/1572B6",
      },

      {
        name: "Tailwind CSS",
        logo: "https://cdn.simpleicons.org/tailwindcss",
      },

      {
        name: "Node.js",
        logo: "https://cdn.simpleicons.org/nodedotjs",
      },

      {
        name: "Express.js",
        logo: "https://cdn.simpleicons.org/express/white",
      },

      {
        name: "MongoDB",
        logo: "https://cdn.simpleicons.org/mongodb",
      },

    ],
  },

  {
    title: "AI / ML",

    skills: [

      {
        name: "Machine Learning",
        logo: "https://cdn.simpleicons.org/tensorflow",
      },

      {
        name: "Scikit-learn",
        logo: "https://cdn.simpleicons.org/scikitlearn",
      },

      {
        name: "Pandas",
        logo: "https://cdn.simpleicons.org/pandas",
      },

      {
        name: "NLP",
        logo: "https://cdn.simpleicons.org/huggingface",
      },

      {
        name: "EDA",
        logo: "https://cdn.simpleicons.org/anaconda",
      },

      {
        name: "Data Preprocessing",
        logo: "https://cdn.simpleicons.org/python",
      },

      {
        name: "Model Training",
        logo: "https://cdn.simpleicons.org/tensorflow",
      },

    ],
  },

  {
    title: "Tools & Practices",

    skills: [

      {
        name: "Git",
        logo: "https://cdn.simpleicons.org/git",
      },

      {
        name: "GitHub",
        logo: "https://cdn.simpleicons.org/github/white",
      },

      {
        name: "VS Code",
        logo: "https://skillicons.dev/icons?i=vscode",
      },

      {
        name: "Version Control",
        logo: "https://cdn.simpleicons.org/git",
      },

      {
        name: "Problem Solving",
        logo: "https://cdn.simpleicons.org/codeforces",
      },

      {
        name: "REST APIs",
        logo: "https://cdn.simpleicons.org/postman",
      },

    ],
  },

];

function Skills() {

  return (

    <section
      id="skills"

      className="
        min-h-screen
        px-6
        md:px-16
        py-20
        text-white
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2

          initial={{
            opacity: 0,
            y: 60,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          className="
            text-5xl
            font-bold
            mb-16
          "
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              
className="
  relative

  backdrop-blur-xl
  bg-white/10

  border
  border-cyan-300/10

  rounded-[2rem]

  p-6

  shadow-[0_0_40px_rgba(34,211,238,0.08)]

  overflow-hidden

  transition
  duration-500

  hover:border-cyan-300/40
  hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]
"
            >

              {/* Category */}
              <h3
                className="
                  text-2xl
                  font-semibold
                  text-cyan-300
                  mb-6
                "
              >
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}

                    className="
  flex
  items-center
  gap-3

  px-4
  py-2

  rounded-xl

  bg-cyan-400/10

  border
  border-cyan-300/10

  text-cyan-100

  backdrop-blur-md

  transition
  duration-300

  hover:bg-cyan-300/20
  hover:border-cyan-300/40
  hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
"
                  >

                    {/* Logo */}
                    <img
                      src={skill.logo}
                      alt={skill.name}

                      className="
                        w-4
                        h-4
                        object-contain
                      "
                    />

                    {/* Skill Name */}
                    <span className="text-sm">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;