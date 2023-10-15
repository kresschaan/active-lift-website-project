import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useFetchAllProductsQuery } from "../store/index";

function ExploreItem() {
    const navigate = useNavigate();
    const { data, error, isLoading } = useFetchAllProductsQuery();

    let content = "";

    const handleNav = (endpoint) => {
        navigate(`/${endpoint}`);
    };

    if (!isLoading) {
        content = data.slice(0, 8).map((product) => {
            return (
                <div
                    key={product._id}
                    className="bg-white border border-outline h-full lg:h-[480px] w-full lg:w-72 m-4 hover:cursor-pointer"
                    onClick={() => handleNav("shop")}
                >
                    <img
                        src={
                            product.image.length > 0
                                ? product.image[0]
                                : product.image
                        }
                        alt=""
                    />
                    <div className="flex flex-col justify-center items-center text-center mt-4">
                        <p className="text-xl">{product.name}</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">
                                {product.review}
                            </p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">${product.price}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="flex flex-row font-pt-sans flex-wrap justify-center items-center">
            {content}
        </div>
    );
}

export default ExploreItem;
