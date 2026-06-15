import { motion as Motion } from 'framer-motion'
import { aboutPills } from '../data/content'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const viewportConfig = { once: true, margin: '-80px' }

export default function About() {
  const pills = [...aboutPills, ...aboutPills]

  return (
    <section id="about" className="section-clip-top bg-[var(--bg-rich)] py-24 sm:py-32">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUpVariants}
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <p className="section-label mb-4">/ About Me</p>

        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Building products with{' '}
              <span className="gradient-text">taste and structure</span>
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-[var(--text-muted)]">
              <p>
                I&apos;m Matthew, a Lagos-based fullstack developer who obsesses over
                clean code and even cleaner UIs. I&apos;ve shipped products ranging from
                e-commerce platforms to SaaS tools, working across the full stack from
                database schema to pixel-perfect frontend.
              </p>
              <p>
                You&apos;ll get readable code, thoughtful architecture, and communication
                that makes building together feel easy, not like pulling teeth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="col-span-2 rounded-2xl border border-white/5 bg-[var(--bg-dark)] p-6 sm:p-8">
              <p className="font-heading text-5xl font-black text-[var(--accent-orange)] sm:text-6xl">
                20+
              </p>
              <p className="mt-2 text-sm font-medium text-[var(--text-muted)]">
                Projects Shipped
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-white/5 bg-[var(--bg-dark)] p-5">
              <div className="flex items-center gap-2">
                <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[var(--accent-lime)]" />
                <span className="text-sm font-semibold text-[var(--accent-lime)]">
                  Open to Work
                </span>
              </div>
            </div>

            <div className="flex items-center rounded-2xl border border-white/5 bg-[var(--bg-dark)] p-5">
              <p className="text-sm font-medium">
                Based in Lagos <span aria-label="Nigeria">🇳🇬</span>
              </p>
            </div>

            <div className="col-span-2 overflow-hidden rounded-2xl border border-white/5 bg-[var(--bg-dark)] p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Core stack
              </p>
              <div className="about-pills-box relative overflow-hidden">
                <div className="skill-scroll-track flex flex-col gap-2">
                  {pills.map((pill, i) => (
                    <span
                      key={`${pill}-${i}`}
                      className="w-fit rounded-full border border-[var(--accent-lime)]/30 bg-[var(--accent-lime)]/10 px-4 py-1.5 text-xs font-semibold text-[var(--accent-lime)]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  )
}
