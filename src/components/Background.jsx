function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Background Image */}
      <img
        src="/assets/themes/tech-bg.png"
        alt="Background"
        className="
          absolute
          w-full
          h-full
          object-cover
          scale-105
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Glow */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-cyan-500/10
        via-transparent
        to-purple-500/10
      " />

      {/* Subtle Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

    </div>
  );
}

export default Background;