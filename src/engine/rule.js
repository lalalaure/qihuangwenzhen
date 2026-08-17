/**
 * 规则诊断引擎（rule.js）
 * 输入：regionId + 症状 id 集合 + 体征 traits
 * 输出：证型评分，按显明/可能/需留意分级，附典籍原文与养生建议。
 */
import { patterns as patternDefs } from '../data/patterns.js'
import { knowledge, symptomIndex } from '../data/knowledge.js'
import { classics } from '../data/classics.js'
import { acupoints } from '../data/acupoints.js'
import { signGroups } from '../data/signs.js'
import { regions } from '../data/regions.js'

export const LEVELS = {
  HIGH: { key: '显明', rank: 3, min: 1.5, desc: '与该证型吻合度高，值得重点关注' },
  MID: { key: '可能', rank: 2, min: 0.9, desc: '存在一定关联，需结合体征进一步判断' },
  LOW: { key: '需留意', rank: 1, min: 0.4, desc: '理论上有此可能，但证据尚不充分' }
}

export const STATE = {
  REGION: 'region',
  SYMPTOM: 'symptom',
  SIGN: 'sign',
  DONE: 'done'
}

export function getRegionSymptoms(regionId) {
  return knowledge[regionId] || []
}

export function collectSignTraits(answers) {
  const traits = {}
  const seen = new Set()
  for (const g of signGroups) {
    const selected = answers[g.id]
    if (!selected) continue
    const opts = Array.isArray(selected) ? selected : [selected]
    for (const label of opts) {
      for (const opt of g.options) {
        if (opt.label === label && !seen.has(g.id + label)) {
          seen.add(g.id + label)
          for (const [k, v] of Object.entries(opt.traits)) {
            traits[k] = (traits[k] || 0) + v
          }
        }
      }
    }
  }
  return traits
}

/**
 * @param {{regionId, symptomIds:[], answers:{}}} input
 */
export function diagnose(input) {
  const { regionId, regionIds, symptomIds, answers = {} } = input
  const traits = collectSignTraits(answers)
  const scores = {}
  const evidenceMap = {}
  let totalFocus = 0

  const regionsSel = regionIds && regionIds.length ? regionIds : regionId ? [regionId] : []
  for (const region of regionsSel) {
    for (const s of knowledge[region] || []) {
      if (!symptomIds.includes(s.id)) continue
      totalFocus += 1
      for (const [pid, w] of Object.entries(s.patterns)) {
        scores[pid] = (scores[pid] || 0) + w
        if (!evidenceMap[pid]) evidenceMap[pid] = []
        evidenceMap[pid].push({ symptom: s.name, region, w })
      }
    }
  }

  // 体征特质微调：按证据中的 traits 加权
  for (const pid of Object.keys(scores)) {
    const def = patternDefs[pid]
    let bonus = 0
    if (def && def.evidence) {
      for (const [trait, w] of Object.entries(def.evidence)) {
        if (traits[trait]) bonus += Math.min(w * traits[trait], 1)
      }
    }
    scores[pid] = scores[pid] + bonus * 0.8
  }

  const ranked = Object.entries(scores)
    .map(([pid, score]) => {
      const def = patternDefs[pid]
      const level = score >= LEVELS.HIGH.min
        ? LEVELS.HIGH
        : score >= LEVELS.MID.min
          ? LEVELS.MID
          : LEVELS.LOW
      return {
        id: pid,
        name: def ? def.name : pid,
        type: def ? def.type : '',
        organ: def ? def.organ : '',
        summary: def ? def.summary : '',
        tongue: def ? def.tongue : '',
        pulse: def ? def.pulse : '',
        score: Math.round(score * 100) / 100,
        matched: evidenceMap[pid] || [],
        citations: (def ? def.citations : []).map((c) => classics[c]).filter(Boolean),
        recommendations: def ? {
          diet: def.diet,
          life: def.life,
          exercise: def.exercise,
          acupoints: (def.acupoints || [])
            .map((a) => acupoints[a] ? { id: a, ...acupoints[a] } : null)
            .filter(Boolean),
          massage: def.massage
        } : null,
        cautious: def ? def.cautious : '',
        level
      }
    })
    .sort((a, b) => b.score - a.score || b.level.rank - a.level.rank)

  const high = ranked.filter((r) => r.level.key === '显明')
  const mid = ranked.filter((r) => r.level.key === '可能')
  const low = ranked.filter((r) => r.level.key === '需留意')

  return { ranked, high, mid, low, totalFocus }
}

export function expandTraitsForRegion(regionId) {
  const region = regions.find((r) => r.id === regionId)
  return {
    region,
    symptoms: getRegionSymptoms(regionId)
  }
}
