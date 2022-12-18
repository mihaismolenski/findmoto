import HeaderItem from "./HeaderItem";

export const Header = () => {
    return <div className="header">
        <HeaderItem text="Best Match for you" url="/" />
        <HeaderItem text="Find a bike" url="/search" />
        <HeaderItem text="Compare bikes" url="/compare" />
    </div>
}

export default Header;