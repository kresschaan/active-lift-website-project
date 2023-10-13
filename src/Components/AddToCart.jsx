import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { addCart } from "../store/index";

function AddToCart({ id, name, image, quantity, price, variant }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.stopPropagation();

        dispatch(
            addCart({
                id,
                name,
                image,
                quantity,
                price,
                variant,
            })
        );

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <button
            className="bg-tertiary-1 text-base flex items-center justify-center leading-none text-white h-[60px] w-full py-4 mt-4"
            onClick={handleSubmit}
        >
            {isLoading ? (
                <FaCheckCircle className="m-2" size={20}></FaCheckCircle>
            ) : (
                <FaShoppingCart className="m-2" size={20}></FaShoppingCart>
            )}
            {isLoading ? "Adding.." : "Add to Cart"}
        </button>
    );
}

export default AddToCart;
