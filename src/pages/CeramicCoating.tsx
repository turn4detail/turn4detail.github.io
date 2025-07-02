import Hero from "../components/Hero";
import Section from "../components/Section";

export default function CeramicCoating() {
  return (
    <div>
      <Hero
        bg="/background/ceramic-coating-bg.jpg"
        subheading="FOR THE ULTIMATE ENTHUSIASTS - DEEP GLOSS, ELITE HYDROPHOBICS & DURABLE PROTECTION"
        heading=""
        highlight="CERAMIC COATING"
      />

      <Section bgColor="bg-white">
        <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/ceramic-coating.jpg" alt="Ceramic Coating BMW i5" className="w-full h-full object-cover rounded-none shadow-lg"/>

            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold italic">STEP 4 DETAIL</h2>
              <p>
                <span className="font-semibold">Ceramic coating:</span> A protective layer applied to the paint that provides long-lasting protection against dirt, water, and contaminants, enhancing shine and making cleaning easier. STUDIO SERVICE ONLY!
              </p>
              <ul className="list-disc list-inside">
                <li>Wheel deep clean</li>
                <li>Gentle hand wash</li>
                <li>Paint decontamination</li>
                <li className="font-bold">1-step/2-step paint correction as needed*</li>
                <li className="font-bold">1-year/2-year/5-year ceramic coating*</li>
                <li>Ceramic paint sealant (lasts up to 6 months)</li>
                <li>No-sling tire dressing</li>
                <li>Vacuum & interior wipe down</li>
                <li>​Air compress debris from tight areas</li>
                <li>Steam cleaning</li>
                <li>UV protection & leather/floormat conditioning</li>
                <li>Maintenance plan eligible</li>
              </ul>
              <p className="font-bold text-lg">Starting at $800</p>
            </div>
          </div>
        </div>
      </Section>

      {/* todo is ok? */}
      <Section bgColor="bg-zinc-800">
        <div className="flex justify-center text-zinc-100 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1">
            <h3 className="text-2xl md:text-3xl font-extrabold italic">READY TO BOOK? <a className="inherit" href="#">CLICK HERE!</a></h3>
          </div>
        </div>
      </Section>
    </div>


  );
}