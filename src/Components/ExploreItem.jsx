import { useNavigate } from "react-router-dom";
import { useFetchAllProductsQuery } from "../store/index";
import Reviews from "./Reviews";

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
                    className="m-4 h-full w-full border border-outline bg-white hover:cursor-pointer lg:h-[480px] lg:w-72"
                    onClick={() => handleNav("shop")}
                >
                    <img
                        src={
                            product.image.length > 0
                                ? product.image[0]
                                : product.image
                        }
                        alt={product.name + " - Active Lift"}
                        draggable="false"
                        loading="lazy"
                    />
                    <div className="mt-4 flex flex-col items-center justify-center text-center">
                        <p className="text-xl">{product.name}</p>
                        <Reviews review={product.review}></Reviews>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">${product.price}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="flex flex-row flex-wrap items-center justify-center font-pt-sans">
            {content}
        </div>
    );
}

export default ExploreItem;
