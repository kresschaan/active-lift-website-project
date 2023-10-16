import { useState } from "react";
import Navigation from "./Navigation";
import useNavContext from "../hooks/use-navs-context";
import ProductItem from "../Components/ProductItem";

function Shop() {
    const { elementRefs } = useNavContext();
    const [totalProd, setTotalProd] = useState("");
    const [loadProd, setLoadProd] = useState(3);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [brand, setBrand] = useState("all");
    const [sortBy, setSortBy] = useState("default");

    const handleLoadProd = () => {
        if (loadProd < totalProd) {
            setLoadProd(loadProd + 3);
        } else {
            setLoadProd(totalProd);
        }
    };

    const handleTotalProd = (total) => {
        setTotalProd(total);
    };

    const handleSearch = (val) => {
        setSearch(val);
        setFilter("search");
    };

    const handleCategoryVal = (val) => {
        setCategory(val);
        setFilter("category");
    };

    const handleBrandVal = (val) => {
        setBrand(val);
        setFilter("brand");
    };

    const handleSortVal = (val) => {
        setSortBy(val);
        setFilter("sort");
    };

    return (
        <div className="relative h-full py-20" ref={elementRefs.supplements}>
            <div className="flex flex-row text-center pl-10">
                <h1 className="font-pt-sans text-primary-1 text-4xl mb-6">
                    SHOP
                </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between font-pt-sans px-10 md:px-14">
                <div className="flex flex-col lg:flex-row lg:w-4/5">
                    <div className="p-2 w-full md:w-72">
                        <label
                            className="pb-2 text-primary-2 font-bold text-lg"
                            htmlFor="search"
                        >
                            Search
                        </label>
                        <input
                            type="text"
                            className="p-[14px] mt-4 w-full text-primary-gray-3 border"
                            name="search"
                            id="search"
                            placeholder="Search Product"
                            onChange={(e) => handleSearch(e.target.value)}
                        ></input>
                    </div>
                    <div className="p-2 w-full md:w-72">
                        <label
                            className="pb-2 text-primary-2 font-bold text-lg"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <select
                            className="p-4 mt-4 w-full text-primary-gray-3 border"
                            name="category"
                            id="category"
                            onChange={(e) => handleCategoryVal(e.target.value)}
                        >
                            <option value="all">All Category</option>
                            <option value="BCAA">BCAAs</option>
                            <option value="Creatine">Creatine</option>
                            <option value="Mass Gainers">Mass Gainers</option>
                            <option value="Multivitamin">Multivitamin</option>
                            <option value="Whey Protein">Whey Protein</option>
                            <option value="Testosterone Booster">
                                Testosterone Booster
                            </option>
                        </select>
                    </div>
                    <div className="p-2 w-full md:w-72">
                        <label
                            className="pb-2 text-primary-2 font-bold text-lg"
                            htmlFor="brand"
                        >
                            Brands
                        </label>
                        <select
                            className="p-4 mt-4 w-full text-primary-gray-3 border"
                            name="brand"
                            id="brand"
                            onChange={(e) => handleBrandVal(e.target.value)}
                        >
                            <option value="all">All Brands</option>
                            <option value="Evogen">EVOGEN</option>
                            <option value="Finaflex">FINAFLEX</option>
                            <option value="LyleFuel">LYLE FUEL</option>
                            <option value="Natures Craft">Natures Craft</option>
                            <option value="Nature Zen">NATURE ZEN</option>
                            <option value="Nutrex">NUTREX</option>
                            <option value="ProSupps">PROSUPPS</option>
                            <option value="Optimum Nutrition">
                                OPTIMUM NUTRITION
                            </option>
                            <option value="SAN">SAN</option>
                            <option value="USN">USN</option>
                        </select>
                    </div>
                </div>

                <div className="p-2 w-full md:w-72">
                    <label
                        className="pb-2 text-primary-2 font-bold text-lg"
                        htmlFor="sort"
                    >
                        Sort By
                    </label>
                    <select
                        className="p-4 mt-4 w-full bg-primary-gray-5 text-primary-gray-3 border"
                        name="sort"
                        id="sort"
                        onChange={(e) => handleSortVal(e.target.value)}
                    >
                        <option value="all">Default Sorting</option>
                        <option value="Low to High">Low to High</option>
                        <option value="High to Low">High to Low</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-row font-pt-sans flex-wrap justify-center items-center">
                <ProductItem
                    loadProd={loadProd}
                    filter={filter}
                    brand={brand}
                    category={category}
                    search={search}
                    sortBy={sortBy}
                    handleTotalProd={handleTotalProd}
                ></ProductItem>
            </div>
            <div className="flex flex-row justify-center items-center py-10 my-10">
                {loadProd < totalProd && (
                    <div
                        className="border p-4 w-72 text-center bg-primary-gray-4 text-white hover:cursor-pointer"
                        onClick={() => handleLoadProd()}
                    >
                        LOAD MORE
                    </div>
                )}
            </div>
            <div className="flex justify-center items-center">
                <Navigation isLink={true}></Navigation>
            </div>
        </div>
    );
}

export default Shop;
