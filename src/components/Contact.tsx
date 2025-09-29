import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaGoogle } from "react-icons/fa6";
import { BRAND } from "../lib/brand";

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl text-center">Contact Us</h2>
        <p className="mt-3 text-center text-zinc-400 max-w-2xl mx-auto">
          Book an appointment or reach out directly—we’re here to help.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <a
                href={`tel:${BRAND.phone}`}
                className="text-zinc-400 hover:text-white"
              >
                {BRAND.phone}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-zinc-400 hover:text-white"
              >
                {BRAND.email}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Studio</h3>
              <a href={BRAND.gBusiness} 
              target="_blank" rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white"
              >
                {BRAND.address}
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="mt-2 flex items-center gap-3">
                {BRAND.instagram && (
                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                )}
                {BRAND.tiktok && (
                  <a
                    href={BRAND.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                  >
                    <FaTiktok className="h-5 w-5" />
                  </a>
                )}
                {BRAND.gReviews && (
                  <a
                    href={BRAND.gReviews}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Google"
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                  >
                    <FaGoogle className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right - Urable iframe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl shadow-lg overflow-hidden"
          >
            <iframe
              src="https://app.urable.com/form/hcAqmHnMarJx8MiAcQxF/FEGH2ME3OzMFtnx045Oi"
              scrolling="no"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              height="1200px"
              width="100%"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
