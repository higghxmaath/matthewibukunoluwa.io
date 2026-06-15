import { motion as Motion } from 'framer-motion'
import { projects } from '../data/content'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const viewportConfig = { once: true, margin: '-80px' }

function getRowVariants(index) {
  const fromLeft = index % 2 === 0
  return {
    hidden: { opacity: 0, x: fromLeft ? -48 : 48 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }
}

function BrowserMockup({ name, image }) {
  const slug = name.toLowerCase().replace(/\s+/g, '')

  return (
    <div className="browser-mockup transition-transform duration-300 group-hover:scale-[1.02]">
      <div className="browser-chrome">
        <span className="browser-dot bg-red-500/80" />
        <span className="browser-dot bg-yellow-500/80" />
        <span className="browser-dot bg-green-500/80" />
        <span className="ml-3 truncate text-xs text-[var(--text-muted)]">{slug}.app</span>
      </div>
      <div className="browser-content browser-content-image">
        <img
          src={image}
          alt={`${name} project screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  )
}

function ProjectRow({ project, index }) {
  const isEven = index % 2 === 1
  const number = String(index + 1).padStart(2, '0')

  return (
    <Motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={getRowVariants(index)}
      className="project-row group"
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-5 lg:gap-12 ${
          isEven ? 'lg:[direction:rtl]' : ''
        }`}
      >
        <div className={`lg:col-span-3 ${isEven ? 'lg:[direction:ltr]' : ''}`}>
          <BrowserMockup name={project.name} image={project.image} />
        </div>

        <div className={`lg:col-span-2 ${isEven ? 'lg:[direction:ltr]' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="font-heading text-sm font-bold text-[var(--accent-orange)]">
              {number}
            </span>
            {project.featured && (
              <span className="rounded-full bg-[var(--accent-orange)]/20 px-3 py-0.5 text-xs font-semibold text-[var(--accent-orange)]">
                Featured
              </span>
            )}
          </div>

          <h3 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-[var(--accent-orange)]">{project.tagline}</p>
          <p className="mt-4 text-[var(--text-muted)]">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--accent-lime)]/30 bg-[var(--accent-lime)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-lime)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring text-sm font-semibold text-[var(--accent-orange)] transition-colors hover:text-[var(--text-primary)]"
              >
                View Live →
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </Motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--bg-rich)] py-24 sm:py-32">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUpVariants}
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <p className="section-label mb-4">/ Work I&apos;m Proud Of</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
          Selected <span className="gradient-text">projects</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
          Real products with real workflows, focused on clean UI, maintainable code,
          and shipping things that work.
        </p>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {projects.map((project, index) => (
            <ProjectRow key={project.name} project={project} index={index} />
          ))}
        </div>
      </Motion.div>
    </section>
  )
}
