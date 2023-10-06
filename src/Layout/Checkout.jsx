import useNavContext from "../hooks/use-navs-context";
import exploreImg from "../assets/images/products/optimum-nutrition.jpg";
import { FaStar } from "react-icons/fa";
import CheckoutForm from "../Components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";

function Checkout() {
    const { elementRefs } = useNavContext();
    const [clientSecret, setClientSecret] = useState("");
    const [paymentID, setPaymentID] = useState("");

    const stripePromise = loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );

    const baseURL = "http://localhost:3000/";

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                axios
                    .post(`${baseURL}create-payment-intent`, {
                        amount: 50,
                    })
                    .then((response) => {
                        setClientSecret(response.data.client_secret);
                        setPaymentID(response.data.id);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchClientSecret();
    }, []);

    const options = {
        // passing the client secret obtained from the server
        clientSecret: clientSecret,
    };

    console.log(clientSecret);
    console.log(options);

    return (
        <div className="relative h-screen" ref={elementRefs.supplements}>
            {clientSecret && (
                <div className="flex flex-col lg:flex-row h-screen">
                    <div className="flex flex-col flex-grow w-full lg:w-1/2 lg:py-20 font-pt-sans">
                        <div className="flex flex-row w-full text-center pl-10">
                            <h1 className="text-primary-2 text-4xl">
                                EXPRESS CHECKOUT
                            </h1>
                        </div>

                        <div className="flex flex-col bg-primary-gray-1 p-20 m-10 border">
                            <h2 className="text-primary-2 text-2xl mb-6">
                                Shipping Address
                            </h2>
                            <div className="flex flex-row w-full mb-6">
                                <div className="flex flex-col w-full p-2">
                                    <label className="pb-4">First Name</label>
                                    <input
                                        className="w-full p-2 border"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col w-full p-2">
                                    <label className="pb-4">Last Name</label>
                                    <input
                                        className="w-full p-2 border"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row w-full mb-6">
                                <div className="flex flex-col w-full p-2">
                                    <label className="pb-4">Email</label>
                                    <input
                                        className="w-full p-2 border"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row w-full mb-6">
                                <div className="flex flex-col w-full p-2">
                                    <label className="pb-4">
                                        Street Address
                                    </label>
                                    <input
                                        className="w-full border p-2 mb-6"
                                        type="text"
                                    />
                                    <input
                                        className="w-full border p-2"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row w-full mb-6">
                                <div className="flex flex-col w-full p-2">
                                    <label className="pb-4">
                                        State/Province
                                    </label>
                                    <input
                                        className="w-full border p-2"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col w-full p-2">
                                    <label className="pb-4">City</label>
                                    <input
                                        className="w-full border p-2"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row w-full ">
                                <div className="flex flex-col w-full p-2">
                                    <label className="pb-4">
                                        Zip/Postal Code
                                    </label>
                                    <input
                                        className="w-full border p-2"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col w-full p-2">
                                    <label className="pb-4">Phone</label>
                                    <input
                                        className="w-full border p-2"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow w-full lg:w-1/2 flex-row font-pt-sans border-outline p-10 py-10 lg:py-20">
                        <div className="flex flex-col bg-primary-gray-1 p-20 lg:mt-20 border">
                            <h2 className="text-primary-2 text-2xl mb-10">
                                Payment Method
                            </h2>
                            <Elements stripe={stripePromise} options={options}>
                                <CheckoutForm
                                    clientSecret={clientSecret}
                                    stripePromise={stripePromise}
                                    paymentID={paymentID}
                                ></CheckoutForm>
                            </Elements>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
