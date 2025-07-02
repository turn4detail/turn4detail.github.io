import Hero from "../components/Hero";
import Section from "../components/Section";

export default function PaintCorrection() {
  return (
    <div>
      <Hero
        bg="/background/paint-correction-bg.jpg"
        subheading="WHETHER YOU'RE AN ENTHUSIASTS OR JUST TIRED OF SWIRLS, WE'VE GOT YOU"
        heading=""
        highlight="PAINT CORRECTION"
      />

      <Section bgColor="bg-white">
        <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/paint-correction-1.jpg" alt="Paint Correction Ford Mustang" className="w-full h-full object-cover rounded-none shadow-lg"/>

            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold italic">STEP 2 DETAIL</h2>
              <p>
                <span className="font-semibold">Gloss enhancement:</span> Designed to restore paint clarity, depth, and shine for a more vibrant appearance. Removes ~60% of moderate swirls. STUDIO SERVICE ONLY!
              </p>
              <ul className="list-disc list-inside">
                <li>Wheel deep clean</li>
                <li>Gentle hand wash</li>
                <li>Paint decontamination</li>
                <li className="font-bold">1-step gloss enhancement polish*</li>
                <li>Ceramic paint sealant (lasts up to 6 months)</li>
                <li>No-sling tire dressing</li>
                <li>Vacuum & interior wipe down</li>
                <li>​Air compress debris from tight areas</li>
                <li>Steam cleaning</li>
                <li>UV protection & leather/floormat conditioning</li>
                <li>Maintenance plan eligible</li>
              </ul>
              <p className="font-bold text-lg">Starting at $400</p>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <div className="text-zinc-100 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/paint-correction-2.jpg" alt="Paint Correction Volkswagen GTI" className="w-full h-full object-cover rounded-none shadow-lg"/>

            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold italic">STEP 3 DETAIL</h2>
              <p>
                <span className="font-semibold">2-step paint correction:</span> A 2-step process that removes ~80% of deep swirls, restoring a near-flawless, mirror-like finish in the paint. STUDIO SERVICE ONLY!
              </p>
              <ul className="list-disc list-inside">
                <li>Wheel deep clean</li>
                <li>Gentle hand wash</li>
                <li>Paint decontamination</li>
                <li className="font-bold">2-step paint correction*</li>
                <li>Ceramic paint sealant (lasts up to 6 months)</li>
                <li>No-sling tire dressing</li>
                <li>Vacuum & interior wipe down</li>
                <li>​Air compress debris from tight areas</li>
                <li>Steam cleaning</li>
                <li>UV protection & leather/floormat conditioning</li>
                <li>Maintenance plan eligible</li>
              </ul>
              <p className="font-bold text-lg">Starting at $600</p>
            </div>
          </div>
        </div>
      </Section>

      {/* todo is ok? */}
      <Section bgColor="bg-white">
        <div className="flex justify-center text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1">
            <h3 className="text-2xl md:text-3xl font-extrabold italic">READY TO BOOK? <a className="inherit" href="#">CLICK HERE!</a></h3>
          </div>
        </div>
      </Section>
    </div>
  );
}