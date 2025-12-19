export default function Resources() {
  return (
    <main className="container">
      <section className="card">
        <h1 className="h1" style={{ fontSize: 34 }}>Resources</h1>
        <p className="lead">
          This page hosts templates, links, and recordings. Content is designed to be accessible to students who may have limited local advising support.
        </p>

        <div className="grid3">
          <div className="card">
            <h2 className="h2">For high school students</h2>
            <ul>
              <li>Pre-health pathway checklist (coming soon)</li>
              <li>College planning timeline (coming soon)</li>
              <li>Shadowing & volunteering guide (coming soon)</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h2">For families</h2>
            <ul>
              <li>Understanding pre-health tracks (coming soon)</li>
              <li>Questions to ask advisors (coming soon)</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h2">For mentors</h2>
            <ul>
              <li>Mentor expectations & boundaries (coming soon)</li>
              <li>Mentorship session structure (coming soon)</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 14 }} className="card">
          <h2 className="h2">Recordings</h2>
          <p className="lead">Link event recordings here (YouTube unlisted links, Google Drive, etc.).</p>
        </div>
      </section>
    </main>
  );
}
