"use client";
import { Button } from "./ui/button";
import { useTransform, useScroll, motion } from "framer-motion";

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const opacityRange = [0, 1, 1, 0];
  const fadePoints = [0.45, 0.5, 0.6, 0.75];
  const opacity = useTransform(scrollYProgress, fadePoints, opacityRange);
  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-0 left-[50%] -translate-x-[50%] w-full z-20 container h-screen bg-red-500/30"
    >
      <h1 className="text-5xl text-foreground">Experience</h1>
    </motion.div>
  );
}
