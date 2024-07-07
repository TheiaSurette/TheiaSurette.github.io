import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container py-12">
      <div className="font-semibold text-8xl text-center">
        <span className="bg-[length:200%] animate-bg-pan bg-gradient-to-r from-blue-500 via-pink-700 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Hi! I&apos;m Theia.
        </span>
      </div>
      <h1>Home</h1>
      <ModeToggle />
    </div>
  );
}
