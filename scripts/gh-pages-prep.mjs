// 生成 GitHub Pages 的 SPA fallback：将 dist/index.html 复制为 dist/404.html
import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = resolve(root, 'dist/index.html')
const dst = resolve(root, 'dist/404.html')

mkdirSync(dirname(dst), { recursive: true })
copyFileSync(src, dst)
console.log('[gh-pages] dist/404.html generated (SPA history fallback)')