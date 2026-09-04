import { Mail, MessageCircle } from 'lucide-react'
import { LinkedinIcon } from '@/components/icons'
import { profile } from '@/lib/portfolio-data'

export function Footer() {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
    { label: 'WhatsApp', href: profile.whatsapp, icon: MessageCircle },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
            DM
          </span>
          <p className="text-sm text-muted-foreground">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <link.icon className="size-4.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
