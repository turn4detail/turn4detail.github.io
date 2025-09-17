import Hero from "../components/Hero";
import Section from "../components/Section";
import Helmet from "react-helmet";
import Button from "../components/Button";

export default function DetailPackages() {
  const detailPackagesSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Archiv Auto",
    "url": "https://autoaftercare.com/detail-packages",
    "logo": "https://autoaftercare.com/logo.png",
    "description": "Explore our premium detailing packages at Archiv Auto. Keep your vehicle looking its best with mobile and studio car detailing in Kent and nearby areas.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kent",
      "addressRegion": "WA",
      "postalCode": "98031",
      "addressCountry": "US"
    },
    "serviceType": "Auto Detailing Packages",
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
        <title>Detailing Services | Archiv Auto</title>
        <meta
          name="description"
          content="Explore our premium detailing packages to keep your vehicle looking its best. Mobile & studio car detailing services in Kent and surrounding areas."
        />
        <meta
          name="keywords"
          content="Kent car detailing packages, mobile detailing, auto detailing, full detail service"
        />
        <link rel="canonical" href="https://autoaftercare.com/detail-packages" />
        <script type="application/ld+json">
          {JSON.stringify(detailPackagesSchema)}
        </script>
      </Helmet>

      <Hero
        bg="/background/detail-packages-bg.jpg"
        subheading="COMPREHENSIVE AUTO CARE & PROTECTION SERVICES"
        heading=""
        highlight="DETAILING PACKAGES"
      />

      <Section bgColor="bg-white">
        <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/exterior-detail.jpg" alt="Exterior Detail Hyundai Veloster N" className="w-full h-full object-cover rounded-md shadow-lg" />

            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold italic">EXTERIOR DETAIL</h2>
              <p>
                <span className="font-semibold">Wash & Seal:</span> Designed to remove light contaminants & provide a
                protective paint sealant for hydrophobicity & gloss.
              </p>
              <ul className="list-disc list-inside">
                <li>Wheel deep clean</li>
                <li>Gentle hand wash</li>
                <li>Ceramic paint sealant (lasts up to 6 months)</li>
                <li>No-sling tire dressing</li>
              </ul>
              <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>Starting at $150</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <div className="text-zinc-100 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/interior-detail.jpg" alt="Interior Detail Ford Mustang" className="w-full h-full object-cover rounded-md shadow-lg" />

            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold italic">INTERIOR DETAIL</h2>
              <p>
                <span className="font-semibold">Interior refresh:</span> Designed to restore vehicle interior & shield against UV damage.
              </p>
              <ul className="list-disc list-inside">
                <li>Vacuum & interior wipe down</li>
                <li>Air compress debris from tight areas</li>
                <li>Steam cleaning</li>
                <li>UV protection & leather/floormat conditioning</li>
              </ul>
              <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>Starting at $150</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-white">
        <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/full-detail-exterior.jpg" alt="Full Detail Tesla Model Y" className="w-full h-full object-cover rounded-md shadow-lg" />

            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold italic">STEP 1 DETAIL</h2>
              <p>
                <span className="font-semibold">Full detail:</span> Crafted to restore both the interior & exterior of your vehicle, while providing a glossy, hydrophobic finish, and preventing future contamination. Ideal for first-time clients.
              </p>
              <ul className="list-disc list-inside">
                <li>Wheel deep clean</li>
                <li>Gentle hand wash</li>
                <li className="font-bold">Paint decontamination*</li>
                <li>Ceramic paint sealant (lasts up to 6 months)</li>
                <li>No-sling tire dressing</li>
                <li>Vacuum & interior wipe down</li>
                <li>​Air compress debris from tight areas</li>
                <li>Steam cleaning</li>
                <li>UV protection & leather/floormat conditioning</li>
                <li className="font-bold">Maintenance plan eligible*</li>
              </ul>
              <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>Starting at $225</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <div className="text-zinc-100 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/image/maintenance-detail-badge.jpg" alt="Maintenance Detail Porsche Macan" className="w-full h-full object-cover rounded-md shadow-lg" />

            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold italic">MAINTENANCE DETAIL</h2>
              <p>
                <span className="font-semibold">Maintain & protect:</span> Available exclusively to returning eligible clients! This is a 50% discounted Step 1 Detail renewable every once within every 1-6 months (180 days)
              </p>
              <ul className="list-disc list-inside">
                <li className="font-bold">Step 1 Detail*</li>
                <li className="font-bold">Step 2 Detail*</li>
                <li className="font-bold">Step 3 Detail*</li>
                <li className="font-bold">Step 4 Detail*</li>
              </ul>
              <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>Starting at $115</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}