"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/components/hooks/useActiveSection.js";
import { scrollToSection } from "@/components/lib/scrollToSection.js";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export type NavigationItem = {
  title: string;
  href: string;
  isActive?: boolean;
};

const navigationData: NavigationItem[] = [
  { title: "Inicio", href: "#top" },
  { title: "Inglés", href: "#ingles" },
  { title: "¿Por qué nos?", href: "#nos" },
  { title: "Localización", href: "#localizacion" },
  { title: "Preguntas", href: "#preguntas" },
];

const sectionHrefs = navigationData.map((item) => item.href);

const Logo = () => (
  <a
    href="/"
    className="group flex w-fit min-w-0 shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90 sm:gap-3"
  >
    <img
      src="/logo-lenar.png"
      alt=""
      width={60}
      height={60}
      className="size-11 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:size-[52px] lg:size-[60px]"
    />
    <span className="flex min-w-0 flex-col leading-none">
      <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1B2C61]/65 uppercase sm:text-[10px]">
        Academia
      </span>
      <span className="mt-1 flex items-baseline gap-1.5">
        <span className="font-display truncate text-xl font-bold tracking-tight text-[#1B2C61] sm:text-[22px] lg:text-[26px]">
          Lenar
        </span>
        <span
          aria-hidden="true"
          className="size-1.5 shrink-0 rounded-full bg-[#E59892] transition-transform duration-300 group-hover:scale-125"
        />
      </span>
    </span>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const activeHref = useActiveSection(sectionHrefs);

  useEffect(() => {
    if (isOpen || !pendingHref) return;
    const timer = setTimeout(() => {
      scrollToSection(pendingHref);
      setPendingHref(null);
    }, 250);
    return () => clearTimeout(timer);
  }, [isOpen, pendingHref]);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <header className="inset-x-0 top-0 z-50 w-full fixed border border-white/20 bg-white/10 p-2 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Logo />

        <nav
          aria-label="Main"
          className="hidden items-center gap-8 justify-self-center lg:flex"
        >
          {navigationData.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.href);
              }}
              aria-current={item.href === activeHref ? "page" : undefined}
              className={cn(
                "relative rounded-sm py-1 text-sm font-medium text-slate-500 outline-none transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-blue-500 after:transition-transform after:duration-300 hover:text-blue-500 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-ring/50",
                item.href === activeHref && "text-blue-500 after:scale-x-100",
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Open menu"
                    className="size-10 cursor-pointer rounded-full border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                showCloseButton={false}
                className="flex flex-col gap-6 overflow-auto border-l border-slate-200 bg-white p-5 text-slate-900"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                <SheetHeader className="flex-row items-center justify-between p-0">
                  <Logo />
                  <SheetClose
                    aria-label="Close menu"
                    className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-colors hover:bg-slate-100"
                  >
                    <X className="size-4" />
                  </SheetClose>
                </SheetHeader>

                <nav aria-label="Mobile" className="flex flex-col gap-1">
                  {navigationData.map((item) => (
                    <SheetClose
                      key={item.title}
                      nativeButton={false}
                      render={
                        <a
                          href={item.href}
                          onClick={(event) => {
                            event.preventDefault();
                            setPendingHref(item.href);
                            setIsOpen(false);
                          }}
                          aria-current={item.href === activeHref ? "page" : undefined}
                          className={cn(
                            "rounded-full px-3 py-2 text-base transition-colors hover:bg-sky-400/10 hover:text-blue-500",
                            item.href === activeHref
                              ? "bg-sky-400/10 font-medium text-blue-500"
                              : "text-slate-700",
                          )}
                        >
                          {item.title}
                        </a>
                      }
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
