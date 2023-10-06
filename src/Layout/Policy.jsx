import PrivacyPolicy from "../Components/PrivacyPolicy";
import ShippingPolicy from "../Components/ShippingPolicy";
import ReturnPolicy from "../Components/ReturnPolicy";
import { useState } from "react";

function Policy({ layout }) {
    let policy = "";

    if (layout === "privacy") {
        policy = <PrivacyPolicy></PrivacyPolicy>;
    }

    if (layout === "shipping") {
        policy = <ShippingPolicy></ShippingPolicy>;
    }

    if (layout === "returnsrefund") {
        policy = <ReturnPolicy></ReturnPolicy>;
    }

    return <div className="pattern-img-background h-screen">{policy}</div>;
}

export default Policy;
