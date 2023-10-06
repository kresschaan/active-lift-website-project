import { useNavigate } from "react-router-dom";

function PolicyItems() {
    const navigate = useNavigate();

    const handleNav = (endpoint) => {
        navigate(`/policy${endpoint}`);
    };

    return (
        <div className="flex flex-col justify-center items-center lg:items-start">
            <h2 className="font-pt-sans text-2xl pb-2">OUR POLICY</h2>
            <div
                className="font-pt-serif text-xl pb-2 hover:cursor-pointer"
                onClick={() => handleNav("/privacy")}
            >
                Privacy Policy
            </div>
            <div
                className="font-pt-serif text-xl pb-2 hover:cursor-pointer"
                onClick={() => handleNav("/shipping")}
            >
                Shipping Policy
            </div>
            <div
                className="font-pt-serif text-xl pb-2 hover:cursor-pointer"
                onClick={() => handleNav("/returnsrefund")}
            >
                Returns and Refunds Policy
            </div>
        </div>
    );
}

export default PolicyItems;
