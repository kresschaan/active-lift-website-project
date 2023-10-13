import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchAllProductsQuery } from "../store";
import { FaStar } from "react-icons/fa";
import AddToCart from "./AddToCart";

function ProductItem({
    loadProd,
    filter,
    search,
    brand,
    category,
    sortBy,
    handleTotalProd,
}) {
    const { data, error, isLoading } = useFetchAllProductsQuery();
    const navigate = useNavigate();
    let sortedAndFilteredData = "";
    let productList = "";

    const handleProductView = (id) => {
        navigate("/product-details", { state: { id: id } });
    };

    useEffect(() => {
        if (data) {
            handleTotalProd(data.length);
        }
    }, [data]);

    if (!isLoading) {
        sortedAndFilteredData = [...data];

        if (search) {
            sortedAndFilteredData = sortedAndFilteredData.filter((product) => {
                return product.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });
        }

        if (brand !== "all") {
            sortedAndFilteredData = sortedAndFilteredData.filter((product) => {
                console.log(brand);
                return product.brand === brand;
            });
        }

        if (category !== "all") {
            sortedAndFilteredData = sortedAndFilteredData.filter((product) => {
                return product.category === category;
            });
        }

        if (filter !== "all") {
            if (sortBy === "Low to High") {
                sortedAndFilteredData.sort((a, b) => a.price - b.price);
            } else if (sortBy === "High to Low") {
                sortedAndFilteredData.sort((a, b) => b.price - a.price);
            }
        }

        productList = sortedAndFilteredData
            .slice(0, loadProd)
            .map((product) => {
                return (
                    <div
                        key={product._id}
                        className="relative bg-white shadow-3xl h-[570px] w-72 m-4 p-4 hover:cursor-pointer"
                        onClick={() => handleProductView(product._id)}
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

                            <div className="absolute bottom-0 w-full p-4">
                                <div className="text-center py-2">
                                    <p className="text-xl">
                                        {"$" + product.price}
                                    </p>
                                </div>
                                <AddToCart
                                    id={product._id}
                                    name={product.name}
                                    image={product.image[0]}
                                    quantity={1}
                                    price={product.price}
                                    variant={
                                        product.variant.length > 0
                                            ? product.variant[0]
                                            : ""
                                    }
                                ></AddToCart>
                            </div>
                        </div>
                    </div>
                );
            });
    }

    useEffect(() => {
        handleTotalProd(sortedAndFilteredData.length);
    }, [sortedAndFilteredData]);

    return productList;
}

export default ProductItem;
