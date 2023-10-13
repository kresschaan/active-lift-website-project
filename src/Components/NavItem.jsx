import { FaCartShopping } from "react-icons/fa6";
import useNavsContext from "../hooks/use-navs-context";
import { useNavigate } from "react-router-dom";

function NavItem({ isLink }) {
    const { scrollToElement } = useNavsContext();

    const navigate = useNavigate();

    const useNavigatePage = (endpoint) => {
        navigate(`/${endpoint}`);

        scrollToElement(endpoint);
    };

    return (
        <div className="flex flex-row justify-evenly items-center h-full">
            <div
                className="text-white font-bold hover:cursor-pointer"
                onClick={() =>
                    isLink ? useNavigatePage("home") : scrollToElement("home")
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
                <FaCartShopping
                    className="h-8 w-8"
                    onClick={() => useNavigatePage("cart")}
                ></FaCartShopping>
            </div>
        </div>
    );
}

export default NavItem;
