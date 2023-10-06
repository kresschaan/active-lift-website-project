import mainLogo from "../assets/images/main/white-logo.png";
import Navigation from "./Navigation";
import useNavsContext from "../hooks/use-navs-context";

function Home() {
    const { elementRefs } = useNavsContext();

    return (
        <div className="main-img-background h-screen" ref={elementRefs.home}>
            <div className="absolute">
                <img src={mainLogo} alt="" />
            </div>

            <div className="flex justify-center items-center">
                <Navigation></Navigation>
            </div>
        </div>
    );
}

export default Home;
