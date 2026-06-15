import { marqueeItems } from '../data/content'

function MarqueeItem({ name }) {
  return (
    <span className="flex shrink-0 items-center gap-6">
      <span className="font-heading text-sm font-bold uppercase tracking-widest text-[var(--text-primary)] sm:text-base">
        {name}
      </span>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-orange)]" />
    </span>
  )
}

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="overflow-hidden border-y border-white/5 bg-[var(--bg-rich)] py-5">
      <div className="marquee-track flex w-max items-center gap-6 px-4">
        {items.map((name, i) => (
          <MarqueeItem key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  )
}
