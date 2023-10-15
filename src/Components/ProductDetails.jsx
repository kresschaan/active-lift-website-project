import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchProductQuery } from "../store/index";
import { FaPhone, FaShippingFast } from "react-icons/fa";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import AddToCart from "./AddToCart";
import Navigation from "../Layout/Navigation";

function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const [variety, setVariety] = useState("");
    const [index, setIndex] = useState(1);
    const [isHiddenShip, setIsHiddenShip] = useState("false");
    const [isHiddenContact, setIsHiddenContact] = useState("false");
    const [mainImg, setMainImg] = useState();
    const { state } = useLocation();
    const { id } = state;
    const navigate = useNavigate();
    let images = "";
    let option = "";
    let varietyDropDown = "";
    let content = "";

    const { data, error, isLoading } = useFetchProductQuery(id);

    const handleAddQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleMinusQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantityInput = (quantity) => {
        setQuantity(quantity);
    };

    const handleVariety = (value) => {
        setVariety(value);
    };

    const toggleVisibilityShip = () => {
        setIsHiddenShip(!isHiddenShip);
    };

    const toggleVisibilityContact = () => {
        setIsHiddenContact(!isHiddenContact);
    };

    const handleNavToShop = () => {
        navigate("/shop");
    };

    const handleNavToCheckout = () => {
        navigate("/cart");
    };

    const handleImage = (img) => {
        setMainImg(img);
    };

    const handleIndex = (index) => {
        setIndex(index);
    };

    useEffect(() => {
        if (!isLoading && data) {
            setVariety(data.variant[0]);
        }
    }, [data, isLoading]);

    if (!isLoading) {
        images = data.image.map((img, index) => {
            return (
                <img
                    key={index}
                    className="w-48 h-48 border border-outline mb-2 hover:cursor-pointer"
                    alt={data.name}
                    src={img}
                    onClick={() => handleImage(img)}
                />
            );
        });

        option = data.variant.map((prod, index) => {
            return (
                <option
                    key={`${prod}_${index}`}
                    value={prod}
                    onChange={() => handleIndex(index)}
                >
                    {prod}
                </option>
            );
        });

        if (option.length > 0) {
            varietyDropDown = (
                <div className="py-6 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-lg font-pt-sans leading-4">Variety</p>
                    <div className="flex items-center justify-center">
                        <select
                            className="p-4 w-full text-primary-gray-3 border"
                            name="category"
                            id="category"
                            onChange={(e) => handleVariety(e.target.value)}
                        >
                            {option}
                        </select>
                    </div>
                </div>
            );
        }

        content = (
            <div className="relative h-full py-20">
                <div className="flex flex-row text-primary-1 justify-between pl-10 ">
                    <div
                        className="flex flex-row hover:cursor-pointer"
                        onClick={handleNavToShop}
                    >
                        <div className="p-1 pr-3">
                            <TfiArrowCircleLeft size={26}></TfiArrowCircleLeft>
                        </div>
                        <h1 className="font-pt-sans text-3xl mb-6">
                            Back to Shop
                        </h1>
                    </div>

                    <div
                        className="flex flex-row pr-10 hover:cursor-pointer"
                        onClick={handleNavToCheckout}
                    >
                        <h1 className="font-pt-sans text-3xl mb-6">Checkout</h1>
                        <div className="p-1 px-3">
                            <TfiArrowCircleRight
                                size={26}
                            ></TfiArrowCircleRight>
                        </div>
                    </div>
                </div>

                <div
                    key={data._id}
                    className="lg:flex items-start justify-center py-12 px-4"
                >
                    {/* <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                        {images}
                    </div> */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="w-[500px]"
                            alt={data.name}
                            src={mainImg ? mainImg : data.image[0]}
                        />
                        <div className="flex flex-row justify-center items-center lg:justify-between mt-3 md:space-x-0 lg:pr-10">
                            {images}
                        </div>
                    </div>
                    <div className="w-full xl:w-2/5 lg:w-1/2 lg:ml-8 md:mt-0 mt-6">
                        <div className="py-6 border-b border-gray-200 flex items-center justify-between">
                            <p className="text-xl font-pt-sans leading-none">
                                {data.name}
                            </p>
                            <p className="text-xl font-pt-sans leading-none">{`$${data.price}`}</p>
                        </div>
                        {varietyDropDown}
                        <div className="py-6 border-b border-gray-200 flex items-center justify-between">
                            <p className="text-lg font-pt-sans leading-4">
                                Quantity
                            </p>
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-primary-gray-2 p-3 hover:cursor-pointer text-white"
                                    onClick={handleMinusQuantity}
                                >
                                    <PiMinusBold></PiMinusBold>
                                </button>
                                <input
                                    type="number"
                                    className="text-sm w-24 h-10 text-center border border-outline"
                                    value={quantity}
                                    onChange={(e) =>
                                        handleQuantityInput(e.target.value)
                                    }
                                ></input>
                                <button
                                    className="bg-primary-gray-2 p-3 hover:cursor-pointer text-white"
                                    onClick={handleAddQuantity}
                                >
                                    <PiPlusBold></PiPlusBold>
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg font-pt-serif leading-relaxed my-6 w-full">
                                {data.description}
                            </p>
                        </div>
                        <AddToCart
                            id={data._id}
                            name={data.name}
                            image={
                                data.variant.length > 0
                                    ? data.image[index]
                                    : data.image
                            }
                            quantity={quantity}
                            price={data.price}
                            variant={variety}
                        ></AddToCart>
                        <div onClick={() => toggleVisibilityShip()}>
                            <div className="border-t border-b py-4 mt-7 border-gray-200">
                                <div
                                    data-menu
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <p className="text-lg font-pt-sans leading-4 text-gray-800">
                                        Shipping and Returns
                                    </p>
                                    <button
                                        className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                                        role="button"
                                        aria-label="show or hide"
                                    >
                                        <FaShippingFast
                                            className="mr-4"
                                            size={22}
                                        ></FaShippingFast>
                                    </button>
                                </div>
                                <div
                                    className={`${
                                        isHiddenShip ? "hidden" : ""
                                    } font-pt-serif pt-4 leading-normal pr-12 mt-4`}
                                    id="sect"
                                >
                                    You will be responsible for paying for your
                                    own shipping costs for returning your item.
                                    Shipping costs are nonrefundable
                                </div>
                            </div>
                        </div>
                        <div onClick={() => toggleVisibilityContact()}>
                            <div className="border-b py-4 border-gray-200">
                                <div
                                    data-menu
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <p className="text-lg font-pt-sans leading-4 text-gray-800">
                                        Contact Us
                                    </p>
                                    <button
                                        className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
                                        role="button"
                                        aria-label="show or hide"
                                    >
                                        <FaPhone
                                            className="mr-4"
                                            size={22}
                                        ></FaPhone>
                                    </button>
                                </div>
                                <div
                                    className={`${
                                        isHiddenContact ? "hidden" : ""
                                    } font-pt-serif pt-4 leading-normal pr-12 mt-4`}
                                    id="sect"
                                >
                                    If you have any questions on how to return
                                    your item to us, contact us.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {content}
            <div className="flex justify-center items-center">
                <Navigation></Navigation>
            </div>
        </>
    );
}

export default ProductDetails;
