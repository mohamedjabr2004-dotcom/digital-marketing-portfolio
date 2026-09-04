export function Statement() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-primary py-24 text-primary-foreground lg:py-32">
      {/* texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -left-20 top-1/2 size-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 size-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Strategy.
          <span className="mx-2 text-primary-foreground/60">Creativity.</span>
          Performance.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-primary-foreground/85">
          Turning digital marketing ideas into measurable business outcomes.
        </p>
      </div>
    </section>
  )
}
