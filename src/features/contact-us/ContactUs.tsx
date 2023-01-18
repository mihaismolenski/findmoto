export const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="contact-us-content">
                <div className="contact-us-text">For any questions, suggestions and remarks, contact us at:</div>
                <a href="mailto:info@findyourmotorcycle.com" className="contact-us-link">
                    <img src="../images/email.png" alt="email" width="24px" height="24px" /> info@findyourmotorcycle.com</a>
                <a href="tel:+40756627907" className="contact-us-link">
                    <img src="../images/phone-call.png" alt="email" width="24px" height="24px" /> +40-756-627-907</a>
            </div>
        </div>);
}

export default ContactUs;