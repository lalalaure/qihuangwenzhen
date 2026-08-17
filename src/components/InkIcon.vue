<script setup>
/**
 * 国风墨线图标：单色 stroke 线描，与宣纸/墨/朱砂配色协调。
 * name 取值见 ICON_PATHS。颜色默认墨色，可用 --ink-* 覆盖或传 color。
 */
import { ICON_PATHS } from '../icons.js'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 22 },
  color: { type: String, default: 'currentColor' }
})

const d = ICON_PATHS[props.name] || ''
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    :style="{ color }"
    aria-hidden="true"
  >
    <path v-for="(p, i) in (Array.isArray(d) ? d : [d])" :key="i" :d="p" />
  </svg>
</template>