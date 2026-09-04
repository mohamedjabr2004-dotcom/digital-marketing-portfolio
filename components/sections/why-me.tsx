import { LineChart, Lightbulb, Rocket, ListChecks, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { whyWorkWithMe } from '@/lib/portfolio-data'

const icons: LucideIcon[] = [LineChart, Lightbulb, Rocket, ListChecks]

export function WhyMe() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Why Work With Me"
        title="A partner focused on outcomes."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyWorkWithMe.map((item, i) => {
          const Icon = icons[i] ?? LineChart
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
