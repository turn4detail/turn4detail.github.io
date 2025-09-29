import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Each item has an image and a caption
const GALLERY_ITEMS = [
  {
    src: "/gallery/gallery-1.jpg",
    caption: "FK8 Honda Civic Type R — paint correction & 2-year ceramic coat",
  },
  {
    src: "/gallery/gallery-3.jpg",
    caption: "Toyota Venza received the full detail service ",
  },
  {
    src: "/gallery/gallery-2.jpg",
    caption: "Brand new Tesla Model 3 — polish + 2-year ceramic coat",
  },
  {
    src: "/gallery/gallery-5.jpg",
    caption: "BMW M440i stock wheels never looked better",
  },
  {
    src: "/gallery/gallery-4.jpg",
    caption: "Toyota Highlander — exterior decon + sealant",
  },
  {
    src: "/gallery/gallery-8.jpg",
    caption: "Nissan Altima got its first detail",
  },
  {
    src: "/gallery/gallery-7.jpg",
    caption: "Volkswagen GTI getting the spa treatment",
  },
  {
    src: "/gallery/gallery-6.jpg",
    caption: "Toyota GR86 interior reset",
  },
  {
    src: "/gallery/gallery-9.jpg",
    caption: "Mustang 5.0 GT got a paint correction to make that paint POP",
  },
];

export default function Gallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="gallery" className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">Recent Work</h2>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 md:columns-3">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15, margin: "-80px" }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: i * (prefersReducedMotion ? 0 : 0.06),
              }}
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/5 aspect-[4/5]"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
