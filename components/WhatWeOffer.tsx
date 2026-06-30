// components/WhatWeOffer.tsx
import React from "react";

const offers = [
  {
    num: "01 / 03",
    title: "Integrated Facility Management",
    desc: "End-to-end FM services delivered under a single agreement, eliminating multi-vendor complexity and ensuring consistent standards.",
    tags: ["SOFT SERVICES", "MEP", "EHS", "SECURITY", "HORTICULTURE"],
  },
  {
    num: "02 / 03",
    title: "Property Management",
    desc: "Comprehensive end-to-end residential and commercial property operations with full compliance, vendor management, and reporting.",
    tags: ["RESIDENTIAL", "COMMERCIAL", "OPERATIONS"],
  },
  {
    num: "03 / 03",
    title: "Specialized Services",
    desc: "Civil upgrades, retrofitting, smart maintenance, design and build, and project management consultancy for complex requirements.",
    tags: ["CIVIL WORKS", "RETROFITTING", "PMC", "D&B"],
  },
];

export default function WhatWeOffer() {
  return (
    <section
      style={{ backgroundColor: "#0c1a0d" }}
      className="py-20 md:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: 32, height: 1, backgroundColor: "#c8a44a", flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.26em",
                color: "#c8a44a",
              }}
            >
              WHAT WE OFFER
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
              fontSize: "clamp(30px, 3.5vw, 50px)",
              lineHeight: 1.2,
              color: "#ffffff",
            }}
          >
            Integrated Solutions,
            <br />
            <em style={{ fontStyle: "italic", color: "#c8a44a" }}>
              One Accountable Partner
            </em>
          </h2>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="flex flex-col p-8"
              style={{ backgroundColor: "#142118" }}
            >
              {/* Number */}
              <span
                className="mb-6 block"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  color: "#c8a44a",
                }}
              >
                {offer.num}
              </span>

              {/* Title */}
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  fontSize: 22,
                  color: "#ffffff",
                  lineHeight: 1.3,
                }}
              >
                {offer.title}
              </h3>

              {/* Desc */}
              <p
                className="mb-8 flex-1"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  color: "rgba(160,190,165,0.65)",
                  lineHeight: 1.8,
                }}
              >
                {offer.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {offer.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 9,
                      fontWeight: 400,
                      letterSpacing: "0.14em",
                      color: "rgba(160,190,165,0.55)",
                      border: "1px solid rgba(160,190,165,0.2)",
                      padding: "5px 10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}