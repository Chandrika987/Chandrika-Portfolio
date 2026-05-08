import { motion } from "framer-motion";
import { useState } from "react";

const badges = [
  {
    title: "GSSoC Contributor",
    image: "/assets/badges/contributor_gssoc'26.png",
  },

{
    title: "NSOC Contributor",
    image: "/assets/badges/NSOC.png",
  },
 

  {
    title: "AI Agents Track",
    image: "/assets/badges/AI-agents-track_gssoc'26.png",
  },


   {
    title: "Tech Contributor",
    image: "/assets/badges/tech-contributor.png",
  },
  {
    title: "Open Source Track",
    image: "/assets/badges/open-source-track.png",
  },

  
];

function BadgeScroller() {

  const [selectedBadge, setSelectedBadge] =
    useState(null);

  return (

    <section
    id="opensource"
      className="
        relative
        scroll-mt-40
        py-16
        overflow-hidden
      "
    >

      {/* Glow Background */}
      <div
        className="
          absolute
          inset-0
          bg-cyan-400/5
          blur-3xl
        "
      />

      {/* Heading */}
      <div className="text-center mb-14 px-6 relative z-10">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Open Source & Community
        </h2>

        <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
          Open source contributions, technical events,
          and community involvement.
        </p>

      </div>

      {/* Badges Row */}
      <div
        className="
          relative
          z-10
          flex
          flex-wrap
          justify-center
          gap-8
          px-6
          md:px-16
        "
      >

        {badges.map((badge, index) => (

          <motion.div
            key={index}

            onClick={() =>
              setSelectedBadge(badge)
            }

            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.05,
              y: -8,
            }}

            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}

            className="
              cursor-pointer
              group
              perspective-[1200px]
            "
          >

            {/* Card */}
            <div
              className="
                w-[140px]
                h-[140px]
                md:w-[180px]
                md:h-[180px]

                rounded-3xl
                backdrop-blur-md
                bg-white/10

                border
                border-cyan-300/20

                shadow-[0_0_40px_rgba(34,211,238,0.12)]

                flex
                items-center
                justify-center

                transition
                duration-500

                group-hover:border-cyan-300/50
              "
            >

              <img
                src={badge.image}
                alt={badge.title}

                className="
                  w-[70px]
                  h-[70px]

                  md:w-[100px]
                  md:h-[100px]

                  object-contain
                "
              />

            </div>

            {/* Title */}
            <p
              className="
                text-center
                text-gray-200
                mt-4
                text-sm
                md:text-base
              "
            >
              {badge.title}
            </p>

          </motion.div>

        ))}

      </div>

      {/* POPUP */}
      {selectedBadge && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-sm
            px-4
          "

          onClick={() =>
            setSelectedBadge(null)
          }
        >

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.3,
            }}

            className="
              relative
              max-w-xl
              w-full

              rounded-3xl
              overflow-hidden

              border
              border-cyan-300/20

              bg-black/40
              backdrop-blur-md

              shadow-2xl

              p-10
              text-center
            "

            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* Close */}
            <button
              onClick={() =>
                setSelectedBadge(null)
              }

              className="
                absolute
                top-4
                right-4

                w-10
                h-10

                rounded-full

                bg-black/40

                hover:bg-cyan-300/20

                transition
              "
            >
              ✕
            </button>

            {/* Badge */}
            <img
              src={selectedBadge.image}
              alt={selectedBadge.title}

              className="
                w-[180px]
                h-[180px]
                object-contain
                mx-auto
              "
            />

            {/* Title */}
            <h3 className="text-3xl font-bold text-cyan-300 mt-8">
              {selectedBadge.title}
            </h3>

          </motion.div>

        </div>

      )}

    </section>
  );
}

export default BadgeScroller;