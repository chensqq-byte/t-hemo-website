import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "T-HEMO | Hosted by YMM",
  description:
    "Tulsa Health-Education & Mentorship Organization (T-HEMO) — a digital mentorship platform supporting rural and low-income students, hosted by Youth Medical Mentorship (YMM).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content" className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
