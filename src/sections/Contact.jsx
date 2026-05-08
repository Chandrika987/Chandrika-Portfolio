import { motion } from "framer-motion";

function Contact() {

  return (

    <section
      id="contact"

      className="
        relative
        py-24
        px-6
        md:px-16
        text-white
        overflow-hidden
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-cyan-400/5
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{ once: true }}

          className="text-center"
        >

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
            "
          >
            Let’s Build Something Great
          </h2>

          <p
            className="
              mt-6
              text-gray-300
              max-w-2xl
              mx-auto
              text-lg
              leading-relaxed
            "
          >
            Open to internships, collaborations,
            open-source opportunities, and impactful
            software engineering roles.
          </p>

        </motion.div>

        {/* Contact Icons */}
        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{ once: true }}

          className="
            flex
            flex-wrap
            justify-center
            items-center

            gap-12
            mt-20
          "
        >

          {/* Email */}
          <a
            href="mailto:chandrikapala04@gmail.com"

            className="
              flex
              flex-col
              items-center
              gap-4

              opacity-80
              hover:opacity-100

              transition
              duration-300

              hover:scale-110
            "
          >

            <img
              src="https://skillicons.dev/icons?i=gmail"

              alt="Email"

              className="
                w-14
                h-14

                hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]

                transition
                duration-300
              "
            />

            <span className="text-gray-300 text-sm">
              Email
            </span>

          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chandrikapala/"

            target="_blank"
            rel="noopener noreferrer"

            className="
              flex
              flex-col
              items-center
              gap-4

              opacity-80
              hover:opacity-100

              transition
              duration-300

              hover:scale-110
            "
          >

            <img
              src="https://skillicons.dev/icons?i=linkedin"

              alt="LinkedIn"

              className="
                w-14
                h-14

                hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]

                transition
                duration-300
              "
            />

            <span className="text-gray-300 text-sm">
              LinkedIn
            </span>

          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Chandrika987"

            target="_blank"
            rel="noopener noreferrer"

            className="
              flex
              flex-col
              items-center
              gap-4

              opacity-80
              hover:opacity-100

              transition
              duration-300

              hover:scale-110
            "
          >

            <img
              src="https://skillicons.dev/icons?i=github"

              alt="GitHub"

              className="
                w-14
                h-14

                hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]

                transition
                duration-300
              "
            />

            <span className="text-gray-300 text-sm">
              GitHub
            </span>

          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Chandrika987/"

            target="_blank"
            rel="noopener noreferrer"

            className="
              flex
              flex-col
              items-center
              gap-4

              opacity-80
              hover:opacity-100

              transition
              duration-300

              hover:scale-110
            "
          >

            <img
              src="https://cdn.simpleicons.org/leetcode"

              alt="LeetCode"

              className="
                w-14
                h-14

                hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]

                transition
                duration-300
              "
            />

            <span className="text-gray-300 text-sm">
              LeetCode
            </span>

          </a>

        </motion.div>

        {/* Resume Button */}
        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
            duration: 0.8,
          }}

          viewport={{ once: true }}

          className="
            flex
            justify-center
            mt-16
          "
        >

          <a
            href="/resume.pdf"

            download

            className="
              px-10
              py-4

              rounded-2xl

              bg-cyan-400/20

              border
              border-cyan-300

              text-cyan-200

              backdrop-blur-md

              hover:bg-cyan-300/30

              hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]

              transition
              duration-300

              text-lg
              font-medium
            "
          >
            Download Resume
          </a>

        </motion.div>

        {/* Footer */}
        <div
          className="
            mt-24
            pt-8

            border-t
            border-white/10

            text-center
            text-gray-400
            text-sm
          "
        >

          © 2026 Chandrika Pala.
          Built with React, Tailwind CSS, and Framer Motion.

        </div>

      </div>

    </section>
  );
}

export default Contact;