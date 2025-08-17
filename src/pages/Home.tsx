import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Helmet from "react-helmet";
import Button from "../components/Button";

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Auto After Care",
    "url": "https://autoaftercare.com/",
    "logo": "https://autoaftercare.com/logo.png",
    "image": "https://autoaftercare.com/og-preview.jpg",
    "description": "Auto After Care offers premium mobile & studio car detailing, paint correction, ceramic coating, and cinematic car photography in Kent and surrounding areas.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kent",
      "addressRegion": "WA",
      "postalCode": "98031",
      "addressCountry": "US"
    },
    "telephone": "+1-425-306-2183",
    "areaServed": {
      "@type": "Place",
      "name": "Kent"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.instagram.com/autoaftercare",
      "https://www.tiktok.com/@autoaftercare"
    ]
  };

  return (
    <div>
      <Helmet>
        <title>Mobile & Studio Detailing Service | Auto After Care</title>
        <meta
          name="description"
          content="Mobile & studio car detailing services in Kent, WA. We offer detailing packages, paint correction, ceramic coating, and car photography services."
        />
        <meta
          name="keywords"
          content="Kent car detailing, mobile detailing, paint correction, ceramic coating, car photography"
        />
        <link rel="canonical" href="https://autoaftercare.com/" />

        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
      </Helmet>

      <Hero
        bg="/background/home-bg-1.jpg"
        subheading="MOBILE & STUDIO SERVICES - WE COME TO YOU OR YOU COME TO US"
        heading="PREMIUM AUTO DETAILING BASED IN "
        highlight="KENT"
      />

      <Section bgColor="bg-white">
        <h2 className="text-black text-md text-2xl italic font-extrabold mb-4">AUTO CARE SERVICES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ffmpeg -i ceramic-coating-1.mp4 -vf "scale=720:720,fps=24,format=yuv420p" -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -preset medium -b:v 1200k -movflags +faststart -c:a aac -b:a 96k ceramic-coating-ffmpeg-1.mp4 */}
          <Card title="Detailing Packages" video="/video/full-detail-ffmpeg-1.mp4" poster="/poster/full-detail-poster.jpg" to="/detail-packages" />
          <Card title="Paint Correction" video="/video/paint-correction-ffmpeg-1.mp4" poster="/poster/paint-correction-poster.jpg" to="/paint-correction" />
          <Card title="Ceramic Coating" video="/video/ceramic-coating-ffmpeg-1.mp4" poster="/poster/ceramic-coating-poster.jpg" to="/ceramic-coating" />
        </div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-12c95781-bd68-4f07-80c2-6bb6b3ac10c2" data-elfsight-app-lazy></div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <div className="flex justify-center text-zinc-100 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1">
            <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>READY TO BOOK?</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}