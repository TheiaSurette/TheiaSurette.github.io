import { ModeToggle } from "@/components/mode-toggle";
import { IntroText } from "@/components/intro-text";
import { NavMenu } from "@/components/nav-menu";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";
import { Graphic } from "@/components/graphic";
import { ChevronDown, Scroll } from "lucide-react";
import { ScrollDown } from "@/components/scroll-down";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";

const totalHeight = 500;

export default function Home() {
  return (
    <div style={{ height: `${totalHeight}vh` }}>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full">
        <IntroText />
        <Graphic />
        <NavMenu />
        <ScrollDown />
        <AboutMe />

        <div className="fixed left-0 w-full bottom-12 container right-0 z-20">
          <ModeToggle />
        </div>
      </div>
      {navItems.map((item, index) => (
        <div
          key={index}
          id={item.href}
          style={{ top: `${(index * totalHeight) / navItems.length}vh` }}
          className="absolute invisible"
        ></div>
      ))}
    </div>
  );
}
