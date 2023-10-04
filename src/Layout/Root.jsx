import { Outlet } from "react-router-dom";

function Root() {
    console.log(Outlet);

    return (
        <>
            <Outlet></Outlet>
        </>
    );
}

export default Root;
