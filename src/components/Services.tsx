import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "../lib/brand";

type Service = {
  title: string;
  desc: string;
  badge?: string;
  link?: string;
};

const SERVICES: Service[] = [
  {
    title: "Full Detail",
    desc: "Comprehensive inside-and-out refresh. Safe hand wash, paint decontamination, interior vacuum, and protection to restore that showroom feel.",
    badge: "Mobile Available",
    link: "https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF/h3AfyoEqUTri59FdT6NR?jobType=field&productServiceId=HlKO2js0IDV5vifUU8p7&sku=eLaue4nkzdRsHt4HsCHD",
  },
  {
    title: "Gloss Enhancement",
    desc: "Single-stage polish designed to boost depth and shine. Perfect for newer vehicles or those needing a quick revival before a show or sale.",
    badge: "Studio Only",
    link: "https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF/3exUHN6M9WeqeVEBMExG?jobType=field&productServiceId=86DDNMMWcuVVEbzAmim4&sku=kzNKZZ3Vc8zNxnDiPCZR",
  },
  {
    title: "Paint Correction",
    desc: "Multi-step machine polishing to remove swirls, scratches, and oxidation. Restores clarity and gloss, creating the ideal base for protection.",
    badge: "Studio Only",
    link: "https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF/3exUHN6M9WeqeVEBMExG?jobType=shop&productServiceId=gmiwFNONGUGzj0ReFzff&sku=EetkSA0q7oQRVWRHuxfo",
  },
  {
    title: "Ceramic Coatings",
    desc: "Nano-ceramic layer that bonds to paint for 1–5 years of protection. Delivers incredible gloss, hydrophobic beading, and easier maintenance.",
    badge: "Studio Only",
    link: "https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF/z2m84tPKbl8tb2qVvD0m?jobType=shop",
  },
];

export default function Services() {
  const prefersReducedMotion = useReducedMotion();
  const baseDelay = prefersReducedMotion ? 0 : 0.08;

  return (
    <>
      {/* Services Section */}
      <section id="services" className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Signature Services</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Purpose-built packages for daily drivers and garage queens alike.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => {
              const href = s.link ?? BRAND.bookingUrl;
              return (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * baseDelay }}
                  className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5 shadow-lg"
                >
                  {s.badge && (
                    <div className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-200">
                      {s.badge}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>

                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Book ${s.title}`}
                    className="mt-4 inline-block rounded-2xl bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
                  >
                    Book Now
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-semibold md:text-3xl"
          >
            Don’t see what you’re looking for?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-zinc-400 max-w-2xl mx-auto"
          >
            We offer a full catalog of detailing and protection services. Browse the complete menu and
            book directly through our online system.
          </motion.p>

          <motion.a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 inline-block rounded-2xl bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
          >
            View Full Catalog →
          </motion.a>
        </div>
      </section>
    </>
  );
}
