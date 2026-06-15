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

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#20bd5a] sm:w-auto"
    >
      <WhatsAppIcon />
      Chat on WhatsApp
    </a>
  )
}

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
            <WhatsAppButton />
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
