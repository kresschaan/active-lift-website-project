import Navigation from "../Layout/Navigation";

function PrivacyPolicy() {
    return (
        <div className="flex flex-col p-20 font-pt-sans">
            <h3 className="mb-6 text-center text-4xl font-bold text-primary-gray-4">
                ACTIVE LIFT PRIVACY POLICY
            </h3>
            <p className="p-2 text-xl">
                Privacy Policy for Active Lift - Your Trusted Gym Supplement
                Retailer
            </p>
            <p className="p-2 text-xl">Effective Date: October 2023</p>

            <p className="p-2">
                At Active Lift, we value and respect your privacy. This Privacy
                Policy explains how we collect, use, and protect your personal
                information when you visit our website, make purchases, or
                interact with us in any way.
            </p>
            <p className="p-2 font-bold">1. Information We Collect:</p>
            <p className="p-2">
                We may collect the following types of personal information when
                you use our website or make a purchase:
            </p>
            <ul className="list-disc pl-6">
                <li>
                    Contact Information (e.g., name, email address, phone
                    number).
                </li>
                <li>
                    Billing and Shipping Information (e.g., address, payment
                    details).
                </li>
                <li>Account Information (if you create an account).</li>
                <li>Order History and Preferences.</li>
                <li>Communications with our Customer Support.</li>
            </ul>
            <p className="p-2 font-bold">2. How We Use Your Information:</p>
            <p className="p-2">
                We use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6">
                <li>Processing and fulfilling your orders.</li>
                <li>Providing customer support and responding to inquiries.</li>
                <li>
                    Sending order updates, shipping notifications, and
                    account-related communications.
                </li>
                <li>
                    Personalizing your shopping experience and offering product
                    recommendations.
                </li>
                <li>Improving our website, products, and services.</li>
                <li>Complying with legal and regulatory requirements.</li>
            </ul>
            <p className="p-2 font-bold">3. Protection of Your Information:</p>
            <p className="p-2">
                We take the security of your personal information seriously and
                implement appropriate measures to protect it. These measures
                include secure data storage, encryption, and access controls.
            </p>
            <p className="p-2 font-bold">4. Cookies and Tracking:</p>
            <p className="p-2">
                We may use cookies and similar tracking technologies to enhance
                your browsing experience. You can manage your cookie preferences
                through your browser settings.
            </p>
            <p className="p-2 font-bold">5. Third-Party Services:</p>
            <p className="p-2">
                We may use third-party services and tools to enhance our
                website's functionality. These third parties may have their own
                privacy policies, and we encourage you to review them.
            </p>
            <p className="p-2 font-bold">6. Sharing Your Information:</p>
            <p className="p-2">
                We do not sell or rent your personal information to third
                parties. However, we may share your information with trusted
                partners and service providers who help us operate our business
                (e.g., payment processors, shipping companies).
            </p>
            <p className="p-2 font-bold">7. Your Choices:</p>
            <p className="p-2">You have the right to:</p>
            <ul className="list-disc pl-6">
                <li>Access and update your personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>
                    Request the deletion of your account and personal
                    information.
                </li>
                <li>Make inquiries or complaints regarding your data.</li>
            </ul>
            <p className="p-2 font-bold">8. Changes to this Privacy Policy:</p>
            <p className="p-2">
                We may update this Privacy Policy as our business evolves or due
                to legal requirements. We will notify you of any significant
                changes by posting a notice on our website.
            </p>
            <p className="p-2 font-bold">9. Contact Us:</p>
            <p className="p-2 pb-20">
                If you have questions or concerns about our privacy practices,
                please contact us at +63 921 123 4341. By using our website and
                services, you consent to the practices described in this Privacy
                Policy. We encourage you to review this policy periodically for
                any updates. Thank you for trusting Active Lift with your gym
                supplement needs.
            </p>
            <div className="flex items-center justify-center">
                <Navigation isLink={true}></Navigation>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
