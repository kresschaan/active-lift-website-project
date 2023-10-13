import { useEffect } from "react";
import useNavsContext from "./hooks/use-navs-context";
import Explore from "./Layout/Explore";
import Feature from "./Layout/Feature";
import Footer from "./Layout/Footer";
import Home from "./Layout/Home";

function App({ scrollTo }) {
    const { scrollToElement } = useNavsContext();

    useEffect(() => {
        scrollToElement(scrollTo);
    }, [scrollTo]);

    return (
        <>
            <Home></Home>
            <Feature></Feature>
            <Explore></Explore>
            <Footer></Footer>
        </>
    );
}

export default App;
