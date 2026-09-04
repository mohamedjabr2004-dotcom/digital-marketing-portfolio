"use client"

import * as React from "react"
import Image from "next/image"
import {
  Target,
  UserRound,
  Wrench,
  BarChart3,
  Maximize2,
  Trophy,
} from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Lightbox } from "@/components/lightbox"
import { projects } from "@/lib/portfolio-data"

type ProjectItem = {
  label?: string
  value?: string
}

function displayItem(item: unknown) {
  if (typeof item === "string") {
    return item
  }

  if (item && typeof item === "object") {
    const obj = item as ProjectItem

    if (obj.label && obj.value) {
      return `${obj.label}: ${obj.value}`
    }

    if (obj.value) {
      return obj.value
    }

    if (obj.label) {
      return obj.label
    }
  }

  return ""
}

export function Projects() {
  const [active, setActive] = React.useState<{
    src: string
    alt: string
  } | null>(null)

  return (
    <section className="border-y border-border bg-secondary/20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Selected Campaigns"
          title="Campaigns built to perform."
          description="A selection of Meta Ads campaigns managed across different objectives, audiences and performance goals."
        />

        {/* Projects */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const tools = Array.isArray(project.tools)
              ? project.tools
              : []

            const rawResults = project.results

            const results = Array.isArray(rawResults)
              ? rawResults
              : rawResults
                ? [rawResults]
                : []

            const isFeatured =
              "featured" in project && project.featured === true

            return (
              <article
                key={project.id ?? project.title ?? index}
                className={`group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 ${
                  isFeatured
                    ? "border-primary/50 shadow-[0_0_40px_rgba(34,211,238,0.08)] md:col-span-2"
                    : "border-border hover:border-primary/30"
                }`}
              >

                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-primary/30 bg-background/90 px-3 py-1.5 backdrop-blur">
                    <Trophy className="size-3.5 text-primary" />

                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Featured Campaign
                    </span>
                  </div>
                )}

                <div
                  className={
                    isFeatured
                      ? "grid lg:grid-cols-2"
                      : "flex flex-col"
                  }
                >

                  {/* Image */}
                  <button
                    type="button"
                    aria-label={`Open preview of ${project.title}`}
                    onClick={() =>
                      setActive({
                        src: project.image,
                        alt: project.title,
                      })
                    }
                    className={`group/image relative overflow-hidden bg-background ${
                      isFeatured
                        ? "min-h-[360px] lg:min-h-[420px]"
                        : "min-h-[300px]"
                    }`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes={
                        isFeatured
                          ? "(max-width: 1024px) 100vw, 50vw"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                      className="object-contain p-2 transition-transform duration-500 group-hover/image:scale-[1.02]"
                    />

                    <span className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />

                    <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/10 bg-background/80 text-foreground opacity-0 backdrop-blur transition-all duration-300 group-hover/image:opacity-100">
                      <Maximize2 className="size-4" />
                    </span>
                  </button>

                  {/* Content */}
                  <div className="flex flex-col p-6 sm:p-7">

                    {/* Category */}
                    <span className="w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3
                      className={`mt-4 font-bold tracking-tight ${
                        isFeatured
                          ? "text-2xl sm:text-3xl"
                          : "text-xl"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <div className="mt-5 h-px w-full bg-border" />

                    {/* Details */}
                    <div className="mt-5 space-y-4">

                      {/* Objective */}
                      <div className="flex gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Target className="size-4 text-primary" />
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
                            Objective
                          </p>

                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {displayItem(project.objective)}
                          </p>
                        </div>
                      </div>

                      {/* Role */}
                      <div className="flex gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <UserRound className="size-4 text-primary" />
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
                            My Role
                          </p>

                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {displayItem(project.role)}
                          </p>
                        </div>
                      </div>

                      {/* Tools */}
                      {tools.length > 0 && (
                        <div className="flex gap-3">
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Wrench className="size-4 text-primary" />
                          </div>

                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
                              Tools & Methods
                            </p>

                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {tools.map((tool, toolIndex) => {
                                const text = displayItem(tool)

                                return (
                                  <span
                                    key={`${text}-${toolIndex}`}
                                    className="rounded-md border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground"
                                  >
                                    {text}
                                  </span>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Results */}
                    {results.length > 0 && (
                      <div className="mt-6">

                        <div className="mb-2 flex items-center gap-2">
                          <BarChart3 className="size-4 text-primary" />

                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                            Campaign Results
                          </span>
                        </div>

                        <div
                          className={`grid gap-2 ${
                            results.length > 1
                              ? "sm:grid-cols-2"
                              : "grid-cols-1"
                          }`}
                        >
                          {results.map((result, resultIndex) => {
                            const text = displayItem(result)

                            return (
                              <div
                                key={`${text}-${resultIndex}`}
                                className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3"
                              >
                                <p
                                  className={`text-sm leading-6 ${
                                    isFeatured
                                      ? "font-medium text-foreground"
                                      : "text-muted-foreground"
                                  }`}
                                >
                                  {text}
                                </p>
                              </div>
                            )
                          })}
                        </div>

                      </div>
                    )}

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">

                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                        Meta Ads Case Study
                      </span>

                      <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary">
                        View Details ↗
                      </span>

                    </div>

                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        src={active?.src ?? null}
        alt={active?.alt}
        onClose={() => setActive(null)}
      />
    </section>
  )
}