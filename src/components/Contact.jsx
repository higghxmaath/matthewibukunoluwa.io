import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { site } from '../data/content'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const viewportConfig = { once: true, margin: '-80px' }

const contactItems = [
  {
    key: 'email',
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: '✉',
  },
  {
    key: 'phone',
    label: 'Phone',
    value: site.phone,
    href: `tel:${site.phone}`,
    icon: '📞',
  },
  {
    key: 'github',
    label: 'GitHub',
    value: 'github.com/higghxmaath',
    href: site.github,
    icon: '🐙',
  },
]

function ContactRow({ item, copiedKey, onCopy }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 py-4">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-lg" aria-hidden="true">
          {item.icon}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            {item.label}
          </p>
          <a
            href={item.href}
            target={item.key === 'github' ? '_blank' : undefined}
            rel={item.key === 'github' ? 'noreferrer' : undefined}
            className="block truncate text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-orange)]"
          >
            {item.value}
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onCopy(item.value, item.key)}
        className="focus-ring shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)]"
      >
        {copiedKey === item.key ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      const res = await fetch(site.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, source: 'portfolio-site' }),
      })
      if (!res.ok) throw new Error('Failed')
      setForm({ name: '', email: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="field-editorial"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="field-editorial"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="field-editorial resize-none"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="btn-gradient focus-ring w-full rounded-full py-3.5 text-sm font-semibold disabled:opacity-60"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-sm text-[var(--accent-lime)]">
          Thanks! Your message has been sent.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-400">
          Could not send right now. Please use the email link above.
        </p>
      )}
    </form>
  )
}

export default function Contact() {
  const { copiedKey, copy } = useCopyToClipboard()

  return (
    <section id="contact" className="bg-[var(--bg-rich)] py-24 sm:py-32">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUpVariants}
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <p className="section-label mb-4">/ Let&apos;s Work Together</p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Got a project?{' '}
              <span className="gradient-text">Let&apos;s talk.</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--text-muted)]">
              I&apos;m currently available for freelance and fulltime roles.
            </p>
          </div>

          <div>
            {contactItems.map((item) => (
              <ContactRow
                key={item.key}
                item={item}
                copiedKey={copiedKey}
                onCopy={copy}
              />
            ))}
            <ContactForm />
          </div>
        </div>
      </Motion.div>
    </section>
  )
}
