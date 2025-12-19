const LINKS = {
  mentorForm: "https://forms.gle/REPLACE_WITH_MENTOR_FORM",
  studentForm: "https://forms.gle/REPLACE_WITH_STUDENT_FORM",
  partnerForm: "https://forms.gle/REPLACE_WITH_PARTNER_FORM",
};

export default function GetInvolved() {
  return (
    <main className="container">
      <section className="card">
        <h1 className="h1" style={{ fontSize: 34 }}>Get involved</h1>
        <p className="lead">
          We welcome mentors, students, and community partners. To keep things simple at launch, sign-ups use Google Forms.
        </p>

        <div className="grid3">
          <a className="card" href={LINKS.mentorForm} target="_blank">
            <h2 className="h2">Become a mentor</h2>
            <p className="lead">Support high school students exploring healthcare pathways.</p>
          </a>

          <a className="card" href={LINKS.studentForm} target="_blank">
            <h2 className="h2">I’m a student</h2>
            <p className="lead">Get updates on workshops, resources, and mentorship opportunities.</p>
          </a>

          <a className="card" href={LINKS.partnerForm} target="_blank">
            <h2 className="h2">Partner with us</h2>
            <p className="lead">Co-host events or connect students to programs and opportunities.</p>
          </a>
        </div>

        <p className="muted" style={{ marginTop: 14 }}>
          Tip: Once you create the three Google Forms, paste the links into <b>app/get-involved/page.tsx</b>.
        </p>
      </section>
    </main>
  );
}
