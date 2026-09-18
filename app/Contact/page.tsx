import type { Metadata } from "next";
import Link from "next/link";
import "../../styles/legal.css";

export const metadata: Metadata = {
  title: "Contact Aurexis | Surface Transformations Cape Town",
  description:
    "Contact Aurexis Surface Transformations in Cape Town for architectural film, cabinetry, glass and automotive surface transformation projects.",
  alternates: {
    canonical: "https://aurexis-theta.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="legal-page">
      <div className="legal-page__container">

        <header className="legal-page__header">
          <Link href="/" className="legal-page__back">
            ← Aurexis
          </Link>

          <span className="legal-page__eyebrow">
            Start a Project
          </span>

          <h1>Contact Aurexis</h1>

          <p className="legal-page__description">
            Tell us what you want to transform. We work across architectural,
            commercial, residential, glass and automotive surfaces in Cape
            Town and surrounding areas.
          </p>
        </header>

        <div className="legal-page__body">

          <aside className="legal-page__toc">
            <span>Contact</span>

            <nav aria-label="Contact navigation">
              <a href="#project">Start a project</a>
              <a href="#company">Company</a>
            </nav>
          </aside>

          <article className="legal-page__content">

            <section id="project">
              <h2>Start a project</h2>

              <p>
                For a project enquiry, include as much information as
                possible about the surface, location, approximate dimensions
                and transformation you have in mind.
              </p>

              <p>
                You can also include photographs when contacting the Aurexis
                team so that we can better understand the project before
                discussing the next steps.
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@aurexis.co.za">
                  hello@aurexis.co.za
                </a>
              </p>
            </section>

            <section id="company">
              <h2>Company information</h2>

              <p>
                <strong>Brand:</strong> Aurexis Surface Transformations
              </p>

              <p>
                <strong>Parent company:</strong> MSS TRADING (PTY) LTD
              </p>

              <p>
                <strong>CEO:</strong> Midas M
              </p>

              <p>
                <strong>Taxpayer Reference Number:</strong> 9070764197
              </p>

              <p>
                <strong>Registered Address:</strong><br />
                842-25 Novha Street,<br />
                Block WW,<br />
                Soshanguve, 0052,<br />
                South Africa
              </p>
            </section>

          </article>
        </div>

        <footer className="legal-page__footer">
          <div>
            <strong>AUREXIS</strong>
            <span>Surface Transformations</span>
          </div>

          <nav aria-label="Legal navigation">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
            <Link href="/cookie-policy">Cookies</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </footer>

      </div>
    </main>
  );
}
