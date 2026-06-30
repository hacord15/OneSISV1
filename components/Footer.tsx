"use client";
// components/Footer.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  "About SIS Group",
  "About OneSIS",
  "Board & Management",
  "Why OneSIS",
  "News & Updates",
];

const solutionLinks = [
  "Integrated FM",
  "Property Management",
  "Specialized Services",
  "Technology Platforms",
];

const connectLinks = [
  "Contact Us",
  "Careers",
  "Download Profile",
  "Privacy Policy",
];

const socialLinks = ["LINKEDIN", "TWITTER", "INSTAGRAM"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111714" }}>

      {/* ── Main Footer Body ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
             <Link href="/" className="shrink-0">
                    <Image
                        src="/logo_oneSIS.jpeg"
                        alt="OneSIS Logo"
                        width={160}
                        height={50}
                        className="object-contain"
                        priority
                    />
                </Link>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                color: "rgba(180,210,185,0.45)",
                lineHeight: 1.8,
                maxWidth: 260,
              }}
            >
              A 100% SIS Group company delivering technology-driven,
              self-managed facility management solutions across India.
            </p>

            {/* Badge */}
            <div
              style={{
                border: "1px solid rgba(200,164,74,0.3)",
                padding: "8px 14px",
                display: "inline-flex",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 9,
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  color: "rgba(200,164,74,0.65)",
                }}
              >
                PART OF SIS GROUP — INDIA'S #1 FM COMPANY
              </span>
            </div>
          </div>

          {/* ── Col 2: Company ── */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              COMPANY
            </h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "rgba(210,230,215,0.75)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={e =>
                      ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                    }
                    onMouseLeave={e =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(210,230,215,0.75)")
                    }
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Solutions ── */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              SOLUTIONS
            </h4>
            <ul className="flex flex-col gap-4">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#c8a44a",
                      textDecoration: "none",
                      transition: "opacity 0.15s ease",
                    }}
                    onMouseEnter={e =>
                      ((e.currentTarget as HTMLElement).style.opacity = "0.75")
                    }
                    onMouseLeave={e =>
                      ((e.currentTarget as HTMLElement).style.opacity = "1")
                    }
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Connect ── */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              CONNECT
            </h4>
            <ul className="flex flex-col gap-4">
              {connectLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "rgba(210,230,215,0.75)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={e =>
                      ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                    }
                    onMouseLeave={e =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(210,230,215,0.75)")
                    }
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div
          className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              color: "rgba(180,210,185,0.3)",
            }}
          >
            © 2024 OneSIS. A SIS Ltd Company. All rights reserved.
          </span>

          <div className="flex items-center gap-7">
            {socialLinks.map((s) => (
              <Link
                key={s}
                href="#"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  color: "rgba(180,210,185,0.35)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(180,210,185,0.8)")
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(180,210,185,0.35)")
                }
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}