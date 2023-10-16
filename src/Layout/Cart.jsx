import useNavContext from "../hooks/use-navs-context";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { useState } from "react";
import { updateQuantity, removeItem } from "../store/index";
import { addTotal } from "../store/index";

function Cart() {
    const dispatch = useDispatch();
    const { elementRefs } = useNavContext();
    const navigate = useNavigate();
    const [shippingFee, setShippingFee] = useState(30);
    const [shippingOption, setShippingOption] = useState("Delivery");
    const [isLoading, setIsLoading] = useState(false);
    const tax = 0;
    let subTotal = 0;
    let total = 0;

    const handleCheckout = (
        subTotal,
        shippingFee,
        tax,
        total,
        shippingOption
    ) => {
        dispatch(
            addTotal({
                subTotal,
                shippingFee,
                tax,
                total,
                shippingOption,
            })
        );
        navigate("/shipping", { state: { authorized: true } });
    };

    const handleBackToShop = () => {
        navigate("/shop");
    };

    const handleMinusQuantity = (productId, currentQuantity) => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            dispatch(updateQuantity({ productId, newQuantity }));
        }
    };

    const handleAddQuantity = (productId, currentQuantity) => {
        const newQuantity = currentQuantity + 1;
        dispatch(updateQuantity({ productId, newQuantity }));
    };

    const handleShippingFee = (value) => {
        setShippingFee(value);
    };

    const removeProd = (productId) => {
        dispatch(removeItem({ productId }));
    };

    const cart = useSelector((state) => state.cart.cart);

    const cartList = cart.map((data) => {
        return (
            <div key={data.id} className="flex flex-row">
                <div className="flex flex-col lg:flex-row mt-6 lg:mt-0 bg-white  border-outline h-full lg:h-[420px] w-full border-b">
                    <div className="flex flex-grow w-full lg:w-2/5 flex-row  justify-center items-center">
                        <img
                            className="h-72 w-72 border border-outline"
                            src={data.image}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col flex-grow w-full lg:w-3/5 justify-center items-center">
                        <div className="flex flex-row text-center w-full">
                            <div className="flex flex-row justify-between p-10 lg:-translate-y-10 w-full">
                                <p className="text-xl">{data.name}</p>
                                <div className="flex flex-row">
                                    <p className="text-xl">{`$${data.price}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center text-center w-full">
                            <div className="flex flex-col lg:flex-row justify-center items-center p-10 w-full">
                                <div className="flex items-center justify-center">
                                    <button
                                        className="bg-primary-gray-2 p-3 hover:cursor-pointer text-white"
                                        onClick={() =>
                                            handleMinusQuantity(
                                                data.id,
                                                data.quantity
                                            )
                                        }
                                    >
                                        <PiMinusBold></PiMinusBold>
                                    </button>
                                    <div className="text-sm w-24 h-10 p-3 text-center border border-outline">
                                        {data.quantity}
                                    </div>
                                    <button
                                        className="bg-primary-gray-2 p-3 hover:cursor-pointer text-white"
                                        onClick={() =>
                                            handleAddQuantity(
                                                data.id,
                                                data.quantity
                                            )
                                        }
                                    >
                                        <PiPlusBold></PiPlusBold>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center text-center w-full">
                            <div className="flex flex-row w-full lg:w-1/2">
                                <button
                                    className="p-4 w-full text-white bg-primary-gray-2"
                                    onClick={() => removeProd(data.id)}
                                >
                                    REMOVE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    const orderList = cart.map((data) => {
        return (
            <div key={data.id} className="flex flex-row justify-between pb-4">
                <p>{data.name}</p>
                <p>{`$${data.price * data.quantity}`}</p>
            </div>
        );
    });

    subTotal = cart.reduce((acc, product) => {
        const subtotal = product.price * product.quantity;
        return acc + subtotal;
    }, 0);

    total = parseFloat(subTotal) + parseFloat(shippingFee);

    return (
        <div className="relative h-screen" ref={elementRefs.supplements}>
            <div className="flex flex-col lg:flex-row h-screen">
                <div className="flex flex-col flex-grow w-full lg:w-3/5 p-10 font-pt-sans">
                    <div
                        className="flex flex-row w-full text-center mb-2 hover:cursor-pointer"
                        onClick={handleBackToShop}
                    >
                        <div className="p-[2px] pr-3">
                            <TfiArrowCircleLeft size={26}></TfiArrowCircleLeft>
                        </div>
                        <h1 className="text-primary-2 text-2xl mb-6">
                            Back to Shop
                        </h1>
                    </div>
                    <div className="flex flex-row w-full text-center">
                        <h1 className="text-primary-2 text-4xl mb-6">CART</h1>
                        <p className="p-2">
                            ({cartList.length} items : ${subTotal})
                        </p>
                    </div>
                    <div className="flex flex-row text-center text-lg">
                        <p>HOW TO GET IT</p>
                    </div>
                    <div className="flex flex-col lg:flex-row text-lg">
                        <div className="border border-outline w-full h-[120px] mb-2 lg:m-2 p-4">
                            <input
                                type="radio"
                                id="html"
                                name="delivery"
                                value="HTML"
                                defaultChecked="checked"
                                onClick={() => handleShippingFee(30.0)}
                            ></input>
                            <label className="m-2" htmlFor="html">
                                Delivery
                            </label>
                            <p className="m-2 ml-5">
                                Local or International Shipping $30.00
                            </p>
                            <br></br>
                        </div>
                        <div className="border border-outline w-full h-[120px] lg:m-2 p-4">
                            <input
                                type="radio"
                                id="html"
                                name="delivery"
                                value="HTML"
                                onClick={() => handleShippingFee(0.0)}
                            ></input>
                            <label className="ml-2" htmlFor="html">
                                Pick Up
                            </label>
                            <p className="m-2 ml-5">In Store $0.00</p>
                            <br></br>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="border bg-tertiary-1 text-white w-full mt-4 lg:m-2 p-4">
                            <h3 className="text-2xl">DELIVERY</h3>
                        </div>
                    </div>
                    {cartList.length === 0 && (
                        <div className="flex flex-row">
                            <div className="w-full mt-4 lg:m-2 p-4">
                                <h3 className="text-2xl">
                                    NO ITEMS ADDED TO CART
                                </h3>
                            </div>
                        </div>
                    )}
                    <div className="overflow-y-scroll">{cartList}</div>
                </div>

                <div className="flex-grow w-full lg:w-2/5 flex-row font-pt-sans border-l border-outline p-10 py-20">
                    <h1 className=" text-primary-2 text-4xl mb-6">
                        ORDER SUMMARY
                    </h1>
                    {cartList.length === 0 && (
                        <h1 className=" text-primary-2 text-2xl mb-6">
                            You have no items in your cart.
                        </h1>
                    )}
                    <div className="flex flex-col text-lg">{orderList}</div>
                    <div className="flex flex-col border-y border-outline mt-16 p-10 text-xl">
                        <div className="flex flex-row justify-between pb-4">
                            <p className="font-bold">SUBTOTAL</p>
                            <p>{`$${subTotal.toFixed(2)}`}</p>
                        </div>
                        <div className="flex flex-row justify-between pb-4">
                            <p className="font-bold">SHIPPING</p>
                            <p>{`$${shippingFee.toFixed(2)}`}</p>
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

                    {cartList.length !== 0 && (
                        <div className="flex flex-col mt-20">
                            <div className="flex flex-row justify-between pb-4">
                                <p className="font-bold">ADD A COUPON CODE</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <input
                                    className="border h-14 w-full mr-4"
                                    type="text"
                                />
                                <button className="px-10 h-14 text-white bg-primary-gray-2 font-bold">
                                    APPLY
                                </button>
                            </div>
                        </div>
                    )}

                    {cartList.length !== 0 ? (
                        <div className="flex flex-col mt-6">
                            <button
                                className="px-10 h-14 text-white bg-primary-gray-2 font-bold text-xl"
                                onClick={() =>
                                    handleCheckout(
                                        subTotal,
                                        shippingFee,
                                        tax,
                                        total,
                                        shippingOption
                                    )
                                }
                            >
                                EXPRESS CHECKOUT
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col mt-6">
                            <button
                                className="px-10 h-14 text-white bg-primary-gray-2 font-bold text-xl"
                                onClick={() => handleBackToShop()}
                            >
                                CONTINUE SHOPPING
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
