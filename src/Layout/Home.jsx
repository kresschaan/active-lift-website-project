import mainLogo from "../assets/images/main/white-logo.png";
import Navigation from "./Navigation";

function Home() {
    return (
        <div className="main-img-background h-screen">
            <div className="absolute -translate-x-1/4 -translate-y-[180px]">
                <img src={mainLogo} alt="" />
            </div>

            <div className="flex justify-center items-center">
                <Navigation></Navigation>
            </div>
        </div>
    );
}

export default Home;
