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
    const handleScroll = () => {
      const offset = 180

      let currentSection = "home"

      for (const item of navItems) {
        const section = document.getElementById(item.id)

        if (!section) continue

        const rect = section.getBoundingClientRect()

        if (rect.top <= offset) {
          currentSection = item.id
        }
      }

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const handleNavigation = (id: string) => {
    const section = document.getElementById(id)

    if (!section) return

    const offset = 90

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      offset

    window.scrollTo({
      top,
      behavior: "smooth",
    })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/70 bg-[#070d1a]">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 rounded-2xl border border-slate-800 bg-[#0a1120] p-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                className={`
                  rounded-xl px-5 py-2.5
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                  }
                `}
              >
                {item.name}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}