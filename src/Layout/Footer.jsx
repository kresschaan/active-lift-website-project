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

    const handleNav = (endpoint) => {
        navigate(endpoint);
    };

    const handleAddress = (endpoint) => {
        window.open(
            "https://www.google.com/maps/@42.3639022,-71.1543371,3a,75y,223.29h,88.67t/data=!3m7!1e1!3m5!1som1eg2H_Jbleza-M1fh2zg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dom1eg2H_Jbleza-M1fh2zg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D205.91486%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu",
            "_blank"
        );
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
                                className="pb-2 font-pt-serif text-xl hover:cursor-pointer hover:underline"
                                onClick={handleEmail}
                            >
                                Email: customerserv@activelift.com
                            </div>
                            <a
                                className="pb-2 font-pt-serif text-xl hover:cursor-pointer hover:underline"
                                href="tel:1-877-538-5888"
                            >
                                Phone: +63 921 123 4341
                            </a>
                            <div
                                className="group"
                                onClick={() => handleAddress()}
                            >
                                <div className="font-pt-serif text-xl group-hover:cursor-pointer group-hover:underline">
                                    Address: 945 New Saddle Drive West
                                </div>
                                <div className="font-pt-serif text-xl group-hover:cursor-pointer group-hover:underline">
                                    Springfield, MA 01089
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="mb-32 flex w-full flex-row items-center justify-center pb-10 text-white hover:cursor-pointer"
                    onClick={() => handleNav("/home")}
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
