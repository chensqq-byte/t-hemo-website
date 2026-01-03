export default function About() {
  return (
    <main className="container">
      <section className="card">
        <h1 className="h1" style={{ fontSize: 34 }}>About T-HEMO</h1>
        <p className="lead">
          T-HEMO is a mentorship and health-education initiative built to reduce barriers for students
          pursuing healthcare careers—starting with high school students and prioritizing rural communities
          and economically disadvantaged educational pathways (including community colleges like TCC).
        </p>

        <div className="grid3">
          <div className="card">
            <h2 className="h2">Mission</h2>
            <p className="lead">Expand equitable access to mentorship and health-education resources.</p>
          </div>
          <div className="card">
            <h2 className="h2">Model</h2>
            <p>
  T-HEMO is built on a “Take & Give” mentorship model. Participants are encouraged
  to take mentorship, resources, and guidance when they need support, and to give
  back as mentors, speakers, or peer leaders as they progress. This reciprocal
  approach promotes leadership development, accountability, and long-term
  sustainability.
</p>

          </div>
          <div className="card">
            <h2 className="h2">Focus</h2>
            <p className="lead">Rural access, economically disadvantaged pathways, and practical guidance.</p>
          </div>
        </div>

        <div style={{ marginTop: 14 }} className="card">
          <h2 className="h2">Leadership & mentorship</h2>
          <p className="lead">
            Applicant: Xiang Chen (PhD candidate, Biophysics, The University of Tulsa). Academic Mentor: Dr. Xinxin Wang.
            Host Organization: Youth Medical Mentorship (YMM).
          </p>
        </div>
      </section>
    </main>
  );
}
