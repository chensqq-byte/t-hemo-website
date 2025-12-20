import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <p className="hero-kicker">Hosted by Youth Medical Mentorship (YMM)</p>

          <h1 id="hero-title" className="hero-title">
            T-HEMO: Tulsa Health-Education &amp; Mentorship Organization
          </h1>

          <p className="hero-subtitle">
            A “give-and-take” digital mentorship platform connecting high school
            students—especially those from rural and low-income communities—to
            mentors, resources, and guided pathways into health careers.
          </p>

          <div className="hero-actions" role="group" aria-label="Primary actions">
            <Link className="btn btn-primary" href="/get-involved">
              Get Involved
            </Link>
            <Link className="btn btn-secondary" href="/events">
              View Events
            </Link>
          </div>

          <div className="hero-highlights" aria-label="Key highlights">
            <div className="card">
              <h2 className="card-title">Mentorship Access</h2>
              <p className="card-text">
                Structured guidance for students exploring health pathways and
                preparing for next steps.
              </p>
            </div>

            <div className="card">
              <h2 className="card-title">Events</h2>
              <p className="card-text">
                Co-branded mentorship events (June / September / February).
              </p>
            </div>

            <div className="card">
              <h2 className="card-title">Rural + Low-Income Focus</h2>
              <p className="card-text">
                Prioritizing students in rural Oklahoma and low-income college
                pathways (e.g., community colleges).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Quick links">
        <div className="section-inner">
          <h2 className="section-title">Start here</h2>
          <div className="grid">
            <Link className="tile" href="/about">
              <span className="tile-title">About T-HEMO</span>
              <span className="tile-text">Mission, approach, and partners.</span>
            </Link>

            <Link className="tile" href="/resources">
              <span className="tile-title">Resources</span>
              <span className="tile-text">Guides, recordings, and support materials.</span>
            </Link>

            <Link className="tile" href="/contact">
              <span className="tile-title">Contact</span>
              <span className="tile-text">Reach out to collaborate or ask questions.</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
