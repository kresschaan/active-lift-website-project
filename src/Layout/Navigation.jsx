import NavItem from "../Components/NavItem";

function Navigation({ isLink }) {
    return (
        <div className="bg-primary-nav border rounded-full bottom-0 mb-8 h-20 w-5/6 lg:w-2/5 fixed z-40">
            <NavItem isLink={isLink}></NavItem>
        </div>
    );
}

export default Navigation;
