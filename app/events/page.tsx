export default function Events() {
  return (
    <main className="container">
      <section className="card">
        <h1 className="h1" style={{ fontSize: 34 }}>Events</h1>
        <p className="lead">
          T-HEMO runs three signature events each year. Participation is prioritized for high school students
          from rural communities and low-income pathways. Virtual options are available when possible.
        </p>

        <div className="grid3">
          <div className="card">
            <div className="tag">June</div>
            <h2 className="h2" style={{ marginTop: 10 }}>High School → Pre-Health Pathways Workshop</h2>
            <p className="lead">College preparation, pre-health planning, and early mentorship.</p>
          </div>

          <div className="card">
            <div className="tag">September</div>
            <h2 className="h2" style={{ marginTop: 10 }}>High School Mentorship Skills Workshop</h2>
            <p className="lead">Study strategies, self-efficacy skills, and healthcare pathway planning.</p>
          </div>

          <div className="card">
            <div className="tag">February</div>
            <h2 className="h2" style={{ marginTop: 10 }}>Healthcare Career Pathways Panel</h2>
            <p className="lead">Local professionals share career stories and mentorship advice.</p>
          </div>
        </div>

        <div style={{ marginTop: 14 }} className="card">
          <h2 className="h2">Calendar</h2>
          <p className="lead">
            If you create a public Google Calendar, paste the embed code here to show upcoming events.
          </p>
        </div>
      </section>
    </main>
  );
}
