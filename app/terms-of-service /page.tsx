import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Aurexis Surface Transformations",
  description:
    "Terms governing the use of the Aurexis Surface Transformations website and surface transformation services.",
  alternates: {
    canonical: "https://aurexis-theta.vercel.app/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="19 September 2026"
      description="Terms governing the use of the Aurexis website and our surface transformation services."
    >
      <section id="introduction">
        <h2>1. Introduction</h2>

        <p>
          These Terms of Service govern your use of the Aurexis Surface
          Transformations website and the provision of services by Aurexis
          Surface Transformations, a trading name and operating business of
          MSS TRADING (PTY) LTD.
        </p>

        <p>
          By using this website or engaging Aurexis for services, you agree
          to comply with these terms together with any applicable quotation,
          project scope, written agreement or other commercial terms issued
          for a specific project.
        </p>
      </section>

      <section id="company">
        <h2>2. Company Details</h2>

        <div className="legal-page__meta-grid">
          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">Trading Name</span>
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

      <section id="website">
        <h2>3. Website Use</h2>

        <p>
          You may use this website for lawful purposes only. You must not
          knowingly use the website in a way that could damage, disable,
          overburden or impair the website or interfere with another person's
          use of it.
        </p>

        <p>
          You must not attempt to gain unauthorised access to website
          systems, accounts, servers, databases or security mechanisms.
        </p>
      </section>

      <section id="services">
        <h2>4. Surface Transformation Services</h2>

        <p>
          Aurexis may provide surface transformation services including,
          depending on project requirements and availability, architectural
          films, cabinetry transformation, glass films, automotive wrapping
          and related surface finishing services.
        </p>

        <p>
          Services, materials, finishes, installation methods, availability
          and project suitability may vary from project to project.
        </p>
      </section>

      <section id="surface-preparation">
        <h2>5. Surface Preparation and Substrate Conditions</h2>

        <p>
          Successful installation depends significantly on the condition and
          suitability of the underlying surface.
        </p>

        <p>
          Before installation, surfaces may need to be cleaned, degreased,
          repaired, dried, levelled or otherwise prepared. Existing paint,
          coatings, laminates, sealants, contamination, moisture, structural
          defects or surface deterioration may affect adhesion and final
          results.
        </p>

        <p>
          Aurexis may decline to install a material on a substrate that it
          reasonably considers unsuitable or unsafe. Where installation
          proceeds despite an identified condition, the applicable risks may
          be recorded in the project quotation or agreement.
        </p>
      </section>

      <section id="quotes">
        <h2>6. Quotations and Pricing</h2>

        <p>
          Website information, indicative prices and initial discussions do
          not constitute a binding quotation unless expressly identified as
          such.
        </p>

        <p>
          A quotation may depend on measurements, material selection, surface
          condition, preparation requirements, access, installation
          complexity, location and other project-specific factors.
        </p>

        <p>
          Changes requested after acceptance of a quotation, additional
          preparation, unforeseen substrate conditions, additional materials
          or additional work may result in additional charges where agreed
          between the parties.
        </p>
      </section>

      <section id="customer-responsibilities">
        <h2>7. Customer Responsibilities</h2>

        <p>
          Customers are responsible for providing accurate information
          relevant to the project, ensuring that the property or vehicle is
          available for the agreed work, and disclosing known conditions that
          could materially affect installation.
        </p>

        <p>
          Where a customer supplies materials, measurements, drawings,
          instructions or other specifications, the customer remains
          responsible for their accuracy unless Aurexis expressly assumes
          responsibility in writing.
        </p>
      </section>

      <section id="results">
        <h2>8. Materials and Finished Results</h2>

        <p>
          Surface transformation is dependent on the substrate, existing
          finishes, environmental conditions, material characteristics and
          installation conditions.
        </p>

        <p>
          Visual differences may occur between samples, digital images,
          displays and installed materials. Material manufacturers may also
          specify limitations concerning temperature, moisture, exposure,
          cleaning, maintenance and substrate suitability.
        </p>
      </section>

      <section id="liability">
        <h2>9. Liability</h2>

        <p>
          To the extent permitted by applicable law, Aurexis will not be
          responsible for losses arising from conditions outside its
          reasonable control, including undisclosed substrate defects,
          inaccurate information supplied by a customer, pre-existing
          damage, unsuitable surfaces or improper subsequent care.
        </p>

        <p>
          Nothing in these terms excludes or limits liability where doing so
          would be prohibited by applicable law.
        </p>

        <p>
          Where a specific project agreement provides different warranty,
          remedy or liability terms, those terms will apply to the extent
          that they conflict with these general website terms.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>10. Intellectual Property</h2>

        <p>
          Unless otherwise stated, content appearing on this website,
          including branding, text, graphics, photographs, layouts and other
          materials, is owned by or licensed to Aurexis or its relevant
          rights holders.
        </p>

        <p>
          Website content may not be reproduced, commercially exploited,
          modified or redistributed without appropriate permission, except
          where permitted by law.
        </p>
      </section>

      <section id="third-party">
        <h2>11. Third-Party Services</h2>

        <p>
          The website may depend on or interact with third-party services,
          hosting providers, analytics services, communication platforms or
          other external systems.
        </p>

        <p>
          Aurexis is not responsible for the independent operation, content,
          security or availability of third-party services outside its
          reasonable control.
        </p>
      </section>

      <section id="changes">
        <h2>12. Changes to These Terms</h2>

        <p>
          Aurexis may update these Terms of Service from time to time. The
          current version published on this website will apply to future
          website use, subject to any separate written terms governing an
          existing project.
        </p>
      </section>
    </LegalPage>
  );
}
