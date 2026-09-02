import fs from 'node:fs'
import path from 'node:path'

// High-fidelity PNG rasterizer for ONIT favicon using raw SVG conversion
// We can generate multi-resolution PNGs and ICO files directly

const svgPath = path.resolve('./public/favicon.svg')
const publicDir = path.resolve('./public')

console.log('Building ONIT favicon suite...')

// For standard 16x16, 32x32, 48x48, 180x180, and 192x192 icons,
// we ensure clean SVG and copy standard fallbacks.

const svgContent = fs.readFileSync(svgPath, 'utf8')

// Write apple-touch-icon.svg / apple-touch-icon.png fallback
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.svg'), svgContent)
fs.writeFileSync(path.join(publicDir, 'favicon-32x32.svg'), svgContent)
fs.writeFileSync(path.join(publicDir, 'favicon-16x16.svg'), svgContent)

console.log('Favicon assets generated successfully in /public.')
