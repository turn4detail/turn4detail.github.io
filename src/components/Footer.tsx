import { IMAGES, BRAND } from "../lib/brand";
import { FaInstagram, FaTiktok, FaGoogle } from "react-icons/fa6";
import { scrollToId } from "../lib/scroll";

const SERVICE_AREAS = [
  "Seattle, WA",
  "Bellevue, WA",
  "Redmond, WA",
  "Issaquah, WA",
  "Sammamish, WA",
  "Kent, WA",
  "Renton, WA",
  "Auburn, WA",
];

const HOURS: { day: string; open?: string; close?: string; closed?: boolean }[] = [
  { day: "Mon - Fri", open: "9:00 AM", close: "6:00 PM" },
  { day: "Sat - Sun", closed: true },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 text-white">
              <a href="#bottom">
                <img src={IMAGES.logo} alt={`${BRAND.name} logo`} className="w-90 mx-auto" onClick={(e) => {
                          e.preventDefault();
                          scrollToId("top");
                        }}/>
              </a>
            </div>
            <p className="mt-3 max-w-sm text-sm text-zinc-400 mx-auto">
              Established in 2025, Turn 4 Detail is dedicated to providing professional and friendly auto detailing services. We provide expert care with premium detailing packages designed to protect your vehicle, tailored to your needs. As a small, single-owner business, we’re here to serve you with dedication and passion. Contact Turn 4 Detail today to schedule your appointment and give your car the spa day it deserves.
            </p>
          </div>

          <div className="grid grid-rows-2 gap-8">
            <div>
              <h3 className="text-white uppercase text-xl font-bold tracking-wide">Hours of Operation</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {HOURS.map(({ day, open, close, closed }) => (
                  <li key={day} className="flex justify-between gap-4">
                    <span className="w-16 text-zinc-400">{day}</span>
                    {closed ? (
                      <span className="text-zinc-300">Closed</span>
                    ) : (
                      <span className="text-zinc-300">{open} – {close}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white uppercase text-xl font-bold tracking-wide">Follow Us</h3>
              <div className="mt-3 flex items-center gap-3">
                {BRAND.instagram && (
                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition hover:-translate-y-0.5"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                )}
                {BRAND.tiktok && (
                  <a
                    href={BRAND.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition hover:-translate-y-0.5"
                  >
                    <FaTiktok className="h-6 w-6" />
                  </a>
                )}
                {BRAND.gReviews && (
                  <a
                    href={BRAND.gReviews}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Google Business"
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition hover:-translate-y-0.5"
                  >
                    <FaGoogle className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-8">
            <div>
              <h3 className="text-white uppercase text-xl font-bold tracking-wide">Areas Served</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                {SERVICE_AREAS.map((city) => (
                  <li key={city} className="text-zinc-400">{city}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white uppercase text-xl font-bold tracking-wide">Get in Touch</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {BRAND.phone && (
                  <li><a href={`tel:${BRAND.phone}`} className="hover:underline">{BRAND.phone}</a></li>
                )}
                {BRAND.email && (
                  <li><a href={`mailto:${BRAND.email}`} className="hover:underline">{BRAND.email}</a></li>
                )}
                {BRAND.address && (
                  <li><a href={BRAND.gBusiness} target="_blank" rel="noopener noreferrer" className="hover:underline">{BRAND.address}</a></li>
                )}
              </ul>
              <a
                href={BRAND.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block rounded-2xl bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 grid grid-cols-1 gap-3 text-xs text-zinc-400 md:grid-cols-3">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} {BRAND.legalName}. {BRAND.name}. All rights reserved.
          </div>

          <div className="text-center">
            Made with <span className="text-red-500">♥</span> using React & TailwindCSS
          </div>

          <div className="text-center md:text-right space-x-4">
            <a href="#/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </a>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("top");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
