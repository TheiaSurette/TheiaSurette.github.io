"use client";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useLayoutEffect, use, useState } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import * as THREE from "three";
import { useTheme } from "next-themes";

const Icosahedron = ({ color }: { color: string }) => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p, color }: { p: number; color: string }) => {
  const ref = useRef<THREE.Object3D>(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({ numStars = 100 }) {
  const theme = useTheme();
  const [color, setColor] = useState("");

  useLayoutEffect(() => {
    setColor(theme.resolvedTheme === "dark" ? "white" : "black");
  }, [theme]);

  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 0.3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0001
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star color={color} p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Icosahedron color={color} />
      {stars}
      <Stars />
    </>
  );
}

export function Graphic() {
  return (
    <Canvas className="z-10">
      <Scene />
    </Canvas>
  );
}
