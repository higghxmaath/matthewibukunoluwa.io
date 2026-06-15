import { mkdirSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../src/assets/projects')
mkdirSync(outDir, { recursive: true })

const targets = [
  { name: 'collassia', url: 'https://collassia.vercel.app' },
  { name: 'moomnitech', url: 'https://moomnitech-hub.vercel.app' },
  { name: 'myevents', url: 'https://github.com/higghxmaath/myEvents' },
]

async function capture(name, url) {
  const api = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
  const res = await fetch(api)
  if (!res.ok) throw new Error(`Microlink failed for ${name}: ${res.status}`)
  const data = await res.json()
  const imageUrl = data?.data?.screenshot?.url
  if (!imageUrl) throw new Error(`No screenshot URL for ${name}`)

  const imgRes = await fetch(imageUrl)
  if (!imgRes.ok) throw new Error(`Image download failed for ${name}`)
  const buffer = Buffer.from(await imgRes.arrayBuffer())
  writeFileSync(join(outDir, `${name}.png`), buffer)
  console.log(`Saved ${name}.png (${buffer.length} bytes)`)
}

for (const target of targets) {
  try {
    await capture(target.name, target.url)
  } catch (err) {
    console.error(err.message)
  }
}
