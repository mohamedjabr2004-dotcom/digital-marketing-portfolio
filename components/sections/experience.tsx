"use client"

import {
  Briefcase,
  Trophy,
  Target,
  MessageCircle,
  Eye,
  ShoppingCart,
  DollarSign,
  BarChart3,
} from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/portfolio-data"

const stats = [
  {
    value: "40+",
    label: "Successful Campaigns",
    icon: Target,
  },
  {
    value: "400K+",
    label: "Accounts Reached",
    icon: Eye,
  },
  {
    value: "2M+",
    label: "Views Generated",
    icon: BarChart3,
  },
  {
    value: "300+",
    label: "Purchases Generated",
    icon: ShoppingCart,
  },
]

export function Experience() {
  const role = experience[0]

  if (!role) return null

  return (
    <section
      id="experience"
      className="border-y border-slate-800/70 bg-[#070d1a] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Professional Experience"
          title="Experience built around performance."
          description="Hands-on experience managing Meta Ads campaigns, digital marketing activities and performance-driven execution."
        />

        {/* Main Experience Card */}
        <div className="relative mt-12">

          {/* Timeline */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 lg:block" />

          <article className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0d1526]">

            {/* Timeline Dot */}
            <div className="absolute left-[11px] top-10 hidden size-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] lg:block" />

            <div className="p-6 sm:p-8 lg:p-10">

              {/* Header */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

                <div className="flex gap-4">

                  {/* Icon */}
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Briefcase className="size-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                        01
                      </span>

                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 font-mono text-[10px] text-cyan-400">
                        CURRENT ROLE
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {role.position}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-cyan-400">
                      {role.company}
                    </p>
                  </div>

                </div>

                {/* Date */}
                <span className="w-fit rounded-full border border-slate-700 bg-[#070d1a] px-4 py-2 font-mono text-xs text-slate-400">
                  {role.date}
                </span>

              </div>

              {/* Description */}
              <div className="mt-8 border-y border-slate-800 py-6">
                <p className="max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
                  {role.description}
                </p>
              </div>

              {/* Performance Stats */}
              <div className="mt-8">

                <div className="mb-4 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan-400" />

                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Performance Highlights
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

                  {stats.map((stat) => {
                    const Icon = stat.icon

                    return (
                      <div
                        key={stat.label}
                        className="group rounded-2xl border border-slate-800 bg-[#0a1120] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                            <Icon className="size-4" />
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="font-mono text-2xl font-bold text-white">
                            {stat.value}
                          </div>

                          <div className="mt-1 text-[11px] leading-5 text-slate-500">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    )
                  })}

                </div>
              </div>

              {/* Two Columns */}
              <div className="mt-8 grid gap-8 border-t border-slate-800 pt-8 lg:grid-cols-2">

                {/* Responsibilities */}
                <div>

                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <Target className="size-3.5" />
                    </div>

                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                      Responsibilities
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {role.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Achievements */}
                <div>

                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <Trophy className="size-3.5" />
                    </div>

                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                      Key Achievements
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3">

                    {role.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="rounded-xl border border-slate-800 bg-[#0a1120] px-4 py-3 text-sm leading-6 text-slate-300 transition-colors hover:border-cyan-400/20"
                      >
                        <div className="flex gap-3">
                          <span className="font-mono text-[10px] text-cyan-400">
                            0{index + 1}
                          </span>

                          <span>{achievement}</span>
                        </div>
                      </li>
                    ))}

                  </ul>

                </div>
              </div>

              {/* Campaign Scope */}
              <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.03] p-5">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                      Campaign Scope
                    </p>

                    <p className="mt-2 text-sm text-slate-300">
                      Managed campaigns across multiple objectives including
                      Messages, Engagement, Sales, Awareness and Reach.
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 text-sm text-slate-400">
                    <MessageCircle className="size-4 text-cyan-400" />
                    <span>Meta Ads</span>
                  </div>

                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                  DIGITAL MARKETING / MEDIA BUYING
                </span>

                <span className="flex items-center gap-2 text-xs text-slate-500">
                  <DollarSign className="size-3.5 text-cyan-400" />
                  Approx. $1,200 managed ad spend
                </span>

              </div>

            </div>
          </article>
        </div>
      </div>
    </section>
  )
}