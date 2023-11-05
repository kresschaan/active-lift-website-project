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
        <div className="relative h-4/5 bg-primary-gray-1 py-20">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="mb-6 font-pt-sans text-4xl">ACTIVE LIFT</h1>
                <h2 className="p-6 font-pt-sans text-3xl font-bold tracking-widest text-primary-1 md:text-4xl lg:text-5xl xl:p-0">
                    WE CARRY THE HIGHEST QUALITY SUPPLEMENTS
                </h2>
            </div>

            <div className="align-center flex flex-col justify-center p-4 lg:flex-row lg:justify-around">
                <div className="position relative mb-6 h-[800px] w-full border lg:m-4 lg:mb-0 lg:w-4/12">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/feature/lyfefuel.jpg"
                        alt="Lyle Fuel - Active Lift"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 w-full p-10 text-center font-pt-serif text-4xl tracking-widest text-white">
                        LYLE FUEL
                    </h2>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-feature"></div>
                </div>
                <div className="position relative mb-6 h-[800px] w-full border lg:m-4 lg:mb-0 lg:h-auto lg:w-4/12">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/feature/evogen.jpg"
                        alt="Evogen - Active Lift"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 w-full p-10 text-center font-pt-serif text-4xl tracking-widest text-white">
                        EVOGEN
                    </h2>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-feature"></div>
                </div>
                <div className="position relative mb-6 h-[800px] w-full border lg:m-4 lg:mb-0 lg:h-auto lg:w-4/12">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/feature/naturezen.jpg"
                        alt="Nature Zen - Active Lift"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 w-full p-10 text-center font-pt-serif text-4xl tracking-widest text-white">
                        NATURE ZEN
                    </h2>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-feature"></div>
                </div>
                <div className="position relative mb-6 h-[800px] w-full border lg:m-4 lg:mb-0 lg:h-auto lg:w-4/12">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/feature/optimumnutrition.jpg"
                        alt="Optimum Nutrition - Active Lift"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 w-full p-10 text-center font-pt-serif text-4xl tracking-widest text-white">
                        OPTIMUM NUTRITION
                    </h2>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-feature"></div>
                </div>
            </div>

            <div className="flex flex-row justify-center p-10 text-white">
                <button
                    className="bottom-0 mb-8 h-16 w-72 rounded-full border bg-primary-gray-2 font-bold"
                    onClick={() => handleNav()}
                >
                    Shop Now
                </button>
                <div className="bottom-0 h-16 w-16 rounded-full border bg-primary-gray-2 p-3">
                    <BiRightArrowAlt className="text-4xl"></BiRightArrowAlt>
                </div>
            </div>
        </div>
    );
}

export default Feature;
