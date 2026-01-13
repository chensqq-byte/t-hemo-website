export default function EventsPage() {
  return (
    <main>
      <h1>Events</h1>
      <p>
        If this fellowship is awarded, THEhub will host a minimum of three
        in-person events during the fellowship year.
      </p>

      <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
        <section style={card}>
          <h2 style={h2}>1) High School → Pre-Health Pathways Workshop (June)</h2>
          <p style={p}>
            An in-person workshop supporting high school students—particularly
            those from rural and economically disadvantaged communities—focused on college
            preparation, healthcare career exploration, and early academic
            planning. Food will be provided.
          </p>
          <p style={p}>
            <b>Family engagement:</b> Parents/caregivers will be invited, with
            dedicated segments on healthcare career pathways and how families can
            support long-term success.
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>
            2) Pre-Health → Medical or Graduate School Application Workshop
            (September)
          </h2>
          <p style={p}>
            An in-person workshop supporting students from community colleges
            (e.g., TCC) and other access-oriented institutions, focused on
            application strategy, test preparation planning, and personal
            statement development. Virtual participation options will be offered
            to reduce geographic barriers.
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>3) Healthcare Career Pathways Panel (February)</h2>
          <p style={p}>
            A panel featuring local healthcare professionals sharing career
            trajectories, lived experiences, and mentorship advice. The panel
            will intentionally highlight diverse and nontraditional pathways.
          </p>
        </section>
      </div>
    </main>
  );
}

const card: React.CSSProperties = {
  border: "1px solid #e6e8ee",
  borderRadius: 14,
  padding: 16,
  background: "#fff",
};

const h2: React.CSSProperties = { margin: 0, fontSize: 18 };
const p: React.CSSProperties = { marginTop: 10, marginBottom: 0, lineHeight: 1.6 };
