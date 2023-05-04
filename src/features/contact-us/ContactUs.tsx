import { useState } from "react";

import { Button, SEO, Input, Textarea } from "../../components";
import { sendEmail } from "../../api/search.api";

export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    sendEmail(email, message)
      .then(() => setEmailSent(true))
      .finally(() => {
        setMessage("");
        setEmail("");
        setLoading(false);
      });
  };

  return (
    <div className="contact-us">
      <SEO
        title="Contact Us - FindYourMotorcycle"
        description="Get in touch with us!. Don't hesitate to contact us for any questions, suggestions, or business inquiries. Always welcome to help!"
      />
      <div className="contact-us-content">
        <div className="contact-us-text">
          For any questions, suggestions and business inquiries, send us a
          message:
        </div>
        <div className="contact-us-form">
          <Input
            value={email}
            handleChange={(val: string) => setEmail(val)}
            placeholder="Email"
          />
          <Textarea
            value={message}
            placeholder="Message"
            handleChange={(val: string) => setMessage(val)}
          />
          <Button
            text={loading ? "Sending" : "Send message"}
            handleClick={sendMessage}
          />
        </div>
        {emailSent && <div className="contact-us-email-sent">Message sent! Thank you!</div>}
        <div className="contact-us-text">or contact us directly at:</div>
        <div className="contact-us-links">
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
    </div>
  );
};

export default ContactUs;
