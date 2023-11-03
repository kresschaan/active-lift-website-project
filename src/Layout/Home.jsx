// import mainLogo from "../assets/images/main/white-logo.png";
import Navigation from "./Navigation";
import useNavsContext from "../hooks/use-navs-context";

function Home() {
    const { elementRefs } = useNavsContext();

    return (
        <div className="main-img-background h-screen" ref={elementRefs.home}>
            <div className="absolute">
                <img
                    src="/images/main/white-logo.png"
                    alt="Main Logo - Active Lift"
                    draggable="false"
                    loading="lazy"
                />
            </div>

            <div className="flex items-center justify-center">
                <Navigation isLink={false}></Navigation>
            </div>
        </div>
    );
}

export default Home;
