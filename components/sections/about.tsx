"use client"

import {
  Megaphone,
  Users,
  Eye,
  MessageCircle,
  ShoppingCart,
  DollarSign,
  Target,
} from "lucide-react"

const stats = [
  {
    value: "40+",
    label: "Successful Campaigns",
    description: "Meta Ads campaigns successfully managed and optimized.",
    icon: Megaphone,
  },
  {
    value: "400K+",
    label: "Accounts Reached",
    description: "Meta accounts reached across Palestine, especially Gaza.",
    icon: Users,
  },
  {
    value: "2M+",
    label: "Views Generated",
    description: "Total views generated through managed digital campaigns.",
    icon: Eye,
  },
  {
    value: "700",
    label: "Messages",
    description: "Best messaging campaign result at $0.17 per message.",
    icon: MessageCircle,
  },
  {
    value: "300+",
    label: "Purchases",
    description: "Purchases generated through properly managed campaigns.",
    icon: ShoppingCart,
  },
  {
    value: "$1,200",
    label: "Total Ad Spend",
    description: "Total Meta advertising spend managed over 8 months.",
    icon: DollarSign,
  },
]

const campaignObjectives = [
  "Engagement",
  "Sales",
  "Awareness",
  "Reach",
]

export function About() {
  return (
    <section
      id="about"
      className="border-y border-border bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            • About Me
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Digital marketing driven by data.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            I’m a Digital Marketing & Media Buying professional focused on
            building, managing and optimizing Meta Ads campaigns with a clear
            focus on measurable growth and business results.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          {/* Left Side */}
          <div>
            <h3 className="max-w-lg text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              From campaign strategy to measurable results.
            </h3>

            <div className="mt-7 h-px w-20 bg-cyan-400/50" />

            <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Since <span className="font-medium text-foreground">
                  February 2026
                </span>
                , I have been working hands-on with Meta Ads, managing
                campaigns from setup and audience targeting to optimization
                and performance analysis.
              </p>

              <p>
                My experience includes managing multiple campaigns with
                different objectives, including engagement, sales, awareness
                and reach, while continuously analyzing performance to improve
                results.
              </p>

              <p>
                I also combine marketing execution with digital content,
                social media management and operational coordination, allowing
                me to approach campaigns from both a strategic and execution
                perspective.
              </p>
            </div>

            {/* Campaign Objectives */}
            <div className="mt-8">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10">
                  <Target className="h-4 w-4 text-cyan-400" />
                </span>

                <p className="text-sm font-semibold text-foreground">
                  Campaign Objectives
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {campaignObjectives.map((objective) => (
                  <span
                    key={objective}
                    className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    {objective}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side — Performance Metrics */}
          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => {
              const Icon = stat.icon

              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-card/80"
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/5 blur-2xl transition-all duration-300 group-hover:bg-cyan-400/10" />

                  {/* Icon */}
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  {/* Value */}
                  <div className="relative mt-5">
                    <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cyan-400">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Highlighted Performance Result */}
        <div className="mt-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                <MessageCircle className="h-5 w-5 text-cyan-400" />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                  Best Messaging Campaign Result
                </p>

                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  700 messages generated
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Achieved at an average cost of{" "}
                  <span className="font-semibold text-foreground">
                    $0.17 per message
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="shrink-0 rounded-xl border border-border bg-background px-5 py-3 text-center">
              <p className="font-mono text-2xl font-bold text-cyan-400">
                $0.17
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                Cost / Message
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Positioning */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              Focused on performance marketing, paid advertising, audience
              growth and disciplined campaign execution.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              February 2026 — Present
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}