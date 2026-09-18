import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Aurexis Surface Transformations",
  description:
    "Review the terms governing the use of the Aurexis Surface Transformations website and services.",
  alternates: {
    canonical: "https://aurexis-theta.vercel.app/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal / Terms"
      title="Terms of Service"
      description="The terms governing use of the Aurexis Surface Transformations website and engagement with our services."
      updated="19 September 2026"
      sections={[
        {
          title: "1. About Aurexis",
          content: (
            <>
              <p>
                Aurexis Surface Transformations provides surface
                transformation and related services across residential,
                commercial, architectural and automotive applications.
              </p>

              <p>
                Aurexis Surface Transformations is a wholly owned subsidiary
                of <strong>MSS TRADING (PTY) LTD</strong>.
              </p>
            </>
          ),
        },
        {
          title: "2. Website Use",
          content: (
            <p>
              You may use this website for lawful purposes and in accordance
              with these Terms. You must not use the website in a way that
              could damage, disable, overburden or interfere with its operation
              or security.
            </p>
          ),
        },
        {
          title: "3. Service Enquiries",
          content: (
            <>
              <p>
                Information displayed on this website is provided for general
                information and does not constitute a binding quotation or
                contract for services.
              </p>

              <p>
                Project pricing, materials, specifications, timelines and
                installation requirements may vary depending on the individual
                project.
              </p>

              <p>
                A project becomes binding only when the applicable quotation,
                scope of work and commercial terms have been accepted by the
                relevant parties.
              </p>
            </>
          ),
        },
        {
          title: "4. Materials and Results",
          content: (
            <p>
              Surface transformation results may depend on the condition,
              construction, finish, dimensions and suitability of the
              underlying substrate. Material selection and installation
              recommendations may therefore be determined on a
              project-specific basis.
            </p>
          ),
        },
        {
          title: "5. Quotations",
          content: (
            <p>
              Quotations are based on the information available at the time of
              preparation. Additional work or changes to the agreed scope may
              result in additional costs, subject to the applicable agreement.
            </p>
          ),
        },
        {
          title: "6. Intellectual Property",
          content: (
            <p>
              Unless otherwise stated, the content of this website, including
              text, branding, graphics, photographs, design elements and
              other materials, is owned by or licensed to Aurexis and may not
              be reproduced or commercially exploited without appropriate
              permission.
            </p>
          ),
        },
        {
          title: "7. Third-Party Services",
          content: (
            <p>
              The website may use or link to third-party platforms and
              services. Aurexis is not responsible for the independent
              policies, availability or content of third-party services.
            </p>
          ),
        },
        {
          title: "8. Website Availability",
          content: (
            <p>
              We aim to keep the website available and accurate, but we do
              not guarantee uninterrupted availability or that all information
              will always be complete, current or error-free.
            </p>
          ),
        },
        {
          title: "9. Changes",
          content: (
            <p>
              These Terms may be updated from time to time. The current
              version published on this page will apply to use of the website
              from its effective date.
            </p>
          ),
        },
      ]}
    />
  );
}
