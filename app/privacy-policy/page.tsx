import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Aurexis Surface Transformations",
  description:
    "Read the Aurexis Surface Transformations privacy policy covering personal information, enquiries, communications and website usage.",
  alternates: {
    canonical: "https://aurexis-theta.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal / Privacy"
      title="Privacy Policy"
      description="How Aurexis Surface Transformations handles information submitted through this website."
      updated="19 September 2026"
      sections={[
        {
          title: "1. Introduction",
          content: (
            <>
              <p>
                Aurexis Surface Transformations respects the privacy of
                individuals who interact with our website and services.
              </p>

              <p>
                This Privacy Policy explains what information we may collect,
                why we collect it, how it may be used, and the choices
                available to you.
              </p>

              <p>
                Aurexis Surface Transformations is a wholly owned subsidiary
                of <strong>MSS TRADING (PTY) LTD</strong>.
              </p>
            </>
          ),
        },
        {
          title: "2. Information We Collect",
          content: (
            <>
              <p>
                We may collect information that you voluntarily provide when
                contacting Aurexis or requesting information about our
                services.
              </p>

              <ul>
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Telephone or WhatsApp contact details</li>
                <li>Project location</li>
                <li>Information about your project requirements</li>
                <li>Images or other files submitted as part of an enquiry</li>
                <li>Other information you choose to provide</li>
              </ul>

              <p>
                We may also receive limited technical information when you
                visit the website, such as browser type, device information,
                pages visited and general usage information.
              </p>
            </>
          ),
        },
        {
          title: "3. How We Use Information",
          content: (
            <>
              <p>
                Information submitted to Aurexis may be used to:
              </p>

              <ul>
                <li>Respond to enquiries</li>
                <li>Prepare quotations or project proposals</li>
                <li>Understand project requirements</li>
                <li>Communicate about requested services</li>
                <li>Improve our website and services</li>
                <li>Maintain website security and functionality</li>
                <li>Meet applicable legal or regulatory requirements</li>
              </ul>
            </>
          ),
        },
        {
          title: "4. Sharing of Information",
          content: (
            <>
              <p>
                Aurexis does not intend to sell personal information submitted
                through this website.
              </p>

              <p>
                Information may be shared with service providers or
                contractors where reasonably necessary to operate the website,
                communicate with you, process enquiries, or deliver requested
                services.
              </p>

              <p>
                Information may also be disclosed where required by law or
                where reasonably necessary to protect our rights, property,
                security or users.
              </p>
            </>
          ),
        },
        {
          title: "5. Data Security",
          content: (
            <p>
              We take reasonable measures to protect information against
              unauthorised access, loss, misuse or disclosure. However, no
              internet transmission or storage system can be guaranteed to be
              completely secure.
            </p>
          ),
        },
        {
          title: "6. Data Retention",
          content: (
            <p>
              Personal information may be retained for as long as reasonably
              necessary for the purpose for which it was collected, to
              maintain business records, resolve disputes, comply with legal
              obligations, or protect our legitimate interests.
            </p>
          ),
        },
        {
          title: "7. Your Rights",
          content: (
            <>
              <p>
                Depending on applicable law, you may have rights relating to
                personal information held about you, including rights to
                request access, correction or deletion where applicable.
              </p>

              <p>
                To make a privacy-related request, please contact Aurexis
                through the contact information provided on our website.
              </p>
            </>
          ),
        },
        {
          title: "8. Changes to This Policy",
          content: (
            <p>
              This Privacy Policy may be updated from time to time. The
              latest version will be published on this page with the relevant
              update date.
            </p>
          ),
        },
      ]}
    />
  );
}
