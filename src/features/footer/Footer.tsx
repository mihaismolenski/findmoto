import { Link } from "react-router-dom";

export const Footer = () => {
    return <div className="footer">
        <div className="footer-copyright">© {new Date().getFullYear()} FindYourMotorcycle</div>
        <div className="footer-links">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/contact-us">Contact Us</Link>
        </div>
    </div>
}

export default Footer;