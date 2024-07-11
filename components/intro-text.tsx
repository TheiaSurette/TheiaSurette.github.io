"use client";
import { useTransform, useScroll, motion } from "framer-motion";

export function IntroText() {
  const { scrollYProgress } = useScroll();
  const opacityRange = [1, 0];
  const fadeStart = 0.1;
  const fadeEnd = 0.2;
  const opacity = useTransform(
    scrollYProgress,
    [fadeStart, fadeEnd],
    opacityRange
  );
  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-52 left-0 right-0 font-semibold text-8xl text-center z-20"
    >
      <span className="bg-[length:200%] animate-bg-pan bg-gradient-to-r from-blue-500 via-pink-700 to-blue-500 bg-clip-text text-transparent drop-shadow-lg ">
        Hi! I&apos;m Theia.
      </span>
    </motion.div>
  );
}
