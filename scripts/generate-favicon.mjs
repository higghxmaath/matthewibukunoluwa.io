import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import toIco from 'to-ico'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const input = join(root, 'src/assets/matthew.jpg')
const publicDir = join(root, 'public')

const png32 = await sharp(readFileSync(input))
  .resize(32, 32, { fit: 'cover', position: 'top' })
  .png()
  .toBuffer()

const ico = await toIco([png32])
writeFileSync(join(publicDir, 'favicon.ico'), ico)
console.log('Generated public/favicon.ico')
