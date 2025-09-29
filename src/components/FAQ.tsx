import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { BRAND } from "../lib/brand";

const faqs = [
  {
    q: "Do you carry your own electricity and water?",
    a: "Yes. Our mobile unit is fully equipped with its own water and electricity supply, making it more convenient for you. We can detail your car without needing to hook into your home utilities.",
  },
  {
    q: "Why get a detail instead of a quick car wash?",
    a: "Your car is a major investment—often $20,000 or more. A $10 automatic car wash uses harsh chemicals and brushes that cause swirls, scratches, and damage to your paint over time. Professional detailing protects and preserves your car’s finish.",
  },
  {
    q: "What are the benefits of a ceramic coating?",
    a: "Ceramic coatings create a durable, long-lasting protective layer on your vehicle’s paint. Benefits include enhanced gloss, hydrophobic water-beading, easier cleaning, and resistance to UV damage, oxidation, and light scratches.",
  },
  {
    q: "Why choose Turn 4 Detail over other shops?",
    a: "We are enthusiast-owned, use studio-grade equipment and lighting, and take pride in treating your car as if it were our own. Every service is tailored for long-term results, not quick cover-ups.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  toggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between text-left text-white"
      >
        <span className="font-medium">{q}</span>
        <FaChevronDown
          className={`ml-2 h-4 w-4 text-zinc-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-white" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm text-zinc-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-3 text-zinc-400">
          Here are some common questions and reasons why {BRAND.name} stands out.
        </p>

        <div className="mt-8 divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
