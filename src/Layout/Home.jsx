// import mainLogo from "../assets/images/main/white-logo.png";
import Navigation from "./Navigation";
import useNavsContext from "../hooks/use-navs-context";

function Home() {
    const { elementRefs } = useNavsContext();
    const publicDIR = import.meta.env.VITE_STRIPE_PUBLIC_URL;

    return (
        <div className="main-img-background h-screen" ref={elementRefs.home}>
            <div className="absolute">
                <img src={publicDIR + "/main/white-logo.png"} alt="" />
            </div>

            <div className="flex justify-center items-center">
                <Navigation isLink={false}></Navigation>
            </div>
        </div>
    );
}

export default Home;
