import Helmet from "react-helmet";
import Hero from "../components/Hero";
import Section from "../components/Section";

export default function PrivacyPolicy() {
    return (
        <div>
            <Helmet>
                <title>Privacy Policy | Turn 4 Detail</title>
            </Helmet>

            <Hero
                bg="/background/privacy-policy-bg.jpg"
                subheading="Learn how we collect, use, and protect your information."
                heading=""
                highlight="PRIVACY POLICY"
            />

            <Section bgColor="bg-white">
                <div className="text-zinc-800 max-w-7xl text-xl mx-auto px-4 md:px-12 lg:px-24 py-12 space-y-3 leading-relaxed">
                    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                    <p>
                        Last updated: September 24th, 2025
                    </p>

                    <p>
                        SECTION 6 LLC, operating as <span className="font-semibold">Turn 4 Detailing</span> (“we,” “us,” or “our”), values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website, mobile and studio detailing services, or purchase products through our online store.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                    <p>
                        We may collect personal information that you voluntarily provide when you schedule an appointment, request a quote, place an order, or contact us—such as your name, phone number, email address, vehicle details, and service location (for mobile services).
                    </p>
                    <p>
                        We may also automatically collect certain non-personal information when you visit our website, such as your IP address, browser type, and pages viewed.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Provide and fulfill our detailing services (mobile and studio)</li>
                        <li>Schedule and manage bookings through <span className="font-semibold">Urable</span></li>
                        <li>Process orders and payments through <span className="font-semibold">Shopify</span></li>
                        <li>Communicate with you regarding your services, purchases, or inquiries</li>
                        <li>Send reminders, updates, and promotions (if you choose to opt in)</li>
                        <li>Improve our website, services, and customer experience</li>
                        <li>Comply with state and federal legal obligations (we are a registered reseller in Washington State)</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
                    <p>
                        We may use trusted third-party platforms to help us operate our business, such as:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li><span className="font-semibold">Urable</span> – for client booking, scheduling, and reminders</li>
                        <li><span className="font-semibold">Shopify</span> – for online store management, payment processing, and product distribution</li>
                    </ul>
                    <p>
                        These third parties may collect and process your information according to their own privacy policies. We do not sell or trade your personal data.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Cookies and Tracking</h2>
                    <p>
                        Our website may use cookies or similar technologies to collect usage data, track analytics, and improve your browsing experience. You can disable cookies through your browser settings, but some features may not function properly.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">How We Protect Your Information</h2>
                    <p>
                        We take reasonable administrative, technical, and physical safeguards to protect your personal information. However, please note that no method of online transmission or electronic storage is 100% secure.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
                    <p>
                        You may request access to, correction of, or deletion of your personal information at any time by contacting us. You may also opt out of receiving promotional communications.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. Any updates will be posted on this page with a revised “Last updated” date.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <span className="font-semibold">steven@turn4detail.com</span> or <span className="font-semibold">(425) 306-2183</span>.
                    </p>
                </div>
            </Section>

        </div>
    );

}