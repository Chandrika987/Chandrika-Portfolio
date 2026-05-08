import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-16 py-20 text-white">
      
      <div className="max-w-6xl w-full">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16"
        >
          About Me
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-5">
              My Journey
            </h3>

            <p className="text-lg text-gray-200 leading-relaxed">
              I’m a Computer Science student passionate about building immersive
              digital experiences and intelligent systems. My interests span
              frontend development, AI/ML, open source contribution, and
              creating visually engaging interfaces that combine technology with creativity.
            </p>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              I enjoy transforming ideas into interactive products while continuously
              learning modern technologies and solving real-world problems through code.
            </p>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="backdrop-blur-md bg-cyan-400/10 border border-cyan-300/20 rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-cyan-300">9.02</h3>
              <p className="mt-3 text-gray-200">Current CGPA</p>
            </div>

            <div className="backdrop-blur-md bg-cyan-400/10 border border-cyan-300/20 rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-cyan-300">100+</h3>
              <p className="mt-3 text-gray-200">DSA Problems</p>
            </div>

            <div className="backdrop-blur-md bg-cyan-400/10 border border-cyan-300/20 rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-cyan-300">3+</h3>
              <p className="mt-3 text-gray-200">Projects Built</p>
            </div>

            <div className="backdrop-blur-md bg-cyan-400/10 border border-cyan-300/20 rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-cyan-300">2+</h3>
              <p className="mt-3 text-gray-200">Open Source Programs</p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;