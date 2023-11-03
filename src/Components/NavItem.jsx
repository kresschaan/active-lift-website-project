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
            <div className="border-shadow absolute flex h-[230px] w-full -translate-y-[250px] flex-col items-center justify-center rounded-xl bg-primary-gray-4 backdrop-blur-2xl md:hidden">
                <div
                    className="p-2 font-bold text-white hover:cursor-pointer"
                    onClick={() =>
                        isLink ? useNavigatePage("home") : handleScroll("home")
                    }
                >
                    Home
                </div>
                <div
                    className="p-2 font-bold text-white hover:cursor-pointer"
                    onClick={() => useNavigatePage("shop")}
                >
                    Shop
                </div>
                <div
                    className="p-2 font-bold text-white hover:cursor-pointer"
                    onClick={() =>
                        isLink
                            ? useNavigatePage("supplements")
                            : handleScroll("supplements")
                    }
                >
                    Supplements
                </div>
                <div
                    className="p-2 font-bold text-white hover:cursor-pointer "
                    onClick={() =>
                        isLink
                            ? useNavigatePage("contactus")
                            : handleScroll("contactus")
                    }
                >
                    Contact Us
                </div>
                <div
                    className="p-2 font-bold text-white hover:cursor-pointer "
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

            <div className="flex h-full flex-row items-center justify-evenly md:hidden ">
                <div
                    className="font-bold text-white hover:cursor-pointer"
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
                    className={`my-2 h-12 w-12 text-white hover:cursor-pointer md:hidden ${
                        isMenuOpen ? "open" : ""
                    }`}
                    onClick={() => navToggle()}
                >
                    <span className="hamburger-top mb-4"></span>
                    <span className="hamburger-middle mb-4"></span>
                    <span className="hamburger-bottom mb-4"></span>
                </div>
            </div>

            <div className="hidden h-full flex-row items-center justify-evenly md:flex">
                <div
                    className="font-bold text-white hover:cursor-pointer"
                    onClick={() =>
                        isLink
                            ? useNavigatePage("home")
                            : scrollToElement("home")
                    }
                >
                    Home
                </div>
                <div
                    className="font-bold text-white hover:cursor-pointer"
                    onClick={() => useNavigatePage("shop")}
                >
                    Shop
                </div>
                <div
                    className="font-bold text-white hover:cursor-pointer"
                    onClick={() =>
                        isLink
                            ? useNavigatePage("supplements")
                            : scrollToElement("supplements")
                    }
                >
                    Supplements
                </div>
                <div
                    className="font-bold text-white hover:cursor-pointer"
                    onClick={() =>
                        isLink
                            ? useNavigatePage("contactus")
                            : scrollToElement("contactus")
                    }
                >
                    Contact Us
                </div>
                <div className="font-bold text-white hover:cursor-pointer">
                    {cart.length > 0 && (
                        <div className="absolute h-6 w-6 -translate-y-3 translate-x-4 rounded-full bg-red-400 text-center">
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
