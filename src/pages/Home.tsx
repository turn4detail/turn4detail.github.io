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
          {/* ffmpeg -i ceramic-coating-1.mp4 -vf "scale=720:720,fps=24,format=yuv420p" -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -preset medium -b:v 1200k -movflags +faststart -c:a aac -b:a 96k ceramic-coating-ffmpeg-1.mp4 */}
          <Card title="Detailing Packages" video="/video/full-detail-ffmpeg-1.mp4" poster="/poster/full-detail-poster.jpg" to="/detail-packages" />
          <Card title="Paint Correction" video="/video/paint-correction-ffmpeg-1.mp4" poster="/poster/paint-correction-poster.jpg" to="/paint-correction" />
          <Card title="Ceramic Coating" video="/video/ceramic-coating-ffmpeg-1.mp4" poster="/poster/ceramic-coating-poster.jpg" to="/ceramic-coating" />
        </div>
      </Section>
    </div>
  );
}