import Link from "next/link";
import "../styles/legal.css";

type LegalSection = {
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  description,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <main className="legal-page">
      <div className="legal-page__container">

        <header className="legal-page__header">
          <Link href="/" className="legal-page__back">
            ← Aurexis
          </Link>

          <span className="legal-page__eyebrow">
            {eyebrow}
          </span>

          <h1>{title}</h1>

          <p className="legal-page__description">
            {description}
          </p>

          <div className="legal-page__updated">
            Last updated: {updated}
          </div>
        </header>

        <div className="legal-page__body">

          <aside className="legal-page__toc">
            <span>On this page</span>

            <nav aria-label="Page navigation">
              {sections.map((section, index) => (
                <a
                  href={`#section-${index + 1}`}
                  key={section.title}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="legal-page__content">
            {sections.map((section, index) => (
              <section
                id={`section-${index + 1}`}
                key={section.title}
              >
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </article>

        </div>

        <footer className="legal-page__footer">
          <div>
            <strong>AUREXIS</strong>
            <span>Surface Transformations</span>
          </div>

          <nav aria-label="Legal navigation">
            <Link href="/privacy-policy">
              Privacy
            </Link>

            <Link href="/terms-of-service">
              Terms
            </Link>

            <Link href="/cookie-policy">
              Cookies
            </Link>

            <Link href="/contact">
              Contact
            </Link>
          </nav>
        </footer>

      </div>
    </main>
  );
}
