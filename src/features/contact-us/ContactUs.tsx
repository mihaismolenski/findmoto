import { SEO } from "../../components";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <SEO
        title="Contact Us - FindYourMotorcycle"
        description="Get in touch with us!. Don't hesitate to contact us for any questions, suggestions, or business inquiries. Always welcome to help!"
      />
      <div className="contact-us-content">
        <div className="contact-us-text">
          For any questions, suggestions and business inquiries, contact us at:
        </div>
        <a
          href="mailto:info@findyourmotorcycle.com"
          className="contact-us-link"
        >
          <img
            src="../images/email.png"
            alt="email"
            width="24px"
            height="24px"
          />{" "}
          info@findyourmotorcycle.com
        </a>
        <a href="tel:+40756627907" className="contact-us-link">
          <img
            src="../images/phone-call.png"
            alt="email"
            width="24px"
            height="24px"
          />{" "}
          +40-756-627-907
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
