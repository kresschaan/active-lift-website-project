import NavItem from "../Components/NavItem";

function Navigation({ isLink }) {
    return (
        <div className="border-shadow fixed bottom-0 z-40 mb-8 h-20 w-1/2 rounded-full bg-primary-nav backdrop-blur-lg md:w-5/6 lg:w-2/5">
            <NavItem isLink={isLink}></NavItem>
        </div>
    );
}

export default Navigation;
