"use client";
import { Button } from "./ui/button";
import { useTransform, useScroll, motion } from "framer-motion";

export default function AboutMe() {
  const { scrollYProgress } = useScroll();
  const opacityRange = [0, 1, 1, 0];
  const fadePoints = [0.2, 0.25, 0.35, 0.4];
  const opacity = useTransform(scrollYProgress, fadePoints, opacityRange);
  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-0 left-[50%] -translate-x-[50%] w-full z-20 container h-screen"
    >
      <div className="flex flex-col items-center w-full justify-center gap-2 px-4 h-full">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="bg-blue-500 w-64 h-64 ">photo placeholder</div>
          <div className="rounded bg-card/90 w-full max-w-xl text-card-foreground border border-border px-6 py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc
            nec nisl ultricies ultricies. Nullam nec risus nec nunc ultricies
            auctor in at nunc. Nullam nec risus nec nunc ultricies auctor in at
            nunc. Nullam nec risus nec nunc ultricies auctor in at nunc. Nullam
            nec risus nec nunc ultricies auctor in at nunc. Nullam nec risus nec
          </div>
        </div>
        <div className="flex w-full justify-center md:my-8 gap-4 flex-wrap">
          <Button>Download Resume</Button>
          <Button>LinkedIn</Button>
          <Button>GitHub</Button>
        </div>
      </div>
    </motion.div>
  );
}
