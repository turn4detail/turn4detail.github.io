import Helmet from "react-helmet";
import Hero from "../components/Hero";
import Section from "../components/Section";

export default function TermsAndConditions() {
    return (
        <div>
            <Helmet>
                <title>Terms & Conditions | Turn 4 Detail</title>
            </Helmet>

            <Hero
                bg="/background/terms-and-conditions-bg.jpg"
                subheading="Everything you need to know before using our website or services."
                heading=""
                highlight="TERMS AND CONDITIONS"
            />

            <Section bgColor="bg-white">
                <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-24 py-12 space-y-3 leading-relaxed">
                    <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
                    <p>
                        Last updated: September 24th, 2025
                    </p>

                    <p>
                        These Terms and Conditions (“Terms”) govern your use of SECTION 6 LLC’s services, operating as <span className="font-semibold">Turn 4 Detailing</span>. By booking, purchasing, or using our services and products, you agree to these Terms.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Services Provided</h2>
                    <p>
                        We provide professional auto detailing services at our studio or your location (for mobile detailing). Service descriptions, pricing, and availability are listed on our website or communicated by our team. We also operate an online store to sell detailing-related products as a registered reseller in Washington State.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Appointments & Scheduling</h2>
                    <p>
                        Appointments can be scheduled through <span className="font-semibold">Urable</span>, by phone, or in person. Please ensure that your vehicle is accessible and ready at the agreed time, especially for mobile services. Extra charges may apply if additional cleaning time is required due to heavy soiling or unforeseen conditions.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Payments</h2>
                    <p>
                        Payment is due upon completion of services unless otherwise arranged. We accept cash, credit/debit cards, and mobile payments. For product purchases, payments are securely processed through <span className="font-semibold">Shopify</span>.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Deposits, Cancellations & Rescheduling</h2>
                    <p>
                        A deposit may be required to confirm your appointment. If you need to cancel or reschedule:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Cancellations made <span className="font-semibold">within 24 hours</span> of your appointment will result in the forfeiture of your full deposit.</li>
                        <li>Cancellations made <span className="font-semibold">more than 24 hours</span> in advance will receive a 50% refund of the deposit to cover administrative and preparation costs.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Liability</h2>
                    <p>
                        We take great care when handling your vehicle. However, SECTION 6 LLC is not responsible for pre-existing damage, normal wear and tear, or damage caused by hidden defects. Certain services, such as paint correction or ceramic coatings, involve inherent risks which you acknowledge before service begins.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Customer Responsibilities</h2>
                    <p>
                        For mobile services, you are responsible for providing a safe, legal, and accessible location for the detailing work. Customers are encouraged to remove personal items and valuables from their vehicles prior to service.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
                    <p>
                        We may rely on trusted third-party providers, including <span className="font-semibold">Urable</span> for booking and <span className="font-semibold">Shopify</span> for product sales and payment processing. By using our services, you also agree to the applicable terms and policies of these providers.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Product Sales</h2>
                    <p>
                        Products purchased through our Shopify store are subject to availability. Prices, descriptions, and policies may change at our discretion. We reserve the right to limit or refuse any order if necessary.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Refund Policy (Shopify Orders)</h2>
                    <p>
                        All product sales are final once shipped. We cannot accept returns or issue refunds after an item has been dispatched. If your order arrives damaged, defective, or incorrect, please contact us within <span className="font-semibold">7 days</span> of delivery so we can work with you to resolve the issue.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Changes to These Terms</h2>
                    <p>
                        We may update these Terms at any time to reflect changes in our operations, services, or applicable laws. Updates will be posted on this page with a revised “Last updated” date.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at <span className="font-semibold">steven@turn4detail.com</span> or <span className="font-semibold">(425) 306-2183</span>.
                    </p>
                </div>
            </Section>

        </div>
    );
}