import { motion } from "framer-motion";

function Hero() {

  return (

    <section
      id="home"

      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        md:px-16
        pt-32
        md:pt-40
        pb-20
        text-white
        overflow-hidden
      "
    >

      <div
        className="
          w-full
          max-w-7xl

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-16
        "
      >

        {/* LEFT CONTENT */}
        <div
          className="
            flex-1
            max-w-3xl
          "
        >

          {/* TOP LABEL */}
          <motion.p

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
            }}

            className="
              text-cyan-300
              uppercase
              tracking-[0.35em]
              text-xs
              md:text-sm
              mb-6
            "
          >
            SOFTWARE ENGINEERING • AI • OPEN SOURCE
          </motion.p>

          {/* NAME */}
          <motion.h1

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            className="
              text-5xl
              sm:text-6xl
              md:text-8xl

              font-bold
              leading-tight
            "
          >
            Chandrika <br />
            Pala
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 0.4,
              duration: 0.8,
            }}

            className="
              mt-8

              text-base
              sm:text-lg
              md:text-2xl

              text-cyan-100

              max-w-3xl

              leading-relaxed
            "
          >
            Building scalable web applications,
            AI-powered systems, and impactful
            open-source solutions using modern
            technologies and clean architecture.
          </motion.p>

          {/* BUTTONS */}
          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.8,
              duration: 0.8,
            }}

            className="
              mt-12

              flex
              flex-wrap

              gap-5
            "
          >

            {/* PROJECTS */}
            <a
              href="/#projects"

              className="
                px-8
                py-4

                rounded-2xl

                bg-cyan-400/20

                border
                border-cyan-300

                backdrop-blur-md

                hover:bg-cyan-300/30

                hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]

                transition
                duration-300
              "
            >
              View Projects
            </a>

            {/* RESUME */}
            <a
              href="/resume.pdf"

              target="_blank"
              rel="noopener noreferrer"

              className="
                px-8
                py-4

                rounded-2xl

                border
                border-white/30

                backdrop-blur-md

                hover:bg-white/10

                hover:border-cyan-300/40

                transition
                duration-300
              "
            >
              View Resume
            </a>

            {/* CONTACT */}
            <a
              href="/#contact"

              className="
                px-8
                py-4

                rounded-2xl

                border
                border-white/30

                backdrop-blur-md

                hover:bg-white/10

                hover:border-cyan-300/40

                transition
                duration-300
              "
            >
              Contact
            </a>

          </motion.div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div

          initial={{
            opacity: 0,
            x: 60,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="
            flex-1
            flex
            justify-center
            items-center
            relative

            md:-mt-10
          "
        >

          {/* OUTER GLOW */}
          <div
            className="
              absolute

              w-[340px]
              h-[340px]

              md:w-[500px]
              md:h-[500px]

              bg-cyan-400/10

              blur-3xl

              rounded-full
            "
          />

          {/* SECONDARY GLOW */}
          <div
            className="
              absolute

              w-[280px]
              h-[280px]

              md:w-[420px]
              md:h-[420px]

              border
              border-cyan-300/10

              rounded-full
            "
          />

          {/* IMAGE WRAPPER */}
          <div
            className="
              relative
              rounded-[2.5rem]
              overflow-hidden
            "
          >

            {/* EDGE FADE */}
            <div
              className="
                absolute
                inset-0
                z-20
                pointer-events-none

                bg-gradient-to-b
                from-transparent
                via-transparent
                to-[#050816]/40
              "
            />

            {/* PROFILE IMAGE */}
            <img
              src="/assets/profile.png"

              alt="Developer Illustration"

              className="
                relative
                z-10

                w-[280px]
                sm:w-[330px]
                md:w-[420px]

                object-cover

                rounded-[2.5rem]

                shadow-[0_0_60px_rgba(34,211,238,0.16)]

                opacity-100

                drop-shadow-[0_0_35px_rgba(34,211,238,0.18)]

                hover:scale-[1.02]

                transition
                duration-500
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;