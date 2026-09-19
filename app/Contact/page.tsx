import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact Aurexis | Surface Transformations",
  description:
    "Corporate and contact information for Aurexis Surface Transformations, a subsidiary of MSS TRADING (PTY) LTD.",
  alternates: {
    canonical: "https://aurexis-theta.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact Aurexis"
      lastUpdated="19 September 2026"
      description="Corporate, legal and support information for Aurexis Surface Transformations."
    >
      <section id="company">
        <h2>1. Legal Entity</h2>

        <p>
          Aurexis Surface Transformations operates as a trading name of MSS
          TRADING (PTY) LTD.
        </p>

        <div className="legal-page__notice">
          <span className="legal-page__notice-title">
            Legal trading identity
          </span>

          <p>
            <strong>MSS TRADING (PTY) LTD t/a Aurexis Surface
            Transformations</strong>
          </p>
        </div>

        <div className="legal-page__meta-grid">
          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">
              Legal Entity
            </span>

            <span className="legal-page__meta-value">
              MSS TRADING (PTY) LTD
            </span>
          </div>

          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">
              Trading As
            </span>

            <span className="legal-page__meta-value">
              Aurexis Surface Transformations
            </span>
          </div>

          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">
              Taxpayer Reference Number
            </span>

            <span className="legal-page__meta-value">
              9070764197
            </span>
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

      <section id="support">
        <h2>2. Support &amp; Enquiries</h2>

        <p>
          For project enquiries, quotations and general support, use the
          official Aurexis website and the contact channels made available
          through the website.
        </p>

        <div className="legal-page__meta-grid">
          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">
              Official Website
            </span>

            <span className="legal-page__meta-value">
              <a
                href="https://aurexis-theta.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                aurexis-theta.vercel.app
              </a>
            </span>
          </div>

          <div className="legal-page__meta-item">
            <span className="legal-page__meta-label">
              Support
            </span>

            <span className="legal-page__meta-value">
              Contact through the official Aurexis website
            </span>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>3. Project Enquiries</h2>

        <p>
          When contacting Aurexis about a project, useful information may
          include the type of surface, project location, approximate
          dimensions, existing surface condition, desired finish and
          photographs of the area.
        </p>

        <p>
          Providing accurate project information allows Aurexis to assess
          requirements more effectively and determine whether a site
          inspection, measurement or material assessment is necessary.
        </p>
      </section>

      <section id="legal">
        <h2>4. Legal &amp; Corporate Information</h2>

        <p>
          Aurexis Surface Transformations is a subsidiary and operating
          business of MSS TRADING (PTY) LTD.
        </p>

        <p>
          For information concerning the handling of personal information,
          please refer to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>

        <p>
          For website and service terms, please refer to our{" "}
          <Link href="/terms-of-service">Terms of Service</Link>.
        </p>

        <p>
          For information about cookies and similar technologies, please
          refer to our <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>
      </section>

      <section id="location">
        <h2>5. Registered Address</h2>

        <div className="legal-page__notice">
          <span className="legal-page__notice-title">
            Registered Office
          </span>

          <p>
            MSS TRADING (PTY) LTD
            <br />
            842-25 Novha Street
            <br />
            Block WW
            <br />
            Soshanguve, 0052
            <br />
            South Africa
          </p>
        </div>
      </section>
    </LegalPage>
  );
}
