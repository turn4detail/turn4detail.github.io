import { motion } from "framer-motion";

const features = [
  {
    title: "We Bring the Studio",
    text: "Our mobile setup carries its own water and power—delivering studio-grade results at your doorstep with zero hassle.",
    img: "/tiles/van.jpg",
  },
  {
    title: "Detailing vs. Car Wash",
    text: "Tunnel washes are built for volume, not care. We focus on quality: safe methods that protect your paint long-term.",
    img: "/tiles/paint.jpg",
  },
  {
    title: "Ceramic Coatings",
    text: "Installed by a SystemX Authorized Installer and backed by a warranty—proven protection with unmatched gloss.",
    img: "/tiles/ceramic-coating.jpg",
  },
  {
    title: "Passion for Cars",
    text: "Enthusiast-owned and operated. We treat every car as if it were our own pride and joy.",
    img: "/tiles/enthusiast.jpg",
  },
];

export default function WhyUs() {
  return (
    <>
      {/* Why Us Section */}
      <section id="whyus" className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl text-center">
            Why Choose Us
          </h2>
          <p className="mt-3 text-center text-zinc-400 max-w-2xl mx-auto">
            We go beyond the basics to protect, enhance, and maintain your vehicle.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={f.img}
                  alt={f.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SystemX Section */}
      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 md:px-8 text-center">
          <motion.img
            src="/systemx-logo-black-scaled.jpg"
            alt="System X Authorized Installer"
            className="mx-auto h-32 md:h-40 mb-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          />
          <motion.h2
            className="text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Certified by SystemX (Element 119)
          </motion.h2>
          <motion.p
            className="mt-4 text-zinc-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            As an official{" "}
            <span className="text-white font-semibold">
              SystemX Authorized Installer
            </span>
            , we provide coatings backed by a manufacturer warranty for proven,
            long-term protection. Our partnership with{" "}
            <span className="text-white font-semibold">Element 119</span>{" "}
            ensures your vehicle receives the highest standard in ceramic
            coating technology.
          </motion.p>
          <motion.a
            href="https://www.systemx.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-2xl bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Learn More About System X →
          </motion.a>
        </div>
      </section>
    </>
  );
}