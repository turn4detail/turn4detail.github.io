import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Hero
        bg="/background/home-bg.jpg"
        subheading="MOBILE & STUDIO SERVICES - WE COME TO YOU OR YOU COME TO US"
        heading="PREMIUM AUTO DETAILING BASED IN "
        highlight="KENT"
      />

      <Section bgColor="bg-white">
        <h2 className="text-black text-md text-2xl italic font-extrabold mb-4">AUTO CARE SERVICES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Detailing Packages" image="/gifs/full-detail-card-1.gif" to="/detail-packages" />
          <Card title="Paint Correction" image="/gifs/paint-correction-card-1.gif" to="/paint-correction" />
          <Card title="Ceramic Coating" image="/gifs/ceramic-coating-card-1.gif" to="/ceramic-coating" />
        </div>
      </Section>
    </div>
  );
}