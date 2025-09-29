import { BRAND } from "../lib/brand";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { localBusinessJsonLd } from "../lib/seo";

export default function Privacy() {
  const updated = "September 29, 2025";

  return (
    <>
      <SEO
        title="Turn 4 Detail – Quality-First Detailing, Corrections & Coatings"
        description="How SECTION 6 LLC (Turn 4 Detail) collects, uses, and protects your information."
        url="https://www.turn4detail.com/#/privacy-policy"
        jsonLd={localBusinessJsonLd}
      />
      <div className="min-h-screen bg-black selection:bg-white selection:text-black">
        <Header />
        <main className="bg-zinc-950 text-zinc-100 min-h-screen">
          <section id="top" className="mx-auto max-w-3xl px-4 md:px-8 py-16">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-2 text-zinc-400 text-sm">Last updated: {updated}</p>

            <p className="mt-6 text-zinc-300">
              This Privacy Policy explains how SECTION 6 LLC, operating as Turn 4 Detail
              (“we,” “our,” or “us”), collects, uses, and protects information when you
              visit our website, book appointments, or purchase products.
            </p>

            <h2 className="mt-10 text-xl font-semibold">1) Information We Collect</h2>
            <ul className="mt-3 list-disc pl-5 text-zinc-300">
              <li>Contact details such as your name, email, and phone number.</li>
              <li>Vehicle details and service preferences for scheduling and quotes.</li>
              <li>Booking and payment details submitted through our scheduling system.</li>
              <li>General usage data (such as cookies/analytics) to improve site performance.</li>
            </ul>

            <h2 className="mt-10 text-xl font-semibold">2) How We Use Your Information</h2>
            <ul className="mt-3 list-disc pl-5 text-zinc-300">
              <li>To schedule and confirm your appointments.</li>
              <li>To communicate about services, quotes, and updates.</li>
              <li>To process payments securely via trusted third-party providers.</li>
              <li>To improve our services and website experience.</li>
            </ul>

            <h2 className="mt-10 text-xl font-semibold">3) Sharing of Information</h2>
            <p className="mt-3 text-zinc-300">
              We do not sell your personal information. Limited data may be shared with
              trusted providers strictly for the purpose of scheduling, payment processing,
              or analytics. We may also disclose information if required by law.
            </p>

            <h2 className="mt-10 text-xl font-semibold">4) Data Security</h2>
            <p className="mt-3 text-zinc-300">
              We implement reasonable safeguards to protect your personal data.
              However, no method of transmission or storage is fully secure,
              and you acknowledge this when using our services.
            </p>

            <h2 className="mt-10 text-xl font-semibold">5) Age Restriction</h2>
            <p className="mt-3 text-zinc-300">
              Our services are intended for adults. We do not provide services
              to anyone under the age of 18, and we do not knowingly collect
              information from individuals under 18.
            </p>

            <h2 className="mt-10 text-xl font-semibold">6) Product Sales</h2>
            <p className="mt-3 text-zinc-300">
              All product sales are final once shipped. Please review our Terms & Conditions
              for additional details regarding refunds and product issues.
            </p>

            <h2 className="mt-10 text-xl font-semibold">7) Changes to This Policy</h2>
            <p className="mt-3 text-zinc-300">
              We may update this Privacy Policy from time to time. The “Last updated”
              date reflects the latest revision. Continued use of our site and services
              constitutes acceptance of the revised policy.
            </p>

            <h2 className="mt-10 text-xl font-semibold">8) Contact</h2>
            <p className="mt-3 text-zinc-300">
              Questions? Contact us at{" "}
              <a className="underline" href={`mailto:${BRAND.email}`}>
                {BRAND.email}
              </a>{" "}
              or call{" "}
              <a className="underline" href={`tel:${BRAND.phone}`}>
                {BRAND.phone}
              </a>. Mailing address: {BRAND.address}.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
