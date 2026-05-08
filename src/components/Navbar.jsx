function Navbar() {

  return (

    <nav
      className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        w-[92%]
        max-w-6xl
      "
    >

      <div
        className="
          backdrop-blur-xl
          bg-black/30
          border
          border-cyan-300/20
          rounded-3xl
          px-6
          md:px-8
          py-4
          shadow-2xl
        "
      >

        <div className="flex items-center justify-between">

          {/* Logo */}
          <h1
            className="
              text-cyan-300
              text-2xl
              font-bold
              tracking-wide
            "
          >
            CP
          </h1>

          {/* Nav Links */}
          <div
            className="
              flex
              items-center
              gap-4
              md:gap-8
              text-white
              text-sm
              md:text-base
            "
          >

            <a
              href="/#home"

              className="
                hover:text-cyan-300
                transition
                duration-300
              "
            >
              Home
            </a>

            <a
              href="/#about"

              className="
                hover:text-cyan-300
                transition
                duration-300
              "
            >
              About
            </a>

            <a
              href="/#skills"

              className="
                hover:text-cyan-300
                transition
                duration-300
              "
            >
              Skills
            </a>

            <a
              href="/#experience"

              className="
                hover:text-cyan-300
                transition
                duration-300
              "
            >
              Experience
            </a>

            <a
              href="/#projects"

              className="
                hover:text-cyan-300
                transition
                duration-300
              "
            >
              Projects
            </a>

            <a
              href="/#certifications"

              className="
                hover:text-cyan-300
                transition
                duration-300
              "
            >
              Certifications
            </a>

            <a
              href="/#opensource"

              className="
                hover:text-cyan-300
                transition
                duration-300
              "
            >
              Open Source
            </a>
            <a
  href="/#contact"

  className="
    hover:text-cyan-300
    transition
    duration-300
  "
>
  Contact
</a>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;