"use client"

import Image from "next/image"
import { ArrowRight, Quote } from "lucide-react"

export function PerformanceProof() {
  return (
    <section
      aria-label="Performance proof"
      className="relative overflow-hidden border-y border-slate-800 bg-[#070d1a] py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-3xl border border-slate-800 bg-[#0a1120] p-5 shadow-[0_0_50px_rgba(0,0,0,0.18)] sm:p-7 md:grid-cols-[1fr_1.05fr] md:p-8">

          {/* Performance Screenshot */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#070d1a]">
            <Image
              src="/ad-performance-proof.jpeg"
              alt="Meta Ads performance feedback showing 28% lower cost per result"
              width={900}
              height={500}
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="md:pl-2">

            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10">
                <Quote className="h-4 w-4 text-cyan-400" />
              </span>

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Performance Speaks
              </span>
            </div>

            {/* Main Quote */}
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Good marketing isn’t about spending more.
              <span className="mt-1 block text-cyan-400">
                It’s about making every dollar work harder.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Real performance is measured by efficiency,
              consistency, and results — not simply by how much
              you spend.
            </p>

            {/* Result Highlight */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
              <span className="text-2xl font-bold text-cyan-400">
                28%
              </span>

              <span className="text-xs leading-5 text-slate-300">
                Lower cost per result
                <br />
                compared with peers
              </span>
            </div>

            {/* CTA */}
            <div className="mt-7">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-400"
              >
                Discuss your next campaign
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}