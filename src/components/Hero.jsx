import { motion as Motion } from 'framer-motion'
import matthewPhoto from '../assets/matthew.jpg'

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const heroWordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const headlineLines = [
  { text: 'Matthew', style: 'filled' },
  { text: 'Ibukunoluwa', style: 'stroke' },
  { text: 'Full-Stack', style: 'orange-filled' },
  { text: 'Web Developer', style: 'orange-stroke' },
]

const badges = [
  { text: '5+ Years', className: 'top-4 -left-4 -rotate-6' },
  { text: '20+ Projects', className: 'top-1/3 -right-6 rotate-3' },
  { text: 'Available for Hire', className: 'bottom-8 -left-2 rotate-2' },
]

function HeadlineLine({ line }) {
  const classMap = {
    filled: 'text-[var(--text-primary)]',
    stroke: 'text-stroke',
    'orange-filled': 'text-[var(--accent-orange)]',
    'orange-stroke': 'text-stroke-orange',
  }

  return (
    <Motion.h1
      variants={heroWordVariants}
      className={`hero-headline font-heading font-black ${classMap[line.style]}`}
    >
      {line.text}
    </Motion.h1>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="dot-grid-bg relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-24">
        <div className="order-2 lg:order-1">
          <Motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-0"
          >
            {headlineLines.map((line) => (
              <HeadlineLine key={line.text} line={line} />
            ))}
          </Motion.div>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 max-w-lg text-lg text-[var(--text-muted)]"
          >
            I build fast, scalable, beautiful web products end-to-end.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="btn-gradient focus-ring rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-full border-2 border-[var(--accent-orange)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-orange)] transition-all hover:bg-[var(--accent-orange)]/10"
            >
              Get in Touch
            </a>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none"
        >
          <div className="photo-glow photo-blob relative overflow-hidden">
            <img
              src={matthewPhoto}
              alt="Matthew Ibukunoluwa, full-stack web developer"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
          {badges.map((badge) => (
            <span
              key={badge.text}
              className={`absolute z-10 rounded-full border border-white/10 bg-[var(--bg-rich)]/90 px-4 py-2 text-xs font-semibold backdrop-blur-sm ${badge.className}`}
            >
              {badge.text}
            </span>
          ))}
        </Motion.div>
      </div>

      <a
        href="#about"
        className="scroll-bounce absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)]"
        aria-label="Scroll to about section"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  )
}
