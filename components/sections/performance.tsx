import { SectionHeading } from '@/components/section-heading'
import { performanceMetrics } from '@/lib/portfolio-data'

export function Performance() {
  return (
    <section className="border-y border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Performance Matters"
          title="Metrics that measure impact."
          description="A performance snapshot. Each metric is a placeholder until real campaign data is added — no fabricated results."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {performanceMetrics.map((metric) => (
            <div
              key={metric.key}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                  {metric.key}
                </span>
              </div>
              <p className="mt-4 font-mono text-3xl font-bold text-foreground">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {metric.label}
              </p>
              <span className="pointer-events-none absolute -bottom-8 -right-8 size-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
