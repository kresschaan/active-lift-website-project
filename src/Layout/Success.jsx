import successImg from "../assets/images/checkout/checkout-img.jpg";
import { FaCheckCircle } from "react-icons/fa";
import mainLogo from "../assets/images/main/black-logo.png";
// import { setRegister } from "../store/index";

function Success() {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const isRegistered = () => {
    //     localStorage.setItem("isRegistered", false);
    // };
    const handleConfirm = () => {
        // navigate("/login");
        // isRegistered();
    };

    return (
        <>
            <div className="absolute p-20">
                <img src={mainLogo} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row h-screen">
                <div className="flex flex-col flex-1 justify-center items-center text-justify absolute z-10 m-20 bg-white/90 rounded-xl shadow-md lg:relative lg:m-0 lg:rounded-none lg:shadow-none">
                    <div className="flex flex-row mt-20">
                        <FaCheckCircle className="text-3xl mx-2 mt-1 text-tertiary-1"></FaCheckCircle>
                        <h1 className="font-pt-sans text-2xl tracking-wider md:text-4xl lg:text-4xl">
                            Thank you for your order!
                        </h1>
                    </div>

                    <div
                        className="font-pt-sans w-full px-4 lg:px-20 py-14"
                        action=""
                    >
                        <div className="border p-10 mb-10">
                            <div className="mb-8 text-2xl">
                                <p>Customer Information</p>
                            </div>
                            <div className="mb-10">
                                <p>
                                    Your order is confirmed and we are getting
                                    it ready. A confirmation email has been sent
                                    to john@gmail.com. Check your email for
                                    updates on your order status.
                                </p>
                            </div>
                            <div className="flex flex-col justify-evenly xl:flex-row w-full">
                                <div className="flex flex-col py-10 lg:p-10">
                                    <h2>Shipping Address:</h2>
                                    <p>John Smith</p>
                                    <p>2132 Davis Drive Markham</p>
                                    <p>Lower East Canada</p>
                                    <p>Phone: 410-241-2341</p>
                                    <p>Shipping Method: Expedited Parcel</p>
                                </div>
                                <div className="flex flex-col py-10 lg:p-10">
                                    <h2>Payment Method:</h2>
                                    <p>VISA ending with 4242</p>

                                    <div className="flex flex-row justify-between mt-5">
                                        <h2>Shipping:</h2>
                                        <p>300.00</p>
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <h2>Tax:</h2>
                                        <p>0.00</p>
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <h2>Total:</h2>
                                        <p>8280.00</p>
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
                </div>

                <div className="flex flex-1 items-center h-full">
                    <img
                        className="object-cover relative h-full w-full"
                        src={successImg}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default Success;
