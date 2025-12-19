import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "T-HEMO | Tulsa Health-Education & Mentorship Organization",
  description:
    "T-HEMO is a mentorship and health-education initiative supporting rural and low-income healthcare pathways, hosted by Youth Medical Mentorship (YMM).",
};

function Nav() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <a className="brand" href="/">
          <strong>T-HEMO</strong>
          <span>Hosted by Youth Medical Mentorship (YMM)</span>
        </a>
        <div className="navlinks">
          <a className="pill" href="/about">About</a>
          <a className="pill" href="/events">Events</a>
          <a className="pill" href="/resources">Resources</a>
          <a className="pill" href="/get-involved">Get Involved</a>
          <a className="pill" href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
