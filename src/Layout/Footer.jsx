import Navigation from "./Navigation";
import athlete1Image from "../assets/images/footer/chris-bumstead.jpeg";
import athlete2Image from "../assets/images/footer/mike-thurston.jpeg";
import athlete3Image from "../assets/images/footer/vladislava.jpg";
import whiteLogo from "../assets/images/main/white-logo.png";

function Explore() {
    return (
        <div className="pattern-img-background">
            {/* <div className="absolute -translate-x-1/4 -translate-y-[180px]"></div> */}

            <div className="flex flex-col justify-center items-center text-center pt-20">
                <h1 className="text-primary-1 font-pt-sans font-bold text-4xl mb-6">
                    OUR ATHLETES
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center align-center lg:justify-around p-10 mb-20 mr-8 lg:mr-0">
                <div className="position relative border w-full lg:w-4/12 m-6">
                    <img
                        className="object-cover h-[600px] lg:h-full"
                        src={athlete1Image}
                        alt=""
                    />
                    <h2 className="absolute bottom-0 font-pt-sans bg-tertiary-1 text-white text-2xl z-30 p-6 mb-10 tracking-widest -translate-x-8">
                        CHRIS BUMSTEAD
                    </h2>
                </div>
                <div className="position relative border w-full lg:w-4/12 m-6">
                    <img
                        className="object-cover w-full h-[600px] lg:h-full"
                        src={athlete3Image}
                        alt=""
                    />
                    <h2 className="absolute bottom-0 font-pt-sans bg-tertiary-1 text-white text-2xl z-30 p-6 mb-10 tracking-widest -translate-x-8">
                        VLADISLAVA
                    </h2>
                </div>
                <div className="position relative border w-full lg:w-4/12 m-6">
                    <img
                        className="object-cover h-[600px] lg:h-full"
                        src={athlete2Image}
                        alt=""
                    />
                    <h2 className="absolute bottom-0 font-pt-sans bg-tertiary-1 text-white text-2xl z-30 p-6 mb-10 tracking-widest -translate-x-8">
                        MIKE THURSTON
                    </h2>
                </div>
            </div>

            {/* <div className="flex justify-center items-center">
                <Navigation></Navigation>
            </div> */}

            <div className="flex flex-col bg-tertiary-1 h-2/5">
                <div className="flex flex-col lg:flex-row justify-center items-center text-white p-10">
                    <div className="flex flex-col justify-center items-center text-center h-1/2 w-full m-4">
                        <div className="flex flex-col justify-center items-center lg:items-start">
                            <h2 className="font-pt-sans text-2xl pb-2">
                                OUR POLICY
                            </h2>
                            <div className="font-pt-serif text-xl pb-2">
                                Privacy Policy
                            </div>
                            <div className="font-pt-serif text-xl pb-2">
                                Shipping Policy
                            </div>
                            <div className="font-pt-serif text-xl pb-2">
                                Returns and Refunds Policy
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-1/2 w-full m-4">
                        <h2 className="font-pt-sans text-2xl pb-2">MENU</h2>
                        <div className="font-pt-serif text-xl pb-2">Shop</div>
                        <div className="font-pt-serif text-xl pb-2">
                            Supplements
                        </div>
                        <div className="font-pt-serif text-xl pb-2">
                            Contact Us
                        </div>
                        <div className="font-pt-serif text-xl pb-2">Cart</div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-1/2 w-full m-4">
                        <div className="flex flex-col justify-center items-center lg:items-start">
                            <h2 className="font-pt-sans text-2xl pb-2">
                                CONTACT US
                            </h2>
                            <div className="font-pt-serif text-xl pb-2">
                                Email: customerserv@activelift.com
                            </div>
                            <div className="font-pt-serif text-xl pb-2">
                                Phone: +63 921 761 4441
                            </div>
                            <div className="font-pt-serif text-xl">
                                Address: 945 New Saddle Drive West
                            </div>
                            <div className="font-pt-serif text-xl">
                                Springfield, MA 01089
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center text-white w-full pb-10 mb-32">
                    <div className="flex flex-col justify-center items-center">
                        <img src={whiteLogo} alt="" />
                        <p className="font-pt-sans">2023 Active Lift, LLC</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
