import { motion as Motion } from 'framer-motion'
import { skillIcons, skills } from '../data/content'

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
    transition: { staggerChildren: 0.1 },
  },
}

const viewportConfig = { once: true, margin: '-80px' }

const tintStyles = {
  blue: {
    bg: 'bg-[var(--accent-blue)]/10',
    border: 'border-[var(--accent-blue)]/20',
    glow: 'hover:shadow-[0_8px_32px_rgba(43,107,255,0.25)]',
    hover: 'hover:border-[var(--accent-blue)]/40',
  },
  orange: {
    bg: 'bg-[var(--accent-orange)]/10',
    border: 'border-[var(--accent-orange)]/20',
    glow: 'hover:shadow-[0_8px_32px_rgba(255,107,43,0.25)]',
    hover: 'hover:border-[var(--accent-orange)]/40',
  },
  lime: {
    bg: 'bg-[var(--accent-lime)]/10',
    border: 'border-[var(--accent-lime)]/20',
    glow: 'hover:shadow-[0_8px_32px_rgba(168,255,62,0.2)]',
    hover: 'hover:border-[var(--accent-lime)]/40',
  },
  neutral: {
    bg: 'bg-white/5',
    border: 'border-white/10',
    glow: 'hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)]',
    hover: 'hover:border-white/20',
  },
}

const areaClasses = {
  frontend: 'skills-area-frontend',
  backend: 'skills-area-backend',
  database: 'skills-area-database',
  tools: 'skills-area-tools',
}

function SkillGroup({ groupKey, group }) {
  const tint = tintStyles[group.tint]

  return (
    <Motion.div
      variants={fadeUpVariants}
      className={`noise-overlay rounded-2xl border p-5 sm:p-6 ${tint.bg} ${tint.border} ${areaClasses[groupKey]}`}
    >
      <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
        {group.label}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <div
            key={item}
            className={`flex items-center gap-2 rounded-xl border border-white/5 bg-[var(--bg-dark)]/60 px-3 py-2 text-sm transition-all duration-200 hover:-translate-y-1 ${tint.glow} ${tint.hover}`}
          >
            <span className="text-base" aria-hidden="true">
              {skillIcons[item] || '•'}
            </span>
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
    </Motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <Motion.div variants={fadeUpVariants}>
          <p className="section-label mb-4">/ What I Work With</p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            The stack behind{' '}
            <span className="gradient-text">every build</span>
          </h2>
        </Motion.div>

        <div className="skills-mosaic mt-12">
          {Object.entries(skills).map(([key, group]) => (
            <SkillGroup key={key} groupKey={key} group={group} />
          ))}
        </div>
      </Motion.div>
    </section>
  )
}
