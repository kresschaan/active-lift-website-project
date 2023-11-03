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
        <div className="relative h-full py-10" ref={elementRefs.supplements}>
            <div className="flex flex-row pl-10 text-center">
                <h1 className="mb-6 font-pt-sans text-4xl text-primary-1">
                    SHOP
                </h1>
            </div>

            <div className="flex flex-col justify-between px-10 font-pt-sans md:flex-row md:px-14">
                <div className="flex flex-col lg:w-4/5 lg:flex-row">
                    <div className="w-full p-2 md:w-72">
                        <label
                            className="pb-2 text-lg font-bold text-primary-2"
                            htmlFor="search"
                        >
                            Search
                        </label>
                        <input
                            type="text"
                            className="mt-4 w-full border p-[14px] text-primary-gray-3"
                            name="search"
                            id="search"
                            placeholder="Search Product"
                            onChange={(e) => handleSearch(e.target.value)}
                        ></input>
                    </div>
                    <div className="w-full p-2 md:w-72">
                        <label
                            className="pb-2 text-lg font-bold text-primary-2"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <select
                            className="mt-4 w-full border p-4 text-primary-gray-3"
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
                    <div className="w-full p-2 md:w-72">
                        <label
                            className="pb-2 text-lg font-bold text-primary-2"
                            htmlFor="brand"
                        >
                            Brands
                        </label>
                        <select
                            className="mt-4 w-full border p-4 text-primary-gray-3"
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

                <div className="w-full p-2 md:w-72">
                    <label
                        className="pb-2 text-lg font-bold text-primary-2"
                        htmlFor="sort"
                    >
                        Sort By
                    </label>
                    <select
                        className="mt-4 w-full border bg-primary-gray-5 p-4 text-primary-gray-3"
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

            <div className="flex flex-row flex-wrap items-center justify-center font-pt-sans">
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
            <div className="my-10 flex flex-row items-center justify-center py-10">
                {loadProd < totalProd && (
                    <div
                        className="w-72 border bg-primary-gray-4 p-4 text-center text-white hover:cursor-pointer"
                        onClick={() => handleLoadProd()}
                    >
                        LOAD MORE
                    </div>
                )}
            </div>
            <div className="flex items-center justify-center">
                <Navigation isLink={true}></Navigation>
            </div>
        </div>
    );
}

export default Shop;
