import Hero from "../components/Hero";
import Section from "../components/Section";
import Helmet from "react-helmet";
import Button from "../components/Button";

export default function PaintCorrection() {
  const paintCorrectionSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Auto After Care",
    "url": "https://autoaftercare.github.io/paint-correction",
    "description": "Professional paint correction services in Kent. Remove swirl marks and scratches, restore your car’s shine.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kent",
      "addressRegion": "WA",
      "postalCode": "98031",
      "addressCountry": "US"
    },
    "serviceType": "Paint Correction",
    "telephone": "+1-425-306-2183",
    "areaServed": {
      "@type": "Place",
      "name": "Kent"
    },
    "sameAs": [
      "https://www.instagram.com/autoaftercare",
      "https://www.tiktok.com/@autoaftercare"
    ]
  };

  return (
    <div>
      <Helmet>
        <title>Auto Paint Correction Services in Kent by Auto After Care</title>
        <meta
          name="description"
          content="Restore your car’s shine with professional paint correction services by Auto After Care. Remove swirl marks, scratches, and imperfections in Kent and surrounding areas."
        />
        <meta
          name="keywords"
          content="Kent paint correction, car paint correction, swirl mark removal, auto detailing"
        />
        <link rel="canonical" href="https://autoaftercare.github.io/paint-correction" />

        <script type="application/ld+json">
          {JSON.stringify(paintCorrectionSchema)}
        </script>
      </Helmet>

      <Hero
        bg="/background/paint-correction-bg.jpg"
        subheading="WHETHER YOU'RE AN ENTHUSIASTS OR JUST TIRED OF SWIRLS, WE'VE GOT YOU"
        heading=""
        highlight="PAINT CORRECTION"
      />

      <Section bgColor="bg-white">
        <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/paint-correction-1.jpg" alt="Paint Correction Ford Mustang" className="w-full h-full object-cover rounded-md shadow-lg" />

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
              <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>Starting at $400</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <div className="text-zinc-100 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/paint-correction-2.jpg" alt="Paint Correction BMW i5" className="w-full h-full object-cover rounded-md shadow-lg" />

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
              <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>Starting at $600</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}