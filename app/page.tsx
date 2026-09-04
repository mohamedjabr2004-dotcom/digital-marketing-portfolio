import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { Projects } from '@/components/sections/projects'
import { Process } from '@/components/sections/process'
import { Tools } from '@/components/sections/tools'
import { PerformanceProof } from '@/components/sections/performance-proof'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        {/* 01 — Home */}
        <Hero />

        {/* 02 — About */}
        {/* Includes About Me + What I Do */}
        <About />

        {/* 03 — Services */}
        <Services />

        {/* 04 — Projects */}
        {/* Includes Selected Campaigns + How I Approach a Campaign + Tools & Skills */}
        <section id="projects">
          <Projects />
          <Process />
          <Tools />
        </section>

        {/* 05 — Performance Proof */}
        <PerformanceProof />

        {/* 06 — Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}