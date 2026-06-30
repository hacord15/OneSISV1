"use client";
import React from "react";
import Link from "next/link";

const techItems = [
  {
    label: "One Point App",
    sub: "FIELD OPERATIONS",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a44a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    label: "iOPS",
    sub: "INTEGRATED OPS",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a44a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "FACTECH",
    sub: "FM PLATFORM",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a44a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "M-Trainer",
    sub: "WORKFORCE L&D",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a44a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export default function Technology() {
  return (
    <section
      style={{ backgroundColor: "#1d3a20" }}
      className="py-20 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 400,
                fontSize: "clamp(28px, 3vw, 44px)",
                lineHeight: 1.25,
                color: "#ffffff",
              }}
            >
              Powered by Proprietary
              <br />
              Technology
            </h2>

            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                color: "rgba(180,210,185,0.65)",
                lineHeight: 1.85,
                maxWidth: 380,
              }}
            >
              Our integrated digital platforms provide real-time operational
              intelligence, automated compliance tracking, and client-facing
              transparency dashboards.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-3 group"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                color: "#c8a44a",
                textDecoration: "none",
              }}
            >
              EXPLORE OUR TECHNOLOGY
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.2s ease",
                }}
                className="group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* ── RIGHT: Tech Cards ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
            {techItems.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-4 py-10 px-4 text-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "background-color 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(255,255,255,0.09)")
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(255,255,255,0.05)")
                }
              >
                {/* Icon circle */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1px solid rgba(200,164,74,0.3)",
                    backgroundColor: "rgba(200,164,74,0.08)",
                  }}
                >
                  {tech.icon}
                </div>

                {/* Label */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 400,
                      fontSize: 15,
                      color: "#ffffff",
                      marginBottom: 5,
                      lineHeight: 1.3,
                    }}
                  >
                    {tech.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 9,
                      fontWeight: 400,
                      letterSpacing: "0.18em",
                      color: "rgba(180,210,185,0.5)",
                    }}
                  >
                    {tech.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}