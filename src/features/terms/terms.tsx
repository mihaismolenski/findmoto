import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export const Terms = () => {
  return (
    <div className="terms">
      <SEO
        title="Terms & Conditions - FindYourMotorcycle"
        description="Important information about FindYourMotorcycle Terms & Conditions. Please read it and get acquainted with all the details. For any questions, please contact us."
      />
      <div className="terms-title">
        <b>/FindYourMotorcycle/</b> Terms & Conditions
      </div>
      <div className="last-updated">Last updated on 1/18/2023</div>
      <h2>1. Agreement to Terms</h2>
      <p>
        By viewing or using this Website, which can be accessed at 
        <Link to="/" target="_blank">
          https://findyourmotorcycle.com/
        </Link>
        , you are agreeing to be bound by all these Website’s Terms of Use and
        agree with any applicable local laws. If you disagree with any of these
        terms, you are prohibited from accessing this Website or using the
        Service. All materials in this Website are protected by trade mark law
        and copyright. For purposes of this Terms of Use, the terms “company”,
        “we” and “our” refers to the Company.
      </p>
      <h2>2. Privacy policy</h2>
      <p>
        We advise you to read our privacy policy{" "}
        <Link to="/privacy-policy" target="_blank">
          Privacy Policy
        </Link>
        &nbsp;regarding our user data collection. It will help you better
        understand our practices.
      </p>
      <h2>3. Use License</h2>
      <p>
        Permission is granted to temporarily download one copy of the materials
        on our Website for personal, non-commercial transitory viewing only.
        This is the grant of a license, not a transfer of title, and under this
        license you may not: modify or copy the materials;use the materials for
        any commercial purpose or for any public display;attempt to reverse
        engineer any software contained on our Website;remove any copyright or
        other proprietary notations from the materials; ortransferring the
        materials to another person or "mirror" the materials on any other
        server. This will let Company to terminate upon violations of any of
        these restrictions. Upon termination, your viewing right will also be
        terminated and you should destroy any downloaded materials in your
        possession whether it is electronic format or printed.
      </p>
      <h2>4. Disclaimer</h2>
      <p>
        All the materials on our Website are provided on an “as is” basis.  You
        agree that your use of the Website will be at your own risk. We make no
        warranties, may it be expressed or implied, therefore negates all other
        warranties. Furthermore, Company does not make any representations
        concerning the accuracy or reliability of the use of the materials on
        its Website or otherwise relating to such materials or any sites linked
        to this Website.
      </p>
      <h2>5. Limitations</h2>
      <p>
        Company or its suppliers will not be hold accountable for any damages
        that will arise with the use or inability to use the materials on our
        Website, even if we or an authorised representative of this Website has
        been notified, orally or written, of the possibility of such damage.
        Some jurisdiction does not allow limitations on implied warranties or
        limitations of liability for incidental damages, these limitations may
        not apply to you.
      </p>
      <h2>6. Corrections</h2>
      <p>
        There may be information or materials appearing on our Website that
        contains technical, typographical, or photographic errors. We will not
        promise that any of the materials in this Website are accurate,
        complete, or current. We reserve the right to change and update the
        materials contained on its Website at any time without prior notice.
      </p>
      <h2>7. Links</h2>
      <p>
        <b>FindYourMotorcycle</b> has no control over all links provided on this
        Website and is not responsible for the contents of any such linked site.
        The presence of any link does not imply endorsement of the site by{" "}
        <b>FindYourMotorcycle</b>. The use of any linked website is at your own
        risk.
      </p>
      <h2>8. Modification of Terms of Use</h2>
      <p>
        Company may revise or include supplemental terms in these Terms of Use
        on its Website from time to time without prior notice. Please ensure
        that you check the current Terms of Use every time you use the Website.
        By using this Website, you are agreeing to be bound by the current
        version of these Terms of Use.
      </p>
      <h2>9. Applicable law</h2>
      <p>
        Any claim related to our Website shall be governed by the laws of
        Romania without regards to its conflict of law provisions.
      </p>
      <h2>10. Contact</h2>
      In case of any questions or requests, please contact us at:
      <ul>
        <li> FindYourMotorcycle Iasi, Romania</li>
        <li>+40-756-627-907</li>
        <li> info@findyourmotorcycle.com</li>
      </ul>
    </div>
  );
};

export default Terms;
