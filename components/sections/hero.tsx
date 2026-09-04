"use client"

import Image from "next/image"
import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function Hero() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070d1a] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.12),transparent_35%)]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-24 pb-20 text-center">

        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="absolute -inset-2 rounded-full border border-cyan-400/20" />

          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-cyan-400/60 bg-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <Image
              src="/profile.png"
              alt="Mohamed Jabr"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Mohamed Jabr
        </h1>

        {/* Job Title */}
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-base">
          Digital Marketing & Media Buying Specialist
        </p>

        {/* Divider */}
        <div className="mt-7 flex items-center gap-4">
          <span className="h-px w-10 bg-slate-700" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span className="h-px w-10 bg-slate-700" />
        </div>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          I build data-driven marketing campaigns, manage paid advertising,
          and create digital content focused on measurable growth and
          meaningful results.
        </p>

        {/* Main Buttons */}
        <div className="mt-9 flex flex-col items-center gap-4">

          {/* Download CV + View My Work */}
          <div className="flex flex-col gap-4 sm:flex-row">

            {/* Download CV */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Download CV
              <span>↓</span>
            </a>

            {/* View My Work */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-white"
            >
              View My Work
              <span>→</span>
            </a>

          </div>

          {/* Contact Area */}
          <div className="relative">

            {/* Contact Button */}
            <button
              type="button"
              onClick={() => setContactOpen((prev) => !prev)}
              className={`inline-flex items-center justify-center gap-2 rounded-lg border px-8 py-3.5 text-sm font-semibold transition-all duration-300 ${
                contactOpen
                  ? "border-cyan-400 bg-cyan-400/10 text-white shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                  : "border-cyan-400/40 bg-cyan-400/5 text-cyan-400 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white"
              }`}
              aria-expanded={contactOpen}
              aria-haspopup="true"
            >
              <MessageCircle className="h-4 w-4" />

              Contact

              <span
                className={`text-xs transition-transform duration-300 ${
                  contactOpen ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            {/* Contact Options */}
            {contactOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2">
                <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0a1120] p-2 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/972595436274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 items-center justify-center rounded-lg border border-slate-800 px-4 text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-400"
                  >
                    WhatsApp
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:mohmed.jabr.2004@gmail.com"
                    className="flex h-10 items-center justify-center rounded-lg border border-slate-800 px-4 text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-400"
                  >
                    Email
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/mohamed-jabr-5aa83337a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 items-center justify-center rounded-lg border border-slate-800 px-4 text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-400"
                  >
                    LinkedIn
                  </a>

                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-2/3 -translate-x-1/2 bg-cyan-500/5 blur-3xl" />
    </section>
  )
}