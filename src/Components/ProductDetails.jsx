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
                    className="mb-2 h-48 w-48 border border-outline hover:cursor-pointer"
                    alt={data.name + " - Active Lift"}
                    draggable="false"
                    loading="lazy"
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
                <div className="flex items-center justify-between border-b border-gray-200 py-6">
                    <p className="font-pt-sans text-lg leading-4">Variety</p>
                    <div className="flex items-center justify-center">
                        <select
                            className="w-full border p-4 text-primary-gray-3"
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
                <div className="flex flex-row justify-between pl-10 text-primary-1 ">
                    <div
                        className="flex flex-row hover:cursor-pointer"
                        onClick={handleNavToShop}
                    >
                        <div className="p-1 pr-3">
                            <TfiArrowCircleLeft size={26}></TfiArrowCircleLeft>
                        </div>
                        <h1 className="mb-6 font-pt-sans text-3xl">
                            Back to Shop
                        </h1>
                    </div>

                    <div
                        className="flex flex-row pr-10 hover:cursor-pointer"
                        onClick={handleNavToCheckout}
                    >
                        <h1 className="mb-6 font-pt-sans text-3xl">Checkout</h1>
                        <div className="p-1 px-3">
                            <TfiArrowCircleRight
                                size={26}
                            ></TfiArrowCircleRight>
                        </div>
                    </div>
                </div>

                <div
                    key={data._id}
                    className="items-start justify-center px-4 py-12 lg:flex"
                >
                    {/* <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                        {images}
                    </div> */}
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="w-[500px]"
                            alt={data.name + " - Active Lift"}
                            draggable="false"
                            loading="lazy"
                            src={mainImg ? mainImg : data.image[0]}
                        />
                        <div className="mt-3 flex flex-row items-center justify-center md:space-x-0 lg:justify-between lg:pr-10">
                            {images}
                        </div>
                    </div>
                    <div className="mt-6 w-full md:mt-0 lg:ml-8 lg:w-1/2 xl:w-2/5">
                        <div className="flex items-center justify-between border-b border-gray-200 py-6">
                            <p className="font-pt-sans text-xl leading-none">
                                {data.name}
                            </p>
                            <p className="font-pt-sans text-xl leading-none">{`$${data.price}`}</p>
                        </div>
                        {varietyDropDown}
                        <div className="flex items-center justify-between border-b border-gray-200 py-6">
                            <p className="font-pt-sans text-lg leading-4">
                                Quantity
                            </p>
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-primary-gray-2 p-3 text-white hover:cursor-pointer"
                                    onClick={handleMinusQuantity}
                                >
                                    <PiMinusBold></PiMinusBold>
                                </button>
                                <input
                                    type="number"
                                    className="h-10 w-24 border border-outline text-center text-sm"
                                    value={quantity}
                                    onChange={(e) =>
                                        handleQuantityInput(e.target.value)
                                    }
                                ></input>
                                <button
                                    className="bg-primary-gray-2 p-3 text-white hover:cursor-pointer"
                                    onClick={handleAddQuantity}
                                >
                                    <PiPlusBold></PiPlusBold>
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="my-6 w-full font-pt-serif text-lg leading-relaxed">
                                {data.description}
                            </p>
                        </div>
                        <AddToCart
                            id={`${data._id}${
                                data.variant.length > 0
                                    ? variety.replace(/\s/g, "")
                                    : ""
                            }`}
                            name={data.name}
                            image={
                                data.variant.length > 0
                                    ? data.image[index]
                                    : data.image[0]
                            }
                            quantity={quantity}
                            price={data.price}
                            variant={variety}
                        ></AddToCart>
                        <div onClick={() => toggleVisibilityShip()}>
                            <div className="mt-7 border-b border-t border-gray-200 py-4">
                                <div
                                    data-menu
                                    className="flex cursor-pointer items-center justify-between"
                                >
                                    <p className="font-pt-sans text-lg leading-4 text-gray-800">
                                        Shipping and Returns
                                    </p>
                                    <button
                                        className="cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
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
                                    } mt-4 pr-12 pt-4 font-pt-serif leading-normal`}
                                    id="sect"
                                >
                                    You will be responsible for paying for your
                                    own shipping costs for returning your item.
                                    Shipping costs are nonrefundable
                                </div>
                            </div>
                        </div>
                        <div onClick={() => toggleVisibilityContact()}>
                            <div className="border-b border-gray-200 py-4">
                                <div
                                    data-menu
                                    className="flex cursor-pointer items-center justify-between"
                                >
                                    <p className="font-pt-sans text-lg leading-4 text-gray-800">
                                        Contact Us
                                    </p>
                                    <button
                                        className="cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
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
                                    } mt-4 pr-12 pt-4 font-pt-serif leading-normal`}
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
            <div className="flex items-center justify-center">
                <Navigation></Navigation>
            </div>
        </>
    );
}

export default ProductDetails;
