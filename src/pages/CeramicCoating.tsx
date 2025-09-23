import Hero from "../components/Hero";
import Section from "../components/Section";
import Helmet from "react-helmet";
import Button from "../components/Button";

export default function CeramicCoating() {
  const ceramicCoatingSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Section 6 Detailing",
    "url": "https://www.section6detailing.com/#/ceramic-coating",
    "logo": "https://www.section6detailing.com/logo.png",
    "description": "Protect your vehicle with premium ceramic coating services by Section 6 Detailing. Enhance gloss, durability, and paint protection for cars in Kent and nearby areas.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kent",
      "addressRegion": "WA",
      "postalCode": "98031",
      "addressCountry": "US"
    },
    "serviceType": "Ceramic Coating",
    "telephone": "+1-425-306-2183",
    "areaServed": {
      "@type": "Place",
      "name": "Kent"
    },
    "sameAs": [
      "https://www.instagram.com/section6detailing",
      "https://www.tiktok.com/@archiv.auto"
    ]
  };

  return (
    <div>
      <Helmet>
        <title>Certified Ceramic Coatings | Section 6 Detailing</title>
        <meta
          name="description"
          content="Section 6 Detailing is a System X® Certified Installer in Kent, WA. Explore benefits, packages, and FAQs about ceramic coatings for long-lasting gloss and protection."
        />
        <meta
          name="keywords"
          content="Kent ceramic coating, car ceramic coating, paint protection, Section 6 Detailing"
        />
        <link rel="canonical" href="https://www.section6detailing.com/#/ceramic-coating" />
        <script type="application/ld+json">
          {JSON.stringify(ceramicCoatingSchema)}
        </script>
      </Helmet>

      <Hero
        bg="/background/ceramic-coating-bg.jpg"
        subheading="FOR THE ULTIMATE ENTHUSIASTS - DEEP GLOSS, ELITE HYDROPHOBICS & DURABLE PROTECTION"
        heading=""
        highlight="CERAMIC COATING"
      />

      <Section bgColor="bg-white">
        <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/ceramic-coating.jpg" alt="Ceramic Coating Toyota GR86" className="w-full h-full object-cover rounded-md shadow-lg" />

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
              <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>Starting at $1,000</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <div className="text-zinc-100 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <img src="/image/systemx-logo-black-scaled.jpg" alt="System X Ceramic Protection logo" className="w-full h-full object-cover rounded-md shadow-lg"/>
          <h2 className="text-2xl md:text-3xl font-extrabold italic">WHY SYSTEM X®?</h2>
          <p>
            System X® is a leader in ceramic coating technology, offering unparalleled protection and durability for your vehicle's paint. With a focus on quality and performance, System X® coatings provide a long-lasting barrier against environmental contaminants, UV rays, and everyday wear and tear.
          </p>
          <ul className="list-disc list-inside">
            <li>Advanced hydrophobic properties for easy cleaning</li>
            <li>Enhanced gloss and depth of color</li>
            <li>Resistance to scratches and swirl marks</li>
            <li>Long-lasting protection with proper maintenance</li>
          </ul>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-extrabold italic">BENEFITS OF CERAMIC COATINGS</h2>
          <p className="text-gray-600">Professional application + premium chemistry = long-term protection with serious gloss.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl bg-gray-100 p-6 shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <h3 className="text-lg font-semibold">UV & Chemical Resistance</h3>
              </div>
              <p className="text-gray-600">Shields paint from oxidation, bird droppings, road salts, and harsh cleaners.</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-gray-100 p-6 shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <h3 className="text-lg font-semibold">Extreme Gloss & Depth</h3>
              </div>
              <p className="text-gray-600">Slick, candy-like finish that keeps your vehicle looking freshly detailed.</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-gray-100 p-6 shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <h3 className="text-lg font-semibold">Hydrophobic & Easy Washes</h3>
              </div>
              <p className="text-gray-600">Water beads and sheets off—reducing wash time and helping repel grime.</p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl bg-gray-100 p-6 shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <h3 className="text-lg font-semibold">Adds Measurable Hardness</h3>
              </div>
              <p className="text-gray-600">Creates a durable sacrificial layer to help reduce micro-marring from washing.</p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl bg-gray-100 p-6 shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <h3 className="text-lg font-semibold">Backed by Warranty</h3>
              </div>
              <p className="text-gray-600">Eligible System X® coatings include manufacturer-backed warranties. *Terms vary.*</p>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl bg-gray-100 p-6 shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <h3 className="text-lg font-semibold">Certified Application</h3>
              </div>
              <p className="text-gray-600">Installed to spec by Section 6 Detailing’s System X® Certified team for optimal results.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <div className="text-zinc-100 max-w-7xl text-center text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-extrabold italic">PROTECT YOUR INVESTMENT</h2>
          <p className="mx-auto max-w-3xl text-md">
            Get lasting gloss and easier maintenance with a System X® coating
            installed by certified professionals.
          </p>
          <div className="mt-8items-center justify-center">
            <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>Book an appointment</Button>
          </div>
          <p className="mt-4 text-xs opacity-80">
            *System X® is a registered trademark of Element 119. Warranty terms
            and coverage vary by product and application.
          </p>
        </div>
      </Section>
    </div>
  );
}