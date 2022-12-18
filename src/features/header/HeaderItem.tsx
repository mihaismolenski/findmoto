import { Link, useLocation } from "react-router-dom";

export const HeaderItem = ({ text, url }: { text: string, url: string }) => {
    const { pathname } = useLocation();

    return (<Link to={url}>
        <div className={`header-item ${pathname === url ? "active" : ""}`}>{text}</div>
    </Link>);
}

export default HeaderItem;