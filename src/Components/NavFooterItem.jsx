import useNavsContext from "../hooks/use-navs-context";
import { useNavigate } from "react-router-dom";

function NavFooterItem(params) {
    const { scrollToElement } = useNavsContext();

    const navigate = useNavigate();

    const useNavigatePage = (endpoint) => {
        navigate(`/${endpoint}`);
    };

    return (
        <div className="m-4 flex h-1/2 w-full flex-col items-center justify-center">
            <h2 className="pb-2 font-pt-sans text-2xl">MENU</h2>
            <div
                className="pb-2 font-pt-serif text-xl hover:cursor-pointer"
                onClick={() => scrollToElement("home")}
            >
                Home
            </div>
            <div
                className="pb-2 font-pt-serif text-xl hover:cursor-pointer"
                onClick={() => useNavigatePage("shop")}
            >
                Shop
            </div>
            <div
                className="pb-2 font-pt-serif text-xl hover:cursor-pointer"
                onClick={() => scrollToElement("supplements")}
            >
                Supplements
            </div>
            <div
                className="pb-2 font-pt-serif text-xl hover:cursor-pointer"
                onClick={() => scrollToElement("contactus")}
            >
                Contact Us
            </div>
            <div
                className="pb-2 font-pt-serif text-xl hover:cursor-pointer"
                onClick={() => useNavigatePage("cart")}
            >
                Cart
            </div>
        </div>
    );
}

export default NavFooterItem;
