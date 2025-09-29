import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Strip from "../components/Strip";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { localBusinessJsonLd } from "../lib/seo";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Turn 4 Detail – Quality-First Detailing, Corrections & Coatings"
        description="Quality over quantity. Mobile & studio detailing, paint correction, and ceramic coatings for the Greater Seattle Area."
        url="https://www.turn4detail.com/"
        image="https://www.turn4detail.com/og.jpg"
        jsonLd={localBusinessJsonLd}
      />
      <div className="min-h-screen bg-black selection:bg-white selection:text-black">
        <Header />
        <main>
          <Hero />
          <Services />
          <Strip />
          <WhyUs />
          <Gallery />
          <Contact />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
