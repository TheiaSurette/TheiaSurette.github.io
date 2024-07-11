"use client";
import { useTransform, useScroll, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollDown() {
  const { scrollYProgress } = useScroll();
  const opacityRange = [1, 0];
  const fadeStart = 0.05;
  const fadeEnd = 0.1;
  const opacity = useTransform(
    scrollYProgress,
    [fadeStart, fadeEnd],
    opacityRange
  );
  return (
    <motion.div
      style={{ opacity }}
      className="fixed left-0 bottom-52 text-muted-foreground text-lg text-center right-0 z-20 bg-background/70 w-max mx-auto p-4 rounded-lg"
    >
      <p>Select a section or scroll down to begin.</p>
      <ChevronDown className="w-8 h-8 mx-auto mt-2 animate-bounce" />
    </motion.div>
  );
}
