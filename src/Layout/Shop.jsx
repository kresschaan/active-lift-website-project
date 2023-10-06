import Navigation from "./Navigation";
import exploreImg from "../assets/images/products/optimum-nutrition.jpg";
import { FaStar } from "react-icons/fa";
import useNavContext from "../hooks/use-navs-context";

function Shop() {
    const { elementRefs } = useNavContext();

    return (
        <div className="relative h-full py-20" ref={elementRefs.supplements}>
            <div className="flex flex-row text-center pl-10">
                <h1 className="font-pt-sans text-primary-1 text-4xl mb-6">
                    SHOP
                </h1>
            </div>

            <div className="flex flex-row justify-between font-pt-sans px-16">
                <div className="flex flex-col lg:flex-row">
                    <div className="p-2 w-72">
                        <label
                            className="pb-2 text-primary-2 font-bold text-lg"
                            for="cars"
                        >
                            Category
                        </label>
                        <select
                            className="p-4 mt-4 w-full text-primary-gray-3 border"
                            name="cars"
                            id="cars"
                        >
                            <option value="volvo">All Category</option>
                            <option value="volvo">BCAAs</option>
                            <option value="saab">Creatine</option>
                            <option value="mercedes">Fat Burners</option>
                            <option value="audi">Mass Gainers</option>
                            <option value="audi">Mass Gainers</option>
                        </select>
                    </div>
                    <div className="p-2 w-72">
                        <label
                            className="pb-2 text-primary-2 font-bold text-lg"
                            for="cars"
                        >
                            Brands
                        </label>
                        <select
                            className="p-4 mt-4 w-full text-primary-gray-3 border"
                            name="cars"
                            id="cars"
                        >
                            <option value="volvo">All Brands</option>
                            <option value="volvo">SAN</option>
                            <option value="saab">USN</option>
                            <option value="mercedes">OPTIMUM NUTRITION</option>
                            <option value="audi">LYLE FUEL</option>
                        </select>
                    </div>
                    <div className="p-2 w-72">
                        <label
                            className="pb-2 text-primary-2 font-bold text-lg"
                            for="cars"
                        >
                            Price
                        </label>
                        <select
                            className="p-4 mt-4 w-full text-primary-gray-3 border"
                            name="cars"
                            id="cars"
                        >
                            <option value="volvo">All Price</option>
                            <option value="volvo">100 to 500</option>
                            <option value="saab">500 to 1000</option>
                            <option value="mercedes">1000 to 2000</option>
                            <option value="audi">2000 to 3000</option>
                        </select>
                    </div>
                </div>

                <div className="p-2 w-72">
                    <label
                        className="pb-2 text-primary-2 font-bold text-lg"
                        for="cars"
                    >
                        Sort By
                    </label>
                    <select
                        className="p-4 mt-4 w-full bg-primary-gray-5 text-primary-gray-3 border"
                        name="cars"
                        id="cars"
                    >
                        <option value="volvo">Default Sorting</option>
                        <option value="volvo">BCAAs</option>
                        <option value="saab">Creatine</option>
                        <option value="mercedes">Fat Burners</option>
                        <option value="audi">Mass Gainers</option>
                        <option value="audi">Mass Gainers</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-row font-pt-sans flex-wrap justify-center items-center">
                <div className="bg-white border border-outline h-full w-72 m-4 p-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                        <div className="w-full">
                            <button className="border border-outline p-4 w-full">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-outline h-[420px] w-72 m-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-outline h-[420px] w-72 m-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-outline h-[420px] w-72 m-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-outline h-[420px] w-72 m-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-outline h-[420px] w-72 m-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-outline h-[420px] w-72 m-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-outline h-[420px] w-72 m-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-outline h-[420px] w-72 m-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-outline h-[420px] w-72 m-4">
                    <img src={exploreImg} alt="" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl">ON Gold Standard Whey 5lbs</p>
                        <div className="flex flex-row justify-center items-center p-2">
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <FaStar size={30}></FaStar>
                            <p className="text-xl pt-1 pl-2">1 Review</p>
                        </div>
                        <div className="flex flex-row py-2">
                            <p className="text-xl">$200.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center py-10 my-10">
                <div className="border p-4 w-72 text-center bg-primary-gray-4 text-white">
                    LOAD MORE
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Navigation></Navigation>
            </div>
        </div>
    );
}

export default Shop;
