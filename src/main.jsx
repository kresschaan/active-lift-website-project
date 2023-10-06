import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Root from "./Layout/Root.jsx";
import "./index.css";
import { ScrollProvider } from "./context/nav";
import Cart from "./Layout/Cart.jsx";
import Policy from "./Layout/Policy.jsx";
import Shop from "./Layout/Shop.jsx";
import Success from "./Layout/Success.jsx";
import Checkout from "./Layout/Checkout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <App />,
                // loader: teamLoader,
            },
            {
                path: "/shop",
                element: <Shop />,
                // loader: teamLoader,
            },
            {
                path: "/cart",
                element: <Cart />,
                // loader: teamLoader,
            },
            {
                path: "/checkout",
                element: <Checkout />,
                // loader: teamLoader,
            },
            {
                path: "success",
                element: <Success />,
                // loader: teamLoader,
            },
            {
                path: "/policy/privacy",
                element: <Policy layout="privacy" />,
                // loader: teamLoader,
            },
            {
                path: "/policy/shipping",
                element: <Policy layout="shipping" />,
                // loader: teamLoader,
            },
            {
                path: "/policy/returnsrefund",
                element: <Policy layout="returnsrefund" />,
                // loader: teamLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
    <ScrollProvider>
        <RouterProvider router={router} />
    </ScrollProvider>
);
