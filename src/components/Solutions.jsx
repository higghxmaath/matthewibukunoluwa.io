import { motion as Motion } from 'framer-motion'
import { solutions } from '../data/content'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const viewportConfig = { once: true, margin: '-80px' }

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <Motion.div variants={fadeUpVariants}>
          <p className="section-label mb-4">/ What I Solve</p>
          <h2 className="max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Problems I solve for{' '}
            <span className="gradient-text">businesses and founders.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
            Whether you need a product built from scratch or an existing system fixed,
            I&apos;ve got the full stack covered.
          </p>
        </Motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Motion.article
              key={solution.title}
              variants={fadeUpVariants}
              className="rounded-xl border border-white/5 border-l-4 border-l-[var(--accent-orange)] bg-[var(--bg-rich)] p-6 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(255,107,43,0.15)]"
            >
              <span className="text-3xl" aria-hidden="true">
                {solution.icon}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {solution.description}
              </p>
            </Motion.article>
          ))}
        </div>
      </Motion.div>
    </section>
  )
}
