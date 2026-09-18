import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Aurexis Surface Transformations",
  description:
    "Learn how Aurexis Surface Transformations uses cookies and similar technologies on its website.",
  alternates: {
    canonical: "https://aurexis-theta.vercel.app/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal / Cookies"
      title="Cookie Policy"
      description="Information about cookies and similar technologies that may be used on the Aurexis website."
      updated="19 September 2026"
      sections={[
        {
          title: "1. What Are Cookies?",
          content: (
            <p>
              Cookies are small files or pieces of information that websites
              may store on a visitor's device. They can help websites
              remember preferences, understand usage and provide certain
              functionality.
            </p>
          ),
        },
        {
          title: "2. How Aurexis May Use Cookies",
          content: (
            <>
              <p>
                Aurexis may use cookies or similar technologies for purposes
                such as:
              </p>

              <ul>
                <li>Website functionality</li>
                <li>Security</li>
                <li>Remembering preferences</li>
                <li>Understanding website usage</li>
                <li>Improving website performance</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Analytics",
          content: (
            <p>
              If analytics services are enabled on the website, they may use
              cookies or similar technologies to provide information about
              website traffic and usage. Any such services should be reviewed
              against their respective privacy and cookie policies.
            </p>
          ),
        },
        {
          title: "4. Managing Cookies",
          content: (
            <p>
              Most modern browsers allow you to manage or disable cookies
              through browser settings. Disabling certain cookies may affect
              the functionality of some websites.
            </p>
          ),
        },
        {
          title: "5. Third-Party Technologies",
          content: (
            <p>
              Certain embedded services, analytics platforms or other
              third-party functionality may use their own cookies or similar
              technologies. Those technologies are governed by the relevant
              third party's policies.
            </p>
          ),
        },
        {
          title: "6. Changes to This Policy",
          content: (
            <p>
              This Cookie Policy may be updated when our website technology,
              analytics configuration or legal requirements change. The
              latest version will be published on this page.
            </p>
          ),
        },
      ]}
    />
  );
}
