import {
    useStripe,
    useElements,
    PaymentElement,
    CardElement,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";

const CheckoutForm = ({ clientSecret, stripePromise, paymentID }) => {
    const stripe = useStripe();
    const elements = useElements();
    // const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false);

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

            const result = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
                    // return_url: "http://localhost:5173/success",
                    return_url:
                        "https://mastermind-website-project.vercel.app/success",
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
        <form
            className="w-full  bg-white/90 rounded-lg shadow-md lg:rounded-none lg:shadow-none"
            onSubmit={handlePayment}
        >
            <PaymentElement />
            <div className="flex flex-col mt-16 p-10 text-xl">
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">SUBTOTAL</p>
                    <p>$200.00</p>
                </div>
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">SHIPPING</p>
                    <p>$200.00</p>
                </div>
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">TAX</p>
                    <p>$200.00</p>
                </div>
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">TOTAL</p>
                    <p>$200.00</p>
                </div>
            </div>
            <button
                className="flex justify-center items-center bg-primary-2 text-white rounded-[8px] border-2 h-12 px-16 mt-10 w-full hover:cursor-pointer"
                disabled={!stripe}
            >
                {isSubmitted ? (
                    <ImSpinner3 className="text-2xl animate-spin"></ImSpinner3>
                ) : (
                    "Submit"
                )}
            </button>
        </form>
    );
};

export default CheckoutForm;
