import { defineStore } from 'pinia'
import { STATE, diagnose, getRegionSymptoms } from '../engine/rule.js'
import { regions, regionMap } from '../data/regions.js'
import { signGroups } from '../data/signs.js'

export const useConsultStore = defineStore('consult', {
  state: () => ({
    step: STATE.REGION,
    selectedRegions: [],
    selectedSymptoms: [],
    signAnswers: {},
    result: null,
    submitted: false
  }),
  getters: {
    regionList: () => regions,
    currentRegion: (s) => regionMap[s.selectedRegions[s.selectedRegions.length - 1]] || null,
    selectedRegionObjs: (s) => s.selectedRegions.map((id) => regionMap[id]).filter(Boolean),
    symptomGroups: (s) =>
      s.selectedRegions
        .map((rid) => regionMap[rid])
        .filter(Boolean)
        .map((r) => ({ region: r, symptoms: getRegionSymptoms(r.id) })),
    currentSymptoms: (s) => (s.selectedRegions.length ? getRegionSymptoms(s.selectedRegions[0]) : []),
    currentSignGroup: (s) => signGroups,
    progress: (s) => {
      const map = { [STATE.REGION]: 0, [STATE.SYMPTOM]: 1, [STATE.SIGN]: 2, [STATE.DONE]: 3 }
      return map[s.step] ?? 0
    }
  },
  actions: {
    toggleRegion(id) {
      const i = this.selectedRegions.indexOf(id)
      if (i >= 0) {
        this.selectedRegions.splice(i, 1)
        this.selectedSymptoms = this.selectedSymptoms.filter((sid) => {
          const r = getRegionSymptoms(id)
          return !r.some((s) => s.id === sid)
        })
      } else {
        this.selectedRegions.push(id)
      }
    },
    toggleSymptom(id) {
      const i = this.selectedSymptoms.indexOf(id)
      if (i >= 0) this.selectedSymptoms.splice(i, 1)
      else this.selectedSymptoms.push(id)
    },
    isSymptomSelected(id) {
      return this.selectedSymptoms.includes(id)
    },
    setSignAnswers(answers) {
      this.signAnswers = answers
    },
    next() {
      if (this.step === STATE.REGION && this.selectedRegions.length) this.step = STATE.SYMPTOM
      else if (this.step === STATE.SYMPTOM && this.selectedSymptoms.length) this.step = STATE.SIGN
      else if (this.step === STATE.SIGN) this.submit()
    },
    back() {
      if (this.step === STATE.SYMPTOM) this.step = STATE.REGION
      else if (this.step === STATE.SIGN) this.step = STATE.SYMPTOM
    },
    submit() {
      this.result = diagnose({
        regionIds: this.selectedRegions,
        symptomIds: this.selectedSymptoms,
        answers: this.signAnswers
      })
      this.step = STATE.DONE
      this.submitted = true
    },
    reset() {
      this.step = STATE.REGION
      this.selectedRegions = []
      this.selectedSymptoms = []
      this.signAnswers = {}
      this.result = null
      this.submitted = false
    }
  }
})