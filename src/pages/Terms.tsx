import React from "react";
import { BRAND } from "../lib/brand";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { localBusinessJsonLd } from "../lib/seo";

export default function Terms() {
    const updated = "September 29, 2025";

    return (
        <>
            <SEO
                title="Turn 4 Detail – Quality-First Detailing, Corrections & Coatings"
                description="Booking, deposits, cancellations, liability, coatings, and product sales terms for Turn 4 Detail."
                url="https://www.turn4detail.com/#/terms-and-conditions"
                jsonLd={localBusinessJsonLd}
            />
            <div className="min-h-screen bg-black selection:bg-white selection:text-black">
                <Header />
                <main className="bg-zinc-950 text-zinc-100 min-h-screen">
                    <section id="top" className="mx-auto max-w-3xl px-4 md:px-8 py-16">
                        <h1 className="text-3xl md:text-4xl font-bold">Terms &amp; Conditions</h1>
                        <p className="mt-2 text-zinc-400 text-sm">Last updated: {updated}</p>

                        <p className="mt-6 text-zinc-300">
                            These Terms and Conditions (“Terms”) govern your use of SECTION 6 LLC’s services,
                            operating as Turn 4 Detail. By booking, purchasing, or using our services and products,
                            you agree to these Terms.
                        </p>

                        <h2 className="mt-10 text-xl font-semibold">1) Appointments & Deposits</h2>
                        <ul className="mt-3 list-disc pl-5 text-zinc-300">
                            <li>A deposit is required to confirm your appointment.</li>
                            <li>
                                Cancellations made <span className="font-medium">within 24 hours</span> of your appointment
                                will result in forfeiture of the full deposit.
                            </li>
                            <li>
                                Cancellations made <span className="font-medium">more than 24 hours</span> in advance
                                will receive a 50% refund of the deposit to cover administrative and preparation costs.
                            </li>
                        </ul>

                        <h2 className="mt-10 text-xl font-semibold">2) Cancellations & Rescheduling</h2>
                        <ul className="mt-3 list-disc pl-5 text-zinc-300">
                            <li>We may reschedule services in cases of weather, access limitations, or safety concerns.</li>
                            <li>Please provide accurate contact and vehicle information to avoid delays or rescheduling.</li>
                        </ul>

                        <h2 className="mt-10 text-xl font-semibold">3) Liability</h2>
                        <p className="mt-3 text-zinc-300">
                            We take great care when handling your vehicle. However, SECTION 6 LLC is not responsible for:
                        </p>
                        <ul className="mt-3 list-disc pl-5 text-zinc-300">
                            <li>Pre-existing damage or normal wear and tear.</li>
                            <li>Damage caused by hidden defects or unsafe vehicle conditions.</li>
                            <li>
                                Risks inherent in certain services, such as paint correction or ceramic coatings,
                                which you acknowledge before service begins.
                            </li>
                        </ul>

                        <h2 className="mt-10 text-xl font-semibold">4) Pricing & Payment</h2>
                        <ul className="mt-3 list-disc pl-5 text-zinc-300">
                            <li>Prices may vary based on vehicle size, condition, and requested services.</li>
                            <li>Quotes are estimates; final invoices reflect actual work performed and materials used.</li>
                            <li>Payment is due upon completion unless otherwise agreed.</li>
                        </ul>

                        <h2 className="mt-10 text-xl font-semibold">5) Refund Policy</h2>
                        <p className="mt-3 text-zinc-300">
                            All product sales are final once shipped. We cannot accept returns or issue refunds after
                            an item has been dispatched. If your order arrives damaged, defective, or incorrect, please
                            contact us within <span className="font-medium">7 days</span> of delivery so we can work
                            with you to resolve the issue.
                        </p>

                        <h2 className="mt-10 text-xl font-semibold">6) Ceramic Coatings</h2>
                        <ul className="mt-3 list-disc pl-5 text-zinc-300">
                            <li>
                                We offer professional-grade ceramic coatings from multiple manufacturers,
                                selected to best suit your vehicle and goals.
                            </li>
                            <li>
                                Certain coatings may be installed as an authorized SystemX (Element 119)
                                service, which includes a manufacturer-backed warranty upon registration.
                            </li>
                            <li>
                                Proper maintenance and care are required for all ceramic coatings to ensure
                                durability and performance.
                            </li>
                        </ul>

                        <h2 className="mt-10 text-xl font-semibold">7) Limited Liability</h2>
                        <p className="mt-3 text-zinc-300">
                            To the fullest extent permitted by law, our liability is limited to the amount paid
                            for the specific service at issue. We are not liable for aftermarket modifications,
                            pre-existing defects, or damages arising from unsafe conditions outside our control.
                        </p>

                        <h2 className="mt-10 text-xl font-semibold">8) Updates to Terms</h2>
                        <p className="mt-3 text-zinc-300">
                            SECTION 6 LLC reserves the right to update these Terms at any time. Continued use
                            of our services constitutes acceptance of the revised Terms.
                        </p>

                        <h2 className="mt-10 text-xl font-semibold">9) Governing Law</h2>
                        <p className="mt-3 text-zinc-300">
                            These Terms are governed by the laws of the state where our business is located,
                            without regard to conflict of law principles.
                        </p>

                        <h2 className="mt-10 text-xl font-semibold">10) Contact</h2>
                        <p className="mt-3 text-zinc-300">
                            Questions about these Terms? Contact us at{" "}
                            <a className="underline" href={`mailto:${BRAND.email}`}>
                                {BRAND.email}
                            </a>{" "}
                            or call{" "}
                            <a className="underline" href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>.
                            Mailing address: {BRAND.address}.
                        </p>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
