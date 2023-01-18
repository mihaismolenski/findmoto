import { Link } from "react-router-dom";

export const Footer = () => {
    return <div className="footer">
        <div className="footer-copyright">© {new Date().getFullYear()} FindYourMotorcycle</div>
        <Link to="/contact-us">Contact Us</Link>
    </div>
}

export default Footer;