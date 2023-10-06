import Navigation from "../Layout/Navigation";

function ShippingPolicy() {
    return (
        <div className="flex flex-col font-pt-sans p-20">
            <h3 className="text-primary-gray-4 text-center font-bold text-4xl mb-6">
                ACTIVE LIFT RETURNS AND REFUND POLICY
            </h3>
            <p className="text-xl p-2">
                Returns and Refund Policy for Active Lift - Your Trusted Gym
                Supplement Retailer
            </p>
            <p className="text-xl p-2">Effective Date: October 2023</p>

            <p className="p-2">
                At Active Lift, we are committed to providing high-quality gym
                supplements and outstanding customer service. If you are not
                completely satisfied with your purchase, we are here to assist
                you. Please read our returns and refund policy carefully to
                understand your rights and responsibilities.
            </p>
            <p className="font-bold p-2">1. Returns Eligibility:</p>
            <p className="p-2">
                We accept returns for products that meet the following criteria:
            </p>
            <ul className="list-disc pl-6">
                <li>The product is unopened and in its original packaging.</li>
                <li>
                    The return is requested within 10 days from the date of
                    delivery.
                </li>
                <li>The product is not listed in the "Final Sale" category.</li>
            </ul>
            <p className="font-bold p-2">2. Return Process:</p>
            <p className="p-2">To initiate a return, follow these steps:</p>
            <ul className="list-disc pl-6">
                <li>
                    Contact our customer support team at +63 921 123 4341 to
                    request a Return Authorization (RA) number.
                </li>
                <li>
                    Pack the product securely in its original packaging,
                    including any accessories or promotional items.
                </li>
                <li>Include the RA number on the outside of the package.</li>
                <li>
                    Ship the product to the address provided by our customer
                    support team.
                </li>
            </ul>
            <p className="font-bold p-2">3. Return Shipping:</p>
            <ul className="list-disc pl-6">
                <li>
                    Customers are responsible for return shipping costs, unless
                    the return is due to our error (e.g., wrong item shipped,
                    damaged product).
                </li>
                <li>
                    We recommend using a trackable shipping method for returns
                    to ensure safe delivery.
                </li>
            </ul>
            <p className="font-bold p-2">4. Inspection and Refund:</p>
            <ul className="list-disc pl-6">
                <li>
                    Once we receive and inspect the returned product, we will
                    notify you of the status of your refund.
                </li>
                <li>
                    If the return is approved, a refund will be issued to your
                    original payment method within 5 to 45 business days.
                </li>
            </ul>
            <p className="font-bold p-2">5. Refund Amount:</p>
            <ul className="list-disc pl-6">
                <li>
                    The refund will include the purchase price of the returned
                    product, minus any applicable restocking fees (if
                    applicable) and original shipping charges (unless the return
                    is due to our error).
                </li>
                <li>
                    If a promotional discount or coupon was applied to your
                    original purchase, the refund will reflect the discounted
                    amount.
                </li>
            </ul>
            <p className="font-bold p-2">6. Final Sale Items:</p>
            <ul className="list-disc pl-6">
                <li>
                    Some items may be designated as "Final Sale," and they are
                    not eligible for returns or refunds. Please check the
                    product listing for any such information.
                </li>
            </ul>
            <p className="font-bold p-2">7. Damaged or Incorrect Items:</p>
            <ul className="list-disc pl-6">
                <li>
                    If you receive a damaged or incorrect product, please
                    contact our customer support team immediately. We will
                    provide instructions on how to proceed with a return or
                    exchange.
                </li>
            </ul>
            <p className="font-bold p-2">8. Contact Us:</p>
            <p className="p-2">
                If you have any questions or need assistance with the returns
                and refund process, please do not hesitate to contact our
                customer support team at +63 921 123 4341. Thank you for
                choosing Active Lift for your gym supplement needs. We value
                your satisfaction and are committed to providing a hassle-free
                returns and refund experience.
            </p>
            <div className="flex justify-center items-center">
                <Navigation></Navigation>
            </div>
        </div>
    );
}

export default ShippingPolicy;
