export default function Strip() {
  return (
    <section
      aria-hidden
      className="relative isolate h-[40vh] min-h-[320px] w-full overflow-clip"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/strip.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-4 text-center">
        <p className="text-xl md:text-2xl text-white">
          Coatings for daily realism. Corrections for showtime gloss.
        </p>
      </div>
    </section>
  );
}