import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [trails, setTrails] = useState(Array.from({ length: 6 }).map(() => ({ x: -100, y: -100 })));

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let trailPositions = Array.from({ length: 6 }).map(() => ({ x: -100, y: -100 }));

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });

      const target = e.target;
      const isInteractive = target.closest("button, a, input, textarea, select, [role='button'], .magnetic-hover");
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      setRingPosition({ x: ringX, y: ringY });

      let prevX = mouseX;
      let prevY = mouseY;
      trailPositions = trailPositions.map((p, index) => {
        const nextX = p.x + (prevX - p.x) * (0.3 - index * 0.03);
        const nextY = p.y + (prevY - p.y) * (0.3 - index * 0.03);
        prevX = p.x;
        prevY = p.y;
        return { x: nextX, y: nextY };
      });
      setTrails(trailPositions);

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      {/* Trail particles */}
      {trails.map((trail, index) => (
        <div
          key={index}
          className="absolute rounded-full pointer-events-none bg-[#a855f7] transition-opacity duration-300"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            width: `${8 - index}px`,
            height: `${8 - index}px`,
            opacity: 0.6 - index * 0.1,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Lagging ring */}
      <div
        className={`absolute rounded-full pointer-events-none transition-all duration-300 ${
          isHovered
            ? "w-[70px] h-[35px] bg-gradient-to-r from-[#7B2FFF] to-[#00d4ff] opacity-50 blur-[1px]"
            : "w-[40px] h-[40px] border border-purple-400/50 bg-transparent opacity-80"
        }`}
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Core glowing white dot */}
      <div
        className="absolute w-[12px] h-[12px] bg-white rounded-full pointer-events-none shadow-[0_0_15px_#fff,0_0_30px_#a855f7]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
