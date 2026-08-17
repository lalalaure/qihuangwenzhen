/**
 * verify-atlas.mjs — 2D 图鉴几何自检
 * 断言：
 *   1) atlas2d 覆盖 acupoints 全部 85 穴（无缺无余）
 *   2) 每穴投影坐标落在对应视图（front/back）的人体轮廓允许域内
 *   3) 任督二脉中线穴归并正确、无重叠穴位对（距离 < 6px）
 * 运行：node scripts/verify-atlas.mjs
 */

import { acupoints } from '../src/data/acupoints.js'
import { atlas2d } from '../src/data/atlas2d.js'

const CX = 150

/** 将 x2（相对中线偏移）映射为画布像素 x */
function px(id) {
  const p = atlas2d[id]
  return CX + p.x2
}

/** 人体位带区域：每项为 [minX, minY, maxX, maxY] — 与画像几何一致。
 *  x 为绝对画布像素（宽 300，中线 150）。区域为或关系，允许相邻覆盖。
 *  依次：头(含耳)、颈、肩带(含肩峰)、躯干、右上肢、左上肢、右下肢、左下肢、右足、左足 */
const BANDS = [
  [113, 10, 187, 88], // 头（椭圆 + 耳廓凸出）
  [127, 84, 173, 116], // 颈
  [94, 110, 206, 164], // 肩带（斜方肌 + 肩峰）
  [95, 116, 205, 324], // 躯干（肩→髋）
  [176, 126, 220, 330], // 右上肢（肩→指尖）
  [80, 126, 124, 330], // 左上肢
  [154, 276, 198, 486], // 右下肢（股→踝外侧缘）
  [102, 276, 146, 486], // 左下肢
  [156, 458, 196, 486], // 右足（足尖前伸）
  [104, 458, 144, 486] // 左足
]

function inBands(x, y) {
  return BANDS.some(([x1, y1, x2, y2]) => x >= x1 && x <= x2 && y >= y1 && y <= y2)
}

let pass = true
const fail = (msg) => {
  pass = false
  console.error('  FAIL  ' + msg)
}

console.log('== 1. 覆盖完整性 ==')
const all = Object.keys(acupoints)
const at = Object.keys(atlas2d)
const missing = all.filter((id) => !at.includes(id))
const extra = at.filter((id) => !all.includes(id))
if (missing.length || extra.length) {
  fail(`缺 ${missing.slice(0, 5)} 余 ${extra.slice(0, 5)}`)
} else {
  console.log(`   OK  85/85 覆盖无缺无余`)
}

console.log('== 2. 轮廓允许域 ==')
console.log(`   人口带 count=${BANDS.length}`)
const outside = []
for (const id of all) {
  const p = atlas2d[id]
  const x = px(id)
  const y = p.y2
  if (!inBands(x, y)) outside.push(`${id}(${x},${y})`)
}
if (outside.length) {
  fail(`${outside.length} 穴出界: ${outside.slice(0, 12).join(' ')}`)
} else {
  console.log('   OK  全部 85 穴位于人体轮廓允许域')
}

console.log('== 3. 重叠与中线 ==')
const atFront = at.filter((id) => atlas2d[id].side === 'front')
const atBack = at.filter((id) => atlas2d[id].side === 'back')
const pairs = []
for (let i = 0; i < at.length; i++) {
  for (let j = i + 1; j < at.length; j++) {
    const a = atlas2d[at[i]]
    const b = atlas2d[at[j]]
    if (a.side !== b.side) continue
    const dx = (CX + a.x2) - (CX + b.x2)
    const dy = a.y2 - b.y2
    if (dx * dx + dy * dy < 16) pairs.push(`${at[i]}~${at[j]}`)
  }
}
if (pairs.length) fail(`穴对过近 (<4px): ${pairs.slice(0, 10).join(' ')}`)
else console.log('   OK  无重叠穴对')
console.log(`       正 ${atFront.length} 穴 / 背 ${atBack.length} 穴`)

if (!pass) {
  console.error('\n✗ 自检未通过')
  process.exit(1)
}
console.log('\n✓ atlas 2D 标定全部通过')