import { useEffect, useState } from "react";

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

    };

  }, []);

  return (

    <div
      className="
        pointer-events-none
        fixed
        z-[9999]
        h-[300px]
        w-[300px]
        rounded-full
        blur-3xl
        bg-cyan-400/10
        transition-transform
        duration-100
      "

      style={{
        left: position.x - 150,
        top: position.y - 150,
      }}
    />

  );
}

export default CursorGlow;