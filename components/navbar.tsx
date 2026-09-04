"use client"

import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const updateActiveSection = () => {
      const offset = 180
      let current = "home"

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          current = section.id
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    })

    updateActiveSection()

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/70 bg-[#070d1a]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-2 py-3 sm:px-6 sm:py-4">
        <nav className="flex w-full max-w-fit items-center gap-0.5 rounded-2xl border border-slate-800 bg-[#0a1120] p-1 sm:gap-1.5 sm:p-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`
                  shrink-0 rounded-xl
                  px-3 py-2
                  text-xs font-medium
                  transition-all duration-300
                  sm:px-5 sm:py-2.5 sm:text-sm
                  ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                  }
                `}
              >
                {item.name}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}