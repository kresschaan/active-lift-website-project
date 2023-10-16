import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Checkout from "../Layout/Checkout";
import Shipping from "./Shipping";
import Success from "../Layout/Success";

function PrivateRoute({ path }) {
    const location = useLocation();
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    let [componentToRender, setComponentToRender] = useState(null);

    useEffect(() => {
        if (location.state === null) {
            navigate("/home");
        }

        if (location.state) {
            if (location.state.authorized === true) {
                if (path === "/checkout") {
                    setComponentToRender(<Checkout />);
                }

                if (path === "/shipping") {
                    setComponentToRender(<Shipping />);
                }
            }
        }

        if (searchParams.get("id")) {
            setComponentToRender(<Success />);
        }
    }, [location.state, navigate]);

    return componentToRender;
}

export default PrivateRoute;
