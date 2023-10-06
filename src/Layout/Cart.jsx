import useNavContext from "../hooks/use-navs-context";
import exploreImg from "../assets/images/products/optimum-nutrition.jpg";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Cart() {
    const { elementRefs } = useNavContext();
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/success");
    };

    return (
        <div className="relative h-screen" ref={elementRefs.supplements}>
            <div className="flex flex-col lg:flex-row h-screen">
                <div className="flex flex-col flex-grow w-full lg:w-3/5 p-10 font-pt-sans">
                    <div className="flex flex-row w-full text-center">
                        <h1 className="text-primary-2 text-4xl mb-6">CART</h1>
                        <p>(2 items : $89.98)</p>
                    </div>
                    <div className="flex flex-row text-center text-lg">
                        <p>HOW TO GET IT</p>
                    </div>
                    <div className="flex flex-row text-lg">
                        <div className="border border-outline w-full h-[120px] m-2 p-4">
                            <input
                                type="radio"
                                id="html"
                                name="fav_language"
                                value="HTML"
                            ></input>
                            <label className="m-2" for="html">
                                Delivery
                            </label>
                            <p className="m-2 ml-5">
                                Local or International Shipping $39.00
                            </p>
                            <br></br>
                        </div>
                        <div className="border border-outline w-full h-[120px] m-2 p-4">
                            <input
                                type="radio"
                                id="html"
                                name="fav_language"
                                value="HTML"
                            ></input>
                            <label className="ml-2" for="html">
                                Pick Up
                            </label>
                            <p className="m-2 ml-5">In Store $0.00</p>
                            <br></br>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="border bg-tertiary-1 text-white w-full m-2 p-4">
                            <h3 className="text-2xl">DELIVERY</h3>
                        </div>
                    </div>
                    <div className="overflow-y-scroll">
                        <div className="flex flex-row">
                            <div className="flex flex-row bg-white border-b border-outline h-[420px] w-full">
                                <div className="flex flex-grow w-2/5 flex-row  justify-center items-center">
                                    <img
                                        className="h-72 w-72 border border-outline"
                                        src={exploreImg}
                                        alt=""
                                    />
                                </div>

                                <div className="flex flex-col flex-grow w-3/5 justify-center items-center">
                                    <div className="flex flex-row text-center w-full">
                                        <div className="flex flex-row justify-between p-10 lg:-translate-y-10 w-full">
                                            <p className="text-xl">
                                                ON Gold Standard Whey 5lbs
                                            </p>
                                            <div className="flex flex-row">
                                                <p className="text-xl">
                                                    $200.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-center w-full">
                                        <div className="flex flex-col lg:flex-row justify-between p-10 w-full">
                                            <select
                                                className="p-4 pr-4 text-primary-gray-3 border"
                                                name="cars"
                                                id="cars"
                                            >
                                                <option value="volvo">
                                                    Quantity
                                                </option>
                                                <option value="volvo">
                                                    BCAAs
                                                </option>
                                                <option value="saab">
                                                    Creatine
                                                </option>
                                                <option value="mercedes">
                                                    Fat Burners
                                                </option>
                                                <option value="audi">
                                                    Mass Gainers
                                                </option>
                                                <option value="audi">
                                                    Mass Gainers
                                                </option>
                                            </select>
                                            <div className="flex flex-row ">
                                                <button className="p-4 w-full text-white bg-primary-gray-2">
                                                    REMOVE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row pl-10 ">
                            <div className="flex flex-row bg-white border-b border-outline h-[420px] w-full m-4">
                                <div className="flex flex-grow w-2/5 flex-row  justify-center items-center">
                                    <img
                                        className="h-72 w-72 border border-outline"
                                        src={exploreImg}
                                        alt=""
                                    />
                                </div>

                                <div className="flex flex-col flex-grow w-3/5 justify-center items-center">
                                    <div className="flex flex-row text-center w-full">
                                        <div className="flex flex-row justify-between p-10 -translate-y-10 w-full">
                                            <p className="text-xl">
                                                ON Gold Standard Whey 5lbs
                                            </p>
                                            <div className="flex flex-row">
                                                <p className="text-xl">
                                                    $200.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-center w-full">
                                        <div className="flex flex-row justify-between p-10 w-full">
                                            <select
                                                className="p-4 text-primary-gray-3 border"
                                                name="cars"
                                                id="cars"
                                            >
                                                <option value="volvo">
                                                    Quantity
                                                </option>
                                                <option value="volvo">
                                                    BCAAs
                                                </option>
                                                <option value="saab">
                                                    Creatine
                                                </option>
                                                <option value="mercedes">
                                                    Fat Burners
                                                </option>
                                                <option value="audi">
                                                    Mass Gainers
                                                </option>
                                                <option value="audi">
                                                    Mass Gainers
                                                </option>
                                            </select>
                                            <div className="flex flex-row ">
                                                <button className="px-10 text-white bg-primary-gray-2">
                                                    REMOVE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row pl-10 ">
                            <div className="flex flex-row bg-white border-b border-outline h-[420px] w-full m-4">
                                <div className="flex flex-grow w-2/5 flex-row  justify-center items-center">
                                    <img
                                        className="h-72 w-72 border border-outline"
                                        src={exploreImg}
                                        alt=""
                                    />
                                </div>

                                <div className="flex flex-col flex-grow w-3/5 justify-center items-center">
                                    <div className="flex flex-row text-center w-full">
                                        <div className="flex flex-row justify-between p-10 -translate-y-10 w-full">
                                            <p className="text-xl">
                                                ON Gold Standard Whey 5lbs
                                            </p>
                                            <div className="flex flex-row">
                                                <p className="text-xl">
                                                    $200.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-center w-full">
                                        <div className="flex flex-row justify-between p-10 w-full">
                                            <select
                                                className="p-4 text-primary-gray-3 border"
                                                name="cars"
                                                id="cars"
                                            >
                                                <option value="volvo">
                                                    Quantity
                                                </option>
                                                <option value="volvo">
                                                    BCAAs
                                                </option>
                                                <option value="saab">
                                                    Creatine
                                                </option>
                                                <option value="mercedes">
                                                    Fat Burners
                                                </option>
                                                <option value="audi">
                                                    Mass Gainers
                                                </option>
                                                <option value="audi">
                                                    Mass Gainers
                                                </option>
                                            </select>
                                            <div className="flex flex-row ">
                                                <button className="px-10 text-white bg-primary-gray-2">
                                                    REMOVE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row pl-10 ">
                            <div className="flex flex-row bg-white border-b border-outline h-[420px] w-full m-4">
                                <div className="flex flex-grow w-2/5 flex-row  justify-center items-center">
                                    <img
                                        className="h-72 w-72 border border-outline"
                                        src={exploreImg}
                                        alt=""
                                    />
                                </div>

                                <div className="flex flex-col flex-grow w-3/5 justify-center items-center">
                                    <div className="flex flex-row text-center w-full">
                                        <div className="flex flex-row justify-between p-10 -translate-y-10 w-full">
                                            <p className="text-xl">
                                                ON Gold Standard Whey 5lbs
                                            </p>
                                            <div className="flex flex-row">
                                                <p className="text-xl">
                                                    $200.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-center w-full">
                                        <div className="flex flex-row justify-between p-10 w-full">
                                            <select
                                                className="p-4 text-primary-gray-3 border"
                                                name="cars"
                                                id="cars"
                                            >
                                                <option value="volvo">
                                                    Quantity
                                                </option>
                                                <option value="volvo">
                                                    BCAAs
                                                </option>
                                                <option value="saab">
                                                    Creatine
                                                </option>
                                                <option value="mercedes">
                                                    Fat Burners
                                                </option>
                                                <option value="audi">
                                                    Mass Gainers
                                                </option>
                                                <option value="audi">
                                                    Mass Gainers
                                                </option>
                                            </select>
                                            <div className="flex flex-row ">
                                                <button className="px-10 text-white bg-primary-gray-2">
                                                    REMOVE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-grow w-full lg:w-2/5 flex-row font-pt-sans border-l border-outline p-10 py-20">
                    <h1 className=" text-primary-2 text-4xl mb-6">
                        ORDER SUMMARY
                    </h1>
                    <div className="flex flex-col text-lg">
                        <div className="flex flex-row justify-between pb-4">
                            <p>ON Gold Standard Whey 5lbs</p>
                            <p>$200.00</p>
                        </div>
                        <div className="flex flex-row justify-between pb-4">
                            <p>ON Gold Standard Whey 5lbs</p>
                            <p>$200.00</p>
                        </div>
                        <div className="flex flex-row justify-between pb-4">
                            <p>ON Gold Standard Whey 5lbs</p>
                            <p>$200.00</p>
                        </div>
                    </div>
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

                    <div className="flex flex-col mt-20">
                        <div className="flex flex-row justify-between pb-4">
                            <p className="font-bold">ADD A COUPON CODE</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <input className="border h-14 w-1/2" type="text" />
                            <button className="px-10 h-14 text-white bg-primary-gray-2 font-bold">
                                APPLY
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col mt-6">
                        <button
                            className="px-10 h-14 text-white bg-primary-gray-2 font-bold text-xl"
                            onClick={() => handleCheckout()}
                        >
                            EXPRESS CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
