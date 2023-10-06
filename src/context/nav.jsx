import { createContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NavigationContext = createContext();

function ScrollProvider({ children }) {
    const elementRefs = {
        home: useRef(null),
        shop: useRef(null),
        supplements: useRef(null),
        explore: useRef(null),
        contactus: useRef(null),
    };

    const scrollToElement = (elementId) => {
        const elementToScroll = elementRefs[elementId];
        if (elementToScroll && elementToScroll.current) {
            elementToScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const elementsToShare = {
        scrollToElement,
        elementRefs,
    };

    return (
        <NavigationContext.Provider value={elementsToShare}>
            {children}
        </NavigationContext.Provider>
    );
}

export { ScrollProvider };
export default NavigationContext;
