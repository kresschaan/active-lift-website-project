import useNavsContext from "../hooks/use-navs-context";
import { useNavigate } from "react-router-dom";

function NavFooterItem(params) {
    const { scrollToElement } = useNavsContext();

    const navigate = useNavigate();

    const useNavigatePage = (endpoint) => {
        navigate(`/${endpoint}`);
    };

    return (
        <div className="flex flex-col justify-center items-center h-1/2 w-full m-4">
            <h2 className="font-pt-sans text-2xl pb-2">MENU</h2>
            <div
                className="font-pt-serif text-xl pb-2 hover:cursor-pointer"
                onClick={() => scrollToElement("home")}
            >
                Home
            </div>
            <div
                className="font-pt-serif text-xl pb-2 hover:cursor-pointer"
                onClick={() => useNavigatePage("shop")}
            >
                Shop
            </div>
            <div
                className="font-pt-serif text-xl pb-2 hover:cursor-pointer"
                onClick={() => scrollToElement("supplements")}
            >
                Supplements
            </div>
            <div
                className="font-pt-serif text-xl pb-2 hover:cursor-pointer"
                onClick={() => scrollToElement("contactus")}
            >
                Contact Us
            </div>
            <div
                className="font-pt-serif text-xl pb-2 hover:cursor-pointer"
                onClick={() => useNavigatePage("cart")}
            >
                Cart
            </div>
        </div>
    );
}

export default NavFooterItem;
