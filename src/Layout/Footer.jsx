import { useNavigate } from "react-router-dom";
import useNavsContext from "../hooks/use-navs-context";
import Navigation from "./Navigation";
import PolicyItems from "../Components/PolicyItems";
import NavFooterItem from "../Components/NavFooterItem";

function Footer() {
    const navigate = useNavigate();
    const publicDIR = import.meta.env.VITE_STRIPE_PUBLIC_URL;
    const { elementRefs } = useNavsContext();

    const handleEmail = () => {
        window.open(
            "mailto:customerserv@example.com?subject=Inquiry Active Lift&body="
        );
    };

    const handleNav = () => {
        navigate("/home");
    };

    return (
        <div className="pattern-img-background">
            {/* <div className="absolute -translate-x-1/4 -translate-y-[180px]"></div> */}

            <div className="flex flex-col items-center justify-center pt-20 text-center">
                <h1 className="mb-6 font-pt-sans text-4xl font-bold text-primary-1">
                    OUR ATHLETES
                </h1>
            </div>

            <div className="align-center mb-20 mr-8 flex flex-col justify-center p-10 lg:mr-0 lg:flex-row lg:justify-around">
                <div className="position relative m-6 w-full border lg:w-4/12">
                    <img
                        className="h-[600px] object-cover lg:h-full"
                        src="/images/footer/chris-bumstead.jpeg"
                        alt="Chris Bumstead - Active Lift"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 mb-10 -translate-x-8 bg-tertiary-1 p-6 font-pt-sans text-2xl tracking-widest text-white">
                        CHRIS BUMSTEAD
                    </h2>
                </div>
                <div className="position relative m-6 w-full border lg:w-4/12">
                    <img
                        className="h-[600px] w-full object-cover lg:h-full"
                        src="/images/footer/vladislava.jpg"
                        alt="Vladislava - Active Lift"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 mb-10 -translate-x-8 bg-tertiary-1 p-6 font-pt-sans text-2xl tracking-widest text-white">
                        VLADISLAVA
                    </h2>
                </div>
                <div className="position relative m-6 w-full border lg:w-4/12">
                    <img
                        className="h-[600px] object-cover lg:h-full"
                        src="/images/footer/mike-thurston.jpeg"
                        alt="Mike Thurston - Active Lift"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 mb-10 -translate-x-8 bg-tertiary-1 p-6 font-pt-sans text-2xl tracking-widest text-white">
                        MIKE THURSTON
                    </h2>
                </div>
            </div>

            <div className="flex h-2/5 flex-col bg-tertiary-1">
                <div className="flex flex-col items-center justify-center p-10 text-white lg:flex-row">
                    <div className="m-4 flex h-1/2 w-full flex-col items-center justify-center text-center">
                        <PolicyItems></PolicyItems>
                    </div>
                    <NavFooterItem></NavFooterItem>
                    <div
                        className="m-4 flex h-1/2 w-full flex-col items-center justify-center"
                        ref={elementRefs.contactus}
                    >
                        <div className="flex flex-col items-center justify-center lg:items-start">
                            <h2 className="pb-2 font-pt-sans text-2xl">
                                CONTACT US
                            </h2>
                            <div
                                className="pb-2 font-pt-serif text-xl hover:cursor-pointer"
                                onClick={handleEmail}
                            >
                                Email: customerserv@activelift.com
                            </div>
                            <div className="pb-2 font-pt-serif text-xl">
                                Phone: +63 921 123 4341
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
                <div
                    className="mb-32 flex w-full flex-row items-center justify-center pb-10 text-white hover:cursor-pointer"
                    onClick={handleNav}
                >
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="/images/main/white-logo.png"
                            alt="Footer Logo - Active Lift"
                            draggable="false"
                            loading="lazy"
                        />
                        <p className="font-pt-sans">2023 Active Lift, LLC</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
