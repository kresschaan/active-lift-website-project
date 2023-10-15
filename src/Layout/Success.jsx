import { FaCheckCircle } from "react-icons/fa";
import { useFetchOrderQuery } from "../store/index";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Success() {
    let customerInfo = "";
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();

    const { data, error, isLoading } = useFetchOrderQuery(
        searchParams.get("id")
    );

    const handleConfirm = () => {
        navigate("/shop");
    };

    if (isLoading) {
        return <Loader></Loader>;
    }

    if (!isLoading) {
        const {
            firstName,
            lastName,
            email,
            phone,
            streetAdd1,
            streetAdd2,
            subtotal,
            tax,
            total,
            shipping,
            shippingOption,
        } = data;

        customerInfo = (
            <div className="font-pt-sans w-full px-4 lg:px-20 pb-14" action="">
                <div className="lg:border lg:border-outline p-10 lg:mb-10">
                    <div className="mb-8 text-2xl">
                        <p>Customer Information</p>
                    </div>
                    <div className="mb-10">
                        <p>
                            Your order is confirmed and we are getting it ready.
                            A confirmation email has been sent to {email}. Check
                            your email for updates on your order status.
                        </p>
                    </div>
                    <div className="flex flex-col justify-evenly xl:flex-row w-full">
                        <div className="flex flex-col">
                            <h2>Shipping Address:</h2>
                            <p>{`${firstName} ${lastName}`}</p>
                            <p>{streetAdd1}</p>
                            <p>{streetAdd2}</p>
                            <p>Phone: {phone}</p>
                            <p>Shipping Method: {shippingOption}</p>
                        </div>
                        <div className="flex flex-col ">
                            <h2>Payment Method:</h2>
                            <p>VISA ending with 4242</p>

                            <div className="flex flex-row justify-between mt-5">
                                <h2>Shipping:</h2>
                                <p>{`$${shipping}`}</p>
                            </div>

                            <div className="flex flex-row justify-between">
                                <h2>Tax:</h2>
                                <p>{`$${tax}`}</p>
                            </div>

                            <div className="flex flex-row justify-between">
                                <h2>Total:</h2>
                                <p>{`$${shipping}`}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <button
                        className="bg-primary-gray-3 font-pt-sans text-white text-xl font-bold rounded-[8px] border-2 p-4 hover:cursor-pointer"
                        onClick={() => handleConfirm()}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="hidden md:absolute p-20 z-30">
                <img src="/images/main/black-logo.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row h-screen">
                <div className="flex flex-col flex-1 justify-center items-center text-justify absolute z-10 bg-white/90 rounded-xl shadow-md lg:relative lg:rounded-none lg:shadow-none">
                    <div className="flex flex-row mt-20">
                        <FaCheckCircle className="text-3xl mx-2 mt-1 text-tertiary-1"></FaCheckCircle>
                        <h1 className="font-pt-sans text-2xl tracking-wider md:text-4xl lg:text-4xl lg:mb-16">
                            Thank you for your order!
                        </h1>
                    </div>

                    {customerInfo}
                </div>

                <div className="flex flex-1 items-center w-screen h-full">
                    <img
                        className="object-cover relative h-full w-full"
                        src="/images/checkout/checkout-img.jpg"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default Success;
