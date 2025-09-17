import Helmet from "react-helmet";
import Hero from "../components/Hero";
import Section from "../components/Section";

export default function TermsAndConditions() {
    return (
        <div>
            <Helmet>
                <title>Terms & Conditions | Archiv Auto</title>
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
                        Last updated: September 17th, 2025
                    </p>

                    <p>
                        These Terms and Conditions (“Terms”) govern your use of ARCHIV AUTO LLC’s auto detailing services, whether provided at our studio or via mobile service. By booking or using our services, you agree to these Terms.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Services Provided</h2>
                    <p>
                        We offer professional auto detailing services for vehicles at our studio or your location (where applicable). Service details and pricing are available on our website or provided by our team.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Appointments & Scheduling</h2>
                    <p>
                        Appointments can be scheduled online, by phone, or in person. Please ensure that your vehicle is accessible and prepared at the agreed time, especially for mobile services. Additional fees may apply for extra cleaning time due to heavy soiling.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Payments</h2>
                    <p>
                        Payment is due upon completion of services unless otherwise agreed. We accept cash, credit/debit cards, and mobile payments.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Cancellations & Rescheduling</h2>
                    <p>
                        We understand that plans can change! If you need to cancel or reschedule, please notify us as soon as possible.
                        Cancellations made <span className="font-semibold">within 24 hours</span> of your appointment will result in the forfeiture of your full 20% deposit.
                        Cancellations made <span className="font-semibold">more than 24 hours</span> in advance will be refunded 50% of the deposit to cover administrative and preparation costs.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Liability</h2>
                    <p>
                        We take the utmost care when handling your vehicle. However, Archiv Auto, LLC is not responsible for pre-existing damage, wear and tear, or damage caused by hidden defects. You acknowledge that certain services, such as paint correction, involve inherent risks.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Customer Responsibilities</h2>
                    <p>
                        For mobile services, you must provide a safe, legal, and accessible location for the detailing work. You are responsible for removing valuables from your vehicle prior to service.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
                    <p>
                        We may use trusted third-party services for booking, payments, or communication. By using our services, you agree to their terms as well.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Changes to These Terms</h2>
                    <p>
                        We may update these Terms at any time. Changes will be posted on this page with an updated date.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at <span className="font-semibold">autoaftercare@gmail.com</span> or <span className="font-semibold">(425) 306-2183</span>.
                    </p>
                </div>
            </Section>
        </div>
    );
}