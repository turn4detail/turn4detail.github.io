import Hero from "../components/Hero";
import Section from "../components/Section";

export default function PrivacyPolicy() {
    return (
        <div>
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
                        Last updated: July 3rd, 2025
                    </p>

                    <p>
                        Auto After Care, LLC (“we”, “us”, or “our”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or our auto detailing services (both mobile and studio).
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                    <p>
                        We may collect information you voluntarily provide when you schedule an appointment, request a quote, or contact us — such as your name, phone number, email address, vehicle details, and location (for mobile services).
                    </p>
                    <p>
                        We may also automatically collect certain non-personal information about your device and usage when you visit our website, such as IP address, browser type, and pages viewed.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Provide our car detailing services (mobile and studio)</li>
                        <li>Schedule appointments and manage bookings</li>
                        <li>Communicate with you about your services or inquiries</li>
                        <li>Send reminders, updates, and promotions (if you opt in)</li>
                        <li>Improve our website and customer experience</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
                    <p>
                        We may use trusted third-party services to help us operate our business — such as online scheduling tools, payment processors, or customer communication platforms. These third parties may collect and process your information according to their own privacy policies.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Cookies and Tracking</h2>
                    <p>
                        Our website may use cookies or similar technologies to collect usage data and improve your browsing experience. You can choose to disable cookies through your browser settings.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">How We Protect Your Information</h2>
                    <p>
                        We take reasonable steps to protect your personal information and keep it secure. However, please remember that no method of online transmission or electronic storage is 100% secure.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
                    <p>
                        You may request to access, update, or delete your personal information at any time by contacting us.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <span className="font-semibold">autoaftercare@gmail.com</span> or <span className="font-semibold">(425) 306-2183</span>.
                    </p>
                </div>
            </Section>
        </div>
    );

}