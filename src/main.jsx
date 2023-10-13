import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Root from "./Layout/Root.jsx";
import "./index.css";
import { ScrollProvider } from "./context/nav";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import Cart from "./Layout/Cart.jsx";
import Policy from "./Layout/Policy.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import Shop from "./Layout/Shop.jsx";
import Success from "./Layout/Success.jsx";
import Loader from "./Components/Loader.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/home",
                element: <App />,
            },
            {
                path: "/supplements",
                element: <App scrollTo="supplements" />,
            },
            {
                path: "/contactus",
                element: <App scrollTo="contactus" />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/product-details",
                element: (
                    <ProtectedRoute path="/product-details"></ProtectedRoute>
                ),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <PrivateRoute path="/checkout"></PrivateRoute>,
            },
            {
                path: "/shipping",
                element: <PrivateRoute path="/shipping"></PrivateRoute>,
            },
            {
                path: "success",
                element: <Success></Success>,
            },
            {
                path: "/policy/privacy",
                element: <Policy layout="privacy" />,
            },
            {
                path: "/policy/shipping",
                element: <Policy layout="shipping" />,
            },
            {
                path: "/policy/returnsrefund",
                element: <Policy layout="returnsrefund" />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
    <Provider store={store}>
        <ScrollProvider>
            <RouterProvider router={router} />
        </ScrollProvider>
    </Provider>
);
