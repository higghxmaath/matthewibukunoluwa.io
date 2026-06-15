import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { useNavbarScroll } from '../hooks/useNavbarScroll'
import matthewPhoto from '../assets/matthew.jpg'

export default function Navbar() {
  const scrolled = useNavbarScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--bg-dark)]/80 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded-lg">
            <span className="gradient-text font-heading text-2xl font-black">M.</span>
            <img
              src={matthewPhoto}
              alt="Matthew Ibukunoluwa"
              className="h-10 w-10 rounded-full border-2 border-white/10 object-cover object-top"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="focus-ring rounded-full bg-[var(--accent-orange)] px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </nav>

          <button
            type="button"
            className="focus-ring flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-[var(--text-primary)]" />
            <span className="block h-0.5 w-6 bg-[var(--text-primary)]" />
            <span className="block h-0.5 w-4 bg-[var(--text-primary)]" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/60"
          onClick={closeMenu}
          aria-label="Close menu overlay"
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-[var(--bg-rich)] p-8 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            type="button"
            className="focus-ring mb-12 self-end text-2xl text-[var(--text-muted)]"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-heading text-3xl font-bold text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="focus-ring mt-4 inline-flex w-fit rounded-full bg-[var(--accent-orange)] px-6 py-3 font-semibold text-white"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}
