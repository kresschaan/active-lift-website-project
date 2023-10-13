import Navigation from "./Navigation";
import ExploreItem from "../Components/ExploreItem";

import useNavContext from "../hooks/use-navs-context";

function Explore() {
    const { elementRefs } = useNavContext();

    return (
        <div
            className="bg-primary-gray-1 relative pb-20"
            ref={elementRefs.supplements}
        >
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="font-pt-sans text-4xl mb-14">
                    EXPLORE PRODUCTS
                </h1>
            </div>

            <ExploreItem></ExploreItem>
        </div>
    );
}

export default Explore;
