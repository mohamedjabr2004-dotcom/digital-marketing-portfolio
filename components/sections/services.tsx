"use client"

function AdsIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19V3" />
    </svg>
  )
}

function SocialIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="16" r="3" />
      <path d="M10.5 10.5 13.5 13.5" />
      <path d="M16 5v3" />
      <path d="M14.5 6.5h3" />
    </svg>
  )
}

function ContentIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
      <path d="M8 18h3" />
    </svg>
  )
}

function OperationsIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <circle cx="12" cy="12" r="4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m18.4 5.6-2.8 2.8" />
      <path d="m8.4 15.6-2.8 2.8" />
    </svg>
  )
}

const services = [
  {
    number: "01",
    title: "Meta Ads & Media Buying",
    description:
      "Planning, launching, managing and optimizing Meta advertising campaigns with a focus on performance and measurable results.",
    icon: AdsIcon,
  },
  {
    number: "02",
    title: "Social Media Marketing & Growth",
    description:
      "Managing social media activities and growth strategies to increase reach, engagement and digital presence.",
    icon: SocialIcon,
  },
  {
    number: "03",
    title: "Digital Content Management",
    description:
      "Managing digital content across platforms and coordinating publishing activities around clear marketing objectives.",
    icon: ContentIcon,
  },
  {
    number: "04",
    title: "Educational Platform Operations",
    description:
      "Managing digital platform activities, customer support, content and operational coordination.",
    icon: OperationsIcon,
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="border-y border-slate-800 bg-[#070d1a] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            What I Do
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Full-Funnel Marketing Capabilities
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-slate-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="h-px w-10 bg-slate-700" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            From paid advertising and social media growth to digital content
            and educational platform operations, I focus on practical
            execution and measurable outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900"
              >
                <span className="absolute right-5 top-5 font-mono text-xs text-slate-600">
                  {service.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400/15">
                  <Icon />
                </div>

                <h3 className="mt-6 text-lg font-semibold leading-7 text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-10 bg-slate-700 transition-all duration-300 group-hover:w-full group-hover:bg-cyan-400/60" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}