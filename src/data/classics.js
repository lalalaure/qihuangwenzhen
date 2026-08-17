/**
 * 典籍原文库（聚合导出）
 * 各分册位于 src/data/classics/，按书卷分册，方便著录与核对
 * 每条: id, book, chapter(篇名/条号), text(原文), note(现代注/要点)
 */
import { classics as suwen } from './classics/suwen.js'
import { classics as lingshu } from './classics/lingshu.js'
import { classics as shanghanlun } from './classics/shanghanlun.js'
import { classics as jinguilve } from './classics/jinguilve.js'
import { classics as wenbingtiaobian } from './classics/wenbingtiaobian.js'
import { classics as nanjing } from './classics/nanjing.js'
import { classics as zhubingyuanhou } from './classics/zhubingyuanhou.js'
import { classics as maijing } from './classics/maijing.js'
import { classics as yixuexinwu } from './classics/yixuexinwu.js'
import { classics as jiayijing } from './classics/jiayijing.js'
import { classics as bencao } from './classics/bencao.js'

export const classics = {
  ...suwen,
  ...lingshu,
  ...shanghanlun,
  ...jinguilve,
  ...wenbingtiaobian,
  ...nanjing,
  ...zhubingyuanhou,
  ...maijing,
  ...yixuexinwu,
  ...jiayijing,
  ...bencao
}

export const classicList = Object.keys(classics).map((id) => ({
  id,
  ...classics[id]
}))