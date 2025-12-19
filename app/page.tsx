export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <section className="card">
          <div className="tag">Tulsa • Rural Oklahoma • Low-income pathways</div>
          <h1 className="h1" style={{ marginTop: 10 }}>T-HEMO</h1>
          <p className="lead">
            Tulsa Health-Education & Mentorship Organization is a “Learn & Pass On” mentorship network
            supporting aspiring health professionals—starting with high school students—especially from rural
            communities and low-income educational pathways (including community colleges like TCC).
          </p>
          <div className="btnrow">
            <a className="btnPrimary" href="/get-involved">Get involved</a>
            <a className="btnSecondary" href="/events">See events</a>
            <a className="btnSecondary" href="/resources">View resources</a>
          </div>

          <div className="kpi">
            <span className="pill"><b>3</b>&nbsp;<span className="muted">signature events/year</span></span>
            <span className="pill"><b>June</b>&nbsp;<span className="muted">Workshop</span></span>
            <span className="pill"><b>Sep</b>&nbsp;<span className="muted">Workshop</span></span>
            <span className="pill"><b>Feb</b>&nbsp;<span className="muted">Panel</span></span>
          </div>
        </section>

        <aside className="card">
          <h2 className="h2">What we do</h2>
          <ul>
            <li><b>Direct mentorship</b> through face-to-face workshops and panels.</li>
            <li><b>Access-first design</b> for rural students and low-income pathways.</li>
            <li><b>Sustainability</b> via a “give-and-take” cycle: participants become future mentors.</li>
            <li><b>Digital hub</b> for event updates, templates, and recordings.</li>
          </ul>
          <div style={{ marginTop: 14 }} className="card">
            <h3 className="h3">Hosted by YMM</h3>
            <p className="lead" style={{ marginTop: 8 }}>
              Youth Medical Mentorship (YMM) partners with T-HEMO to strengthen Tulsa’s healthcare pipeline.
            </p>
          </div>
        </aside>
      </div>

      <section className="grid3">
        <div className="card">
          <h3 className="h3">For high school students</h3>
          <p className="lead">Pre-health pathways, college planning, and early mentoring.</p>
        </div>
        <div className="card">
          <h3 className="h3">For mentors</h3>
          <p className="lead">Share experience, open doors, and support the next generation.</p>
        </div>
        <div className="card">
          <h3 className="h3">For partners</h3>
          <p className="lead">Co-host events and connect students to opportunities.</p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} T-HEMO • Hosted by Youth Medical Mentorship (YMM)
      </footer>
    </main>
  );
}
