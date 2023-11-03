import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchAllProductsQuery } from "../store";
import AddToCart from "./AddToCart";
import Reviews from "./Reviews";

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
                        className="relative m-4 h-[570px] w-72 bg-white p-4 shadow-3xl hover:cursor-pointer"
                        onClick={() => handleProductView(product._id)}
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

                            <div className="absolute bottom-0 w-full p-4">
                                <div className="py-2 text-center">
                                    <p className="text-xl">
                                        {"$" + product.price}
                                    </p>
                                </div>
                                <AddToCart
                                    id={`${product._id}${
                                        product.variant.length > 0
                                            ? product.variant[0].replace(
                                                  /\s/g,
                                                  ""
                                              )
                                            : ""
                                    }`}
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
