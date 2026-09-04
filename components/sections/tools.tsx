"use client"

import {
  Wrench,
  Sparkles,
  BarChart3,
  Target,
  Settings2,
  Users,
  Megaphone,
  FileSpreadsheet,
  Palette,
  Video,
} from "lucide-react"

const tools = [
  {
    name: "Meta Ads Manager",
    icon: Megaphone,
  },
  {
    name: "Meta Business Suite",
    icon: Settings2,
  },
  {
    name: "Google Sheets",
    icon: FileSpreadsheet,
  },
  {
    name: "Canva",
    icon: Palette,
  },
  {
    name: "Edits",
    icon: Video,
  },
]

const skills = [
  {
    name: "Media Buying",
    icon: BarChart3,
  },
  {
    name: "Meta Ads Campaign Management",
    icon: Megaphone,
  },
  {
    name: "Campaign Optimization",
    icon: Settings2,
  },
  {
    name: "Audience Targeting",
    icon: Target,
  },
  {
    name: "Performance Analysis",
    icon: BarChart3,
  },
  {
    name: "Marketing Strategy",
    icon: Sparkles,
  },
  {
    name: "KPI Tracking & Reporting",
    icon: BarChart3,
  },
  {
    name: "Social Media Management",
    icon: Users,
  },
  {
    name: "Digital Content",
    icon: Palette,
  },
  {
    name: "Administrative Skills",
    icon: Settings2,
  },
  {
    name: "Customer Service",
    icon: Users,
  },
]

function SkillItem({
  name,
  icon: Icon,
}: {
  name: string
  icon: React.ElementType
}) {
  return (
    <div className="group flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-950/40 px-3.5 py-2.5 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
        <Icon className="h-3.5 w-3.5" />
      </span>

      <span className="text-xs font-medium text-slate-300 transition-colors group-hover:text-white">
        {name}
      </span>
    </div>
  )
}

export function Tools() {
  return (
    <section
      id="tools"
      className="border-t border-slate-800 bg-[#070d1a] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Tools & Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The tools and capabilities behind my work.
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-slate-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="h-px w-10 bg-slate-700" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            The platforms I use and the capabilities I apply to plan,
            manage, optimize and evaluate digital marketing campaigns.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-[#0a1120] p-6 sm:p-8">

          {/* Tools */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Wrench className="h-4 w-4" />
              </span>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                  Tools
                </p>

                <h3 className="mt-0.5 text-base font-semibold text-white">
                  Platforms I work with
                </h3>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <SkillItem
                  key={tool.name}
                  name={tool.name}
                  icon={tool.icon}
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-7 h-px bg-slate-800" />

          {/* Skills */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Sparkles className="h-4 w-4" />
              </span>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                  Skills
                </p>

                <h3 className="mt-0.5 text-base font-semibold text-white">
                  Core capabilities
                </h3>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}