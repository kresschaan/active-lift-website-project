import Navigation from "./Navigation";
import ExploreItem from "../Components/ExploreItem";

import useNavContext from "../hooks/use-navs-context";

function Explore() {
    const { elementRefs } = useNavContext();

    return (
        <div
            className="relative bg-primary-gray-1 pb-20"
            ref={elementRefs.supplements}
        >
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="mb-14 font-pt-sans text-4xl">
                    EXPLORE PRODUCTS
                </h1>
            </div>

            <ExploreItem></ExploreItem>
        </div>
    );
}

export default Explore;
