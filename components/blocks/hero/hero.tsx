"use client";

import { ArrowRight, Play } from "lucide-react";
import { Fragment, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const InteractiveButton = ({
  href,
  onClick,
  children,
  variant = "default",
  className,
  fillClassName,
  textClassName,
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
  fillClassName: string;
  textClassName: string;
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <Button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      variant={variant}
      nativeButton={!href}
      render={href ? <a href={href} /> : undefined}
      onClick={onClick}
      className={cn(
        "group relative h-12 cursor-pointer overflow-hidden rounded-full px-6 text-base font-semibold transition-all duration-300",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute size-10 scale-0 rounded-full transition-transform duration-700 ease-in-out group-hover:scale-1500",
          fillClassName,
        )}
        style={{ left: pos.x - 20, top: pos.y - 20 }}
      />
      <span
        className={cn(
          "pointer-events-none relative z-10 flex items-center gap-2 transition-colors duration-500",
          textClassName,
        )}
      >
        {children}
      </span>
    </Button>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const LETTER_COLORS = [
  "text-blue-500",
  "text-blue-500",
  "text-blue-500",
  "text-red-500",
  "text-red-500",
  "text-orange-400",
  "text-orange-400",
  "text-teal-400",
  "text-sky-400",
];

const Spark = () => (
  <svg viewBox="0 0 48 48" fill="none" className="size-full">
    <path
      d="M24 8L32 20M6 34L22 38"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

const Dashes = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={cn("absolute size-6 sm:size-8 lg:size-10", className)}
  >
    <path
      d="M6 19L17 11M20 28L31 20"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

const CurvedText = ({
  text,
  tilt,
  lift,
  peak = 0.5,
  colors,
  className,
}: {
  text: string;
  tilt: number;
  lift: number;
  peak?: number;
  colors?: string[];
  className?: string;
}) => {
  const last = text.length - 1;
  const mid = last * peak;
  const span = Math.max(mid, last - mid);
  let colorIndex = 0;

  let cursor = 0;
  const words = text.split(" ").map((word) => {
    const start = cursor;
    cursor += word.length + 1;
    return { word, start };
  });

  return (
    <span aria-label={text} className={cn("inline-block", className)}>
      {words.map(({ word, start }, w) => (
        <Fragment key={w}>
          {w > 0 && (
            <span aria-hidden="true" className="inline-block w-[0.25em]" />
          )}
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((char, k) => {
              const i = start + k;
              const t = (i - mid) / span;
              const rotate = t * tilt;
              const y = (t * t - 1) * lift;
              const color = colors?.[colorIndex++ % colors.length];
              return (
                <span
                  key={k}
                  aria-hidden="true"
                  className={cn("inline-block", color)}
                  style={{
                    transform: `translateY(${y}em) rotate(${rotate}deg)`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        </Fragment>
      ))}
    </span>
  );
};

export interface HeroProps {
  middleVideo?: { src: string; label: string };
  // heading: "Aprende disfrutando";
  // gradientPhrase: "habla con confianza";
  // primaryCta?: { label: string; href: string };
  // secondaryCta?: { label: string };
  videoSrc?: string;
}

export default function Hero({
  middleVideo = {
    src: "/nube-nenes.mp4",
    label: "Animated characters reading a book",
  },
//  heading = "Aprende disfrutando",
 // gradientPhrase = "habla con confianza",
//  primaryCta = { label: "Empieza a soñar", href: "#" },
 // secondaryCta = { label: "Ver vídeo" },
//  videoSrc = "https://images.shadcnspace.com/assets/video/contact-06-bg.mp4",
}: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="hero-section relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Dashes className="top-[20%] left-[11%] text-orange-400/30" />
        <Dashes className="top-[20%] right-[11%] -scale-x-100 text-sky-400/30" />
        <Dashes className="bottom-[18%] left-[12%] text-blue-500/25" />
        <Dashes className="bottom-[20%] right-[8%] -scale-x-100 text-teal-400/30" />
        {/* top left blob */}
        <svg
          viewBox="0 0 200 240"
          className="absolute top-12 -left-16 h-40 w-32 fill-current text-orange-400/10 sm:h-60 sm:w-48 lg:h-72 lg:w-56"
        >
          <path d="M0 10C60 -10 140 20 170 80C200 140 150 200 90 225C50 240 20 235 0 225Z" />
        </svg>
        {/* top right blob */}
        <svg
          viewBox="0 0 200 260"
          className="absolute top-16 -right-16 h-44 w-32 fill-current text-sky-400/10 sm:h-64 sm:w-48 lg:h-80 lg:w-56"
        >
          <path d="M200 0V240C140 270 60 230 30 160C0 90 40 20 110 5C150 -3 180 0 200 0Z" />
        </svg>
        {/* bottom left blob */}
        <svg
          viewBox="0 0 260 260"
          className="absolute bottom-0 -left-10 h-40 w-40 fill-current text-blue-500/10 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
        >
          <path d="M0 60C60 40 110 100 160 150C200 190 250 220 260 260H0Z" />
        </svg>
        {/* bottom right blob */}
        <svg
          viewBox="0 0 220 260"
          className="absolute -right-12 bottom-0 h-40 w-32 fill-current text-teal-400/10 sm:h-60 sm:w-48 lg:h-72 lg:w-56"
        >
          <path d="M220 40C150 20 70 70 40 140C20 190 30 235 40 260H220Z" />
        </svg>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-4 px-4 pt-24 pb-24 sm:gap-0 sm:px-6 sm:pt-28 sm:pb-28 lg:px-8 lg:pt-30 lg:pb-30"
      >
        <motion.h1
          variants={fadeUp}
          className="relative text-center text-4xl font-black tracking-tight text-slate-900 min-[400px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="relative inline-block">
            <span
              aria-hidden="true"
              className="absolute top-0 -left-7 hidden size-6 text-orange-400 min-[400px]:block sm:-left-8 sm:size-9 lg:-left-12 lg:size-12 xl:-left-14 xl:size-14"
            >
              <Spark />
            </span>
            <CurvedText
              text="Aprende disfrutando,"
              tilt={8}
              lift={0.1}
              peak={0.7}
              className="text-slate-900"
            />
            <span
              aria-hidden="true"
              className="absolute top-0 -right-7 hidden size-6 -scale-x-100 text-orange-400 min-[400px]:block sm:-right-8 sm:size-9 lg:-right-12 lg:size-12 xl:-right-14 xl:size-14"
            >
              <Spark />
            </span>
          </span>
          <span className="mt-1 block">
            <CurvedText
              text="habla con confianza"
              tilt={14}
              lift={0.16}
              peak={0.4}
              colors={LETTER_COLORS}
            />
          </span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-5xl"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label={middleVideo.label}
            className="h-auto w-full select-none mix-blend-multiply"
          >
            <source src={middleVideo.src} type="video/mp4" />
          </video>
        </motion.div>

        {/* <motion.div
          variants={fadeUp}
          className="flex w-full max-w-xs flex-col items-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4"
        >
          <InteractiveButton
            href={primaryCta.href}
            className="w-full border border-blue-500 bg-blue-500 hover:bg-blue-500 sm:w-auto"
            fillClassName="bg-white"
            textClassName="text-white group-hover:text-blue-500"
          >
            {primaryCta.label}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </InteractiveButton>
          <InteractiveButton
            onClick={() => setVideoOpen(true)}
            variant="outline"
            className="w-full border border-blue-500 bg-white hover:border-blue-500 hover:bg-white sm:w-auto dark:border-blue-500 dark:bg-white dark:hover:border-blue-500 dark:hover:bg-white"
            fillClassName="bg-blue-500"
            textClassName="text-blue-500 group-hover:text-white"
          >
            <Play className="size-4 fill-current" />
            {secondaryCta.label}
          </InteractiveButton>
        </motion.div> */}
      </motion.div>

      {/* <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-[calc(100%-2rem)] bg-white p-0 text-slate-900 sm:max-w-3xl" showCloseButton>
          <DialogTitle className="sr-only">{secondaryCta.label}</DialogTitle>
          <div className="aspect-video overflow-hidden rounded-xl bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="auto"
              className="size-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </DialogContent>
      </Dialog> */}
    </section>
  );
}
