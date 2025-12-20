export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-title">
          T-HEMO — Tulsa Health-Education &amp; Mentorship Organization
        </p>

        <p className="footer-text">
          Hosted by Youth Medical Mentorship (YMM). Project proposed for the Tulsa
          chapter of The Albert Schweitzer Fellowship.
        </p>

        <p className="footer-text">
          Acknowledgment: University of Tulsa (UTulsa) — Oxley College of Health
          &amp; Natural Sciences / Tulsa Schweitzer Fellowship.
        </p>

        <p className="footer-text footer-small">
          © {new Date().getFullYear()} T-HEMO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
