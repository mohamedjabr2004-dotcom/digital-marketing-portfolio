'use client'

import * as React from 'react'
import Image from 'next/image'
import { Maximize2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Lightbox } from '@/components/lightbox'
import { creativeWork } from '@/lib/portfolio-data'

const spanClasses: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  square: '',
}

export function Creative() {
  const [active, setActive] = React.useState<{ src: string; alt: string } | null>(
    null,
  )

  return (
    <section className="border-y border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Creative Work"
          title="Content and creative that convert."
          description="A visual sample of ad creatives and content. Click any image to view it larger."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:auto-rows-[210px]">
          {creativeWork.map((item) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Open preview: ${item.alt}`}
              onClick={() => setActive({ src: item.src, alt: item.alt })}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${
                spanClasses[item.span] ?? ''
              }`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Maximize2 className="size-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        src={active?.src ?? null}
        alt={active?.alt}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
