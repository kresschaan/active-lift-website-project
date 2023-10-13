import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function ProtectedRoute() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === null) {
            navigate("/shop");
        }
    }, [location.state, navigate]);

    // Render the component that should be shown when `location.state` is not null
    return location.state !== null ? <ProductDetails /> : null;
}

export default ProtectedRoute;
