import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Aurexis Surface Transformations",
  description:
    "Privacy Policy for Aurexis Surface Transformations, a subsidiary of MSS TRADING (PTY) LTD.",
  alternates: {
    canonical: "https://aurexis-theta.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="19 September 2026"
      description="How Aurexis Surface Transformations collects, uses, protects and handles personal information."
    >
      <section id="introduction">
        <h2>1. Introduction</h2>

        <p>
          Aurexis Surface Transformations is a trading name and operating
          business of MSS TRADING (PTY) LTD. This Privacy Policy explains how
          we collect, use, store, disclose and protect personal information
          obtained through our website, enquiries and business interactions.
        </p>

        <p>
          Aurexis is committed to handling personal information responsibly
          and in accordance with applicable South African privacy law,
          including the Protection of Personal Information Act 4 of 2013
          (POPIA), where applicable.
        </p>
      </section>

      <section id="responsible-party">
        <h2>2. Responsible Party</h2>

        <div className="legal-page__meta-grid">
          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">Trading Entity</span>
            <span className="legal-page__meta-value">
              Aurexis Surface Transformations
            </span>
          </div>

          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">Legal Entity</span>
            <span className="legal-page__meta-value">
              MSS TRADING (PTY) LTD
            </span>
          </div>

          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">
              Taxpayer Reference
            </span>
            <span className="legal-page__meta-value">9070764197</span>
          </div>

          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">
              Registered Address
            </span>
            <span className="legal-page__meta-value">
              842-25 Novha Street, Block WW, Soshanguve, 0052
            </span>
          </div>
        </div>
      </section>

      <section id="information">
        <h2>3. Information We Collect</h2>

        <p>
          Depending on how you interact with Aurexis, we may collect
          information that you voluntarily provide to us, including:
        </p>

        <ul>
          <li>Name and contact information.</li>
          <li>Email address, telephone number or other contact details.</li>
          <li>Project location and project requirements.</li>
          <li>Information concerning surfaces, materials and dimensions.</li>
          <li>Photographs, videos, drawings or other project files.</li>
          <li>Information contained in correspondence with us.</li>
        </ul>

        <p>
          We may also receive limited technical information about visits to
          our website, such as browser type, device type, pages viewed and
          general website usage information, depending on the technologies
          enabled on the website.
        </p>
      </section>

      <section id="use">
        <h2>4. How We Use Personal Information</h2>

        <p>We may use personal information to:</p>

        <ul>
          <li>Respond to enquiries and requests for information.</li>
          <li>Prepare quotations and project proposals.</li>
          <li>Assess project requirements and installation conditions.</li>
          <li>Communicate with customers and prospective customers.</li>
          <li>Provide and administer our services.</li>
          <li>Improve our website, services and customer experience.</li>
          <li>Maintain website security and prevent misuse.</li>
          <li>Meet applicable legal, regulatory or contractual obligations.</li>
        </ul>
      </section>

      <section id="lawful-basis">
        <h2>5. Lawful Processing</h2>

        <p>
          Where POPIA or another applicable privacy regime requires a lawful
          basis for processing, Aurexis may process information where the
          processing is based on consent, a contractual or pre-contractual
          relationship, a legal obligation, legitimate interests where
          permitted, or another lawful basis recognised by applicable law.
        </p>

        <p>
          Where processing relies on consent, you may withdraw that consent
          subject to legal or operational limitations.
        </p>
      </section>

      <section id="sharing">
        <h2>6. Disclosure and Third Parties</h2>

        <p>
          Aurexis does not intend to sell personal information. We may,
          however, disclose information where reasonably necessary to operate
          our business, provide services, communicate with customers, process
          enquiries, maintain technology systems or comply with legal
          obligations.
        </p>

        <p>
          Third-party service providers may process information on our behalf.
          Where appropriate, we seek to ensure that such processing is
          subject to suitable confidentiality, security and data-processing
          arrangements.
        </p>

        <p>
          Information may also be disclosed where required by law, lawful
          process, court order, regulatory authority or where necessary to
          protect the rights, property or security of Aurexis, its customers
          or other persons.
        </p>
      </section>

      <section id="security">
        <h2>7. Security</h2>

        <p>
          Aurexis takes reasonable technical and organisational measures to
          protect personal information against unauthorised access, loss,
          misuse, alteration or disclosure.
        </p>

        <p>
          No transmission or storage system connected to the internet can be
          guaranteed to be completely secure. You should therefore avoid
          sending highly sensitive information through unsecured channels
          unless specifically requested and appropriately protected.
        </p>
      </section>

      <section id="retention">
        <h2>8. Retention</h2>

        <p>
          Personal information is retained only for as long as reasonably
          necessary for the purpose for which it was collected, to maintain
          business records, resolve disputes, comply with legal obligations,
          enforce agreements or protect legitimate business interests.
        </p>
      </section>

      <section id="rights">
        <h2>9. Your Rights</h2>

        <p>
          Subject to applicable law, individuals may have rights relating to
          their personal information, including the right to request access
          to personal information, request correction of inaccurate
          information, object to certain processing, withdraw consent where
          applicable, or request deletion where legally available.
        </p>

        <p>
          Requests should provide sufficient information to identify the
          relevant individual and information concerned. Applicable
          limitations and verification requirements may apply.
        </p>
      </section>

      <section id="international">
        <h2>10. International Processing</h2>

        <p>
          Some technology or service providers used in connection with our
          website or communications may process information outside South
          Africa. Where applicable law requires safeguards for cross-border
          transfers, Aurexis will seek to comply with those requirements.
        </p>
      </section>

      <section id="children">
        <h2>11. Children</h2>

        <p>
          Our services and website are intended for general business and
          consumer audiences and are not directed specifically at children.
          We do not knowingly seek to collect personal information from
          children in circumstances where applicable law prohibits such
          collection.
        </p>
      </section>

      <section id="changes">
        <h2>12. Changes to This Policy</h2>

        <p>
          Aurexis may update this Privacy Policy from time to time to reflect
          changes in our business, technology, legal requirements or
          practices. The updated version will be published on this website
          with a revised effective or update date.
        </p>
      </section>
    </LegalPage>
  );
}
