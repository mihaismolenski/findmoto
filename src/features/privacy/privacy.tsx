import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <SEO
        title="Privacy Policy - FindYourMotorcycle"
        description="Important information about FindYourMotorcycle Privacy Policy. Please read it and get acquainted with all the legal details.  For any questions, please contact us."
      />
      <div className="privacy-policy-title">
        <b>/FindYourMotorcycle/</b> Privacy Policy
      </div>
      <div className="privacy-policy-last-updated">
        Last updated on 1/18/2023
      </div>
      <p>
        At <b>FindYourMotorcycle</b>, accessible at{" "}
        <Link to="/" target="_blank">
          https://findyourmotorcycle.com/
        </Link>
        , one of our main priorities is the privacy of our visitors. This
        Privacy Policy document is designed to help you understand how we
        collect, use and safeguard the information you provide to us.
      </p>
      <h2>1. Agreement</h2>
      <p>
        By accessing our website, you accept our Privacy Policy and agree to its{" "}
        <Link to="/terms" target="_blank">
          Terms & Conditions
        </Link>
      </p>
      <h2>2. Information collected</h2>
      <h4>Information collected automatically</h4>
      <p>
        By visiting our Website, our servers automatically collect information
        provided by your browser. This data may include information such as
        browser type and version, language preferences, the time and date of
        access, etc, and other non-personal information.
      </p>
      <h4>Information you provide us by registering for an account</h4>
      <p>
        To become a subscriber to the Service you will need to create a personal
        profile by registering with the Service. To register you will need to
        enter your email address and create a user name and a password. By
        registering, you are authorizing us to collect, store and use your email
        address in accordance with this Privacy Policy.
      </p>
      <h4>Privacy of children</h4>
      <p>
        The Website does not knowingly collect or solicit information from
        anyone under the age of 13, or allow anyone under the age of 13 to sign
        up for the Service. In the event that we learn that we have gathered
        personal information from anyone under the age of 13 without the consent
        of a parent or guardian, we will delete that information as soon as
        possible. If you have reason to believe we have collected such
        information, please contact us at{" "}
        <a href="mailto:info@findyourmotorcycle.com">
          info@findyourmotorcycle.com
        </a>
      </p>
      <h2>3. Use and sharing of information</h2>
      <p>
        We do not sell, trade, rent or otherwise share for marketing purposes
        your Personal Information with third parties without your consent,
        except as otherwise stated in this Privacy Policy. We do share Personal
        Information with vendors who are performing services for the Company.
      </p>
      <p>
        We may share Personal Information with outside parties if we have a
        good-faith belief that access, use, preservation or disclosure of the
        information is reasonably necessary to meet any applicable legal process
        or enforceable governmental request.
      </p>
      <p>
        In general, we use Non-Personal Information to help us improve the
        Service and customize the user experience. We also aggregate
        Non-Personal Information in order to track trends and analyze use
        patterns on the Site. This Privacy Policy does not limit in any way our
        use or disclosure of Non-Personal Information and we reserve the right
        to use and disclose such Non-Personal Information to our partners,
        advertisers and other third parties at our discretion.
      </p>
      <p>
        In the event we undergo a business transaction, your Personal
        Information may be among the assets transferred. You acknowledge and
        agree that such transfers may occur and are permitted by this Privacy
        Policy, and that any acquirer of our assets may continue to process your
        Personal Information as set forth in this Privacy Policy. We recommend
        that you check the Website periodically to stay updated on how your
        information is used.
      </p>
      <h2>4. Protection measures</h2>
      <p>
        We implement security measures designed to protect your information from
        unauthorized access. Your account is protected by your account password.
        We further protect your information from potential security breaches by
        implementing certain technological security measures. However, these
        measures do not guarantee that your information will not be accessed,
        disclosed, altered or destroyed by breach of such firewalls and secure
        server software. By using our Service, you acknowledge that you
        understand and agree to assume these risks.
      </p>
      <h4>User rights regarding the use of personal information</h4>
      <p>
        You have the right at any time to prevent us from contacting you for
        marketing purposes. When we send a promotional communication to a user,
        the user can opt out of further promotional communications by following
        the unsubscribe instructions provided in each promotional email.
      </p>
      <h4>Link to other Websites</h4>
      <p>
        As part of the Service, we may provide links to other websites or
        applications that are not owned or controlled by us. Please be aware
        that we are not responsible for the privacy practices employed by those
        websites or the information or content they contain. This Privacy Policy
        applies solely to information collected by us through the Site and the
        Service. We encourage you to read the privacy terms of other websites
        before proceeding to use them.
      </p>
      <h2>5. Changes and amendments</h2>
      <p>
        We reserve the right to change this policy and our Terms of Use at any
        time. We will notify our Privacy Policy changes by sending you an email
        to the contact information you have provided. Please check periodically
        the Website for updates.
      </p>
      <h2>6. Cookies</h2>
      <p>
        <b>FindYourMotorcycle</b> Website and Services may use third-party
        analytics tools that uses "cookies". The information is used to improve
        the users' experience and monitor the Website and Services performance.
      </p>
      <h2>7. Contact</h2>
      <div>
        In case of any questions or concerns regarding this Policy or the
        practices of this Website, we encourage you to contact us at:
      </div>
      <ul>
        <li>
          <address>FindYourMotorcycle Iasi, Romania</address>
        </li>
        <li>
          <a href="tel:+40756627907"> +40-756-627-907</a>
        </li>
        <li>
          <a href="mailto:info@findyourmotorcycle.com">
            info@findyourmotorcycle.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
