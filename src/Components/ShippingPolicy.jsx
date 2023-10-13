import Navigation from "../Layout/Navigation";

function ShippingPolicy() {
    return (
        <div className="flex flex-col font-pt-sans p-20">
            <h3 className="text-primary-gray-4 text-center font-bold text-4xl mb-6">
                ACTIVE LIFT SHIPPING POLICY
            </h3>
            <p className="text-xl p-2">
                Shipping Policy for Active Lift - Your Trusted Gym Supplement
                Retailer
            </p>
            <p className="text-xl p-2">Effective Date: October 2023</p>

            <p className="p-2">
                At Active Lift, we are committed to providing you with a
                seamless shopping experience, including reliable and efficient
                shipping. This Shipping Policy outlines important information
                about our shipping practices.
            </p>
            <p className="font-bold p-2">1. Shipping Methods:</p>
            <p className="p-2">
                We offer the following shipping methods for your convenience:
            </p>
            <ul className="list-disc pl-6">
                <li>Standard Shipping: 5 to 7 days.</li>
                <li>Express Shipping: 3 to 5 days.</li>
                <li>
                    International Shipping: 10 to 45 days depending on location
                    (Additional fees may apply)
                </li>
            </ul>
            <p className="font-bold p-2">2. Order Processing:</p>
            <ul className="list-disc pl-6">
                <li>
                    Orders are typically processed within 1 to 2 business days.
                </li>
                <li>
                    You will receive a confirmation email with tracking
                    information once your order has been shipped.
                </li>
            </ul>
            <p className="font-bold p-2">3. Shipping Costs:</p>
            <p className="p-2">Shipping costs are calculated based on:</p>
            <ul className="list-disc pl-6">
                <li>Your shipping destination.</li>
                <li>
                    The weight and dimensions of the products in your order.
                </li>
                <li>The selected shipping method.</li>
            </ul>
            <p className="p-2">
                Shipping costs will be displayed at checkout for your review
                before finalizing your purchase.
            </p>
            <p className="font-bold p-2">4. Estimated Delivery Times:</p>
            <p className="p-2">
                Delivery times are approximate and may vary based on your
                location, shipping method, and other factors. We provide
                estimated delivery times at the time of purchase, but please
                note that these are not guaranteed delivery dates.
            </p>
            <p className="font-bold p-2">5. International Shipping:</p>
            <p className="p-2">
                For international orders, customs and import duties may apply.
                These charges are the responsibility of the recipient and are
                not included in our shipping fees. Please check with your local
                customs office for more information on potential fees.
            </p>
            <p className="font-bold p-2">6. Shipping Restrictions:</p>
            <p className="p-2">
                We are unable to ship to certain locations due to legal
                restrictions or other limitations. If you have concerns about
                shipping to your area, please contact our customer support team
                for assistance.
            </p>
            <p className="font-bold p-2">7. Order Tracking:</p>
            <p className="p-2">
                Once your order is shipped, you will receive a tracking number
                that allows you to monitor the progress of your delivery. Please
                note that tracking information may take some time to become
                available.
            </p>
            <p className="font-bold p-2">8. Shipping Delays:</p>
            <p className="p-2">
                While we make every effort to ensure timely delivery, unforeseen
                circumstances such as weather events or carrier delays may
                affect delivery times. We appreciate your patience during such
                instances.
            </p>
            <p className="font-bold p-2">9. Contact Us:</p>
            <p className="p-2 pb-20">
                If you have any questions or need assistance regarding your
                order or shipping, please do not hesitate to contact our
                customer support team at +63 921 123 4341. Thank you for
                choosing Active Lift for your gym supplement needs. We
                appreciate your trust in us and look forward to serving you.
            </p>
            <div className="flex justify-center items-center">
                <Navigation isLink={true}></Navigation>
            </div>
        </div>
    );
}

export default ShippingPolicy;
