import Navigation from "./Navigation";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Feature() {
    const publicDIR = import.meta.env.VITE_STRIPE_PUBLIC_URL;
    const navigate = useNavigate();

    const handleNav = () => {
        navigate("/shop");
    };

    return (
        <div className="bg-primary-gray-1 relative h-4/5 py-20">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="font-pt-sans text-4xl mb-6">ACTIVE LIFT</h1>
                <h2 className="text-primary-1 font-pt-sans font-bold tracking-widest text-5xl">
                    WE CARRY THE HIGHEST QUALITY SUPPLEMENTS
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-center align-center lg:justify-around p-10">
                <div className="position relative border w-full lg:w-4/12 h-[800px] mb-6 lg:m-4 lg:mb-0">
                    <img
                        className="object-cover h-full w-full"
                        src="/images/feature/lyfefuel.jpg"
                        alt=""
                    />
                    <h2 className="absolute bottom-0 text-center font-pt-serif text-white text-4xl z-30 p-10 tracking-widest w-full">
                        LYLE FUEL
                    </h2>
                    <div className="bg-feature absolute top-0 bottom-0 right-0 left-0"></div>
                </div>
                <div className="position relative border w-full lg:w-4/12 h-[800px] lg:h-auto mb-6 lg:m-4 lg:mb-0">
                    <img
                        className="object-cover h-full w-full"
                        src="/images/feature/evogen.jpg"
                        alt=""
                    />
                    <h2 className="absolute bottom-0 text-center font-pt-serif text-white text-4xl z-30 p-10 tracking-widest w-full">
                        EVOGEN
                    </h2>
                    <div className="bg-feature absolute top-0 bottom-0 right-0 left-0"></div>
                </div>
                <div className="position relative border w-full lg:w-4/12 h-[800px] lg:h-auto mb-6 lg:m-4 lg:mb-0">
                    <img
                        className="object-cover h-full w-full"
                        src="/images/feature/naturezen.jpg"
                        alt=""
                    />
                    <h2 className="absolute bottom-0 text-center font-pt-serif text-white text-4xl z-30 p-10 tracking-widest w-full">
                        NATURE ZEN
                    </h2>
                    <div className="bg-feature absolute top-0 bottom-0 right-0 left-0"></div>
                </div>
                <div className="position relative border w-full lg:w-4/12 h-[800px] lg:h-auto mb-6 lg:m-4 lg:mb-0">
                    <img
                        className="object-cover h-full w-full"
                        src="/images/feature/optimumnutrition.jpg"
                        alt=""
                    />
                    <h2 className="absolute bottom-0 text-center font-pt-serif text-white text-4xl z-30 p-10 tracking-widest w-full">
                        OPTIMUM NUTRITION
                    </h2>
                    <div className="bg-feature absolute top-0 bottom-0 right-0 left-0"></div>
                </div>
            </div>

            <div className="flex flex-row text-white justify-center p-10">
                <button
                    className="bg-primary-gray-2 font-bold border rounded-full bottom-0 mb-8 h-16 w-72"
                    onClick={() => handleNav()}
                >
                    Shop Now
                </button>
                <div className="bg-primary-gray-2 border rounded-full bottom-0 p-3 h-16 w-16">
                    <BiRightArrowAlt className="text-4xl"></BiRightArrowAlt>
                </div>
            </div>
        </div>
    );
}

export default Feature;
