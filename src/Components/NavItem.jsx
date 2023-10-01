import { FaCartShopping } from "react-icons/fa6";

function NavItem() {
    return (
        <div className="flex flex-row justify-evenly items-center h-full">
            <div className="text-white font-bold">Home</div>
            <div className="text-white font-bold">Shop</div>
            <div className="text-white font-bold">Supplements</div>
            <div className="text-white font-bold">Contact Us</div>
            <div className="text-white font-bold">
                <FaCartShopping className="h-8 w-8"></FaCartShopping>
            </div>
        </div>
    );
}

export default NavItem;
