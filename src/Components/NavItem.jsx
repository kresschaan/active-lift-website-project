import { useState } from "react";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import useNavsContext from "../hooks/use-navs-context";
import { useNavigate } from "react-router-dom";

function NavItem({ isLink }) {
    const { scrollToElement } = useNavsContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cart = useSelector((state) => state.cart.cart);

    const navigate = useNavigate();

    const navToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const useNavigatePage = (endpoint) => {
        navigate(`/${endpoint}`);

        scrollToElement(endpoint);
    };

    const handleScroll = (endpoint) => {
        scrollToElement(endpoint);

        setIsMenuOpen(false);
    };

    const mobileNav = (
        <>
            <div className="absolute flex flex-col md:hidden bg-primary-gray-4 border-shadow backdrop-blur-2xl rounded-xl justify-center items-center w-full h-[230px] -translate-y-[250px]">
                <div
                    className="text-white font-bold hover:cursor-pointer p-2"
                    onClick={() =>
                        isLink ? useNavigatePage("home") : handleScroll("home")
                    }
                >
                    Home
                </div>
                <div
                    className="text-white font-bold hover:cursor-pointer p-2"
                    onClick={() => useNavigatePage("shop")}
                >
                    Shop
                </div>
                <div
                    className="text-white font-bold hover:cursor-pointer p-2"
                    onClick={() =>
                        isLink
                            ? useNavigatePage("supplements")
                            : handleScroll("supplements")
                    }
                >
                    Supplements
                </div>
                <div
                    className="text-white font-bold hover:cursor-pointer p-2 "
                    onClick={() =>
                        isLink
                            ? useNavigatePage("contactus")
                            : handleScroll("contactus")
                    }
                >
                    Contact Us
                </div>
                <div
                    className="text-white font-bold hover:cursor-pointer p-2 "
                    onClick={() => useNavigatePage("cart")}
                >
                    Cart
                </div>
            </div>
        </>
    );

    return (
        <>
            {isMenuOpen && mobileNav}

            <div className="flex md:hidden flex-row justify-evenly items-center h-full ">
                <div
                    className="text-white font-bold hover:cursor-pointer"
                    onClick={() =>
                        isLink
                            ? useNavigatePage("contactus")
                            : scrollToElement("contactus")
                    }
                >
                    Contact Us
                </div>
                <div
                    id="menu-btn"
                    className={`h-12 w-12 my-2 text-white hover:cursor-pointer md:hidden ${
                        isMenuOpen ? "open" : ""
                    }`}
                    onClick={() => navToggle()}
                >
                    <span className="hamburger-top mb-4"></span>
                    <span className="hamburger-middle mb-4"></span>
                    <span className="hamburger-bottom mb-4"></span>
                </div>
            </div>

            <div className="hidden md:flex flex-row justify-evenly items-center h-full">
                <div
                    className="text-white font-bold hover:cursor-pointer"
                    onClick={() =>
                        isLink
                            ? useNavigatePage("home")
                            : scrollToElement("home")
                    }
                >
                    Home
                </div>
                <div
                    className="text-white font-bold hover:cursor-pointer"
                    onClick={() => useNavigatePage("shop")}
                >
                    Shop
                </div>
                <div
                    className="text-white font-bold hover:cursor-pointer"
                    onClick={() =>
                        isLink
                            ? useNavigatePage("supplements")
                            : scrollToElement("supplements")
                    }
                >
                    Supplements
                </div>
                <div
                    className="text-white font-bold hover:cursor-pointer"
                    onClick={() =>
                        isLink
                            ? useNavigatePage("contactus")
                            : scrollToElement("contactus")
                    }
                >
                    Contact Us
                </div>
                <div className="text-white font-bold hover:cursor-pointer">
                    {cart.length > 0 && (
                        <div className="absolute rounded-full text-center bg-red-400 h-6 w-6 translate-x-4 -translate-y-3">
                            {cart.length}
                        </div>
                    )}

                    <FaCartShopping
                        className="h-8 w-8"
                        onClick={() => useNavigatePage("cart")}
                    ></FaCartShopping>
                </div>
            </div>
        </>
    );
}

export default NavItem;
