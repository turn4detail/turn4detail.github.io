import Hero from "../components/Hero";
import Section from "../components/Section";
import Helmet from "react-helmet"
import Button from "../components/Button";

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Archiv Auto",
    "url": "https://www.archivauto.com/about",
    "logo": "https://www.archivauto.com/logo.png",
    "description": "Learn more about Archiv Auto — your trusted local provider of premium car detailing, paint correction, ceramic coating, and car photography services in Kent and surrounding areas.",
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
    "sameAs": [
      "https://www.instagram.com/archiv.auto",
      "https://www.tiktok.com/@archiv.auto"
    ]
  };

  return (
    <div>
      <Helmet>
        <title>Learn About Archiv Auto</title>
        <meta
          name="description"
          content="Learn about Archiv Auto—your trusted team for premium auto detailing, paint correction, ceramic coating, and car photography in Kent and surrounding areas."
        />
        <meta
          name="keywords"
          content="Archiv Auto, car detailing in kent, auto detailing, car cleaning services, ceramic coat"
        />
        <link rel="canonical" href="https://autoaftercare.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <Hero
        bg="/background/about-bg.jpg"
        subheading="OUR STORY & FREQUENTLY ASKED QUESTIONS"
        heading=""
        highlight="ABOUT US"
      />

      <Section bgColor="bg-white">
        <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-24 py-12 space-y-6 leading-relaxed">
          <p>
            Hi there! I’m Steven, the owner here at <span className="font-semibold">Archiv Auto</span>. Based in Kent, Washington,
            I proudly serve the surrounding areas with top-quality auto detailing services.
            What began as a hobby detailing my first car has since evolved into a true passion—one that eventually
            led to the creation of Archiv Auto.
          </p>

          <p>
            As a small, independent business, my mission is simple: <span className="font-semibold">to provide exceptional detailing that enhances and
              preserves your vehicle’s beauty.</span> I treat every car with the precision and care it deserves, using only
            professional-grade products to deliver flawless results.
          </p>

          <p>
            I understand that not everyone is looking for the cheapest detailing—they want the best value for their money.
            That’s why I focus on delivering superior quality without breaking the bank. My services reflect meticulous craftsmanship,
            ensuring your vehicle looks its absolute best while protecting your investments.
          </p>

          <p>
            I’m always working to perfect my craft. Right now, I’m learning headlight restoration, engine bay detailing,
            and paint touch-ups. If you're interested in these services, just let me know!
          </p>

          <p>
            Thank you for choosing <span className="font-semibold">Archiv Auto</span>—I look forward to making your car shine!
          </p>
        </div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <div className="text-zinc-100 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-24 py-12 space-y-6 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>

          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-2">What are the benefits of getting my car detailed?</h3>
            <p>
              Regular detailing helps <span className="font-semibold">preserve your vehicle’s value</span> by protecting the paint, interior, and overall condition.
              It removes dirt, grime, and contaminants that can cause long-term damage, enhances the car’s appearance,
              and <span className="font-semibold">can even improve resale value</span>. A properly detailed car also provides a cleaner, healthier driving environment
              by eliminating dust, bacteria, and allergens.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-2">How do I know which detail package I need?</h3>
            <p>
              The right detail package depends on your car's current condition and your goals.
              If you're a new customer, I highly recommend starting with a <span className="font-semibold">Step 1 Detail</span> to restore your vehicle’s condition.
              This also qualifies you for my <span className="font-semibold">maintenance program</span>, allowing you to book recurring Step 1 Details
              at a discounted rate every 1–6 months (180 days).
            </p>
            <p className="mt-4">
              For vehicles with <span className="font-semibold">deep stains, moderate swirl marks, or heavy buildup</span>, a more intensive option like the <span className="font-semibold">Step 2 Detail</span> is ideal.
              This service provides a deep interior clean and aims to reduce swirls by ~60% while enhancing gloss.
            </p>
            <p className="mt-4">
              If you’re unsure which package is best, feel free to reach out anytime—I’m happy to help!
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-2">What are your hours?</h3>
            <p>
              I operate by <span className="font-semibold">appointment only</span> to give each vehicle the time and attention it deserves.
              Contact me to schedule a session that works for you!
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-2">Do you offer mobile services or studio services?</h3>
            <p>
              Currently, I offer both <span className="font-semibold">mobile & studio detailing services</span>.
              However, the <span className="font-semibold">Step 3 & Step 4 Detail packages are studio-only services</span> because they require extensive time
              and controlled conditions to achieve the best results.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-2">Do you provide your own water & electricity?</h3>
            <p>
              Yes! I typically do not require access to your water tap or electricity for most mobile detailing services.
              However, for <span className="font-semibold">bulk mobile detailing</span>, I may need access to ensure efficiency and consistency in the results.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-2">Where can I see your previous work?</h3>
            <p>
              You can check out my portfolio of previous work on <a href="https://www.instagram.com/autoaftercare" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Instagram</a> and <a href="https://www.tiktok.com/@autoaftercare" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Tiktok</a>. I regularly post so you can see the level
              of quality and attention to detail I provide! Also, check out my <a href="https://g.co/kgs/NQZvpL7" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Google page</a> for reviews from satisfied clients.
            </p>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-800">
        <div className="flex justify-center text-zinc-100 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-6 py-6 space-y-6 leading-relaxed">
          <div className="grid grid-cols-1">
            <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>READY TO BOOK?</Button>
          </div>
        </div>
      </Section>
      {/* <img src="/image/systemx-accredited-black-cropped.svg" alt="System X Ceramic Protection logo" className="w-full h-full object-cover"/> */}
    </div>
  );
}
