import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const certificateSections = {

  internships: [
    {
      title: "AI & Cloud Foundations Internship",

      issuer:
        "AICTE - EduSkills + IBM",

      image:
        "/assets/certificates/internships/ai-cloud-ibm.png",
    },

    {
      title: "Data Science & AI Internship",

      issuer:
        "AICTE - EduSkills",

      image:
        "/assets/certificates/internships/ds-ai-eduskills.png",
    },

    {
      title: "Google Android Developer Program",

      issuer:
        "Edunet Foundation + Google",

      image:
        "/assets/certificates/internships/google-android.png",
    },

    {
      title: "MERN Stack Internship",

      issuer:
        "Edunet Foundation",

      image:
        "/assets/certificates/internships/mern-edunet.png",
    },
  ],

  courses: [
    {
      title: "Foundations of Artificial Intelligence",

      issuer:
        "IBM",

      image:
        "/assets/certificates/courses/ibm-ai.png",
    },

    {
      title: "Python Essentials 1",

      issuer:
        "Cisco",

      image:
        "/assets/certificates/courses/cisco-python.png",
    },

    {
      title: "ELITE Java Certification",

      issuer:
        "NPTEL",

      image:
        "/assets/certificates/courses/nptel-java.png",
    },

    {
      title: "AFE Certification",

      issuer:
        "AFE",

      image:
        "/assets/certificates/courses/afe.png",
    },
  ],

  hackathons: [
    {
      title: "Coding Club Participation",

      issuer:
        "Coding Club",

      image:
        "/assets/certificates/hackathons/coding-club.png",
    },

    {
      title: "GUVI HCL Participation",

      issuer:
        "GUVI - HCL",

      image:
        "/assets/certificates/hackathons/guvi-hcl.png",
    },

    {
      title: "Naukri Campus Participation",

      issuer:
        "Naukri",

      image:
        "/assets/certificates/hackathons/naukri.png",
    },

    {
      title: "Prajwalan Participation",

      issuer:
        "Prajwalan",

      image:
        "/assets/certificates/hackathons/prajwalan.png",
    },

    {
      title: "Viksit Bharat Participation",

      issuer:
        "Viksit Bharat",

      image:
        "/assets/certificates/hackathons/viksit.png",
    },
  ],

};

function Certifications() {

  const [activeTab, setActiveTab] =
    useState("internships");

  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  const tabs = [
    {
      id: "internships",
      label: "Internships",
    },

    {
      id: "courses",
      label: "Courses",
    },

    {
      id: "hackathons",
      label: "Hackathons & Participations",
    },
  ];

  return (

    <section
      id="certifications"
      className="
        relative
        z-10
        py-24
        text-white
        overflow-hidden
      "
    >

      <div className="px-6 md:px-16">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-4xl
            md:text-6xl
            font-bold
            mb-12
          "
        >
          Certifications
        </motion.h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-14">

          {tabs.map((tab) => (

            <button
              key={tab.id}

              onClick={() =>
                setActiveTab(tab.id)
              }

              className={`
                px-6
                py-3
                rounded-2xl
                border
                backdrop-blur-md
                transition
                duration-300

                ${
                  activeTab === tab.id
                    ? "bg-cyan-400/20 border-cyan-300 text-cyan-300"
                    : "bg-white/5 border-white/10 hover:border-cyan-300/30"
                }
              `}
            >
              {tab.label}
            </button>

          ))}

        </div>

      </div>

      {/* Animated Active Section */}
      <div className="overflow-hidden">

        <AnimatePresence mode="wait">

          <motion.div
            key={activeTab}

            initial={{
              opacity: 0,
              x: 40,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              x: -40,
            }}

            transition={{
              duration: 0.35,
            }}

            className="
              flex
              gap-6
              overflow-x-auto
              px-6
              md:px-16
              pb-6
              scrollbar-hide
            "
          >

            {certificateSections[activeTab].map(
              (cert, index) => (

                <motion.div
                  key={index}

                  onClick={() =>
                    setSelectedCertificate(cert)
                  }

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}

                  whileHover={{
                    y: -6,
                  }}

                  className="
                    cursor-pointer
                    min-w-[260px]
                    md:min-w-[300px]
                    max-w-[300px]
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
                    flex-shrink-0
                  "
                >

                  {/* Image */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="
                      w-full
                      h-[180px]
                      md:h-[220px]
                      object-contain
                      bg-black/20
                    "
                  />

                  {/* Content */}
                  <div className="p-5">

                    <h2
                      className="
                        text-lg
                        md:text-xl
                        font-semibold
                        text-cyan-300
                      "
                    >
                      {cert.title}
                    </h2>

                    <p
                      className="
                        mt-2
                        text-sm
                        md:text-base
                        text-gray-200
                      "
                    >
                      Issued by {cert.issuer}
                    </p>

                  </div>

                </motion.div>

              )
            )}

          </motion.div>

        </AnimatePresence>

      </div>

      {/* Popup Modal */}
      <AnimatePresence>

        {selectedCertificate && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

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
              setSelectedCertificate(null)
            }
          >

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.8,
                opacity: 0,
              }}

              transition={{
                duration: 0.3,
              }}

              className="
                relative
                max-w-4xl
                w-full
                rounded-3xl
                overflow-hidden
                border
                border-cyan-300/20
                bg-black/40
                backdrop-blur-md
                shadow-2xl
              "

              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* Close */}
              <button
                onClick={() =>
                  setSelectedCertificate(null)
                }

                className="
                  absolute
                  top-4
                  right-4
                  z-10
                  w-10
                  h-10
                  rounded-full
                  bg-black/40
                  text-white
                  hover:bg-cyan-300/20
                  transition
                "
              >
                ✕
              </button>

              {/* Certificate */}
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="
                  w-full
                  max-h-[80vh]
                  object-contain
                  bg-black/20
                "
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default Certifications;