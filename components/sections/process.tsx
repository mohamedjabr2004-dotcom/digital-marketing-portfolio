import { SectionHeading } from '@/components/section-heading'
import { processSteps } from '@/lib/portfolio-data'

export function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <SectionHeading
        eyebrow="How I Approach a Campaign"
        title="A clear process, from insight to optimization."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, i) => (
          <div key={step.title} className="relative">
            {/* connector line */}
            {i < processSteps.length - 1 && (
              <span className="absolute left-11 top-5 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-primary/50 to-border lg:block" />
            )}
            <div className="relative flex size-10 items-center justify-center rounded-full border border-primary/40 bg-card font-mono text-sm font-bold text-primary">
              {i + 1}
            </div>
            <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
