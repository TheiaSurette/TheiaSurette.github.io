"use client";
import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export function NavMenu() {
  const [current, setCurrent] = useState(0);

  //onScroll event listener
  const onScroll = () => {
    // based on scroll position, update current
    let found = false;
    for (let i = navItems.length - 1; i >= 0; i--) {
      const element = document.querySelector(`#${navItems[i].href}`);
      if (element) {
        const top = element.getBoundingClientRect().top;
        // Adjust the threshold value as needed. You might want to make this dynamic or based on the viewport size.
        const threshold = 0; // Example threshold, adjust based on your needs
        if (top <= threshold) {
          setCurrent(i);
          found = true;
          break; // Stop the loop once the first matching element is found
        }
      }
    }

    if (!found) {
      setCurrent(0); // Default to 0 if no elements meet the condition
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden md:block md:fixed left-0 w-full top-12 right-0 space-x-2 z-50">
        <div className="flex gap-2 justify-center flex-wrap">
          {navItems.map((item, index) => (
            <a
              key={index}
              className={cn(
                "hover:bg-accent rounded-md px-3 py-2",
                current === index && "bg-accent"
              )}
              href={"#" + item.href}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="fixed top-4 left-4 z-50"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="pt-12" side="top">
            <SheetDescription>
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <SheetClose asChild key={index}>
                    <a
                      className={cn(
                        "hover:bg-accent text-foreground rounded-md px-3 py-2",
                        current === index && "bg-accent"
                      )}
                      href={"#" + item.href}
                    >
                      {item.title}
                    </a>
                  </SheetClose>
                ))}
              </div>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
