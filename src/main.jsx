import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Root from "./Layout/Root.jsx";
import "./index.css";
import Success from "./Layout/Success.jsx";
import Policy from "./Layout/Policy.jsx";

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
                path: "success",
                element: <Success />,
                // loader: teamLoader,
            },
            {
                path: "policy",
                element: <Policy />,
                // loader: teamLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
    <RouterProvider router={router} />
);
