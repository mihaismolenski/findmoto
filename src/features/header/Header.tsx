import HeaderItem from "./HeaderItem";

export const Header = () => {
    return <div className="header">
        <HeaderItem text="Best Match for you" url="/" />
        |
        <HeaderItem text="Find motos" url="/search" />
        |
        <HeaderItem text="Compare" url="/compare" />
    </div>
}

export default Header;