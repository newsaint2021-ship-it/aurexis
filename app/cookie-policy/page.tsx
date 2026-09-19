import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Aurexis Surface Transformations",
  description:
    "Cookie Policy explaining essential, functional and analytical technologies used by Aurexis Surface Transformations.",
  alternates: {
    canonical: "https://aurexis-theta.vercel.app/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="19 September 2026"
      description="Information about cookies and similar technologies that may be used by the Aurexis website."
    >
      <section id="what-are-cookies">
        <h2>1. What Are Cookies?</h2>

        <p>
          Cookies are small files or pieces of information that websites may
          store on your device or access through your browser. Similar
          technologies may perform related functions.
        </p>

        <p>
          Cookies can help websites remember preferences, maintain
          functionality, understand how visitors use a website and improve
          website performance.
        </p>
      </section>

      <section id="categories">
        <h2>2. Cookie Categories</h2>

        <h3>Essential Cookies</h3>

        <p>
          Essential technologies are used where necessary for the website to
          operate, maintain security, deliver requested functionality or
          support core technical operations.
        </p>

        <h3>Functional Cookies</h3>

        <p>
          Functional technologies may remember preferences or settings and
          help provide a more consistent website experience.
        </p>

        <h3>Analytical Cookies</h3>

        <p>
          Analytical technologies may collect information about how visitors
          interact with the website, such as pages visited, approximate usage
          patterns and performance information. This information may be used
          to understand website performance and improve the user experience.
        </p>
      </section>

      <section id="current-use">
        <h2>3. Technologies Used on This Website</h2>

        <p>
          The Aurexis website may use essential technical technologies
          required for hosting, security, routing and normal website
          functionality.
        </p>

        <p>
          Where analytics, embedded content or other third-party functionality
          is enabled, those services may introduce additional cookies or
          similar technologies. Their processing may be governed by their
          respective privacy policies and terms.
        </p>

        <div className="legal-page__notice">
          <span className="legal-page__notice-title">
            Third-party services
          </span>

          <p>
            The specific cookies active on the website can change as website
            functionality and service providers change. Third-party services
            may therefore introduce technologies that are not directly
            controlled by Aurexis.
          </p>
        </div>
      </section>

      <section id="browser-controls">
        <h2>4. Managing Cookies</h2>

        <p>
          Most modern browsers provide controls that allow you to view,
          restrict, block or delete cookies stored on your device.
        </p>

        <p>
          Blocking certain cookies may affect website functionality or
          prevent particular features from operating as intended.
        </p>
      </section>

      <section id="privacy">
        <h2>5. Cookies and Personal Information</h2>

        <p>
          Some cookie identifiers or information collected through similar
          technologies may constitute personal information under applicable
          privacy laws depending on the circumstances.
        </p>

        <p>
          Where applicable, such information will be handled in accordance
          with the Aurexis Privacy Policy and applicable privacy legislation,
          including POPIA where applicable.
        </p>
      </section>

      <section id="changes">
        <h2>6. Changes to This Policy</h2>

        <p>
          Aurexis may update this Cookie Policy when website technologies,
          service providers, legal requirements or our practices change.
          Updates will be published on this page.
        </p>
      </section>
    </LegalPage>
  );
}
