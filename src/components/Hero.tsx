import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { IMAGES, BRAND } from "../lib/brand";
import { scrollToId } from "../lib/scroll";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Animate while the hero scrolls from top → offscreen top
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = prefersReducedMotion ? 1 : useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
  const overlay = prefersReducedMotion ? 0.45 : useTransform(scrollYProgress, [0, 0.3], [0.35, 0.6]);

  return (
    <section ref={sectionRef} id="top" className="relative h-[90vh] min-h-[640px] w-full overflow-clip">
      <motion.div
        style={{ scale, backgroundImage: `url(${IMAGES.hero})` }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {BRAND.name}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-lg md:text-xl text-zinc-200"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {BRAND.tagline}
        </motion.p>
        <div className="mt-8 flex gap-3">
          <a href={BRAND.bookingUrl} target="_blank" rel="noreferrer"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg">
            Book a Detail
          </a>
          <a href="#services" onClick={(e) => {
            e.preventDefault();
            scrollToId("services");
          }} className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10">
            View Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-xs">Scroll</span>
          <div className="mt-2 h-7 w-[1px] animate-bounce bg-white/80" />
        </div>
      </div>
    </section>
  );
}
