import {
    useStripe,
    useElements,
    PaymentElement,
    CardElement,
} from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../store";

const CheckoutForm = ({ clientSecret, stripePromise, paymentID }) => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [order, results] = useCreateOrderMutation();

    const { subtotal, shipping, tax, total, shippingOption } = useSelector(
        (state) => state.cart.total[0]
    );

    const { firstName, lastName, email, streetAdd1, streetAdd2, phone } =
        useSelector((state) => state.cart.address[0]);

    const orderData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        streetAdd1: streetAdd1,
        streetAdd2: streetAdd2,
        phone: phone,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        shippingOption: shippingOption,
    };

    const isRegistered = () => {
        localStorage.setItem("isRegistered", true);
    };

    const submitSpinner = () => {
        setIsSubmitted((prevState) => !prevState);
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        submitSpinner();

        try {
            const stripe = await stripePromise;

            if (!stripe || !elements) {
                // Stripe.js hasn't yet loaded.
                // Make sure to disable form submission until Stripe.js has loaded.
                return;
            }

            isRegistered();
            const returnData = await order(orderData);

            console.log(returnData.data.Message._id);

            const result = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
                    return_url: `http://localhost:5173/success?id=${returnData.data.Message._id}`,
                    // return_url:
                    //     "https://mastermind-website-project.vercel.app/success",
                },
            });

            if (result.error) {
                // Show error to your customer (for example, payment details incomplete)
                console.log(result.error.message);
            } else {
                submitSpinner();
            }
        } catch (error) {
            // Handle errors here
            console.error("Mutation error:", error);
        }
    };

    return (
        <form className="form-checkout-container" onSubmit={handlePayment}>
            <h2 className="text-primary-2 text-2xl mb-10">Payment Method</h2>
            <PaymentElement />
            <div className="flex flex-col mt-16 p-10 text-xl">
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">SUBTOTAL</p>
                    <p>{`$${subtotal.toFixed(2)}`}</p>
                </div>
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">SHIPPING</p>
                    <p>{`$${shipping.toFixed(2)}`}</p>
                </div>
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">TAX</p>
                    <p>{`$${tax.toFixed(2)}`}</p>
                </div>
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">TOTAL</p>
                    <p>{`$${total.toFixed(2)}`}</p>
                </div>
            </div>
            <button
                className="flex justify-center items-center bg-primary-2 text-white rounded-[8px] border-2 h-12 px-16 mt-10 w-full hover:cursor-pointer"
                disabled={!stripe}
            >
                {isSubmitted ? (
                    <ImSpinner3 className="text-2xl animate-spin"></ImSpinner3>
                ) : (
                    "Checkout"
                )}
            </button>
        </form>
    );
};

export default CheckoutForm;
