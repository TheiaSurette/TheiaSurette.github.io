"use client";

import React from "react";

export default function HomeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  return (
    <div
      onMouseMove={(e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
      className="h-screen relative"
    >
      {children}
      <div
        className="absolute top-0 left-0 h-96 w-96 bg-gradient-radial from-white/10 to-transparent rounded-full pointer-events-none blur-[20px] mix-blend-difference  opacity-50"
        style={{
          transform: `translate(${mousePosition.x - 384 / 2}px, ${
            mousePosition.y - 384 / 2
          }px)`,
        }}
      />
    </div>
  );
}
