"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header" role="banner">
      {/* Skip link for accessibility */}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="header-inner">
        <Link href="/" className="brand" aria-label="T-HEMO home">
          <div className="brand-logo" aria-hidden="false">
            <Image
              src="/ymm-logo.jpg"
              alt="Youth Medical Mentorship (YMM) logo"
              width={56}
              height={56}
              priority
            />
          </div>

          <div className="brand-text">
            <div className="brand-title">T-HEMO</div>
            <div className="brand-subtitle">Hosted by YMM</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          <ul className="nav-list">
            {navLinks.map((l) => {
              const isActive =
                l.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(l.href);

              return (
                <li key={l.href} className="nav-item">
                  <Link
                    href={l.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
