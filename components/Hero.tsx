"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0c1a0d" }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="hero_banner2.webm" type="video/webm" />
      </video>

      {/* Dark green tint */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(105deg, rgba(8,18,8,0.92) 0%, rgba(8,18,8,0.88) 45%, rgba(10,22,10,0.75) 65%, rgba(12,26,12,0.60) 100%)",
        }}
      />

      {/* Left dark band */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to right, rgba(6,14,6,0.70) 0%, rgba(6,14,6,0.40) 55%, transparent 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          zIndex: 3,
          height: "160px",
          background: "linear-gradient(to top, rgba(8,18,8,0.60) 0%, transparent 100%)",
        }}
      />

      {/* Grid texture - right side */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 4,
          backgroundImage: `
            linear-gradient(to right, rgba(200,164,74,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200,164,74,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to right, transparent 45%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.6) 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 45%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Gold top line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          zIndex: 5,
          height: "2px",
          background: "linear-gradient(to right, #c8a44a 0%, rgba(200,164,74,0.3) 40%, transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <div
        className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 pt-[60px]"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-[680px] py-20 md:py-28 lg:py-32">

          {/* Tag line */}
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <div style={{ width: 40, height: 1, backgroundColor: "#c8a44a", flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.28em",
                color: "#c8a44a",
              }}
            >
              A 100% SIS GROUP COMPANY
            </span>
          </div>

          {/* Heading */}
          <h1
            className="mb-7 md:mb-9"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.1,
              fontSize: "clamp(44px, 5.5vw, 72px)",
              textShadow: "0 2px 30px rgba(0,0,0,0.5)",
            }}
          >
            Your One-Stop Partner
            <br />
            for{" "}
            <em style={{ fontStyle: "italic", color: "#c8a44a", fontWeight: 400 }}>
              Integrated
            </em>{" "}
            Facility
            <br />
            Management
          </h1>

          {/* Sub-copy */}
          <p
            className="mb-10 md:mb-12 max-w-[480px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              fontWeight: 400,
              color: "#a0b8a8",
              lineHeight: 1.8,
            }}
          >
            Technology-driven, self-delivered facility solutions backed by India's #1{" "}
            <span style={{ color: "#c8a44a" }}>business</span> services group.{" "}
            <span style={{ color: "#c8a44a" }}>Transform. Reduce. Enable. Enhance.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center"
              style={{
                border: "1px solid #c8a44a",
                color: "#c8a44a",
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.16em",
                padding: "15px 28px",
                transition: "all 0.25s ease",
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(200,164,74,0.06)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#c8a44a";
                (e.currentTarget as HTMLElement).style.color = "#0c1a0d";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(200,164,74,0.06)";
                (e.currentTarget as HTMLElement).style.color = "#c8a44a";
              }}
            >
              EXPLORE SOLUTIONS
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center"
              style={{
                border: "1px solid rgba(160,184,168,0.35)",
                color: "#a0b8a8",
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.16em",
                padding: "15px 28px",
                transition: "all 0.25s ease",
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(160,184,168,0.7)";
                (e.currentTarget as HTMLElement).style.color = "#d0e0d4";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(160,184,168,0.35)";
                (e.currentTarget as HTMLElement).style.color = "#a0b8a8";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
              }}
            >
              DOWNLOAD PROFILE
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center"
              style={{
                border: "1px solid rgba(160,184,168,0.35)",
                color: "#a0b8a8",
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.16em",
                padding: "15px 28px",
                transition: "all 0.25s ease",
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(160,184,168,0.7)";
                (e.currentTarget as HTMLElement).style.color = "#d0e0d4";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(160,184,168,0.35)";
                (e.currentTarget as HTMLElement).style.color = "#a0b8a8";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
              }}
            >
              CONTACT US
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="flex items-center gap-3 mt-14 md:mt-16" style={{ opacity: 0.45 }}>
            <div
              style={{
                width: 1,
                height: 40,
                background: "linear-gradient(to bottom, #c8a44a, transparent)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 10,
                letterSpacing: "0.22em",
                color: "#c8a44a",
              }}
            >
              SCROLL TO EXPLORE
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}