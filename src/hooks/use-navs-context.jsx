import { useContext } from "react";
import NavsContext from "../context/nav";

function useNavContext() {
    return useContext(NavsContext);
}

export default useNavContext;
