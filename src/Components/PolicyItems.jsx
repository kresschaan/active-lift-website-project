import { useNavigate } from "react-router-dom";

function PolicyItems() {
    const navigate = useNavigate();

    const handleNav = (endpoint) => {
        navigate(`/policy${endpoint}`);
    };

    return (
        <div className="flex flex-col items-center justify-center lg:items-start">
            <h2 className="pb-2 font-pt-sans text-2xl">OUR POLICY</h2>
            <div
                className="pb-2 font-pt-serif text-xl hover:cursor-pointer hover:text-primary-1"
                onClick={() => handleNav("/privacy")}
            >
                Privacy Policy
            </div>
            <div
                className="pb-2 font-pt-serif text-xl hover:cursor-pointer hover:text-primary-1"
                onClick={() => handleNav("/shipping")}
            >
                Shipping Policy
            </div>
            <div
                className="pb-2 font-pt-serif text-xl hover:cursor-pointer hover:text-primary-1"
                onClick={() => handleNav("/returnsrefund")}
            >
                Returns and Refunds Policy
            </div>
        </div>
    );
}

export default PolicyItems;
