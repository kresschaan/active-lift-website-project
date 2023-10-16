// import mainLogo from "../assets/images/main/white-logo.png";
import Navigation from "./Navigation";
import useNavsContext from "../hooks/use-navs-context";

function Home() {
    const { elementRefs } = useNavsContext();

    return (
        <div className="main-img-background h-screen" ref={elementRefs.home}>
            <div className="absolute">
                <img src="/images/main/white-logo.png" alt="" />
            </div>

            {/* <div className="flex flex-col text-4xl lg:text-7xl font-pt-sans font-bold tracking-widest text-primary-gray-1 justify-center items-center h-screen lg:h-1/4">
                <h1>ACTIVE LIFT</h1>
                <h1 className="mt-16 text-center">ELEVATE YOUR PERFORMANCE</h1>
            </div> */}

            <div className="flex justify-center items-center">
                <Navigation isLink={false}></Navigation>
            </div>
        </div>
    );
}

export default Home;
