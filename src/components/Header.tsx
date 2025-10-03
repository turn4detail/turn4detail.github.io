import { useEffect, useState } from "react";
import { BRAND, IMAGES } from "../lib/brand";
import { scrollToId } from "../lib/scroll";

export default function Header() { // fx
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? "backdrop-blur bg-zinc-950/60 shadow-sm" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-between text-white">
          <a href="#top" className="flex items-center gap-3 font-semibold">
            <img src={IMAGES.logo} alt="logo" className="w-30" onClick={(e) => {
                          e.preventDefault();
                          scrollToId("top");
                        }}/>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-zinc-200">
            <a href="#services" onClick={(e) => {
                          e.preventDefault();
                          scrollToId("services");
                        }} className="hover:text-white">Services</a>
            <a href="#gallery" onClick={(e) => {
                          e.preventDefault();
                          scrollToId("gallery");
                        }} className="hover:text-white">Gallery</a>
            <a href="#contact" onClick={(e) => {
                          e.preventDefault();
                          scrollToId("contact");
                        }} className="hover:text-white">Contact</a>
            <a href={BRAND.shopUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Shop</a>
          </nav>
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
