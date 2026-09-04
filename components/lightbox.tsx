'use client'

import * as React from 'react'
import { X } from 'lucide-react'

interface LightboxProps {
  src: string | null
  alt?: string
  onClose: () => void
}

export function Lightbox({ src, alt = '', onClose }: LightboxProps) {
  React.useEffect(() => {
    if (!src) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [src, onClose])

  if (!src) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image preview'}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <button
        aria-label="Close preview"
        onClick={onClose}
        className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
      >
        <X className="size-5" />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src || '/placeholder.svg'}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-5xl rounded-xl border border-border object-contain shadow-2xl"
      />
    </div>
  )
}
