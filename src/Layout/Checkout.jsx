import useNavContext from "../hooks/use-navs-context";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";
import CheckoutForm from "../Components/CheckoutForm";
import Loader from "../Components/Loader";

function Checkout() {
    const { elementRefs } = useNavContext();
    const [clientSecret, setClientSecret] = useState("");
    const [paymentID, setPaymentID] = useState("");
    const [loading, setLoading] = useState(true);

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
                    })
                    .finally(() => {
                        setLoading(false);
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

    return (
        <div className="flex flex-col w-full lg:py-20 font-pt-sans">
            <div className="flex flex-row w-full text-center pt-8 pl-10">
                <h1 className="text-primary-2 text-4xl">EXPRESS CHECKOUT</h1>
            </div>
            {/* {loading ? (
                <Loader></Loader>
            ) : (
                clientSecret && (
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm
                            clientSecret={clientSecret}
                            stripePromise={stripePromise}
                            paymentID={paymentID}
                        ></CheckoutForm>
                    </Elements>
                )
            )} */}
            {loading ? (
                <Loader></Loader>
            ) : (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm
                        clientSecret={clientSecret}
                        stripePromise={stripePromise}
                        paymentID={paymentID}
                    ></CheckoutForm>
                </Elements>
            )}
        </div>
    );
}

export default Checkout;
